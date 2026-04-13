import { useEffect, useMemo, useRef, useState } from "react";

const milestones = [
  {
    period: "2013-2014",
    description:
      "Entered aviation; early fieldwork revealed technology and knowledge gaps.",
  },
  {
    period: "2014-2016",
    description:
      "Built core operational, safety, and emergency expertise in challenging environments.",
  },
  {
    period: "2019-2020",
    description:
      "The concept for MACH1 is introduced as a unified platform for airport operations and safety.",
  },
  {
    period: "2020-2021",
    description:
      "Frontline validation across Canada; Ascend Technologies launched.",
  },
  {
    period: "2020-2024",
    description:
      "Platform proven through real-world events and evolution into AI-driven systems.",
  },
  {
    period: "2025-Present",
    description:
      "MACH1 in live testing with global data expansion and active adoption.",
  },
];

export default function ResponsiveTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const mobileItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const orbitShift = `${(progress - 0.5) * 72}px`;
  const ambientOpacity = 0.24 + progress * 0.28;
  const scanOpacity = isDesktop ? 0.16 + progress * 0.2 : 0.18;
  const nodeScale = 0.92 + progress * 0.16;
  const nodes = [
    { top: "16%", left: "10%", size: 7, delay: "0s" },
    { top: "24%", left: "22%", size: 5, delay: "0.6s" },
    { top: "18%", right: "12%", size: 6, delay: "1.1s" },
    { top: "48%", left: "14%", size: 5, delay: "1.8s" },
    { top: "54%", right: "18%", size: 7, delay: "0.9s" },
    { top: "72%", left: "24%", size: 6, delay: "1.4s" },
    { top: "76%", right: "10%", size: 5, delay: "2s" },
  ] as const;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const syncViewport = () => {
      setIsDesktop(media.matches);
    };

    syncViewport();
    media.addEventListener("change", syncViewport);

    const updateProgress = () => {
      const element = timelineRef.current;
      if (!element) {
        setProgress(0);
        return;
      }

      if (!media.matches) {
        const items = mobileItemRefs.current.filter(Boolean) as HTMLDivElement[];
        if (!items.length) {
          setProgress(0);
          return;
        }

        const first = items[0].getBoundingClientRect();
        const last = items[items.length - 1].getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const start = viewportHeight * 0.74;
        const total = Math.max(last.top - first.top, 1);
        const consumed = Math.min(Math.max(start - first.top, 0), total);
        setProgress(consumed / total);
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = Math.max(rect.height - viewportHeight, 1);
      const consumed = Math.min(Math.max(-rect.top, 0), total);
      setProgress(consumed / total);
    };

    let timeoutId: number | undefined;
    let rafId1 = 0;
    let rafId2 = 0;

    const scheduleProgressSync = () => {
      rafId1 = window.requestAnimationFrame(() => {
        rafId2 = window.requestAnimationFrame(updateProgress);
      });

      timeoutId = window.setTimeout(updateProgress, 220);
    };

    updateProgress();
    scheduleProgressSync();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("load", updateProgress);
    return () => {
      media.removeEventListener("change", syncViewport);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("load", updateProgress);
      window.cancelAnimationFrame(rafId1);
      window.cancelAnimationFrame(rafId2);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const activeIndex = useMemo(
    () =>
      Math.min(
        milestones.length - 1,
        isDesktop ? Math.floor(progress * milestones.length + 0.35) : Math.floor(progress * milestones.length + 0.18),
      ),
    [isDesktop, progress],
  );

  return (
    <div ref={timelineRef} className="relative lg:min-h-[300vh]">
      <div className="lg:sticky lg:top-[5.75rem]">
        <div className="relative flex flex-col items-stretch overflow-hidden px-2 py-2 md:px-4 lg:min-h-[calc(100vh-7.5rem)] lg:flex-row lg:items-center lg:px-6 lg:py-6">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              opacity: 0.09 + progress * 0.07,
              transform: `translate3d(0, ${orbitShift}, 0)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-[-8%] top-[-18%] h-[52%] rounded-full blur-3xl"
            style={{
              opacity: ambientOpacity,
              background:
                "radial-gradient(circle at center, rgba(23,99,250,0.34) 0%, rgba(23,99,250,0.12) 34%, transparent 70%)",
              transform: `translate3d(${orbitShift}, 0, 0) scale(${1 + progress * 0.08})`,
            }}
          />
          <div
            className="pointer-events-none absolute bottom-[-18%] right-[-4%] h-[48%] w-[46%] rounded-full blur-3xl"
            style={{
              opacity: 0.12 + progress * 0.22,
              background:
                "radial-gradient(circle at center, rgba(144,198,61,0.28) 0%, rgba(144,198,61,0.1) 32%, transparent 72%)",
              transform: `translate3d(calc(${orbitShift} * -0.45), ${-18 + progress * 24}px, 0)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 w-[42%] -translate-x-1/2 blur-2xl"
            style={{
              opacity: scanOpacity,
              background:
                "linear-gradient(180deg, transparent 0%, rgba(130,182,255,0.18) 22%, rgba(255,255,255,0.08) 50%, rgba(130,182,255,0.18) 78%, transparent 100%)",
              transform: `translateY(${(progress - 0.5) * 40}px)`,
            }}
          />
          <div className="pointer-events-none absolute inset-x-12 top-10 h-28 rounded-full bg-[#1763FA]/12 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-[9.55rem] hidden h-px w-[82%] -translate-x-1/2 bg-white/10 lg:block" />
          {nodes.map((node, index) => (
            <span
              key={`${node.top}-${index}`}
              className="pointer-events-none absolute rounded-full bg-[#B7D5FF] motion-pulse-dot"
              style={{
                ...node,
                width: `${node.size}px`,
                height: `${node.size}px`,
                opacity: 0.32 + progress * 0.34,
                animationDelay: node.delay,
                transform: `scale(${nodeScale})`,
                boxShadow: "0 0 22px rgba(126,180,255,0.34)",
              }}
            />
          ))}

          <div className="relative z-10 flex w-full flex-col">
            <div className="mb-8 text-center min-[720px]:hidden">
              <h1 className="title-balanced mx-auto max-w-[18rem] text-[34px] font-regular text-white">
                A Timeline of{" "}
                <span className="bg-gradient-to-r from-[#1763FA] to-[#90C63D] bg-clip-text text-transparent">
                  Purpose
                </span>
              </h1>
            </div>

            <div className="mb-8 hidden text-center min-[720px]:block lg:mb-10 lg:text-left">
              <h1 className="title-balanced mx-auto max-w-[16rem] text-[36px] font-regular text-white sm:max-w-none lg:mx-0 lg:text-[56px]">
                A Timeline of{" "}
                <span className="font-normal bg-gradient-to-r from-[#1763FA] to-[#90C63D] bg-clip-text text-transparent">
                  Purpose
                </span>
              </h1>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-6 gap-4">
                {milestones.map((milestone, index) => {
                  const isActive = index <= activeIndex;

                  return (
                    <div key={milestone.period} className="relative">
                      <div
                        className="elegant-transition mb-10 text-center"
                        style={{
                          opacity: isActive ? 1 : 0.38,
                          transform: `translateY(${isActive ? 0 : 10}px)`,
                        }}
                      >
                        <p className={`text-[19px] font-semibold tracking-[0.01em] ${isActive ? "text-[#B7D5FF]" : "text-white/80"}`}>
                          {milestone.period}
                        </p>
                      </div>

                      <div className="relative flex h-20 items-center justify-center">
                        <div className="absolute left-1/2 top-0 h-20 -translate-x-1/2 border-l border-dashed border-white/16" />
                        <div
                          className={`elegant-transition relative z-10 h-4 w-4 rounded-full ${
                            isActive
                              ? "bg-white shadow-[0_0_0_8px_rgba(126,180,255,0.12),0_0_26px_rgba(126,180,255,0.38)]"
                              : "bg-white/14"
                          }`}
                        />
                      </div>

                      <div
                        className="elegant-transition mx-auto mt-10 min-h-[10.5rem] max-w-[12.25rem] rounded-[26px] border px-4 py-4"
                        style={{
                          borderColor: isActive ? "rgba(126,180,255,0.24)" : "rgba(255,255,255,0.08)",
                          background: isActive
                            ? "linear-gradient(180deg, rgba(15,42,84,0.78), rgba(5,14,30,0.92))"
                            : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                          transform: `translateY(${isActive ? 0 : 16}px)`,
                          opacity: isActive ? 1 : 0.62,
                        }}
                      >
                        <p className="copy-balanced text-[14px] text-white">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute left-1/2 top-[9.5rem] h-[2px] w-[82%] -translate-x-1/2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#B7D5FF_0%,#1763FA_55%,#90C63D_100%)] shadow-[0_0_18px_rgba(23,99,250,0.35)]"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-2 flex w-full flex-col min-[720px]:mt-0 lg:hidden">
            <div className="pointer-events-none absolute bottom-4 left-[1.05rem] top-2 w-px bg-white/14" />
            <div
              className="pointer-events-none absolute left-[1.05rem] top-2 w-px origin-top bg-[linear-gradient(180deg,#B7D5FF_0%,#1763FA_58%,#90C63D_100%)] shadow-[0_0_18px_rgba(23,99,250,0.34)]"
              style={{ height: `calc((100% - 1.5rem) * ${progress})` }}
            />
            <div className="space-y-4">
              {milestones.map((milestone, index) => {
                const isActive = index <= activeIndex;

                return (
                  <div
                    key={milestone.period}
                    ref={(node) => {
                      mobileItemRefs.current[index] = node;
                    }}
                    className="elegant-transition relative pl-10"
                    style={{
                      opacity: isActive ? 1 : 0.64,
                      transform: `translateY(${isActive ? 0 : 10}px)`,
                    }}
                  >
                    <span
                      className={`absolute left-[0.6rem] top-7 z-10 h-4 w-4 rounded-full border ${
                        isActive
                          ? "border-[#B7D5FF]/60 bg-white shadow-[0_0_0_8px_rgba(126,180,255,0.1),0_0_22px_rgba(126,180,255,0.28)]"
                          : "border-white/18 bg-[#071220]"
                      }`}
                    />
                    <div
                      className="rounded-[24px] border px-5 py-5"
                      style={{
                        borderColor: isActive ? "rgba(126,180,255,0.24)" : "rgba(255,255,255,0.08)",
                        background: isActive
                          ? "linear-gradient(180deg, rgba(15,42,84,0.78), rgba(5,14,30,0.92))"
                          : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                      }}
                    >
                      <p className={`text-[18px] font-semibold ${isActive ? "text-[#B7D5FF]" : "text-white"}`}>
                        {milestone.period}
                      </p>
                      <p className="copy-balanced mt-3 text-[14px] text-white">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
