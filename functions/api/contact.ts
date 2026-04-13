import { HttpError, jsonSuccess, readJson, withErrorHandling } from "../_lib/http";
import type { Env } from "../_lib/types";

interface ContactRequestBody {
  name: string;
  mobile?: string;
  email: string;
  jobTitle?: string;
  company?: string;
  operationsContext?: string;
  focusAreas?: string[];
  products?: string[];
  turnstileToken: string;
}

interface TurnstileVerificationResult {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
}

const formatList = (values: string[]) => (values.length ? values.join(", ") : "None selected");

const requireString = (value: unknown, field: string) => {
  if (typeof value !== "string" || !value.trim()) {
    throw new HttpError(400, "invalid_request", `${field} is required.`);
  }

  return value.trim();
};

const optionalString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const stringArray = (value: unknown) =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0) : [];

async function verifyTurnstileToken(token: string, secret: string, remoteIp: string | null) {
  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new HttpError(502, "turnstile_unavailable", "Security verification is unavailable.");
  }

  return (await response.json()) as TurnstileVerificationResult;
}

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    if (!env.TURNSTILE_SECRET_KEY) {
      throw new HttpError(500, "missing_turnstile_key", "Security verification is not configured.");
    }

    const body = await readJson<ContactRequestBody>(request);
    const name = requireString(body.name, "Name");
    const email = requireString(body.email, "Email");
    const turnstileToken = requireString(body.turnstileToken, "Turnstile token");

    const remoteIp =
      request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For");

    const verification = await verifyTurnstileToken(
      turnstileToken,
      env.TURNSTILE_SECRET_KEY,
      remoteIp,
    );

    if (!verification.success) {
      throw new HttpError(400, "turnstile_failed", "Please complete the security check and try again.", {
        codes: verification["error-codes"] || [],
      });
    }

    const contactPayload = {
      name,
      email,
      mobile: optionalString(body.mobile),
      jobTitle: optionalString(body.jobTitle),
      company: optionalString(body.company),
      operationsContext: optionalString(body.operationsContext),
      focusAreas: stringArray(body.focusAreas),
      products: stringArray(body.products),
      receivedAt: new Date().toISOString(),
    };

    console.info("Contact request received", {
      ...contactPayload,
      focusAreas: formatList(contactPayload.focusAreas),
      products: formatList(contactPayload.products),
    });

    return jsonSuccess({
      received: true,
      payload: contactPayload,
    });
  });
