import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ScrollResetLink from "@/components/common/ScrollResetLink";
import PostEditorForm from "@/components/blog/PostEditorForm";
import { blogApi } from "@/lib/api/blog";
import { ApiError } from "@/lib/api/client";
import type { AdminPostInput } from "@/lib/blog/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const emptyPost: AdminPostInput = {
  title: "",
  slug: "",
  excerpt: "",
  content_md: "# Title\n\nWrite your post here.",
  cover_image_url: "",
  tags: [],
  status: "draft",
};

export default function AdminPostEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEditing = Boolean(id);
  const [editorValue, setEditorValue] = useState<AdminPostInput | null>(null);
  const [uploadFeedback, setUploadFeedback] = useState("");

  const meQuery = useQuery({
    queryKey: ["admin-me"],
    queryFn: blogApi.me,
  });

  const postQuery = useQuery({
    queryKey: ["admin-post", id],
    queryFn: () => blogApi.getAdminPost(String(id)),
    enabled: isEditing && !!meQuery.data?.user,
  });

  const saveMutation = useMutation({
    mutationFn: (payload: AdminPostInput) =>
      isEditing ? blogApi.updatePost(String(id), payload) : blogApi.createPost(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      await queryClient.invalidateQueries({ queryKey: ["published-posts"] });
      await queryClient.invalidateQueries({ queryKey: ["published-posts-infinite"] });
      navigate("/admin", { replace: true });
    },
  });

  const uploadMutation = useMutation({
    mutationFn: (file: File) => blogApi.uploadImage(file),
    onSuccess: ({ image }) => {
      setEditorValue((current) => ({
        ...(current || initialValue),
        cover_image_url: image.url,
      }));
      setUploadFeedback("Image uploaded successfully. The cover image URL was filled in for you.");
    },
  });

  const initialValue = useMemo<AdminPostInput>(() => {
    if (!isEditing || !postQuery.data?.post) {
      return emptyPost;
    }

    const post = postQuery.data.post;
    return {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content_md: post.content_md,
      cover_image_url: post.cover_image_url,
      tags: post.tags,
      status: post.status,
    };
  }, [isEditing, postQuery.data]);

  const activeValue = editorValue || initialValue;

  if (meQuery.isLoading || (isEditing && postQuery.isLoading)) {
    return <main className="min-h-screen bg-[#020617]" />;
  }

  if (!meQuery.data?.user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (isEditing && postQuery.error instanceof ApiError) {
    return (
      <>
        <Header variant="dark" />
        <main className="bg-[#020617] pb-24 pt-36 text-white">
          <section className="site-shell max-w-3xl">
            <div className="glass-panel rounded-[32px] p-8 md:p-10">
              <h1 className="title-balanced text-[34px] font-normal md:text-[46px]">
                You can&apos;t edit this post
              </h1>
              <p className="mt-4 text-[16px] text-white/68">{postQuery.error.message}</p>
              <div className="mt-8">
                <ScrollResetLink
                  to="/admin"
                  className="premium-button rounded-full px-6 py-3 text-sm font-semibold text-white"
                >
                  Back to Dashboard
                </ScrollResetLink>
              </div>
            </div>
          </section>
        </main>
        <Footer variant="dark" />
      </>
    );
  }

  return (
    <>
      <Header variant="dark" />
      <main className="bg-[#020617] pb-24 pt-36 text-white">
        <section className="site-shell max-w-5xl">
          <ScrollResetLink
            to="/admin"
            className="inline-flex rounded-full border border-white/12 bg-white/[0.05] px-5 py-2 text-sm text-white/76"
          >
            Back to Dashboard
          </ScrollResetLink>

          <div className="glass-panel mt-8 rounded-[32px] p-6 md:p-8">
            <h1 className="title-balanced text-[38px] font-normal md:text-[54px]">
              {isEditing ? "Edit post" : "Create a new post"}
            </h1>
            <p className="mt-4 text-[16px] text-white/68">
              Write in markdown, preview safely, and choose when the post should go live.
            </p>

            <div className="mt-8">
              <PostEditorForm
                initialValue={activeValue}
                saving={saveMutation.isPending}
                submitLabel={isEditing ? "Save Changes" : "Create Post"}
                error={saveMutation.error instanceof ApiError ? saveMutation.error.message : ""}
                uploading={uploadMutation.isPending}
                uploadError={uploadMutation.error instanceof ApiError ? uploadMutation.error.message : ""}
                uploadSuccess={uploadFeedback}
                onUploadImage={(file) => {
                  setUploadFeedback("");
                  uploadMutation.mutate(file);
                }}
                onSubmit={(payload) => {
                  setEditorValue(payload);
                  saveMutation.mutate(payload);
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer variant="dark" />
    </>
  );
}
