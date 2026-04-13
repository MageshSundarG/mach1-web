import { destroySession } from "../../_lib/auth";
import { jsonSuccess, withErrorHandling } from "../../_lib/http";
import type { Env } from "../../_lib/types";

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const response = jsonSuccess({ success: true });
    response.headers.append("Set-Cookie", await destroySession(env, request));
    return response;
  });
