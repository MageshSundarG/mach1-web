import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import Faq from "@/components/common/Faq";
import GradientBorderButton from "@/components/common/GradientBorderButton";
import Header from "@/components/common/Header";
import MaturityModelSection from "@/components/consultant/MaturityModelSection";

const stats = [
  {
    value: "44+",
    label: "Airports",
    description:
      "Supporting airport operators across North America with operational modernization, aviation systems, and digital strategy.",
  },
  {
    value: "120+",
    label: "Years",
    description:
      "Combined aviation and technical leadership experience across operations, safety, infrastructure, and platform delivery.",
  },
  {
    value: "25+",
    label: "Specialists",
    description:
      "Engineers, aviation professionals, AI strategists, and cloud architects working together on real airport outcomes.",
  },
  {
    value: "98%",
    label: "AI Accuracy",
    description:
      "Machine-learning models designed for operational intelligence, predictive decision support, and aviation situational awareness.",
  },
];

const domains = [
  {
    title: "AI & Aviation Intelligence Systems",
    description:
      "AI for airports and operational decision support, turning inspection, incident, wildlife, and safety data into practical intelligence for airside teams and leadership.",
    capabilities: [
      "Advanced hazard and incident categorization",
      "Predictive safety analytics and trend detection",
      "AI-powered operational dashboards",
      "Decision support for frontline and executive teams",
    ],
    note: "These capabilities power the MACH1 aviation intelligence platform.",
  },
  {
    title: "Airport Digital Transformation",
    description:
      "Many airports still run on fragmented tools, spreadsheets, and manual reporting systems. We help aviation organizations modernize around digital operations.",
    capabilities: [
      "Legacy tool and workflow assessment",
      "Digital roadmap workshops",
      "Operational data consolidation",
      "Executive transformation planning",
    ],
  },
  {
    title: "Systems Architecture & Cloud Infrastructure",
    description:
      "Modern aviation systems require secure, resilient, highly interoperable technology stacks built for operational continuity and long-term scale.",
    capabilities: [
      "Cloud architecture across AWS, Azure, and Google Cloud",
      "Aviation software system design",
      "Operational data governance and integration",
      "Cyber-conscious cloud configuration",
      "Edge infrastructure for airport field operations",
    ],
  },
  {
    title: "Aviation Training & Workforce Development",
    description:
      "Technology transformation works best when operational teams are trained, confident, and equipped to adopt new digital practices in the field.",
    capabilities: [
      "Field technology familiarization for airport teams",
      "Human factors and workflow training",
      "Strategic AI literacy for operations leaders",
      "Change-management support for OCC environments",
      "Digital adoption coaching for frontline users",
    ],
  },
  {
    title: "Aviation Safety & Regulatory Programs",
    description:
      "We support aviation organizations in building structured safety programs, operating models, and governance aligned with modern regulatory expectations.",
    capabilities: [
      "Safety Management System implementation",
      "Hazard identification frameworks",
      "ICAO, FAA, and TC-aligned documentation support",
      "Risk registers and governance structures",
    ],
  },
  {
    title: "Airport Operations & Infrastructure Advisory",
    description:
      "Strategic guidance supporting airport operations, airside safety, infrastructure readiness, and long-range modernization planning.",
    capabilities: [
      "Airside operations planning",
      "Terminal and apron optimization",
      "Emergency exercise planning",
      "Infrastructure readiness and phased modernization",
    ],
  },
];

const implementationSteps = [
  "Integrated safety systems",
  "Operational intelligence dashboards",
  "Predictive risk analytics",
  "Automated operational workflows",
];

const implementationCards = [
  {
    title: "Strategic Advisory",
    description:
      "Executive guidance on aviation digital transformation and AI adoption.",
  },
  {
    title: "Program Delivery",
    description:
      "Hands-on implementation of safety programs and operational improvements.",
  },
  {
    title: "Technology Integration",
    description:
      "Deployment of aviation intelligence platforms and analytics environments.",
  },
];

function Consultant() {
  return (
    <>
      <Header variant="dark" />

      <section
        data-header-tone="dark"
        className="relative overflow-hidden bg-[#020817] pb-28 pt-32 text-white"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(23,99,250,0.18),transparent_58%)]" />
        <div className="pointer-events-none absolute left-1/2 top-48 h-[22rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#1763FA]/12 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[18rem] w-[80rem] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(23,99,250,0)_0%,rgba(23,99,250,0.18)_100%)]" />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl">
            <h1 className="title-balanced max-w-3xl text-[40px] font-light text-white md:text-[58px] lg:text-[72px]">
              AI-Driven Aviation Intelligence &{" "}
              <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
                Operations Module
              </span>
            </h1>

            <p className="copy-balanced mt-6 max-w-3xl text-[15px] text-white/72 md:text-[17px]">
              Helping aviation organizations modernize operations and decision-making through AI-powered
              aviation systems and intelligent digital architecture. Wavionix combines deep airport
              operational experience with advanced engineering and artificial intelligence expertise to
              move teams from fragmented manual systems to scalable, predictive digital operations.
            </p>

            <div className="mt-8">
              <GradientBorderButton className="h-[48px]">
                <span className="px-8 py-3 text-[14px] font-medium">Explore Advisory Services</span>
              </GradientBorderButton>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="premium-card hover-lift relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,34,63,0.92),rgba(13,27,52,0.82))] p-6 shadow-[0_18px_40px_rgba(2,8,23,0.2)]"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(183,213,255,0.18),transparent_62%)]" />
                <p className="text-[34px] font-light leading-none text-[#B7D5FF]">{stat.value}</p>
                <p className="mt-2 text-[22px] font-light text-white">{stat.label}</p>
                <p className="copy-balanced mt-4 max-w-[18rem] text-[13px] text-white/68">
                  {stat.description}
                </p>
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#2E7DFF]/40 bg-[#0B2F66]/70 text-[#7EB4FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <span className="text-lg">✦</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-header-tone="light" className="relative bg-white pb-28 pt-24 text-[#020817]">
        <div className="absolute left-1/2 top-0 z-10 w-full -translate-x-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1440 180"
            fill="none"
          >
            <path
              d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="site-shell relative z-20 pt-12">
          <div className="text-center">
            <h2 className="title-balanced text-[38px] font-normal text-[#1A1A1A] md:text-[56px]">
              Advisory Domains
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {domains.map((domain, index) => (
              <article
                key={domain.title}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="premium-card hover-lift relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,27,52,0.98),rgba(18,39,72,0.92))] p-6 text-white shadow-[0_24px_60px_rgba(2,8,23,0.18)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(144,198,61,0.12),transparent_38%),radial-gradient(circle_at_top_left,rgba(23,99,250,0.16),transparent_34%)]" />
                <div className="relative z-10">
                  <h3 className="text-[24px] font-light leading-[1.12] text-[#9EC7FF]">
                    {domain.title}
                  </h3>
                  <p className="copy-balanced mt-4 text-[14px] text-white/74">
                    {domain.description}
                  </p>

                  <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
                    Capabilities
                  </p>
                  <ul className="mt-4 space-y-2.5 text-[14px] text-white/82">
                    {domain.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2">
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EB4FF]" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>

                  {domain.note && (
                    <p className="copy-balanced mt-6 text-[13px] text-white/60">{domain.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MaturityModelSection />

      <section data-header-tone="light" className="relative bg-white pb-24 pt-20 text-[#020817]">
        <div className="absolute left-1/2 top-0 z-10 w-full -translate-x-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1440 180"
            fill="none"
          >
            <path
              d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="site-shell relative z-20 pt-10">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4">
              <span className="mt-1 block h-16 w-1 rounded-full bg-[#2D7DFF]" />
              <div>
                <h2 className="title-balanced text-[32px] font-light text-[#222] md:text-[48px]">
                  FROM ADVISORY {"->"} IMPLEMENTATION
                </h2>
                <p className="copy-balanced mt-5 text-[15px] text-slate-600 md:text-[17px]">
                  Many advisory engagements evolve into full deployment through the MACH1 Aviation
                  Intelligence Platform. This allows airports to operationalize advisory insights
                  through:
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            {implementationSteps.map((step, index) => (
              <div
                key={step}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="rounded-[12px] border border-slate-200 bg-[#EFF4FC] px-5 py-4 text-[15px] font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
              >
                {step}
              </div>
            ))}
          </div>

          <p className="copy-balanced mt-8 text-[15px] text-slate-600 md:text-[16px]">
            The result is connected airport ecosystems where operational data becomes actionable
            intelligence.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {implementationCards.map((card, index) => (
              <article
                key={card.title}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="premium-card hover-lift relative overflow-hidden rounded-[18px] border border-white/12 bg-[linear-gradient(180deg,rgba(13,27,52,0.98),rgba(18,39,72,0.92))] p-6 text-white shadow-[0_24px_60px_rgba(2,8,23,0.16)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,180,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(144,198,61,0.1),transparent_42%)]" />
                <div className="relative z-10">
                  <h3 className="text-[28px] font-light leading-[1.02] text-[#8EB8FF]">
                    {card.title.split(" ").map((word, idx) => (
                      <span key={`${word}-${idx}`} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>
                  <p className="copy-balanced mt-4 text-[15px] text-white/72">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-header-tone="dark" className="relative overflow-hidden bg-[#020817] pb-24 pt-20 text-white">
        <div className="site-shell">
          <div className="premium-card relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,26,48,0.98),rgba(7,16,34,0.92))] px-6 py-8 shadow-[0_30px_90px_rgba(2,8,23,0.24)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute left-[-6%] top-1/2 h-36 w-56 -translate-y-1/2 bg-[radial-gradient(circle_at_left,rgba(192,229,106,0.42),transparent_70%)] blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,180,255,0.14),transparent_28%)]" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="relative flex min-h-[16rem] items-center justify-center">
                <div className="absolute h-48 w-48 rounded-full border border-[#2E7DFF]/20 bg-[#0A2347]/70" />
                <div className="absolute h-40 w-40 rounded-full border border-[#2E7DFF]/20" />
                <div className="absolute h-56 w-56 rounded-full border border-[#2E7DFF]/12" />
                <div className="relative flex flex-col items-center gap-1">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-20 rounded-[10px] border border-[#5B92FF]/24 bg-[linear-gradient(180deg,rgba(40,113,255,0.42),rgba(22,59,124,0.9))] shadow-[0_12px_22px_rgba(23,99,250,0.16)]"
                      style={{
                        height: `${18 + index * 5}px`,
                        transform: `translateY(${-index * 5}px) scale(${1 - index * 0.02})`,
                        opacity: 1 - index * 0.06,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10 max-w-[32rem]">
                <h2 className="title-balanced text-[34px] font-light text-white md:text-[52px]">
                  Start the{" "}
                  <span className="bg-gradient-to-r from-[#7EB4FF] to-[#1763FA] bg-clip-text text-transparent">
                    Conversation
                  </span>
                </h2>
                <p className="copy-balanced mt-5 text-[16px] text-white/74 md:text-[17px]">
                  If your organization is exploring AI-driven aviation modernization,
                  operational intelligence systems, or safety transformation, Wavionix can help
                  define the roadmap.
                </p>
                <div className="mt-8">
                  <GradientBorderButton className="h-[50px]">
                    <span className="px-8 py-3 text-[14px] font-medium">
                      Schedule a Consultation
                    </span>
                  </GradientBorderButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq bg="#020817" />
      <Contact />
      <Footer variant="dark" />
    </>
  );
}

export default Consultant;
