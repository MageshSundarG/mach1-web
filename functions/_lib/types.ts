export interface Env {
  DB: D1Database;
  IMAGEKIT_PRIVATE_KEY?: string;
  IMAGEKIT_PUBLIC_KEY?: string;
  IMAGEKIT_URL_ENDPOINT?: string;
  TURNSTILE_SECRET_KEY?: string;
}

export type UserRole = "admin" | "author";
export type PostStatus = "draft" | "published";
export interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface SessionRow {
  id: string;
  user_id: string;
  expires_at: string;
  created_at: string;
}

export interface PostRow {
  id: string;
  author_id: string;
  title: string;
  slug: string;
  excerpt: string;
  content_md: string;
  cover_image_url: string;
  tags: string;
  status: PostStatus;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface ApiSuccess<T> {
  ok: true;
  data: T;
}

export interface ApiFailure {
  ok: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export interface SessionUser {
  id: string;
  email: string;
  role: UserRole;
}

export interface AdminUserSummary extends SessionUser {
  created_at: string;
  updated_at: string;
}

export interface PublicPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content_md: string;
  cover_image_url: string;
  tags: string[];
  status: PostStatus;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface AdminPost extends PublicPost {
  author_id: string;
  author_email: string;
}
