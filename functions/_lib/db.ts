import { HttpError } from "./http";
import { slugify } from "./slug";
import type { AdminPost, AdminUserSummary, Env, PostRow, PublicPost, SessionUser, UserRow } from "./types";

function parseTags(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((entry): entry is string => typeof entry === "string") : [];
  } catch {
    return [];
  }
}

export function mapPost(row: PostRow): PublicPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content_md: row.content_md,
    cover_image_url: row.cover_image_url,
    tags: parseTags(row.tags),
    status: row.status,
    created_at: row.created_at,
    updated_at: row.updated_at,
    published_at: row.published_at,
  };
}

export function mapAdminPost(row: PostRow & { author_email?: string }): AdminPost {
  return {
    ...mapPost(row),
    author_id: row.author_id,
    author_email: row.author_email || "",
  };
}

export async function getUserByEmail(env: Env, email: string) {
  return await env.DB.prepare("SELECT * FROM users WHERE email = ?1 LIMIT 1")
    .bind(email.toLowerCase())
    .first<UserRow>();
}

export async function getUserById(env: Env, userId: string) {
  return await env.DB.prepare("SELECT * FROM users WHERE id = ?1 LIMIT 1")
    .bind(userId)
    .first<UserRow>();
}

export async function listPublishedPosts(env: Env) {
  const { results } = await env.DB.prepare(
    `SELECT * FROM posts
     WHERE status = 'published'
     ORDER BY datetime(published_at) DESC, datetime(created_at) DESC`,
  ).all<PostRow>();

  return (results ?? []).map(mapPost);
}

export async function listPublishedPostsPage(env: Env, page: number, limit: number) {
  const safePage = Math.max(1, page);
  const safeLimit = Math.min(Math.max(limit, 1), 20);
  const offset = (safePage - 1) * safeLimit;

  const countRow = await env.DB.prepare(
    `SELECT COUNT(*) as total
     FROM posts
     WHERE status = 'published'`,
  ).first<{ total: number }>();

  const { results } = await env.DB.prepare(
    `SELECT * FROM posts
     WHERE status = 'published'
     ORDER BY datetime(published_at) DESC, datetime(created_at) DESC
     LIMIT ?1 OFFSET ?2`,
  )
    .bind(safeLimit, offset)
    .all<PostRow>();

  const posts = (results ?? []).map(mapPost);
  const total = Number(countRow?.total || 0);

  return {
    posts,
    page: safePage,
    limit: safeLimit,
    total,
    has_more: offset + posts.length < total,
    next_page: offset + posts.length < total ? safePage + 1 : null,
  };
}

export async function listAllPosts(env: Env, user: SessionUser) {
  const query =
    user.role === "admin"
      ? `SELECT posts.*, users.email AS author_email
         FROM posts
         JOIN users ON users.id = posts.author_id
         ORDER BY
           CASE posts.status WHEN 'published' THEN 0 ELSE 1 END,
           datetime(posts.updated_at) DESC`
      : `SELECT posts.*, users.email AS author_email
         FROM posts
         JOIN users ON users.id = posts.author_id
         WHERE posts.author_id = ?1
         ORDER BY
           CASE posts.status WHEN 'published' THEN 0 ELSE 1 END,
           datetime(posts.updated_at) DESC`;

  const statement = env.DB.prepare(query);
  const { results } =
    user.role === "admin"
      ? await statement.all<PostRow & { author_email: string }>()
      : await statement.bind(user.id).all<PostRow & { author_email: string }>();

  return (results ?? []).map(mapAdminPost);
}

export async function getPublishedPostBySlug(env: Env, slug: string) {
  const row = await env.DB.prepare(
    `SELECT * FROM posts
     WHERE slug = ?1 AND status = 'published'
     LIMIT 1`,
  )
    .bind(slug)
    .first<PostRow>();

  return row ? mapPost(row) : null;
}

export async function getPostById(env: Env, id: string) {
  const row = await env.DB.prepare(
    `SELECT posts.*, users.email AS author_email
     FROM posts
     JOIN users ON users.id = posts.author_id
     WHERE posts.id = ?1
     LIMIT 1`,
  )
    .bind(id)
    .first<PostRow & { author_email: string }>();

  return row ? mapAdminPost(row) : null;
}

export async function ensureUniqueSlug(env: Env, title: string, requestedSlug?: string, currentPostId?: string) {
  const baseSlug = slugify(requestedSlug?.trim() || title);
  if (!baseSlug) {
    throw new HttpError(400, "invalid_slug", "A valid title or slug is required.");
  }

  let slug = baseSlug;
  let attempt = 1;

  while (true) {
    const existing = await env.DB.prepare("SELECT id FROM posts WHERE slug = ?1 LIMIT 1")
      .bind(slug)
      .first<{ id: string }>();

    if (!existing || existing.id === currentPostId) {
      return slug;
    }

    attempt += 1;
    slug = `${baseSlug}-${attempt}`;
  }
}

export function sanitizeUser(user: UserRow): SessionUser {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
  };
}

export function mapAdminUser(user: UserRow): AdminUserSummary {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
}
