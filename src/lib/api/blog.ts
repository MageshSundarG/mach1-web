import type {
  AdminPost,
  AdminPostInput,
  AdminUser,
  BlogPost,
  CreateUserInput,
  SessionUser,
  UpdateUserInput,
  UploadedImage,
} from "../blog/types";
import { apiRequest } from "./client";

export const blogApi = {
  getPublishedPosts: (page = 1, limit = 6) =>
    apiRequest<{
      posts: BlogPost[];
      page: number;
      limit: number;
      total: number;
      has_more: boolean;
      next_page: number | null;
    }>(`/api/posts?page=${page}&limit=${limit}`),
  getPublishedPost: (slug: string) => apiRequest<{ post: BlogPost }>(`/api/posts/${slug}`),
  login: (email: string, password: string) =>
    apiRequest<{ user: SessionUser }>("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  logout: () =>
    apiRequest<{ success: boolean }>("/api/admin/logout", {
      method: "POST",
      body: JSON.stringify({}),
    }),
  changePassword: (oldPassword: string, newPassword: string, confirmPassword: string) =>
    apiRequest<{ success: boolean }>("/api/admin/change-password", {
      method: "POST",
      body: JSON.stringify({
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      }),
    }),
  me: () => apiRequest<{ user: SessionUser | null }>("/api/admin/me"),
  getAdminPosts: () => apiRequest<{ posts: AdminPost[] }>("/api/admin/posts"),
  getAdminPost: (id: string) => apiRequest<{ post: AdminPost }>(`/api/admin/posts/${id}`),
  createPost: (payload: AdminPostInput) =>
    apiRequest<{ post: AdminPost }>("/api/admin/posts", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updatePost: (id: string, payload: AdminPostInput) =>
    apiRequest<{ post: AdminPost }>(`/api/admin/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),
  deletePost: (id: string) =>
    apiRequest<{ deleted: boolean }>(`/api/admin/posts/${id}`, {
      method: "DELETE",
    }),
  getUsers: () => apiRequest<{ users: AdminUser[] }>("/api/admin/users"),
  createUser: (payload: CreateUserInput) =>
    apiRequest<{ user: SessionUser }>("/api/admin/users", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateUser: (id: string, payload: UpdateUserInput) =>
    apiRequest<{ user: AdminUser }>(`/api/admin/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),
  deleteUser: (id: string) =>
    apiRequest<{ deleted: boolean }>(`/api/admin/users/${id}`, {
      method: "DELETE",
    }),
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiRequest<{ image: UploadedImage }>("/api/admin/uploads", {
      method: "POST",
      body: formData,
    });
  },
};
