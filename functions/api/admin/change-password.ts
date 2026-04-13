import { getUserById } from "../../_lib/db";
import { requireUser } from "../../_lib/auth";
import { HttpError, jsonSuccess, readJson, withErrorHandling } from "../../_lib/http";
import { hashPassword, verifyPassword } from "../../_lib/password";
import { changePasswordSchema } from "../../_lib/validation";
import type { Env } from "../../_lib/types";

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const sessionUser = await requireUser(env, request);
    const payload = changePasswordSchema.parse(await readJson(request));
    const user = await getUserById(env, sessionUser.id);

    if (!user) {
      throw new HttpError(404, "user_not_found", "User not found.");
    }

    const isValid = await verifyPassword(payload.old_password, user.password_hash);
    if (!isValid) {
      throw new HttpError(401, "invalid_old_password", "Old password is incorrect.");
    }

    const nextHash = await hashPassword(payload.new_password);
    const now = new Date().toISOString();

    await env.DB.prepare(
      `UPDATE users
       SET password_hash = ?2,
           updated_at = ?3
       WHERE id = ?1`,
    )
      .bind(user.id, nextHash, now)
      .run();

    return jsonSuccess({ success: true });
  });
