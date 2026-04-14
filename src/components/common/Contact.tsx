import React, { FormEvent, useEffect, useRef, useState } from "react";
import GradientBorderButton from "./GradientBorderButton";

const focusAreas = [
  "AI",
  "Safety",
  "Operations",
  "Emergency",
  "LMS",
  "Maintenance ",
  "Drone (Phase 3)",
  "Compliance (Phase 3)",
  "Wildlife",
  "Security",
];

const products = ["MACH1", "Wordspint", "Crowd Sourcing", "Preventive Pro"];

const CheckboxChip = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="elegant-transition inline-flex min-h-[3rem] w-fit max-w-full cursor-pointer items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-left text-[14px] text-white/90 hover:border-white/20 hover:bg-white/[0.07] lg:text-[15px]">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-transparent text-blue-500 focus:ring-2 focus:ring-blue-400"
    />
    <span className="leading-6">{label}</span>
  </label>
);

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  jobTitle: "",
  company: "",
  operationsContext: "",
};

type TurnstileApi = {
  render: (
    container: HTMLElement | string,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "compact" | "flexible";
      appearance?: "always" | "execute" | "interaction-only";
      execution?: "render" | "execute";
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => string;
  execute: (widgetId: string) => void;
  reset: (widgetId?: string) => void;
};

const Contact = ({ gradient = true }: { gradient?: boolean }) => {
  const turnstileSiteKey =
    import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";
  const isLocalDev =
    typeof window !== "undefined" &&
    ["localhost", "127.0.0.1"].includes(window.location.hostname);
  const formRef = useRef<HTMLFormElement | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const pendingSubmitRef = useRef(false);
  const [form, setForm] = useState(initialForm);
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [captchaToken, setCaptchaToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isLocalDev) {
      setTurnstileReady(true);
      setCaptchaToken("local-dev-bypass");
      return;
    }

    const renderWidget = () => {
      const widgets = window as Window & { turnstile?: TurnstileApi };
      if (!widgets.turnstile || !turnstileContainerRef.current || turnstileWidgetIdRef.current) {
        return;
      }

      turnstileWidgetIdRef.current = widgets.turnstile.render(turnstileContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: "dark",
        size: "flexible",
        appearance: "always",
        execution: "execute",
        callback: (token) => {
          setTurnstileReady(true);
          setCaptchaToken(token);
          if (pendingSubmitRef.current) {
            pendingSubmitRef.current = false;
            formRef.current?.requestSubmit();
          }
        },
        "expired-callback": () => {
          setCaptchaToken("");
        },
        "error-callback": () => {
          setTurnstileReady(false);
          setCaptchaToken("");
          pendingSubmitRef.current = false;
          setStatus("error");
          setErrorMessage(
            "The security check could not load in this browser environment. Try disabling strict browser extensions or reloading the page.",
          );
        },
      });
      setTurnstileReady(true);
    };

    const scriptSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc}"]`);

    if (existingScript) {
      if ((window as Window & { turnstile?: TurnstileApi }).turnstile) {
        renderWidget();
      } else {
        existingScript.addEventListener("load", renderWidget, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.addEventListener("error", () => {
      setTurnstileReady(false);
      setStatus("error");
      setErrorMessage(
        "The security check script was blocked before it could load. This is usually caused by a browser content policy or extension.",
      );
    });
    script.addEventListener("load", renderWidget, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", renderWidget);
    };
  }, [isLocalDev, turnstileSiteKey]);

  const submitContactRequest = async (token: string) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        focusAreas: selectedFocusAreas,
        products: selectedProducts,
        botcheck: "",
        turnstileToken: token,
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.ok) {
      throw new Error(
        result?.error?.message || "We couldn't send the message just now. Please try again.",
      );
    }
  };

  const toggleItem = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setList(list.includes(item) ? list.filter((entry) => entry !== item) : [...list, item]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLocalDev) {
      setStatus("submitting");
      setErrorMessage("");

      try {
        await submitContactRequest("local-dev-bypass");
        setStatus("success");
        setForm(initialForm);
        setSelectedFocusAreas([]);
        setSelectedProducts([]);
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "We couldn't send the message just now. Please try again.",
        );
      }
      return;
    }

    if (!turnstileWidgetIdRef.current || !turnstileReady) {
      setStatus("error");
      setErrorMessage(
        "The security check is unavailable right now. Reload the page or try without strict browser extensions.",
      );
      return;
    }

    if (!captchaToken) {
      const widgets = window as Window & { turnstile?: TurnstileApi };
      if (turnstileWidgetIdRef.current && widgets.turnstile) {
        pendingSubmitRef.current = true;
        widgets.turnstile.execute(turnstileWidgetIdRef.current);
      }
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactRequest(captchaToken);

      setStatus("success");
      setForm(initialForm);
      setSelectedFocusAreas([]);
      setSelectedProducts([]);
      const widgets = window as Window & {
        turnstile?: TurnstileApi;
      };
      setCaptchaToken("");
      setTurnstileReady(true);
      if (turnstileWidgetIdRef.current) {
        widgets.turnstile?.reset(turnstileWidgetIdRef.current);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send the message just now. Please try again.",
      );
      const widgets = window as Window & {
        turnstile?: TurnstileApi;
      };
      setCaptchaToken("");
      if (turnstileWidgetIdRef.current) {
        widgets.turnstile?.reset(turnstileWidgetIdRef.current);
      }
    }
  };

  return (
    <div data-header-tone="light" className="overflow-hidden bg-white pb-20">
      <div className="site-shell mt-36 grid grid-cols-1 gap-14 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="relative pt-6 lg:pt-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden overflow-visible lg:block">
            <img
              src="/assets/home/session8/Mask.png"
              className="relative w-full max-w-none -translate-x-[10%] object-contain opacity-90"
              alt="Decorative contact background"
            />
          </div>

          <div className="motion-fade-up relative max-w-[34rem]">
            <h2 className="title-balanced text-[44px] font-normal text-black lg:text-[62px]">
              Contact Us
            </h2>
            <p className="copy-balanced mt-5 max-w-md text-[17px] text-slate-700">
              Whether you&apos;re optimizing a regional strip or modernizing a major hub, MACH1 is ready to think with you. Book a walkthrough, launch a pilot, or just say hello.
            </p>

            <div className="mt-12 space-y-5">
              {[
                { icon: "/assets/home/session8/1.png", text: "Edmonton, Alberta, Canada" },
                { icon: "/assets/home/session8/2.png", text: "+1 780-803-9856" },
                { icon: "/assets/home/session8/3.png", text: "contact@wavionix.com" },
              ].map((item, index) => (
                <div key={item.text} className={`motion-fade-up flex items-center gap-4 ${index === 1 ? "motion-delay-1" : index === 2 ? "motion-delay-2" : ""}`}>
                  <div className="glass-panel flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#15263F]">
                    <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
                  </div>
                  <span className="text-[16px] font-medium text-slate-900 lg:text-[17px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="motion-fade-up motion-delay-1">
          <div
            className="relative overflow-hidden rounded-[30px] border border-white/10 px-5 py-8 shadow-[0_36px_100px_rgba(2,8,23,0.24)] backdrop-blur-[28px] lg:px-10 lg:py-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(10,25,48,0.84) 0%, rgba(7,16,34,0.92) 100%), url('/assets/home/session8/Frame 198.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/16 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/18" />

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <input type="hidden" name="botcheck" value="" />
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="space-y-2">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter value"
                    className="form-field"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter value"
                    className="form-field"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter value"
                  className="form-field"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="space-y-2">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Enter value"
                    className="form-field"
                    value={form.jobTitle}
                    onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="form-label">Airport / Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter value"
                    className="form-field"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="form-label">Anything we should know about your operation?</label>
                <textarea
                  name="operationsContext"
                  placeholder="Share key context, current challenges, or the outcomes you want."
                  rows={4}
                  className="form-field resize-none"
                  value={form.operationsContext}
                  onChange={(e) => setForm({ ...form, operationsContext: e.target.value })}
                />
              </div>

              <div className="space-y-3">
                <label className="form-label">
                  What areas would you like us to focus on? <span className="text-white/60">(Select all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((label) => (
                    <CheckboxChip
                      key={label}
                      label={label}
                      checked={selectedFocusAreas.includes(label)}
                      onChange={() => toggleItem(label, selectedFocusAreas, setSelectedFocusAreas)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="form-label">Interested in any of these products?</label>
                <div className="flex flex-wrap gap-3">
                  {products.map((label) => (
                    <CheckboxChip
                      key={label}
                      label={label}
                      checked={selectedProducts.includes(label)}
                      onChange={() => toggleItem(label, selectedProducts, setSelectedProducts)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="form-label">Security Check</label>
                <div className="rounded-[22px] border border-white/12 bg-white/[0.05] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  {isLocalDev ? (
                    <p className="text-sm text-white/75">
                      Cloudflare Turnstile is bypassed on localhost for development only.
                    </p>
                  ) : (
                    <div ref={turnstileContainerRef} />
                  )}
                  <p className="mt-3 text-xs text-white/60">
                    {isLocalDev
                      ? "This bypass applies only in local development. Turnstile remains required after deployment."
                      : "Protected by Cloudflare Turnstile to block automated submissions."}
                  </p>
                </div>
              </div>

              {(status === "success" || status === "error") && (
                <p
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                      : "border-rose-400/30 bg-rose-400/10 text-rose-100"
                  }`}
                >
                  {status === "success"
                    ? "Message sent successfully. We will get back to you soon."
                    : errorMessage}
                </p>
              )}

              <div className="pt-3">
                <GradientBorderButton type="submit" className="h-[58px] w-full">
                  <span className="block w-full px-6 text-center text-[16px] font-medium lg:text-[18px]">
                    {status === "submitting" ? "Sending..." : "Request Demo"}
                  </span>
                </GradientBorderButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {gradient && (
          <div className="pointer-events-none absolute left-0 top-36 hidden h-full w-full opacity-60 sm:block">
            <img
              src="/assets/home/session8/Group 354.png"
              className="h-full w-full object-bottom"
              alt="Background gradient"
            />
          </div>
        )}

        <div className="site-shell relative pb-40">
          <div className="motion-fade-up motion-delay-2 relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-tr from-[#0B3A7E] to-[#020B18] px-6 py-12 md:px-12 md:py-16">
            <div className="pointer-events-none absolute right-20 top-1/2 hidden -translate-y-1/2 lg:block">
              <img
                src="/assets/home/session8/4.png"
                alt=""
                className="motion-float"
              />
            </div>

            <div className="relative z-10 max-w-[34rem]">
              <h2 className="title-balanced text-[34px] font-normal text-white md:text-[52px]">
                Make your operations better than ever!
              </h2>
              <p className="copy-balanced mt-5 text-[17px] text-white lg:text-[19px]">
                {`Let's build the future of airport ops together`}
              </p>
              <div className="mt-8 max-w-xs">
                <button className="premium-button-secondary elegant-transition w-full rounded-full px-6 py-4 text-[16px] font-semibold text-black lg:text-[18px]">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
