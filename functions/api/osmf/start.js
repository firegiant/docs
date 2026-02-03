import {
  buildSetCookie,
  getRequestOrigin,
  normalizeReturnPath,

  DEFAULT_RETURN_PATH,
  RETURN_COOKIE,
  STATE_COOKIE,
} from "../../_shared/utils.js";

export async function onRequest(context) {
  context.passThroughOnException();

  const url = new URL(context.request.url);
  const origin = getRequestOrigin(context.request);
  const returnPath = normalizeReturnPath(url.searchParams.get("return"), DEFAULT_RETURN_PATH);

  const state = crypto.randomUUID();
  const secure = origin.startsWith("https:");

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", context.env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", `${origin}/api/osmf/callback/`);
  authorizeUrl.searchParams.set("scope", "read:user read:org");
  authorizeUrl.searchParams.set("state", state);

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    buildSetCookie(STATE_COOKIE, state, { maxAgeSeconds: 300, secure })
  );
  headers.append(
    "Set-Cookie",
    buildSetCookie(RETURN_COOKIE, returnPath, { maxAgeSeconds: 300, secure })
  );
  headers.set("Cache-Control", "no-store");
  headers.set("Location", authorizeUrl.toString());

  return new Response(null, { status: 302, headers });
}
