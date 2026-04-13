import type { ApiFailure, ApiSuccess } from "./types";

export class HttpError extends Error {
  status: number;
  code: string;
  details?: unknown;

  constructor(status: number, code: string, message: string, details?: unknown) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function jsonSuccess<T>(data: T, init?: ResponseInit) {
  const body: ApiSuccess<T> = { ok: true, data };
  return Response.json(body, init);
}

export function jsonError(status: number, code: string, message: string, details?: unknown) {
  const body: ApiFailure = {
    ok: false,
    error: { code, message, details },
  };
  return Response.json(body, { status });
}

export async function readJson<T>(request: Request): Promise<T> {
  try {
    return (await request.json()) as T;
  } catch {
    throw new HttpError(400, "invalid_json", "Request body must be valid JSON.");
  }
}

export async function withErrorHandling(handler: () => Promise<Response> | Response) {
  try {
    return await handler();
  } catch (error) {
    if (error instanceof HttpError) {
      return jsonError(error.status, error.code, error.message, error.details);
    }

    console.error(error);
    return jsonError(500, "internal_error", "Something went wrong.");
  }
}
