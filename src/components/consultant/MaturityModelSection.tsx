import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const levels = [
  {
    level: "LEVEL 1",
    title: "Manual Operations",
    characteristics: [
      "Paper-based inspections and reports",
      "Email or phone-based incident communication",
      "Spreadsheet-based operational logs",
    ],
    impact:
      "Slow reporting cycles and limited operational visibility.",
  },
  {
    level: "LEVEL 2",
    title: "Digitized but Fragmented Operations",
    characteristics: [
      "Digital reporting tools and forms",
      "Separate systems for safety, maintenance, and operations",
      "Limited operational dashboards",
    ],
    impact:
      "Operational data remains siloed, limiting trend analysis and coordinated decision-making.",
  },
  {
    level: "LEVEL 3",
    title: "Integrated Airport Systems",
    characteristics: [
      "Centralized operational platforms",
      "Integrated safety, maintenance, and inspection workflows",
      "Automated reporting and dashboards",
    ],
    impact:
      "Improved situational awareness and faster cross-department coordination.",
  },
  {
    level: "LEVEL 4",
    title: "Predictive Aviation Intelligence",
    characteristics: [
      "AI-supported hazard detection",
      "Predictive operational analytics",
      "Automated pattern recognition across operational datasets",
    ],
    impact:
      "Early risk detection and proactive operational planning.",
  },
  {
    level: "LEVEL 5",
    title: "Intelligent Airport Operations",
    characteristics: [
      "AI-driven operational insights",
      "Integrated operational command environments",
      "Real-time intelligence across airport systems",
    ],
    impact:
      "Predictive safety management and optimized airport performance.",
  },
];

export default function MaturityModelSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  const mobileProgressLineRef = useRef<HTMLDivElement | null>(null);
  const orbTopRef = useRef<HTMLDivElement | null>(null);
  const orbBottomRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 1024px)", () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        const progressLine = progressLineRef.current;
        const orbTop = orbTopRef.current;
        const orbBottom = orbBottomRef.current;
        const grid = gridRef.current;
        const firstCard = cards[0];
        const lastCard = cards[cards.length - 1];

        if (progressLine && firstCard && lastCard) {
          gsap.fromTo(
            progressLine,
            { scaleY: 0, transformOrigin: "top top" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: firstCard,
                start: "top 64%",
                endTrigger: lastCard,
                end: "center 60%",
                scrub: 1,
              },
            },
          );
        }

        if (grid) {
          gsap.fromTo(
            grid,
            { yPercent: -4 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }

        if (orbTop) {
          gsap.fromTo(
            orbTop,
            { xPercent: -10, yPercent: -6, scale: 0.94 },
            {
              xPercent: 12,
              yPercent: 14,
              scale: 1.08,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
              },
            },
          );
        }

        if (orbBottom) {
          gsap.fromTo(
            orbBottom,
            { xPercent: 12, yPercent: 10, scale: 0.98 },
            {
              xPercent: -8,
              yPercent: -10,
              scale: 1.12,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.15,
              },
            },
          );
        }

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0.35,
              y: 42,
              scale: 0.975,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                end: "top 44%",
                scrub: 0.6,
              },
            },
          );

          gsap.to(card, {
            opacity: 0.48,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "bottom 36%",
              end: "bottom 12%",
              scrub: 0.5,
            },
          });

          const accent = card.querySelector<HTMLElement>("[data-level-accent]");
          if (accent) {
            gsap.fromTo(
              accent,
              { width: "0%" },
              {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 76%",
                  end: "top 42%",
                  scrub: 0.7,
                },
              },
            );
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        const mobileProgressLine = mobileProgressLineRef.current;
        const grid = gridRef.current;
        const firstCard = cards[0];
        const lastCard = cards[cards.length - 1];

        if (mobileProgressLine && firstCard && lastCard) {
          gsap.fromTo(
            mobileProgressLine,
            { scaleY: 0, transformOrigin: "top top" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: firstCard,
                start: "top 78%",
                endTrigger: lastCard,
                end: "center 58%",
                scrub: 0.8,
              },
            },
          );
        }

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0.4, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 58%",
                scrub: 0.45,
              },
            },
          );
        });

        if (grid) {
          gsap.fromTo(
            grid,
            { yPercent: -2 },
            {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }
      });
    }, section);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-header-tone="dark"
      className="relative overflow-hidden bg-[#020817] py-24 text-white"
    >
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />
      <div
        ref={orbTopRef}
        className="pointer-events-none absolute left-[-8%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-[#1763FA]/18 blur-[140px]"
      />
      <div
        ref={orbBottomRef}
        className="pointer-events-none absolute bottom-[-4%] left-[4%] h-[24rem] w-[28rem] rounded-full bg-[#90C63D]/10 blur-[150px]"
      />

      <div className="site-shell relative z-10 py-4 lg:py-12">
        <div className="max-w-4xl">
          <h2 className="title-balanced text-[38px] font-light text-white md:text-[56px]">
            Airport Intelligence{" "}
            <span className="bg-gradient-to-r from-[#7EB4FF] to-[#90C63D] bg-clip-text text-transparent">
              Maturity Model
            </span>
          </h2>
          <p className="copy-balanced mt-5 max-w-3xl text-[15px] text-white/72 md:text-[17px]">
            Airports evolve through stages of operational intelligence. While many organizations
            have digitized some processes, operational data often remains fragmented across systems
            and departments. Wavionix helps airports progress toward integrated and AI-driven
            aviation intelligence environments.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div className="absolute bottom-6 left-[6.15rem] top-2 hidden w-px bg-white/20 lg:block" />
          <div
            ref={progressLineRef}
            className="absolute bottom-6 left-[6.15rem] top-2 hidden w-px origin-top bg-[linear-gradient(180deg,#B7D5FF_0%,#1763FA_58%,#90C63D_100%)] shadow-[0_0_18px_rgba(23,99,250,0.34)] lg:block"
          />
          <div className="absolute bottom-6 left-[1.3rem] top-2 w-px bg-white/16 lg:hidden" />
          <div
            ref={mobileProgressLineRef}
            className="absolute bottom-6 left-[1.3rem] top-2 w-px origin-top bg-[linear-gradient(180deg,#B7D5FF_0%,#1763FA_58%,#90C63D_100%)] shadow-[0_0_18px_rgba(23,99,250,0.34)] lg:hidden"
          />

          <div className="space-y-6 lg:space-y-5">
            {levels.map((item, index) => (
              <div
                key={item.level}
                className="grid grid-cols-[2.8rem_minmax(0,1fr)] gap-3 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-14"
              >
                <div className="relative flex">
                  <p className="pt-1 text-[11px] font-semibold tracking-[0.16em] text-[#5C8FFF] lg:text-[14px] lg:tracking-[0.18em]">
                    {item.level}
                  </p>
                  <span className="absolute left-[0.95rem] top-2.5 h-3 w-3 rounded-full border border-white/28 bg-[#B7D5FF]/90 shadow-[0_0_16px_rgba(126,180,255,0.28)] lg:left-[5.9rem] lg:top-2" />
                  <span className="absolute left-[1.72rem] top-[1.1rem] h-px w-3 bg-white/26 lg:left-[3.75rem] lg:top-[0.95rem] lg:w-9" />
                </div>

                <div
                  ref={(node) => {
                    cardsRef.current[index] = node;
                  }}
                  className="premium-card elegant-transition rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,22,43,0.78),rgba(7,16,34,0.6))] px-6 py-6 shadow-[0_20px_50px_rgba(2,8,23,0.18)] lg:px-8"
                >
                  <div className="lg:hidden">
                    <p className="text-[12px] font-semibold tracking-[0.18em] text-[#5C8FFF]">
                      {item.level}
                    </p>
                  </div>
                  <h3 className="mt-2 text-[28px] font-light leading-[1.08] text-white lg:mt-0 lg:text-[42px]">
                    {item.title}
                  </h3>
                  <div className="mt-4 h-px w-full overflow-hidden rounded-full bg-white/12">
                    <div
                      data-level-accent
                      className="h-full w-0 bg-[linear-gradient(90deg,#B7D5FF_0%,#1763FA_55%,#90C63D_100%)]"
                    />
                  </div>

                  <div className="mt-4 lg:mt-5">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/90">
                      Typical Characteristics
                    </p>
                    <ul className="mt-3 space-y-1.5 text-[14px] text-white/74 lg:text-[15px]">
                      {item.characteristics.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EB4FF]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-white/12 pt-4">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/90">
                      Impact
                    </p>
                    <p className="copy-balanced mt-2 text-[14px] text-white/74 lg:text-[15px]">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
