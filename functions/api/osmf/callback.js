import {
  buildReturnUrl,
  clearCookie,
  getRequestOrigin,
  normalizeReturnPath,
  parseCookies,

  DEFAULT_RETURN_PATH,
  RETURN_COOKIE,
  STATE_COOKIE,
} from "../../_shared/utils.js";

export const SPONSOR_LOGIN = "wixtoolset";
export const YEAR_MS = 365 * 24 * 60 * 60 * 1000;

export async function onRequest(context) {
  context.passThroughOnException();

  const url = new URL(context.request.url);
  const origin = getRequestOrigin(context.request);
  const secure = origin.startsWith("https:");
  const cookies = parseCookies(context.request.headers.get("Cookie"));

  const returnPath = normalizeReturnPath(
    cookies[RETURN_COOKIE],
    DEFAULT_RETURN_PATH
  );
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  const expectedState = cookies[STATE_COOKIE];

  const clearHeaders = new Headers();
  clearHeaders.append("Set-Cookie", clearCookie(STATE_COOKIE, secure));
  clearHeaders.append("Set-Cookie", clearCookie(RETURN_COOKIE, secure));
  clearHeaders.set("Cache-Control", "no-store");

  const redirectWith = (params) => {
    const location = buildReturnUrl(origin, returnPath, params);
    clearHeaders.set("Location", location);
    return new Response(null, { status: 302, headers: clearHeaders });
  };

  if (!state || !expectedState || state !== expectedState) {
    return redirectWith({ osmf: "error", reason: "state" });
  }

  if (!code) {
    return redirectWith({ osmf: "error", reason: "code" });
  }

  try {
    const token = await exchangeToken({
      clientId: context.env.GITHUB_CLIENT_ID,
      clientSecret: context.env.GITHUB_CLIENT_SECRET,
      code,
      redirectUri: `${origin}/api/osmf/callback/`,
    });

    const viewerMatch = await findViewerSponsorship(token, SPONSOR_LOGIN);
    if (viewerMatch) {
      return redirectWith({
        osmf: "ok",
        match: viewerMatch.match,
        match_type: viewerMatch.matchType,
        coverage: viewerMatch.coverage,
        created_at: viewerMatch.created_at,
        valid_until: viewerMatch.valid_until,
      });
    }

    const orgs = await listViewerOrgs(token);
    for (const org of orgs) {
      const orgMatch = await findOrgSponsorship(token, org, SPONSOR_LOGIN);
      if (orgMatch) {
        return redirectWith({
          osmf: "ok",
          match: orgMatch.match,
          match_type: orgMatch.matchType,
          coverage: orgMatch.coverage,
          created_at: orgMatch.created_at,
          valid_until: orgMatch.valid_until,
        });
      }
    }

    return redirectWith({ osmf: "no", reason: "not_sponsor" });
  } catch (error) {
    console.error("OSMF verification error", {
      message: error?.message,
      name: error?.name,
    });
    return redirectWith({ osmf: "error", reason: "github" });
  }
}

async function exchangeToken({ clientId, clientSecret, code, redirectUri }) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "osmf-wixtoolset",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("OSMF token exchange failed", {
      status: response.status,
      body,
    });
    throw new Error("token_exchange_failed");
  }

  const payload = await response.json();
  if (!payload.access_token) {
    console.error("OSMF token missing in response", {
      error: payload.error,
      error_description: payload.error_description,
    });
    throw new Error("token_missing");
  }
  return payload.access_token;
}

async function githubGraphQL(token, query, variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "osmf-wixtoolset",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("OSMF GitHub GraphQL failed", {
      status: response.status,
      body,
    });
    throw new Error("github_graphql_failed");
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    console.error("OSMF GitHub GraphQL errors", payload.errors);
    throw new Error("github_graphql_error");
  }
  return payload.data;
}

function parseIsoDate(value) {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? timestamp : null;
}

function pickSponsorshipResult(nodes) {
  const now = Date.now();
  let latestOneTime = null;

  for (const node of nodes ?? []) {
    if (!node) continue;

    // Any active recurring sponsorship is considered valid immediately.
    if (node.isActive) {
      return { coverage: "active" };
    }

    // Treat a one-time sponsorship as valid for 1 year from its creation date.
    if (!node.tier?.isOneTime) continue;
    const createdAt = parseIsoDate(node.createdAt);
    if (!createdAt) continue;

    const validUntil = createdAt + YEAR_MS;
    if (now > validUntil) continue;

    if (!latestOneTime || createdAt > latestOneTime.createdAt) {
      latestOneTime = { createdAt, validUntil };
    }
  }

  if (!latestOneTime) return null;

  return {
    coverage: "one_time_within_year",
    created_at: new Date(latestOneTime.createdAt).toISOString(),
    valid_until: new Date(latestOneTime.validUntil).toISOString(),
  };
}

async function findViewerSponsorship(token, sponsorLogin) {
  let after = null;
  let viewerLogin = null;

  const query = `
    query($after: String, $maintainers: [String!]) {
      viewer {
        login
        sponsorshipsAsSponsor(first: 100, after: $after, activeOnly: false, maintainerLogins: $maintainers) {
          nodes {
            createdAt
            isActive
            tier { isOneTime }
          }
          pageInfo { hasNextPage endCursor }
        }
      }
    }
  `;

  const nodes = [];
  do {
    const data = await githubGraphQL(token, query, {
      after,
      maintainers: [sponsorLogin],
    });
    viewerLogin = data.viewer.login;
    nodes.push(...(data.viewer.sponsorshipsAsSponsor.nodes ?? []));
    const pageInfo = data.viewer.sponsorshipsAsSponsor.pageInfo;
    after = pageInfo.hasNextPage ? pageInfo.endCursor : null;
  } while (after);

  const result = pickSponsorshipResult(nodes);
  if (!result) return null;
  return { match: viewerLogin, matchType: "user", ...result };
}

async function listViewerOrgs(token) {
  let after = null;
  const orgs = [];
  const query = `
    query($after: String) {
      viewer {
        organizations(first: 100, after: $after) {
          nodes { login }
          pageInfo { hasNextPage endCursor }
        }
      }
    }
  `;

  do {
    const data = await githubGraphQL(token, query, { after });
    const nodes = data.viewer.organizations.nodes ?? [];
    for (const node of nodes) {
      if (node?.login) orgs.push(node.login);
    }
    const pageInfo = data.viewer.organizations.pageInfo;
    after = pageInfo.hasNextPage ? pageInfo.endCursor : null;
  } while (after);

  return orgs;
}

async function findOrgSponsorship(token, orgLogin, sponsorLogin) {
  let after = null;
  const query = `
    query($login: String!, $after: String, $maintainers: [String!]) {
      organization(login: $login) {
        sponsorshipsAsSponsor(first: 100, after: $after, activeOnly: false, maintainerLogins: $maintainers) {
          nodes {
            createdAt
            isActive
            tier { isOneTime }
          }
          pageInfo { hasNextPage endCursor }
        }
      }
    }
  `;

  const nodes = [];
  do {
    const data = await githubGraphQL(token, query, {
      login: orgLogin,
      after,
      maintainers: [sponsorLogin],
    });
    const sponsorships = data.organization?.sponsorshipsAsSponsor;
    if (!sponsorships) {
      return null;
    }
    nodes.push(...(sponsorships.nodes ?? []));
    const pageInfo = sponsorships.pageInfo;
    after = pageInfo.hasNextPage ? pageInfo.endCursor : null;
  } while (after);

  const result = pickSponsorshipResult(nodes);
  if (!result) return null;
  return { match: orgLogin, matchType: "org", ...result };
}

