import { getSessionUser } from "../../_lib/auth";
import { jsonSuccess, withErrorHandling } from "../../_lib/http";
import type { Env } from "../../_lib/types";

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const user = await getSessionUser(env, request);
    return jsonSuccess({ user });
  });
