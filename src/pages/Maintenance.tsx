import { useEffect, useState } from "react";

const Maintenance = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 1000), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--navy-deep))] text-[hsl(var(--text-light))] font-sans">
      {/* Ambient gradient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--glow-blue) / 0.28) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--glow-cyan) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--text-light) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--text-light) / 0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/></svg>\")",
        }}
      />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-12 md:pt-10">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Mach1Wave"
            className="h-9 w-auto md:h-10"
          />
        </div>
        <div className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--text-muted-light))] sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--glow-cyan))] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--glow-cyan))]" />
          </span>
          Status · Maintenance
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center md:px-12">
        {/* Radar */}
        <div className="relative mb-12 h-56 w-56 md:h-72 md:w-72">
          <div className="absolute inset-0 rounded-full border border-[hsl(var(--text-light)/0.12)]" />
          <div className="absolute inset-4 rounded-full border border-[hsl(var(--text-light)/0.10)]" />
          <div className="absolute inset-10 rounded-full border border-[hsl(var(--text-light)/0.08)]" />
          <div className="absolute inset-16 rounded-full border border-[hsl(var(--glow-blue)/0.35)]" />
          {/* Crosshair */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[hsl(var(--text-light)/0.08)]" />
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[hsl(var(--text-light)/0.08)]" />
          </div>
          {/* Sweep */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, hsl(var(--glow-cyan) / 0.45) 30deg, transparent 60deg)",
              animation: "radar-sweep 4s linear infinite",
              maskImage:
                "radial-gradient(circle, black 60%, transparent 100%)",
            }}
          />
          {/* Blips */}
          <span
            className="absolute h-1.5 w-1.5 rounded-full bg-[hsl(var(--glow-cyan))] shadow-[0_0_12px_hsl(var(--glow-cyan))]"
            style={{ top: "28%", left: "62%", animation: "blip 3s ease-in-out infinite" }}
          />
          <span
            className="absolute h-1 w-1 rounded-full bg-[hsl(var(--glow-blue))] shadow-[0_0_10px_hsl(var(--glow-blue))]"
            style={{ top: "68%", left: "34%", animation: "blip 3.6s ease-in-out infinite 0.8s" }}
          />
          {/* Center */}
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--glow-cyan))] shadow-[0_0_28px_hsl(var(--glow-cyan)/0.9)]" />
        </div>

        {/* Label */}
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[hsl(var(--glow-blue)/0.4)] bg-[hsl(var(--glow-blue)/0.08)] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.4em] text-[hsl(var(--glow-cyan))]">
          <span>Flight&nbsp;Ops</span>
          <span className="h-1 w-1 rounded-full bg-[hsl(var(--glow-cyan))]" />
          <span>Grounded{".".repeat((tick % 3) + 1)}</span>
        </div>

        <h1 className="mb-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Preparing for
          <span
            className="ml-3 inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(var(--glow-cyan)) 0%, hsl(var(--glow-blue)) 100%)",
            }}
          >
            takeoff.
          </span>
        </h1>

        <p className="max-w-xl text-balance text-base leading-relaxed text-[hsl(var(--text-muted-light))] md:text-lg">
          Mach1Wave is on a brief maintenance window while we upgrade the
          runway. We&apos;ll be back in the sky shortly — thank you for your
          patience.
        </p>

        {/* Stat row */}
        <div className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-[hsl(var(--text-light)/0.10)] bg-[hsl(var(--text-light)/0.04)]">
          {[
            { label: "Status", value: "In Progress" },
            { label: "Window", value: "< 2 hrs" },
            { label: "Check back", value: "Soon" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[hsl(var(--navy-deep))] px-4 py-5 text-left"
            >
              <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[hsl(var(--text-muted-light))]">
                {s.label}
              </div>
              <div className="font-display text-lg font-semibold md:text-xl">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 flex flex-col items-center gap-3 text-sm text-[hsl(var(--text-muted-light))] sm:flex-row">
          <span>Urgent?</span>
          <a
            href="mailto:hello@mach1wave.com"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium text-white shadow-[0_0_30px_hsl(var(--glow-blue)/0.4)] transition-all hover:shadow-[0_0_40px_hsl(var(--glow-blue)/0.7)]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(var(--glow-cyan)) 0%, hsl(var(--glow-blue)) 100%)",
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
      <footer className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-[hsl(var(--text-light)/0.08)] px-6 py-5 text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--text-muted-light))] md:flex-row md:px-12">
        <span>© Mach1Wave · All systems monitored</span>
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
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default Maintenance;
