import { getPublishedPostBySlug } from "../../_lib/db";
import { HttpError, jsonSuccess, withErrorHandling } from "../../_lib/http";
import type { Env } from "../../_lib/types";

export const onRequestGet: PagesFunction<Env> = async ({ env, params }) =>
  withErrorHandling(async () => {
    const slug = String(params.slug || "");
    const post = await getPublishedPostBySlug(env, slug);

    if (!post) {
      throw new HttpError(404, "not_found", "Post not found.");
    }

    return jsonSuccess(
      { post },
      {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  });
