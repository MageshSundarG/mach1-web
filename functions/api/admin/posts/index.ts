import { ensureUniqueSlug, getPostById, listAllPosts } from "../../../_lib/db";
import { requireUser } from "../../../_lib/auth";
import { HttpError, jsonSuccess, readJson, withErrorHandling } from "../../../_lib/http";
import { postInputSchema } from "../../../_lib/validation";
import type { Env, PostStatus } from "../../../_lib/types";

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const user = await requireUser(env, request);
    return jsonSuccess({ posts: await listAllPosts(env, user) });
  });

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const user = await requireUser(env, request);
    const payload = postInputSchema.parse(await readJson(request));
    const now = new Date().toISOString();
    const slug = await ensureUniqueSlug(env, payload.title);
    const id = crypto.randomUUID();
    const status = payload.status as PostStatus;
    const publishedAt = status === "published" ? now : null;

    await env.DB.prepare(
      `INSERT INTO posts (
        id, author_id, title, slug, excerpt, content_md, cover_image_url, tags, status,
        created_at, updated_at, published_at
      ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?10, ?11)`,
    )
      .bind(
        id,
        user.id,
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

    const post = await getPostById(env, id);

    if (!post) {
      throw new HttpError(500, "create_failed", "Could not create post.");
    }

    return jsonSuccess({ post }, { status: 201 });
  });
