import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blogApi } from "@/lib/api/blog";
import ScrollResetLink from "./ScrollResetLink";

interface HeaderProps {
  variant?: "dark" | "light";
  inside?: boolean;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Solutions", href: "/solutions" },
  { name: "Consultant", href: "/consultant" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function formatUserName(email: string) {
  const localPart = email.split("@")[0] || email;
  return localPart
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const Header = ({ variant = "dark", inside }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [tone, setTone] = useState<"dark" | "light">(variant === "dark" ? "dark" : "light");
  const location = useLocation();
  const queryClient = useQueryClient();
  const meQuery = useQuery({
    queryKey: ["admin-me"],
    queryFn: blogApi.me,
    staleTime: 60_000,
  });
  const logoutMutation = useMutation({
    mutationFn: blogApi.logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin-me"] });
      await queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      setIsMenuOpen(false);
    },
  });

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let idleTimeout = 0;

    const updateHeaderState = () => {
      const nextScrollY = window.scrollY;
      setScrollY(nextScrollY);

      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-header-tone]"));
      if (!sections.length) {
        setTone(variant === "dark" ? "dark" : "light");
      } else {
        const probe = 110;
        const activeSection =
          sections.find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= probe && rect.bottom >= probe;
          }) ||
          sections.find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0;
          }) ||
          sections[sections.length - 1];

        setTone((activeSection.dataset.headerTone as "dark" | "light") || "dark");
      }

      if (nextScrollY <= 24 || nextScrollY < previousScrollY) {
        setIsVisible(true);
      } else if (nextScrollY > previousScrollY + 6) {
        setIsVisible(false);
      }

      window.clearTimeout(idleTimeout);
      idleTimeout = window.setTimeout(() => {
        setIsVisible(true);
      }, 180);

      previousScrollY = nextScrollY;
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);
    return () => {
      window.clearTimeout(idleTimeout);
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [location.pathname, variant]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const compact = scrollY > 28;
  const progress = Math.min(Math.max((scrollY - 8) / 110, 0), 1);
  const useSolidLightHeader = !compact && tone === "light";
  const isBlogRoute = location.pathname === "/blog" || location.pathname.startsWith("/blog/");

  const outerStyle = useMemo(
    () => ({
      transform: compact ? `translateY(${progress * -2}px) scale(${1 - progress * 0.01})` : "none",
    }),
    [compact, progress],
  );

  const topTextColor = tone === "dark" ? "text-white" : "text-slate-950";
  const user = meQuery.data?.user;
  const dashboardLabel = user?.role === "admin" ? "Admin Dashboard" : "Author Dashboard";
  const userName = user ? formatUserName(user.email) : "";
  const logoWrapClass = compact ? "px-1 py-1" : "px-0 py-0";
  const logoImageClass = compact
    ? tone === "dark" && !isBlogRoute
      ? "h-8 w-[5.5rem] brightness-0 invert drop-shadow-[0_8px_18px_rgba(255,255,255,0.14)]"
      : "h-8 w-[5.5rem] drop-shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
    : "h-9 w-24";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] pt-4 transition-transform duration-300 ${isVisible || isMenuOpen ? "translate-y-0" : "-translate-y-[120%]"}`}
    >
      <div className="site-shell">
        <div
          className={`elegant-transition relative ${
            compact
              ? "-mx-1 glass-surface overflow-hidden rounded-[50px] px-5 py-3 md:-mx-2 md:px-7"
              : useSolidLightHeader
                ? "rounded-[32px] border border-slate-900/8 bg-white/92 px-5 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-7"
              : "px-0 py-2"
          }`}
          style={outerStyle}
        >
          {compact && inside && (
            <img
              src="/assets/solutions/session1/gr.png"
              alt=""
              className="pointer-events-none absolute inset-x-0 top-0 w-full opacity-45"
            />
          )}

          {compact && (
            <>
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-10 top-1/2 h-16 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl" />
              <div className="pointer-events-none absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </>
          )}

          <nav className="relative z-10 grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <ScrollResetLink
              to="/"
              className={`elegant-transition flex shrink-0 items-center justify-self-start ${logoWrapClass}`}
            >
              <img
                src="/assets/logo.png"
                alt="Mach1 logo"
                className={`elegant-transition object-contain ${logoImageClass}`}
              />
            </ScrollResetLink>

            <div className="hidden justify-center md:flex">
              {compact ? (
                <div className="inline-flex items-center gap-1 rounded-full border border-white/22 bg-[linear-gradient(180deg,rgb(168_174_185_/_76%),rgb(84_129_205_/_56%))] px-2 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;

                    return (
                    <ScrollResetLink
                      key={link.name}
                      to={link.href}
                      className={`elegant-transition rounded-full px-4 py-2 text-[14px] font-semibold ${
                        isActive
                          ? "bg-[#1763FA] text-white shadow-[0_10px_24px_rgba(23,99,250,0.28)]"
                          : "text-white hover:bg-white/[0.1]"
                      }`}
                    >
                        {link.name}
                      </ScrollResetLink>
                    );
                  })}
                </div>
              ) : (
                <div className={`inline-flex items-center gap-8 ${topTextColor}`}>
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;

                    return (
                      <ScrollResetLink
                        key={link.name}
                        to={link.href}
                        className={`elegant-transition text-[15px] font-semibold ${
                          isActive ? "text-[#1763FA]" : `${topTextColor} hover:text-[#1763FA]`
                        }`}
                      >
                        {link.name}
                      </ScrollResetLink>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="hidden justify-self-end md:flex">
              <div className="flex items-center gap-3">
                {user ? (
                  <div
                    className={`flex items-center gap-3 rounded-full border px-3 py-2 ${
                      compact
                        ? "border-white/16 bg-white/[0.08] text-white"
                        : tone === "dark"
                          ? "border-white/12 bg-white/[0.05] text-white"
                          : "border-slate-900/10 bg-white/75 text-slate-950"
                    }`}
                  >
                    <div className="px-2">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">{user.role}</p>
                      <p className={`text-sm font-semibold ${compact || tone === "dark" ? "text-white" : "text-slate-950"}`}>{userName}</p>
                    </div>
                    <ScrollResetLink
                      to="/admin"
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        compact || tone === "dark"
                          ? "bg-white/10 text-white hover:bg-white/16"
                          : "bg-slate-950 text-white hover:bg-slate-800"
                      }`}
                    >
                      {dashboardLabel}
                    </ScrollResetLink>
                    <button
                      type="button"
                      onClick={() => logoutMutation.mutate()}
                      disabled={logoutMutation.isPending}
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        compact || tone === "dark"
                          ? "text-white/78 hover:bg-white/8"
                          : "text-slate-700 hover:bg-slate-950/5"
                      }`}
                    >
                      {logoutMutation.isPending ? "Signing Out..." : "Sign Out"}
                    </button>
                  </div>
                ) : null}

                <ScrollResetLink
                  to="/contact"
                  className={`elegant-transition inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold ${
                    compact
                      ? "premium-button border border-slate-950/10 text-white"
                      : tone === "dark"
                        ? "premium-button text-white"
                        : "premium-button-secondary text-slate-950"
                  }`}
                >
                  Request Demo
                </ScrollResetLink>
              </div>
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`elegant-transition inline-flex justify-self-end rounded-full p-2.5 md:hidden ${
                compact
                  ? "border border-white/18 bg-white/[0.12] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]"
                  : `${topTextColor} border ${tone === "dark" ? "border-white/18 bg-white/[0.08]" : "border-slate-950/10 bg-white/70"}`
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {isMenuOpen && (
            <div className={`motion-fade-up relative z-10 mt-4 rounded-[24px] p-4 md:hidden ${compact ? "glass-surface" : tone === "dark" ? "border border-white/10 bg-[rgba(6,14,29,0.92)] text-white" : "border border-slate-900/8 bg-white/92 text-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl"}`}>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;

                  return (
                    <ScrollResetLink
                      key={link.name}
                      to={link.href}
                      className={`elegant-transition rounded-2xl px-4 py-3 text-[16px] font-medium ${
                        isActive
                          ? "bg-white text-slate-950"
                          : compact || tone === "dark"
                            ? "text-white/82 hover:bg-white/[0.08]"
                            : "text-slate-900 hover:bg-slate-950/5"
                      }`}
                    >
                      {link.name}
                    </ScrollResetLink>
                  );
                })}
              </div>

              {user ? (
                <div className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">{user.role}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{userName}</p>
                  <p className="mt-1 text-sm text-white/58">{user.email}</p>
                  <div className="mt-4 grid gap-2">
                    <ScrollResetLink
                      to="/admin"
                      className="rounded-2xl bg-white px-4 py-3 text-center text-[15px] font-semibold text-slate-950"
                    >
                      {dashboardLabel}
                    </ScrollResetLink>
                    <button
                      type="button"
                      onClick={() => logoutMutation.mutate()}
                      disabled={logoutMutation.isPending}
                      className="rounded-2xl border border-white/12 px-4 py-3 text-[15px] font-medium text-white/82"
                    >
                      {logoutMutation.isPending ? "Signing Out..." : "Sign Out"}
                    </button>
                  </div>
                </div>
              ) : null}

              <ScrollResetLink
                to="/contact"
                className="premium-button elegant-transition mt-4 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Request Demo
              </ScrollResetLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
