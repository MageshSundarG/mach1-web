export interface ApiErrorShape {
  code: string;
  message: string;
  details?: unknown;
}

export class ApiError extends Error {
  status: number;
  code: string;
  details?: unknown;

  constructor(status: number, error: ApiErrorShape) {
    super(error.message);
    this.status = status;
    this.code = error.code;
    this.details = error.details;
  }
}

interface ApiEnvelope<T> {
  ok: boolean;
  data?: T;
  error?: ApiErrorShape;
}

export async function apiRequest<T>(input: string, init?: RequestInit) {
  const isFormData = init?.body instanceof FormData;
  const response = await fetch(input, {
    credentials: "include",
    headers: isFormData
      ? init?.headers
      : {
          "Content-Type": "application/json",
          ...(init?.headers || {}),
        },
    ...init,
  });

  const payload = (await response.json()) as ApiEnvelope<T>;

  if (!response.ok || !payload.ok || !payload.data) {
    throw new ApiError(
      response.status,
      payload.error || {
        code: "unknown_error",
        message: "The request failed.",
      },
    );
  }

  return payload.data;
}
