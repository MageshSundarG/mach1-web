export type PostStatus = "draft" | "published";
export type UserRole = "admin" | "author";

export interface BlogPost {
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

export interface AdminPost extends BlogPost {
  author_id: string;
  author_email: string;
}

export interface SessionUser {
  id: string;
  email: string;
  role: UserRole;
}

export interface AdminUser {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface AdminPostInput {
  title: string;
  excerpt: string;
  content_md: string;
  cover_image_url: string;
  tags: string[];
  status: PostStatus;
}

export interface CreateUserInput {
  email: string;
  password: string;
  role: UserRole;
}

export interface UpdateUserInput {
  email: string;
  role: UserRole;
}

export interface UploadedImage {
  url: string;
  key: string;
  size: number;
  contentType: string;
}
