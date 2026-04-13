import { requireUser } from "../../_lib/auth";
import { HttpError, jsonSuccess, withErrorHandling } from "../../_lib/http";
import type { Env } from "../../_lib/types";

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const IMAGEKIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";

function sanitizeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(0, 80);
}

function extensionFromFile(file: File) {
  const byType: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/svg+xml": "svg",
    "image/avif": "avif",
  };

  if (byType[file.type]) {
    return byType[file.type];
  }

  const rawExtension = file.name.split(".").pop()?.toLowerCase();
  return rawExtension && /^[a-z0-9]+$/.test(rawExtension) ? rawExtension : "bin";
}

function getImageKitAuthHeader(env: Env) {
  if (!env.IMAGEKIT_PRIVATE_KEY) {
    throw new HttpError(500, "imagekit_private_key_missing", "ImageKit private key is not configured.");
  }

  return `Basic ${btoa(`${env.IMAGEKIT_PRIVATE_KEY}:`)}`;
}

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    await requireUser(env, request);

    if (!env.IMAGEKIT_URL_ENDPOINT) {
      throw new HttpError(500, "imagekit_url_endpoint_missing", "ImageKit URL endpoint is not configured.");
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      throw new HttpError(400, "file_required", "Please choose an image to upload.");
    }

    if (!file.type.startsWith("image/")) {
      throw new HttpError(400, "invalid_file_type", "Only image uploads are allowed.");
    }

    if (file.size > MAX_UPLOAD_BYTES) {
      throw new HttpError(400, "file_too_large", "Image must be 5 MB or smaller.");
    }

    const extension = extensionFromFile(file);
    const safeName = sanitizeName(file.name.replace(/\.[^.]+$/, ""));
    const fileName = `${crypto.randomUUID()}-${safeName}.${extension}`;
    const uploadForm = new FormData();
    uploadForm.append("file", file);
    uploadForm.append("fileName", fileName);
    uploadForm.append("folder", "/mach-blog/covers");
    uploadForm.append("useUniqueFileName", "true");

    const response = await fetch(IMAGEKIT_UPLOAD_URL, {
      method: "POST",
      headers: {
        Authorization: getImageKitAuthHeader(env),
      },
      body: uploadForm,
    });

    const payload = (await response.json()) as {
      url?: string;
      filePath?: string;
      fileId?: string;
      message?: string;
    };

    if (!response.ok || !payload.url) {
      throw new HttpError(
        502,
        "imagekit_upload_failed",
        payload.message || "Image upload failed.",
      );
    }

    return jsonSuccess({
      image: {
        key: payload.filePath || fileName,
        url: payload.url,
        size: file.size,
        contentType: file.type || "application/octet-stream",
      },
    });
  });
