import { getUserByEmail, mapAdminUser, sanitizeUser } from "../../../_lib/db";
import { requireRole } from "../../../_lib/auth";
import { HttpError, jsonSuccess, readJson, withErrorHandling } from "../../../_lib/http";
import { hashPassword } from "../../../_lib/password";
import { userInputSchema } from "../../../_lib/validation";
import type { Env, UserRow } from "../../../_lib/types";

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    await requireRole(env, request, "admin");

    const { results } = await env.DB.prepare(
      "SELECT * FROM users ORDER BY datetime(created_at) DESC",
    ).all<UserRow>();

    return jsonSuccess({
      users: (results ?? []).map(mapAdminUser),
    });
  });

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    await requireRole(env, request, "admin");

    const payload = userInputSchema.parse(await readJson(request));
    const existing = await getUserByEmail(env, payload.email);

    if (existing) {
      throw new HttpError(409, "email_exists", "A user with this email already exists.");
    }

    const now = new Date().toISOString();
    const id = crypto.randomUUID();
    const passwordHash = await hashPassword(payload.password);

    await env.DB.prepare(
      `INSERT INTO users (id, email, password_hash, role, created_at, updated_at)
       VALUES (?1, ?2, ?3, ?4, ?5, ?5)`,
    )
      .bind(id, payload.email.toLowerCase(), passwordHash, payload.role, now)
      .run();

    const created = await getUserByEmail(env, payload.email);
    if (!created) {
      throw new HttpError(500, "create_user_failed", "Could not create user.");
    }

    return jsonSuccess({ user: sanitizeUser(created) }, { status: 201 });
  });
