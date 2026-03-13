import { useNavigate } from "react-router-dom";

export default function SolutionsWeOffer() {
  const navigate = useNavigate();
  const solutions = [
    {
      title: "Comprehensive Operations Module",
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
      title: "CADORs Module",
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
      title: "Comprehensive Inspection Module",
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
  ];

  return (
    <div className="min-h-screen my-10 mb-32 bg-white py-36">
      <div className="max-w-[95rem] mx-auto ">
        {/* Decorative top line with notch */}
        {/* <div className="relative mb-16">
          <div className="absolute top-0 right-0 w-64 h-[1px] bg-gray-300">
            <svg className="absolute right-0 -translate-y-1/2" width="60" height="40" viewBox="0 0 60 40">
              <path d="M 0,20 L 20,20 L 30,5 L 40,20 L 60,20" fill="none" stroke="#d1d5db" strokeWidth="1"/>
            </svg>
          </div>
        </div> */}

        {/* Header */}
        <div className="mb-20 px-4 lg:px-0">
          <div data-aos="fade-left" className=" grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
            {/* LEFT: Heading */}
          <h1 className="lg:text-[56px] text-[36px] font-regular mb-6">
            Solutions{" "}
            <span className="font-regular bg-gradient-to-r from-[#015BCD] to-[#90C63D] bg-clip-text text-transparent">
              We Offer
            </span>
          </h1>

            {/* RIGHT: Image (below heading level) */}
            <div className="hidden 2xl:block">
              <img
                src="/assets/solutions/session1/sub.png"
                className="w-full object-contain"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 lg:px-0">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onClick={() => {
                navigate("/solutions/operations", {
                  state: { title: solution.title },
                });
              }}
              className="max-w-[393px] bg-gradient-to-br from-[#1e3a5f] to-[#0d1f3a] rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300 flex flex-col justify-between  cursor-pointer"
            >
              <div>
                <h3 data-aos="fade-up" className="text-[24px] font-regular mb-3 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-white text-[12px] font-regular leading-relaxed mb-6">
                  {solution.description}
                </p>
              </div>
              <div className="flex justify-end items-end">
                <div className="text-5xl opacity-80 filter brightness-110">
                  <img data-aos="zoom-in" src={solution.icon} alt="icon" />
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
    </div>
  );
}
