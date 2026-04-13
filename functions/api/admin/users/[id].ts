import { getUserByEmail, getUserById, mapAdminUser } from "../../../_lib/db";
import { requireRole } from "../../../_lib/auth";
import { HttpError, jsonSuccess, readJson, withErrorHandling } from "../../../_lib/http";
import { userUpdateSchema } from "../../../_lib/validation";
import type { Env } from "../../../_lib/types";

function assertNotCurrentUser(currentUserId: string, targetUserId: string, action: string) {
  if (currentUserId === targetUserId) {
    throw new HttpError(400, "invalid_user_action", `You cannot ${action} your own account.`);
  }
}

export const onRequestGet: PagesFunction<Env> = async ({ env, request, params }) =>
  withErrorHandling(async () => {
    await requireRole(env, request, "admin");
    const id = String(params.id || "");
    const user = await getUserById(env, id);

    if (!user) {
      throw new HttpError(404, "user_not_found", "User not found.");
    }

    return jsonSuccess({ user: mapAdminUser(user) });
  });

export const onRequestPut: PagesFunction<Env> = async ({ env, request, params }) =>
  withErrorHandling(async () => {
    const currentUser = await requireRole(env, request, "admin");
    const id = String(params.id || "");
    const existing = await getUserById(env, id);

    if (!existing) {
      throw new HttpError(404, "user_not_found", "User not found.");
    }

    const payload = userUpdateSchema.parse(await readJson(request));
    const duplicate = await getUserByEmail(env, payload.email);
    if (duplicate && duplicate.id !== id) {
      throw new HttpError(409, "email_exists", "A user with this email already exists.");
    }

    await env.DB.prepare(
      `UPDATE users
       SET email = ?2,
           role = ?3,
           updated_at = ?4
       WHERE id = ?1`,
    )
      .bind(id, payload.email.toLowerCase(), payload.role, new Date().toISOString())
      .run();

    const updated = await getUserById(env, id);
    if (!updated) {
      throw new HttpError(500, "update_user_failed", "Could not update user.");
    }

    return jsonSuccess({ user: mapAdminUser(updated) });
  });

export const onRequestDelete: PagesFunction<Env> = async ({ env, request, params }) =>
  withErrorHandling(async () => {
    const currentUser = await requireRole(env, request, "admin");
    const id = String(params.id || "");
    const existing = await getUserById(env, id);

    if (!existing) {
      throw new HttpError(404, "user_not_found", "User not found.");
    }

    assertNotCurrentUser(currentUser.id, id, "delete");

    await env.DB.prepare("DELETE FROM users WHERE id = ?1").bind(id).run();
    return jsonSuccess({ deleted: true });
  });
