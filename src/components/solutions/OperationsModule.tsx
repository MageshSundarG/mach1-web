// Helper to colorize the last two words of the title
const ColorizedTitle = ({ title }: { title: string }) => {
  if (!title) return null;
  const words = title.split(" ");
  if (words.length < 2) {
    return <>{title}</>;
  }
  const lastWord = words.pop();
  const secondLastWord = words.pop();
  const rest = words.join(" ");

  return (
    <>
      {rest}{" "}
      <span className="font-normal bg-gradient-to-r from-[#015BCD] to-[#90C63D] bg-clip-text text-transparent">
        {secondLastWord} {lastWord}
      </span>
    </>
  );
};

export default function OperationsModule({
  title = "Comprehensive Operations Module",
}: {
  title?: string;
}) {
  const features = [
    {
      title: "Automated Data Entry",
      description:
        "Log entries from inspections, work orders, and connected IoT devices are auto-captured, reducing manual input and increasing data reliability.",
    },
    {
      title: "Unified Workflow Experience",
      description:
        "Unified integration with meeting agendas, NOTAMs, METAR, and all other MACH1 modules.",
    },
    {
      title: "User-Based Access Control",
      description:
        "Fine-grained permissions ensure the right people enter the right data.",
    },
    {
      title: "Seamless Reference Access",
      description:
        "Attach key documents directly to entries (SOPs, procedures, guidelines).",
    },
    {
      title: "Pass-On Notes",
      description:
        "Quickly build pass-on notes for shift transitions, pulling from relevant log entries.",
    },
    {
      title: "Log-to-Module Launch",
      description:
        "Instantly launch investigations, work orders, or incident reports from any log item.",
    },
    {
      title: "Meeting Integration",
      description:
        "Feed critical log insights directly into agenda templates to support smarter discussions.",
      highlight: true,
    },
    {
      title: "Custom Visual & Data Reports",
      description:
        "Create personalized reports with AI insights, visual tiles, and rich filters.",
      highlight: true,
    },
  ];

  return (
    <>
      <section data-header-tone="dark" className="mt-10 bg-[#020617] py-36 text-white">
        <div>
          {/* Header with Icon */}
          <div className="site-shell mb-12 flex items-start lg:justify-between">
            <h1 data-aos="fade-left" className="lg:text-[56px] text-[36px] font-regular">
              <ColorizedTitle title={title} />
            </h1>

            {/* Network Icon */}
            <div className="relative w-24 h-24 hidden md:block">
              <img
              data-aos="fade-up"
                src="/assets/solutions/session1/inner.png"
                alt="operations"
              />
            </div>
          </div>

          {/* Decorative wave line */}
          <div className="hidden 2xl:block mb-16 max-w-[108rem] mx-auto">
            {/* Network Icon */}
            <div className="relative w-full h-full">
              <img
                src="/assets/solutions/session1/Mask.png"
                alt="operations"
              />
            </div>
          </div>

          <div className="site-shell">
            {/* Subheading with blue accent bar */}
            <div className="mb-8">
              <div data-aos="fade-up" className="flex items-center gap-4 h-16">
                <div className="w-1 h-24 sm:h-16 bg-[#1763FA] flex-shrink-0"></div>
                <h2 className="lg:text-[36px] text-[20px] font-light leading-tight">
                  Enhanced Operational Efficiency
                  <br />
                  with AI Integration
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4 text-white font-regular text-[16px] leading-relaxed">
              <p>
                MACH1's Operations Module transforms daily airport workflows
                into a streamlined, intelligent, and data-rich ecosystem. It
                acts as both the operational record-keeper and a real-time
                decision engine, built to minimize fatigue, eliminate manual
                data errors, and empower duty teams with AI-driven insights.
              </p>
              <p>
                Whether logging routine inspections, unexpected disruptions, or
                real-time IoT triggers, this module ensures every event is
                captured, categorized, and actioned fast.
              </p>
            </div>

            {/* Core Log Features Box */}
            <div 
                          style={{
        backgroundImage: "url('../assets/solutions/session1/cbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
            className="bg-gradient-to-br from-[#0E1F39] to-[#0f1f3d] rounded-3xl lg:p-12 p-6 mt-16">
              <h3 data-aos="fade-left" className="lg:text-[36px] text-[20px] font-regular mb-8">Core Log Features</h3>

              <div 

              className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-white text-[16px] font-regular flex-shrink-0 line-clamp-2 max-w-[100%]">
                      {feature.title}
                      <span
                        // className={
                        //   feature.highlight ? "text-blue-300" : "#CACACA"
                        // }
                        className="text-[#CACACA]"
                      >
                        - {feature.description}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-header-tone="light" className="bg-[#020617]">
        <div className="bg-white text-black relative ">
          {/* Top Transition Notch */}
      <div className="absolute z-0 w-full 2xl:top-[-94px] xl:top-[-64px] lg:top-[-56px] md:top-[-38px] sm:top-[-32px] top-[-24px] left-1/2 -translate-x-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 280"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#fff"
          />
        </svg>
      </div>

          <div className="site-shell mb-16 py-24">
            {/* Header */}
            {/* <div className="mb-12">
            <div className="flex items-center gap-4 bg-black/10 h-16 overflow-hidden">
              <div className="w-1 h-20 bg-[#1763FA] flex-shrink-0"></div>
              <h2 className="text-4xl font-light leading-tight">
                AI-Powered Operational Dashboard
                <br />
                (Tiles that think. Data that talks.)
              </h2>
            </div>
          </div> */}

            <div className=" relative z-10 mb-8">
              <div data-aos="fade-up" className="flex items-center gap-4 h-18 overflow-hidden">
                <div className="w-1 h-[136px] sm:h-[66px] bg-[#1763FA] flex-shrink-0"></div>
                <h2 className="lg:text-[36px] text-[20px] font-regular leading-tight">
                  AI-Powered Operational Dashboard
                  <br />
                  (Tiles that think. Data that talks.)
                </h2>
              </div>

              <p className="mt-8 text-black font-regular text-[16px] leading-relaxed mb-14">
                Alongside the core log, MACH1 includes a powerful, real-time
                AI-Driven Operational Dashboard, built with specialized smart
                tiles that continuously surface patterns, risks, and resources
                across the airport environment.
              </p>
            </div>

            {/* Smart Tiles Grid/List */}
            <div className="space-y-4">
              {/* Tile 1 */}
              <div className="bg-[#EBF5FF] p-4 rounded-lg flex items-center">
                <p data-aos="fade-up" className="text-[16px] font-bold text-gray-800">
                  "High wildlife risk at RWY 16 in next 3 hours due to wind
                  direction and dusk time."
                </p>
              </div>
              {/* Tile 2 */}
              <div className="bg-[#EBF5FF] p-4 rounded-lg flex items-center">
                <p data-aos="fade-up" className="text-[16px] font-semibold text-black">
                  <span className="font-bold">Anomaly Detection:</span> "Unusual
                  increase in SMS reports from apron zone since 08:00."
                </p>
              </div>
              {/* Tile 3 */}
              <div className="bg-[#EBF5FF] p-4 rounded-lg flex items-center">
                <p data-aos="fade-up" className="text-[16px] font-semibold text-black">
                  <span className="font-bold">
                    Geo-Tagged Heatmaps & Cluster Overlays
                  </span>{" "}
                  - View incident and work order clusters over time, like crime
                  heatmaps.
                </p>
              </div>
              {/* Tile 4 */}
              <div className="bg-[#EBF5FF] p-4 rounded-lg flex items-center">
                <p data-aos="fade-up" className="text-[16px] font-semibold text-black">
                  <span className="font-bold">Team Pulse / Morale Tile:</span>{" "}
                  1-click mood check-ins from shift supervisors. Monitor
                  staffing fatigue or morale issues — anonymously and in real
                  time.
                </p>
              </div>
              {/* Tile 5 */}
              <div className="bg-[#EBF5FF] p-4 rounded-lg flex items-center">
                <p data-aos="fade-up" className="text-[16px] font-semibold text-black">
                  <span className="font-bold">Ops Risk Indicator Tile:</span>{" "}
                  Real-time{" "}
                  <span className="font-bold">Operational Risk Index</span> (Low
                  / Medium / High) based on NOTAMs, surface closures, and
                  METARs. Color-coded with reasoning for fast action
                </p>
              </div>
              {/* Tile 6 */}
              <div className="bg-[#EBF5FF] p-4 rounded-lg flex items-center">
                <p data-aos="fade-up" className="text-[16px] font-semibold text-black">
                  <span className="font-bold">Smart Briefing Generator :</span>{" "}
                  One-click generation of an{" "}
                  <span className="font-bold">Ops Summary Email</span> for
                  handoffs, executive updates, or daily briefings.
                </p>
              </div>
              {/* Tile 7 */}
              <div className="bg-[#EBF5FF] p-4 rounded-lg flex items-center">
                <p data-aos="fade-up" className="text-[16px] font-semibold text-black">
                  <span className="font-bold">
                    Live Camera Feed Integration :
                  </span>{" "}
                  Stream apron cams, RWY ends, and gate views directly in
                  dashboard tiles.
                </p>
              </div>
            </div>

            <p className="mt-16 mb-28 text-black font-medium text-[16px] leading-relaxed">
              Together, the Ops Log + AI Dashboard deliver unmatched visibility,
              adaptability, and performance across your airport operations. It’s
              not just smarter — it’s situationally aware.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
