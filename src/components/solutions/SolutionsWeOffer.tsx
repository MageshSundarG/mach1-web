import { useNavigate } from "react-router-dom";

export default function SolutionsWeOffer() {
  const navigate = useNavigate();
  const solutions = [
    {
      title: "Comprehensive Operations",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/1.png",
    },
    {
      title: "Dynamic Status Board",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/2.png",
    },
    {
      title: "Comprehensive Safety Management",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/3.png",
    },
    {
      title: "Integrated Incident Management Platform",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/4.png",
    },
    {
      title: "NOTAMs",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/m5.png",
    },
    {
      title: "Forms / Checklist",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/5.png",
    },
    {
      title: "CADORs",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/6.png",
    },
    {
      title: "Resource Library",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/7.png",
    },
    {
      title: "Recommendations",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/8.png",
    },
    {
      title: "Emergency Response",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/9.png",
    },
    {
      title: "Integrated Work Order Management",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/10.png",
    },
    {
      title: "Comprehensive Inspection",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/11.png",
    },
    {
      title: "Comprehensive Emergency Exercise Management",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/12.png",
    },
    {
      title: "Preventive Maintenance Management",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/13.png",
    },
    {
      title: "AI-Powered METAR/ TAF Dashboard with Run way Intelligence",
      description:
        "Data-driven campaigns that deliver measurable ROI through targeted ads and smart optimizations.",
      icon: "/assets/solutions/session1/14.png",
    },
    {
      title: "Security",
      description:
        "Manage security operations, access control, and compliance workflows in one unified system. From threat risk assessments (TRA), permits, and blacklist tracking to lost & found and curbside assistance, ensure full visibility, traceability, and regulatory alignment across airport security operations. (Under Development)",
      icon: "/assets/solutions/session1/security-icon.png",
      isExtractedIcon: true,
    },
    {
      title: "AVOP",
      description:
        "Digitize airside permits, testing, and renewals with structured workflows aligned to regulatory requirements. Track certifications, manage expiries, and ensure only authorized personnel operate airside with full audit traceability. (Beta Enabled)",
      icon: "/assets/solutions/session1/avop-icon.png",
      isExtractedIcon: true,
    },
    {
      title: "Quality Assessment",
      description:
        "Streamline audits, inspections, and compliance checks with structured workflows and automated tracking. Link findings to corrective actions, monitor progress, and ensure continuous compliance with full traceability and audit readiness. (Beta Enabled)",
      icon: "/assets/solutions/session1/quality-assessment-icon.png",
      isExtractedIcon: true,
    },
    {
      title: "Training",
      description:
        "Manage training programs, budgets, certifications, and expiry tracking in one system. Monitor team readiness, ensure compliance, and maintain full visibility across departments. (Beta Enabled)",
      icon: "/assets/solutions/session1/training-icon.png",
      isExtractedIcon: true,
    },
    {
      title: "LMS & Global Training Hub",
      description:
        "Create courses, issue certificates, and manage training from one aviation-focused platform. Share training and access a global database of aviation courses, track completions, and deliver structured learning across departments and airport communities. (Beta Enabled)",
      icon: "/assets/solutions/session1/lms-training-hub-icon.png",
      isExtractedIcon: true,
    },
  ];

  return (
    <section data-header-tone="light" className="min-h-screen bg-white pb-32 pt-36">
      <div className="site-shell">
        {/* Decorative top line with notch */}
        {/* <div className="relative mb-16">
          <div className="absolute top-0 right-0 w-64 h-[1px] bg-gray-300">
            <svg className="absolute right-0 -translate-y-1/2" width="60" height="40" viewBox="0 0 60 40">
              <path d="M 0,20 L 20,20 L 30,5 L 40,20 L 60,20" fill="none" stroke="#d1d5db" strokeWidth="1"/>
            </svg>
          </div>
        </div> */}

        {/* Header */}
        <div className="mb-20">
          <div data-aos="fade-left" className=" grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
            {/* LEFT: Heading */}
          <h1 className="lg:text-[56px] text-[36px] font-regular mb-6">
            Solutions{" "}
            <span className="font-regular bg-gradient-to-r from-[#015BCD] to-[#90C63D] bg-clip-text text-transparent">
              We Offer
            </span>
          </h1>

            {/* RIGHT: Image (below heading level) */}
            <div className="hidden overflow-visible 2xl:block">
              <img
                src="/assets/solutions/session1/sub.png"
                className="w-full max-w-none translate-x-[14%] object-contain"
                alt="mask"
              />
            </div>
          </div>

          <p className="text-black max-w-[80%] font-regular text-[16px] leading-relaxed">
            MACH1 connects your operations, safety, maintenance, and emergency
            teams into one unified system, powered by deep aviation AI.
            Customize workflows, automate reports, and access predictive
            insights from any device. Every decision, guided by intelligence.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onClick={() => {
                navigate("/solutions/operations", {
                  state: { title: solution.title },
                });
              }}
              className="hover-lift premium-card group flex max-w-[393px] cursor-pointer flex-col justify-between rounded-[26px] border border-white/6 bg-gradient-to-br from-[#1e3a5f] to-[#0d1f3a] p-6 text-white"
            >
              <div>
                <h3 data-aos="fade-up" className="mb-3 text-[24px] font-regular leading-tight elegant-transition group-hover:text-[#B7D5FF]">
                  {solution.title}
                </h3>
                <p className="text-white text-[12px] font-regular leading-relaxed mb-6">
                  {solution.description}
                </p>
              </div>
              <div className="flex justify-end items-end">
                <div className="flex h-[92px] w-[92px] items-center justify-center text-5xl opacity-80 filter brightness-110">
                  <img
                    data-aos="zoom-in"
                    src={solution.icon}
                    alt="icon"
                    className={`elegant-transition h-[78px] w-[78px] object-contain group-hover:-translate-y-1 group-hover:scale-[1.08] ${
                      solution.isExtractedIcon
                        ? "brightness-0 saturate-100 invert-[48%] sepia-[96%] saturate-[2648%] hue-rotate-[195deg] brightness-[103%] contrast-[103%] drop-shadow-[0_0_14px_rgba(23,126,255,0.42)]"
                        : ""
                    }`}
                  />
                  {/* <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-400">
                    <circle cx="40" cy="40" r="30" fill="currentColor" opacity="0.2"/>
                    <circle cx="40" cy="40" r="20" fill="currentColor" opacity="0.4"/>
                    <circle cx="40" cy="40" r="10" fill="currentColor" opacity="0.6"/>
                  </svg> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
