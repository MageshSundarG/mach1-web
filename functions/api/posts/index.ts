import { listPublishedPostsPage } from "../../_lib/db";
import { jsonSuccess, withErrorHandling } from "../../_lib/http";
import type { Env } from "../../_lib/types";

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") || "1");
    const limit = Number(url.searchParams.get("limit") || "6");

    return jsonSuccess(
      await listPublishedPostsPage(env, page, limit),
      {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  });
