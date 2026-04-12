import { useEffect, useState } from "react";

const BRAND_BLUE = "#0071FF";
const BRAND_BLUE_DEEP = "#005BCD";
const BRAND_GREEN = "#90C63D";

const Logo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 123 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="MACH1"
  >
    <title>MACH1</title>
    <path d="M49.4724 0.735474H59.2193L68.6737 24.6449H60.5454L59.3697 21.2984H49.3275L48.1518 24.6449H40.0234L49.4724 0.735474ZM57.382 15.7811L54.3664 7.28357L51.3124 15.7811H57.382Z" fill={BRAND_BLUE} />
    <path d="M81.8805 0C89.678 0 94.2029 3.6035 94.7552 10.004H86.9576C86.3698 7.75929 84.7512 6.58364 81.7711 6.58364C78.02 6.58364 75.9585 8.53303 75.9585 12.2842C75.9585 16.0353 77.9462 18.0585 81.9188 18.0585C85.1204 18.0585 86.7362 16.697 87.1053 13.9383H94.829C94.572 20.8527 90.0116 24.6422 81.8805 24.6422C73.0166 24.6422 68.0488 20.1911 68.0488 12.2842C68.0488 4.37724 73.126 0 81.8805 0Z" fill={BRAND_BLUE} />
    <path d="M97.3271 0.735474H105.051V9.59933H115.276V0.735474H123V24.6449H115.276V16.2212H105.051V24.6449H97.3271V0.735474Z" fill={BRAND_BLUE} />
    <path d="M32.1966 0.445801L32.1528 0.508684L27.8877 6.68495V17.356L31.103 12.8011V12.8503V24.3361H38.7638V0.445801H32.1966Z" fill={BRAND_GREEN} />
    <path d="M23.9668 12.224L23.945 12.2541V0.30896H17.2875L9.0361 12.0272L0 24.336H8.03269L16.2404 12.6177V24.2895H22.8568H22.8978L26.7939 18.7694V8.13113L23.9668 12.224Z" fill={BRAND_BLUE} />
  </svg>
);

const Maintenance = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 1000), 1200);
    return () => clearInterval(id);
  }, []);

  const dots = ".".repeat((tick % 3) + 1);

  return (
    <div
      className="relative min-h-screen overflow-hidden font-sans text-white"
      style={{ background: "#050B18" }}
    >
      {/* Ambient gradient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 38%, ${BRAND_BLUE}33 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 100%, ${BRAND_GREEN}1F 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 10% 0%, ${BRAND_BLUE_DEEP}33 0%, transparent 70%)`,
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 85%)",
        }}
      />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/></svg>\")",
        }}
      />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-12 md:pt-10">
        <Logo className="h-7 w-auto md:h-8" />
        <div className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60 sm:flex">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: BRAND_GREEN }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: BRAND_GREEN }}
            />
          </span>
          Status · Maintenance
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center md:px-12">
        {/* Radar */}
        <div className="relative mb-12 h-56 w-56 md:h-72 md:w-72">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <div className="absolute inset-10 rounded-full border border-white/10" />
          <div
            className="absolute inset-16 rounded-full border"
            style={{ borderColor: `${BRAND_BLUE}66` }}
          />
          {/* Crosshair */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/10" />
          </div>
          {/* Sweep */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${BRAND_BLUE}80 30deg, transparent 60deg)`,
              animation: "radar-sweep 4s linear infinite",
              maskImage:
                "radial-gradient(circle, black 60%, transparent 100%)",
            }}
          />
          {/* Blips */}
          <span
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              background: BRAND_GREEN,
              boxShadow: `0 0 12px ${BRAND_GREEN}`,
              top: "28%",
              left: "62%",
              animation: "blip 3s ease-in-out infinite",
            }}
          />
          <span
            className="absolute h-1 w-1 rounded-full"
            style={{
              background: BRAND_BLUE,
              boxShadow: `0 0 10px ${BRAND_BLUE}`,
              top: "68%",
              left: "34%",
              animation: "blip 3.6s ease-in-out infinite 0.8s",
            }}
          />
          {/* Center */}
          <div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: BRAND_BLUE,
              boxShadow: `0 0 28px ${BRAND_BLUE}E6`,
            }}
          />
        </div>

        {/* Label */}
        <div
          className="mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.4em]"
          style={{
            borderColor: `${BRAND_BLUE}66`,
            background: `${BRAND_BLUE}14`,
            color: "#8FC4FF",
          }}
        >
          <span>Flight&nbsp;Ops</span>
          <span
            className="h-1 w-1 rounded-full"
            style={{ background: BRAND_GREEN }}
          />
          <span style={{ color: BRAND_GREEN }}>Grounded{dots}</span>
        </div>

        <h1 className="mb-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Preparing for
          <span
            className="ml-3 inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_GREEN} 100%)`,
            }}
          >
            takeoff.
          </span>
        </h1>

        <p className="max-w-xl text-balance text-base leading-relaxed text-white/65 md:text-lg">
          MACH1 is on a brief maintenance window while we upgrade the runway.
          We&apos;ll be back in the sky shortly — thank you for your patience.
        </p>

        {/* Stat row */}
        <div
          className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {[
            { label: "Status", value: "In Progress" },
            { label: "Window", value: "< 2 hrs" },
            { label: "Check back", value: "Soon" },
          ].map((s) => (
            <div
              key={s.label}
              className="px-4 py-5 text-left"
              style={{ background: "#050B18" }}
            >
              <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/55">
                {s.label}
              </div>
              <div className="font-display text-lg font-semibold md:text-xl">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 flex flex-col items-center gap-3 text-sm text-white/60 sm:flex-row">
          <span>Urgent?</span>
          <a
            href="mailto:hello@mach1wave.com"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium text-white transition-all"
            style={{
              background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_BLUE_DEEP} 100%)`,
              boxShadow: `0 0 30px ${BRAND_BLUE}66`,
            }}
          >
            hello@mach1wave.com
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 px-6 py-5 text-[11px] uppercase tracking-[0.3em] text-white/50 md:flex-row md:px-12">
        <span>© MACH1 · All systems monitored</span>
        <span className="font-mono normal-case tracking-normal">
          uptime · resuming
        </span>
      </footer>

      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blip {
          0%, 100% { opacity: 0.25; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }
      `}</style>
    </div>
  );
};

export default Maintenance;
