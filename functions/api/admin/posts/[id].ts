import { ensureUniqueSlug, getPostById } from "../../../_lib/db";
import { requireUser } from "../../../_lib/auth";
import { HttpError, jsonSuccess, readJson, withErrorHandling } from "../../../_lib/http";
import { postInputSchema } from "../../../_lib/validation";
import type { AdminPost, Env, PostStatus, SessionUser } from "../../../_lib/types";

function assertPostAccess(user: SessionUser, post: AdminPost) {
  if (user.role === "author" && post.author_id !== user.id) {
    throw new HttpError(403, "forbidden", "You do not have access to this post.");
  }
}

export const onRequestGet: PagesFunction<Env> = async ({ env, request, params }) =>
  withErrorHandling(async () => {
    const user = await requireUser(env, request);
    const id = String(params.id || "");
    const post = await getPostById(env, id);

    if (!post) {
      throw new HttpError(404, "not_found", "Post not found.");
    }

    assertPostAccess(user, post);

    return jsonSuccess({ post });
  });

export const onRequestPut: PagesFunction<Env> = async ({ env, request, params }) =>
  withErrorHandling(async () => {
    const user = await requireUser(env, request);
    const id = String(params.id || "");
    const existing = await getPostById(env, id);

    if (!existing) {
      throw new HttpError(404, "not_found", "Post not found.");
    }

    assertPostAccess(user, existing);

    const payload = postInputSchema.parse(await readJson(request));
    const now = new Date().toISOString();
    const slug = await ensureUniqueSlug(env, payload.title, id);
    const status = payload.status as PostStatus;
    const publishedAt =
      status === "published"
        ? existing.published_at || now
        : null;

    await env.DB.prepare(
      `UPDATE posts
       SET title = ?2,
           slug = ?3,
           excerpt = ?4,
           content_md = ?5,
           cover_image_url = ?6,
           tags = ?7,
           status = ?8,
           updated_at = ?9,
           published_at = ?10
       WHERE id = ?1`,
    )
      .bind(
        id,
        payload.title,
        slug,
        payload.excerpt,
        payload.content_md,
        payload.cover_image_url,
        JSON.stringify(payload.tags),
        status,
        now,
        publishedAt,
      )
      .run();

    const updated = await getPostById(env, id);
    if (!updated) {
      throw new HttpError(500, "update_failed", "Could not update post.");
    }

    return jsonSuccess({ post: updated });
  });

export const onRequestDelete: PagesFunction<Env> = async ({ env, request, params }) =>
  withErrorHandling(async () => {
    const user = await requireUser(env, request);
    const id = String(params.id || "");
    const existing = await getPostById(env, id);

    if (!existing) {
      throw new HttpError(404, "not_found", "Post not found.");
    }

    assertPostAccess(user, existing);

    await env.DB.prepare("DELETE FROM posts WHERE id = ?1").bind(id).run();
    return jsonSuccess({ deleted: true });
  });
