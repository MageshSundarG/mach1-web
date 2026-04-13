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
  botcheck?: string;
  turnstileToken: string;
}

interface TurnstileVerificationResult {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
}

interface BrevoEmailResponse {
  messageId?: string;
  code?: string;
  message?: string;
}

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

const formatList = (values: string[]) => (values.length ? values.join(", ") : "None selected");

const requireString = (value: unknown, field: string) => {
  if (typeof value !== "string" || !value.trim()) {
    throw new HttpError(400, "invalid_request", `${field} is required.`);
  }

  return value.trim();
};

const optionalString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const stringArray = (value: unknown) =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0) : [];

async function sendBrevoEmail(
  env: Env,
  payload: {
    name: string;
    email: string;
    mobile: string;
    jobTitle: string;
    company: string;
    operationsContext: string;
    focusAreas: string[];
    products: string[];
    receivedAt: string;
  },
) {
  if (!env.BREVO_API_KEY || !env.CONTACT_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
    throw new HttpError(500, "missing_email_config", "Contact delivery is not configured.");
  }

  const focusAreas = formatList(payload.focusAreas);
  const products = formatList(payload.products);
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Mobile", payload.mobile || "Not provided"],
    ["Job Title", payload.jobTitle || "Not provided"],
    ["Airport / Company", payload.company || "Not provided"],
    ["Focus Areas", focusAreas],
    ["Products", products],
    ["Operations Context", payload.operationsContext || "Not provided"],
    ["Received At", payload.receivedAt],
  ];

  const textContent = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;border:1px solid #dbe3ee;font-weight:600;background:#f7fafc;">${escapeHtml(label)}</td><td style="padding:10px 14px;border:1px solid #dbe3ee;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": env.BREVO_API_KEY,
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: {
        email: env.CONTACT_FROM_EMAIL,
        name: env.CONTACT_FROM_NAME || "MACH1 Website",
      },
      to: [
        {
          email: env.CONTACT_TO_EMAIL,
          ...(env.CONTACT_TO_NAME ? { name: env.CONTACT_TO_NAME } : {}),
        },
      ],
      replyTo: {
        email: payload.email,
        name: payload.name,
      },
      subject: `New MACH1 contact form submission from ${payload.name}`,
      textContent,
      htmlContent: `<!doctype html><html><body style="margin:0;padding:24px;background:#eef4fb;font-family:Arial,sans-serif;color:#0f172a;"><div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dbe3ee;"><div style="padding:24px 28px;background:linear-gradient(135deg,#0f2b4d 0%,#0a6cff 100%);color:#ffffff;"><h1 style="margin:0;font-size:24px;line-height:1.2;">New MACH1 Contact Request</h1><p style="margin:10px 0 0;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.82);">A new inquiry was submitted through the website contact form.</p></div><div style="padding:24px 28px;"><table style="width:100%;border-collapse:collapse;">${htmlRows}</table></div></div></body></html>`,
    }),
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as BrevoEmailResponse | null;
    throw new HttpError(502, "email_delivery_failed", errorBody?.message || "Contact delivery failed.");
  }

  return (await response.json().catch(() => null)) as BrevoEmailResponse | null;
}

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

const isLocalRequest = (request: Request) => {
  const { hostname } = new URL(request.url);
  return LOCAL_HOSTS.has(hostname);
};

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) =>
  withErrorHandling(async () => {
    const localRequest = isLocalRequest(request);

    if (!localRequest && !env.TURNSTILE_SECRET_KEY) {
      throw new HttpError(500, "missing_turnstile_key", "Security verification is not configured.");
    }

    const body = await readJson<ContactRequestBody>(request);
    if (optionalString(body.botcheck)) {
      throw new HttpError(400, "bot_detected", "Spam protection rejected this submission.");
    }

    const name = requireString(body.name, "Name");
    const email = requireString(body.email, "Email");
    if (!localRequest) {
      const turnstileToken = requireString(body.turnstileToken, "Turnstile token");
      const remoteIp =
        request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For");

      const verification = await verifyTurnstileToken(
        turnstileToken,
        env.TURNSTILE_SECRET_KEY as string,
        remoteIp,
      );

      if (!verification.success) {
        throw new HttpError(400, "turnstile_failed", "Please complete the security check and try again.", {
          codes: verification["error-codes"] || [],
        });
      }
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

    const delivery = await sendBrevoEmail(env, contactPayload);

    console.info("Contact request received", {
      ...contactPayload,
      focusAreas: formatList(contactPayload.focusAreas),
      products: formatList(contactPayload.products),
      brevoMessageId: delivery?.messageId || null,
    });

    return jsonSuccess({
      received: true,
      messageId: delivery?.messageId || null,
    });
  });
