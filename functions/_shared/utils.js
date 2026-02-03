export const DEFAULT_RETURN_PATH = "/wix/osmf/";
export const STATE_COOKIE = "osmf_state";
export const RETURN_COOKIE = "osmf_return";

export function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function normalizeReturnPath(value, fallback) {
  if (!value) return fallback;

  const decoded = safeDecode(value);
  if (!decoded.startsWith("/")) return fallback;
  if (decoded.startsWith("//")) return fallback;
  if (decoded.includes("://")) return fallback;

  return decoded;
}

export function parseCookies(header) {
  const cookies = {};
  if (!header) return cookies;
  const parts = header.split(";").map((part) => part.trim());
  for (const part of parts) {
    const [name, ...rest] = part.split("=");
    if (!name) continue;
    cookies[name] = safeDecode(rest.join("="));
  }
  return cookies;
}

export function buildSetCookie(name, value, { maxAgeSeconds, secure }) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
  ];

  if (typeof maxAgeSeconds === "number") {
    parts.push(`Max-Age=${maxAgeSeconds}`);
  }

  if (secure) {
    parts.push("Secure");
  }

  return parts.join("; ");
}

export function clearCookie(name, secure) {
  return buildSetCookie(name, "", { maxAgeSeconds: 0, secure });
}

export function buildReturnUrl(origin, returnPath, params) {
  const destination = new URL(returnPath, origin);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      destination.searchParams.set(key, value);
    }
  }
  return destination.toString();
}

export function getRequestOrigin(request) {
  const url = new URL(request.url);
  const host = request.headers.get("host") || "";
  const isLocalhost = host.startsWith("localhost");

  if (isLocalhost) {
    const forwardedProto = request.headers.get("x-forwarded-proto");
    const forwardedHost = request.headers.get("x-forwarded-host");
    if (forwardedHost) {
      const proto = forwardedProto || url.protocol.replace(":", "");
      return `${proto}://${forwardedHost}`;
    }
  }

  return url.origin;
}
