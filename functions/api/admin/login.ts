import { getUserByEmail, sanitizeUser } from "../../_lib/db";
import { createSession } from "../../_lib/auth";
import { HttpError, jsonSuccess, readJson, withErrorHandling } from "../../_lib/http";
import { verifyPassword } from "../../_lib/password";
import { loginSchema } from "../../_lib/validation";
import type { Env } from "../../_lib/types";

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const payload = loginSchema.parse(await readJson(request));
    const user = await getUserByEmail(env, payload.email);

    if (!user) {
      throw new HttpError(401, "invalid_credentials", "Invalid email or password.");
    }

    const isValid = await verifyPassword(payload.password, user.password_hash);
    if (!isValid) {
      throw new HttpError(401, "invalid_credentials", "Invalid email or password.");
    }

    const session = await createSession(env, user.id);
    const response = jsonSuccess({ user: sanitizeUser(user) });
    response.headers.append("Set-Cookie", session.cookie);
    return response;
  });
