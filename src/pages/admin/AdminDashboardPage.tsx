import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ScrollResetLink from "@/components/common/ScrollResetLink";
import { blogApi } from "@/lib/api/blog";
import { ApiError } from "@/lib/api/client";
import type { AdminPost, AdminUser, CreateUserInput, UpdateUserInput } from "@/lib/blog/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";

const POSTS_PER_PAGE = 8;
const USERS_PER_PAGE = 6;

function formatUserName(email: string) {
  const localPart = email.split("@")[0] || email;
  return localPart
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatDate(value: string | null) {
  if (!value) {
    return "Not published";
  }

  return new Date(value).toLocaleDateString();
}

function getPageSlice<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    items: items.slice(start, start + perPage),
    currentPage,
    totalPages,
  };
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  label: string;
}

function PaginationControls({ currentPage, totalPages, onPageChange, label }: PaginationProps) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-5 text-sm text-white/58">
      <p>
        {label} page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="rounded-full border border-white/12 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="rounded-full border border-white/12 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const queryClient = useQueryClient();
  const [postPage, setPostPage] = useState(1);
  const [userPage, setUserPage] = useState(1);
  const [userForm, setUserForm] = useState<CreateUserInput>({
    email: "",
    password: "",
    role: "author",
  });
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [userEditForm, setUserEditForm] = useState<UpdateUserInput>({
    email: "",
    role: "author",
  });
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const meQuery = useQuery({
    queryKey: ["admin-me"],
    queryFn: blogApi.me,
  });

  const postsQuery = useQuery({
    queryKey: ["admin-posts"],
    queryFn: blogApi.getAdminPosts,
    enabled: !!meQuery.data?.user,
  });

  const usersQuery = useQuery({
    queryKey: ["admin-users"],
    queryFn: blogApi.getUsers,
    enabled: meQuery.data?.user?.role === "admin",
  });

  const invalidateBlogQueries = async () => {
    await queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
    await queryClient.invalidateQueries({ queryKey: ["published-posts"] });
    await queryClient.invalidateQueries({ queryKey: ["published-posts-infinite"] });
  };

  const deleteMutation = useMutation({
    mutationFn: (id: string) => blogApi.deletePost(id),
    onSuccess: invalidateBlogQueries,
  });

  const togglePublishMutation = useMutation({
    mutationFn: (post: AdminPost) =>
      blogApi.updatePost(post.id, {
        title: post.title,
        excerpt: post.excerpt,
        content_md: post.content_md,
        cover_image_url: post.cover_image_url,
        tags: post.tags,
        status: post.status === "published" ? "draft" : "published",
      }),
    onSuccess: invalidateBlogQueries,
  });

  const createUserMutation = useMutation({
    mutationFn: () => blogApi.createUser(userForm),
    onSuccess: async () => {
      setUserForm({ email: "", password: "", role: "author" });
      await queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateUserInput }) =>
      blogApi.updateUser(id, payload),
    onSuccess: async () => {
      setEditingUserId(null);
      await queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      await queryClient.invalidateQueries({ queryKey: ["admin-me"] });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: (id: string) => blogApi.deleteUser(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: blogApi.logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin-me"] });
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: () =>
      blogApi.changePassword(
        passwordForm.oldPassword,
        passwordForm.newPassword,
        passwordForm.confirmPassword,
      ),
    onSuccess: () => {
      setPasswordForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    },
  });

  const user = meQuery.data?.user;
  const posts = postsQuery.data?.posts || [];
  const users = usersQuery.data?.users || [];
  const isAdmin = user?.role === "admin";
  const roleLabel = isAdmin ? "Admin" : "Author";
  const pageTitle = isAdmin ? "Dashboard" : "Dashboard";
  const userName = user ? formatUserName(user.email) : "";

  const publishedCount = useMemo(
    () => posts.filter((post) => post.status === "published").length,
    [posts],
  );
  const draftCount = posts.length - publishedCount;

  const paginatedPosts = useMemo(() => getPageSlice(posts, postPage, POSTS_PER_PAGE), [posts, postPage]);
  const paginatedUsers = useMemo(() => getPageSlice(users, userPage, USERS_PER_PAGE), [users, userPage]);

  useEffect(() => {
    setPostPage((current) => Math.min(current, Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))));
  }, [posts.length]);

  useEffect(() => {
    setUserPage((current) => Math.min(current, Math.max(1, Math.ceil(users.length / USERS_PER_PAGE))));
  }, [users.length]);

  if (meQuery.isLoading) {
    return <main className="min-h-screen bg-[#020617]" />;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <>
      <Header variant="dark" />
      <main className="bg-[#020617] pb-24 pt-36 text-white">
        <section className="site-shell space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-white/12 bg-white/[0.05] px-5 py-2 text-[13px] uppercase tracking-[0.3em] text-white/72">
                {roleLabel} Dashboard
              </span>
              <h1 className="title-balanced mt-6 text-[40px] font-normal md:text-[56px]">
                {pageTitle}
              </h1>
              <p className="mt-4 max-w-3xl text-[17px] text-white/70">{userName} ({user.email})</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ScrollResetLink
                to="/admin/posts/new"
                className="premium-button rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Create Post
              </ScrollResetLink>
              <button
                type="button"
                onClick={() => logoutMutation.mutate()}
                className="rounded-full border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/78"
              >
                {logoutMutation.isPending ? "Signing Out..." : "Sign Out"}
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">Visible Posts</p>
              <p className="mt-4 text-[40px] font-semibold text-white">{publishedCount}</p>
            </div>
            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">Drafts</p>
              <p className="mt-4 text-[40px] font-semibold text-white">{draftCount}</p>
            </div>
            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">Posts In Scope</p>
              <p className="mt-4 text-[40px] font-semibold text-white">{posts.length}</p>
            </div>
            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">Users</p>
              <p className="mt-4 text-[40px] font-semibold text-white">{isAdmin ? users.length : 1}</p>
            </div>
          </div>

          <div className="glass-panel rounded-[32px] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-[24px] font-semibold text-white">Posts</h2>
              </div>
              <p className="text-sm text-white/52">
                Showing {paginatedPosts.items.length} of {posts.length} posts
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full text-left text-sm text-white/80">
                <thead className="text-white/50">
                  <tr>
                    <th className="pb-4 pr-6 font-medium">Title</th>
                    {isAdmin ? <th className="pb-4 pr-6 font-medium">Author</th> : null}
                    <th className="pb-4 pr-6 font-medium">Status</th>
                    <th className="pb-4 pr-6 font-medium">Published</th>
                    <th className="pb-4 pr-6 font-medium">Updated</th>
                    <th className="pb-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPosts.items.map((post) => (
                    <tr key={post.id} className="border-t border-white/8 align-top">
                      <td className="py-4 pr-6">
                        <div className="min-w-[16rem]">
                          <p className="font-medium text-white">{post.title}</p>
                          <p className="mt-1 text-xs text-white/45">/{post.slug}</p>
                          <p className="mt-2 line-clamp-2 text-xs text-white/52">{post.excerpt}</p>
                        </div>
                      </td>
                      {isAdmin ? (
                        <td className="py-4 pr-6">
                          <div>
                            <p className="font-medium text-white">{formatUserName(post.author_email)}</p>
                            <p className="mt-1 text-xs text-white/45">{post.author_email}</p>
                          </div>
                        </td>
                      ) : null}
                      <td className="py-4 pr-6">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 capitalize">
                          {post.status}
                        </span>
                      </td>
                      <td className="py-4 pr-6">{formatDate(post.published_at)}</td>
                      <td className="py-4 pr-6">{formatDate(post.updated_at)}</td>
                      <td className="py-4">
                        <div className="flex min-w-[14rem] flex-wrap gap-3">
                          <ScrollResetLink
                            to={`/admin/posts/${post.id}/edit`}
                            className="text-[#8CC0FF]"
                          >
                            Edit
                          </ScrollResetLink>
                          <button
                            type="button"
                            onClick={() => togglePublishMutation.mutate(post)}
                            className="text-white/70"
                          >
                            {post.status === "published" ? "Unpublish" : "Publish"}
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteMutation.mutate(post.id)}
                            className="text-red-300"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!paginatedPosts.items.length ? (
                    <tr>
                      <td colSpan={isAdmin ? 6 : 5} className="border-t border-white/8 py-10 text-center text-white/55">
                        No posts available yet.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>

            {posts.length > POSTS_PER_PAGE ? (
              <PaginationControls
                currentPage={paginatedPosts.currentPage}
                totalPages={paginatedPosts.totalPages}
                onPageChange={setPostPage}
                label="Posts"
              />
            ) : null}
          </div>

          <div className="glass-panel rounded-[32px] p-6 md:p-8">
            <h2 className="text-[24px] font-semibold text-white">Change Password</h2>
            <form
              className="mt-6 grid gap-4 lg:grid-cols-3"
              onSubmit={(event) => {
                event.preventDefault();
                changePasswordMutation.mutate();
              }}
            >
              <label className="space-y-2">
                <span className="text-sm text-white/80">Old Password</span>
                <input
                  type="password"
                  className="form-field"
                  value={passwordForm.oldPassword}
                  onChange={(event) =>
                    setPasswordForm((current) => ({ ...current, oldPassword: event.target.value }))
                  }
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-white/80">New Password</span>
                <input
                  type="password"
                  className="form-field"
                  value={passwordForm.newPassword}
                  onChange={(event) =>
                    setPasswordForm((current) => ({ ...current, newPassword: event.target.value }))
                  }
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-white/80">Confirm New Password</span>
                <input
                  type="password"
                  className="form-field"
                  value={passwordForm.confirmPassword}
                  onChange={(event) =>
                    setPasswordForm((current) => ({
                      ...current,
                      confirmPassword: event.target.value,
                    }))
                  }
                />
              </label>

              <div className="lg:col-span-3">
                {changePasswordMutation.error instanceof ApiError ? (
                  <p className="mb-4 text-sm text-red-300">{changePasswordMutation.error.message}</p>
                ) : null}
                {changePasswordMutation.isSuccess ? (
                  <p className="mb-4 text-sm text-emerald-300">Password updated successfully.</p>
                ) : null}
                <button className="premium-button rounded-full px-6 py-3 text-sm font-semibold text-white">
                  {changePasswordMutation.isPending ? "Updating..." : "Update Password"}
                </button>
              </div>
            </form>
          </div>

          {isAdmin ? (
            <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
              <div className="glass-panel rounded-[32px] p-6 md:p-8">
                <h2 className="text-[24px] font-semibold text-white">Create User</h2>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    createUserMutation.mutate();
                  }}
                  className="mt-6 space-y-4"
                >
                  <label className="space-y-2">
                    <span className="text-sm text-white/80">Email</span>
                    <input
                      className="form-field"
                      type="email"
                      value={userForm.email}
                      onChange={(event) => setUserForm((current) => ({ ...current, email: event.target.value }))}
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm text-white/80">Password</span>
                    <input
                      className="form-field"
                      type="password"
                      value={userForm.password}
                      onChange={(event) => setUserForm((current) => ({ ...current, password: event.target.value }))}
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm text-white/80">Role</span>
                    <select
                      className="form-field"
                      value={userForm.role}
                      onChange={(event) =>
                        setUserForm((current) => ({
                          ...current,
                          role: event.target.value as CreateUserInput["role"],
                        }))
                      }
                    >
                      <option value="author">Author</option>
                      <option value="admin">Admin</option>
                    </select>
                  </label>

                  {createUserMutation.error instanceof ApiError ? (
                    <p className="text-sm text-red-300">{createUserMutation.error.message}</p>
                  ) : null}

                  <button className="premium-button rounded-full px-6 py-3 text-sm font-semibold text-white">
                    {createUserMutation.isPending ? "Creating..." : "Create User"}
                  </button>
                </form>
              </div>

              <div className="glass-panel rounded-[32px] p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-[24px] font-semibold text-white">Users</h2>
                  </div>
                  <p className="text-sm text-white/52">
                    Showing {paginatedUsers.items.length} of {users.length} users
                  </p>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full text-left text-sm text-white/80">
                    <thead className="text-white/50">
                      <tr>
                        <th className="pb-4 pr-6 font-medium">User</th>
                        <th className="pb-4 pr-6 font-medium">Role</th>
                        <th className="pb-4 pr-6 font-medium">Created</th>
                        <th className="pb-4 pr-6 font-medium">Updated</th>
                        <th className="pb-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedUsers.items.map((entry: AdminUser) => (
                        <tr key={entry.id} className="border-t border-white/8">
                          <td className="py-4 pr-6">
                            <div className="min-w-[16rem]">
                              <p className="font-medium text-white">{formatUserName(entry.email)}</p>
                              <p className="mt-1 text-xs text-white/45">{entry.email}</p>
                            </div>
                          </td>
                          <td className="py-4 pr-6 capitalize">
                            {editingUserId === entry.id ? (
                              <select
                                className="form-field min-w-[8rem]"
                                value={userEditForm.role}
                                onChange={(event) =>
                                  setUserEditForm((current) => ({
                                    ...current,
                                    role: event.target.value as UpdateUserInput["role"],
                                  }))
                                }
                              >
                                <option value="author">Author</option>
                                <option value="admin">Admin</option>
                              </select>
                            ) : (
                              entry.role
                            )}
                          </td>
                          <td className="py-4 pr-6">{formatDate(entry.created_at)}</td>
                          <td className="py-4 pr-6">{formatDate(entry.updated_at)}</td>
                          <td className="py-4">
                            <div className="flex min-w-[17rem] flex-wrap gap-3">
                              {editingUserId === entry.id ? (
                                <>
                                  <input
                                    className="form-field min-w-[15rem]"
                                    type="email"
                                    value={userEditForm.email}
                                    onChange={(event) =>
                                      setUserEditForm((current) => ({
                                        ...current,
                                        email: event.target.value,
                                      }))
                                    }
                                  />
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateUserMutation.mutate({
                                        id: entry.id,
                                        payload: userEditForm,
                                      })
                                    }
                                    className="text-[#8CC0FF]"
                                  >
                                    Save
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setEditingUserId(null)}
                                    className="text-white/70"
                                  >
                                    Cancel
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingUserId(entry.id);
                                      setUserEditForm({
                                        email: entry.email,
                                        role: entry.role,
                                      });
                                    }}
                                    className="text-[#8CC0FF]"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => deleteUserMutation.mutate(entry.id)}
                                    disabled={entry.id === user.id}
                                    className="text-red-300 disabled:opacity-40"
                                  >
                                    Delete
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                      {!paginatedUsers.items.length ? (
                        <tr>
                          <td colSpan={5} className="border-t border-white/8 py-10 text-center text-white/55">
                            No users available yet.
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>

                {updateUserMutation.error instanceof ApiError ? (
                  <p className="mt-4 text-sm text-red-300">{updateUserMutation.error.message}</p>
                ) : null}
                {deleteUserMutation.error instanceof ApiError ? (
                  <p className="mt-4 text-sm text-red-300">{deleteUserMutation.error.message}</p>
                ) : null}

                {users.length > USERS_PER_PAGE ? (
                  <PaginationControls
                    currentPage={paginatedUsers.currentPage}
                    totalPages={paginatedUsers.totalPages}
                    onPageChange={setUserPage}
                    label="Users"
                  />
                ) : null}
              </div>
            </div>
          ) : null}
        </section>
      </main>
      <Footer variant="dark" />
    </>
  );
}
