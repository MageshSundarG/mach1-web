import React from "react";
import { ChevronDown } from "lucide-react";

const Airport = () => {
  return (
    <div className="relative top-0 bg-white z-[400]">
      <div className="absolute z-0 w-full 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] sm:top-[-25px] left-1/2 -translate-x-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 480"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="relative z-10 bg-white pb-[8rem] pt-0 font-sans border-radius-3xl rounded-t-3xl">
        {/* --- Blue Accent Top --- */}
        {/* Top Transition Notch */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2">
  <svg width="120" height="40" viewBox="0 0 120 40" className="block">
    <path
      d="M0 0C20 0 30 30 60 30C90 30 100 0 120 0H0Z"
      className="fill-[#020617] sm:fill-[#2D229F]"
    />
  </svg>
</div> */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <svg width="120" height="40" viewBox="0 0 120 40" className="block">
            <path
              d="M0 0C20 0 30 30 60 30C90 30 100 0 120 0H0Z"
              className="bg-transparent"
            />
          </svg>
        </div> */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path
              d="M0 0C20 0 30 30 60 30C90 30 100 0 120 0H0Z"
              fill="transparent"
            />
          </svg>
        </div>

        {/* --- Hero Section --- */}
        <header className=" mx-auto text-center pt-16 px-4">
          <h1
            data-aos="fade-down"
            className="lg:text-[56px] text-[36px] max-w-2xl mx-auto md:text-5xl font-regular tracking-tight leading-tight text-black mb-6"
          >
            Airport-Wide
            {/* <span className="text-teal-500 font-normal bg-linear-gradient(90deg, #015BCD 41.83%, #90C63D 83.17%);
">Operational</span> <br /> */}
            <span className=" bg-gradient-to-r from-[#015BCD] to-[#90C63D] bg-clip-text text-transparent">
              {" "}
              Operational{" "}
            </span>{" "}
            <br />
            <span className=" bg-gradient-to-r from-[#015BCD] to-[#90C63D] bg-clip-text text-transparent">
              Intelligence
            </span>
            <br />
            {/* <span className="text-blue-600 font-normal">Intelligence</span> */}
          </h1>
          <p className="text-[#1A1A1A] max-w-5xl text-[16px] font-regular md:text-base leading-relaxed  mx-auto mb-12 text-center w-full">
            MACH1 connects your operations, safety, maintenance, and emergency
            teams into one unified system, powered by deep aviation AI.
            Customize workflows, automate reports, and access predictive
            insights from any device. Every decision, guided by intelligence.
          </p>

          {/* --- Value Props --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 mb-8 max-w-[80rem] mx-auto">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="p-2 rounded-lg text-blue-600">
                {/* <BarChart3 size={24} /> */}
                <img
                  src="/assets/home/session2/1.png"
                  data-aos="zoom-in"
                  alt="Reduce manual reporting by up to 70%"
                />
              </div>
              <p className="text-[16px] font-semibold text-[#0E1F39] text-left leading-tight md:w-full w-60">
                Reduce manual reporting by up to 70%
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="p-2 rounded-lg text-blue-600">
                {/* <ShieldAlert size={24} /> */}
                <img
                  src="/assets/home/session2/2.png"
                  data-aos="zoom-in"
                  alt="Detect risks before they escalate"
                />
              </div>
              <p className="text-[16px] font-semibold text-[#0E1F39] text-left leading-tight md:w-full w-60">
                Detect risks before they escalate
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="p-2 rounded-lg text-blue-600">
                {/* <Zap size={24} /> */}
                <img
                  src="/assets/home/session2/3.png"
                  data-aos="zoom-in"
                  alt="Empower teams with instant situational clarity"
                />
              </div>
              <p className="text-[16px] font-semibold text-[#0E1F39] text-left leading-tight md:w-full w-60">
                Empower teams with instant situational clarity
              </p>
            </div>
          </div>
        </header>

        {/* --- Dashboard UI Mockup --- */}
        <main
          data-aos="zoom-in"
          className="max-w-[95rem] mx-auto lg:px-0 px-2
        "
        >
          <div className="bg-gradient-to-b from-blue-200/0 to-blue-700/20 rounded-2xl p-4 md:p-8 shadow-inner">
            <img
              src="/assets/home/session2/main 1.png"
              alt="Airport Dashboard Mockup"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper component for sidebar items
const NavItem = ({ label }) => (
  <div className="flex items-center justify-between text-slate-300 text-xs py-1.5 cursor-pointer hover:text-white group">
    <span>{label}</span>
    <ChevronDown
      size={14}
      className="text-slate-600 group-hover:text-slate-400"
    />
  </div>
);

export default Airport;
