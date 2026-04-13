import { useEffect, useState } from "react";
import MarkdownPreview from "./MarkdownPreview";
import type { AdminPostInput, PostStatus } from "@/lib/blog/types";

interface PostEditorFormProps {
  initialValue: AdminPostInput;
  submitLabel: string;
  saving: boolean;
  error?: string;
  uploading?: boolean;
  uploadError?: string;
  uploadSuccess?: string;
  onUploadImage?: (file: File) => void;
  onSubmit: (value: AdminPostInput) => void;
}

export default function PostEditorForm({
  initialValue,
  submitLabel,
  saving,
  error,
  uploading = false,
  uploadError = "",
  uploadSuccess = "",
  onUploadImage,
  onSubmit,
}: PostEditorFormProps) {
  const [form, setForm] = useState(initialValue);
  const [preview, setPreview] = useState(false);
  const [imageInputMode, setImageInputMode] = useState<"url" | "upload">(
    initialValue.cover_image_url ? "url" : "upload",
  );

  useEffect(() => {
    setForm(initialValue);
    setImageInputMode(initialValue.cover_image_url ? "url" : "upload");
  }, [initialValue]);

  const updateField = <K extends keyof AdminPostInput>(key: K, value: AdminPostInput[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const status = form.status as PostStatus;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(form);
      }}
      className="space-y-6"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Title</span>
          <input
            value={form.title}
            onChange={(event) => updateField("title", event.target.value)}
            className="form-field"
            placeholder="Post title"
            required
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Slug</span>
          <input
            value={form.slug || ""}
            onChange={(event) => updateField("slug", event.target.value)}
            className="form-field"
            placeholder="leave blank to auto-generate"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-white/80">Excerpt</span>
        <textarea
          value={form.excerpt}
          onChange={(event) => updateField("excerpt", event.target.value)}
          className="form-field min-h-28"
          placeholder="Short summary for listings and SEO."
          required
        />
      </label>

      <div className="grid gap-5 lg:grid-cols-[1fr_16rem_14rem]">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-medium text-white/80">Cover Image</span>
            <div className="inline-flex rounded-full border border-white/12 bg-white/[0.04] p-1 text-sm">
              <button
                type="button"
                onClick={() => setImageInputMode("url")}
                className={`rounded-full px-4 py-2 ${imageInputMode === "url" ? "bg-white text-slate-950" : "text-white/72"}`}
              >
                Use Link
              </button>
              <button
                type="button"
                onClick={() => setImageInputMode("upload")}
                className={`rounded-full px-4 py-2 ${imageInputMode === "upload" ? "bg-white text-slate-950" : "text-white/72"}`}
              >
                Upload
              </button>
            </div>
          </div>

          {imageInputMode === "url" ? (
            <label className="space-y-2">
              <span className="text-sm font-medium text-white/62">Paste image URL</span>
              <input
                value={form.cover_image_url}
                onChange={(event) => updateField("cover_image_url", event.target.value)}
                className="form-field"
                placeholder="https://example.com/image.jpg"
              />
            </label>
          ) : (
            <div className="rounded-[24px] border border-dashed border-white/16 bg-white/[0.03] p-4">
              <label className="block cursor-pointer space-y-3">
                <span className="block text-sm font-medium text-white/72">Upload image to ImageKit</span>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-white/70 file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-950"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file && onUploadImage) {
                      onUploadImage(file);
                    }
                    event.target.value = "";
                  }}
                />
              </label>
              <p className="mt-3 text-xs text-white/48">Accepted: image files up to 5 MB.</p>
            </div>
          )}

          {uploadError ? <p className="text-sm text-red-300">{uploadError}</p> : null}
          {uploadSuccess ? <p className="text-sm text-emerald-300">{uploadSuccess}</p> : null}
          {uploading ? <p className="text-sm text-white/62">Uploading image...</p> : null}
          {form.cover_image_url ? (
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-3">
              <img
                src={form.cover_image_url}
                alt="Cover preview"
                className="h-52 w-full rounded-[18px] object-cover"
              />
              <p className="mt-3 break-all text-xs text-white/48">{form.cover_image_url}</p>
            </div>
          ) : null}
        </div>

        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Tags</span>
          <input
            value={form.tags.join(", ")}
            onChange={(event) =>
              updateField(
                "tags",
                event.target.value
                  .split(",")
                  .map((entry) => entry.trim())
                  .filter(Boolean),
              )
            }
            className="form-field"
            placeholder="ops, ai, safety"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Status</span>
          <select
            value={status}
            onChange={(event) => updateField("status", event.target.value as PostStatus)}
            className="form-field"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/80">Markdown Content</span>
          <button
            type="button"
            onClick={() => setPreview((current) => !current)}
            className="rounded-full border border-white/14 bg-white/[0.04] px-4 py-2 text-sm text-white/78"
          >
            {preview ? "Edit Markdown" : "Preview"}
          </button>
        </div>

        {preview ? (
          <MarkdownPreview markdown={form.content_md} />
        ) : (
          <textarea
            value={form.content_md}
            onChange={(event) => updateField("content_md", event.target.value)}
            className="form-field min-h-[26rem] font-mono text-[14px]"
            placeholder="Write markdown here..."
            required
          />
        )}
      </div>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="premium-button rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
