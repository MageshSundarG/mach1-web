import { HttpError } from "./http";
import { getUserById } from "./db";
import type { Env, SessionRow, SessionUser, UserRole } from "./types";

const SESSION_COOKIE = "mach_blog_session";

function parseCookies(request: Request) {
  const cookieHeader = request.headers.get("Cookie") || "";
  return Object.fromEntries(
    cookieHeader
      .split(";")
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const [name, ...rest] = entry.split("=");
        return [name, decodeURIComponent(rest.join("="))];
      }),
  );
}

function serializeCookie(name: string, value: string, maxAge?: number) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Strict",
    "Secure",
  ];

  if (typeof maxAge === "number") {
    parts.push(`Max-Age=${maxAge}`);
  }

  return parts.join("; ");
}

export async function createSession(env: Env, userId: string) {
  const sessionId = crypto.randomUUID();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7).toISOString();

  await env.DB.prepare(
    `INSERT INTO sessions (id, user_id, expires_at, created_at)
     VALUES (?1, ?2, ?3, ?4)`,
  )
    .bind(sessionId, userId, expiresAt, now.toISOString())
    .run();

  return {
    cookie: serializeCookie(SESSION_COOKIE, sessionId, 60 * 60 * 24 * 7),
    sessionId,
  };
}

export function clearSessionCookie() {
  return serializeCookie(SESSION_COOKIE, "", 0);
}

async function getSessionRow(env: Env, sessionId: string) {
  const row = await env.DB.prepare("SELECT * FROM sessions WHERE id = ?1 LIMIT 1")
    .bind(sessionId)
    .first<SessionRow>();

  if (!row) {
    return null;
  }

  if (new Date(row.expires_at).getTime() <= Date.now()) {
    await env.DB.prepare("DELETE FROM sessions WHERE id = ?1").bind(sessionId).run();
    return null;
  }

  return row;
}

export async function getSessionUser(env: Env, request: Request): Promise<SessionUser | null> {
  const cookies = parseCookies(request);
  const cookieValue = cookies[SESSION_COOKIE];

  if (!cookieValue) {
    return null;
  }

  const session = await getSessionRow(env, cookieValue);
  if (!session) {
    return null;
  }

  const user = await getUserById(env, session.user_id);
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    role: user.role,
  };
}

export async function requireUser(env: Env, request: Request) {
  const user = await getSessionUser(env, request);
  if (!user) {
    throw new HttpError(401, "unauthorized", "You must be signed in.");
  }
  return user;
}

export async function requireRole(env: Env, request: Request, role: UserRole) {
  const user = await requireUser(env, request);
  if (user.role !== role) {
    throw new HttpError(403, "forbidden", "You do not have access to this action.");
  }
  return user;
}

export async function destroySession(env: Env, request: Request) {
  const cookies = parseCookies(request);
  const sessionId = cookies[SESSION_COOKIE];

  if (sessionId) {
    await env.DB.prepare("DELETE FROM sessions WHERE id = ?1").bind(sessionId).run();
  }

  return clearSessionCookie();
}
