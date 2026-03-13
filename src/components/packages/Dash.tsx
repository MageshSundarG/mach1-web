import React from "react";

const BAR_IMAGE = "/assets/packages/session3/bar.png";

export default function Dash() {
  return (
    <div className="relative bg-[#020617] w-full lg:h-full pt-[500px] hidden sm:block overflow-hidden">
      {/* Bar graphs – behind globe (z-0), 4 divs for independent top/left */}
      <div
        className="absolute z-0 flex items-end justify-between"
        style={{
          left: "6%",
          right: "6%",
          bottom: "26%",
          top: "2%",
        }}
      >
        {/* Bar 1: 35-40% Less consultant dependency */}
        <div className="flex flex-col items-center flex-1 min-w-0 max-w-[220px] relative">
          <div
            className="text-left w-full mb-2 absolute"
            style={{ top: "60px", left: "40px" }}
          >
            <p className="text-white font-bold text-base lg:text-lg xl:text-[40px] leading-tight">
              35-40%
            </p>
            <p className="text-white/80 text-xs lg:text-sm mt-1 font-medium">
              Less consultant dependency
            </p>
          </div>
          <div className="w-full flex flex-col items-center flex-1 min-h-0 justify-end">
            <div className="relative w-full flex justify-center flex-shrink-0 h-[420px] lg:h-[480px] xl:h-[520px]">
              <div
                className="absolute bottom-0 w-full max-w-[90%] bg-no-repeat bg-left-bottom bg-contain"
                style={{
                  height: "90%",
                  backgroundImage: `url(${BAR_IMAGE})`,
                  backgroundSize: "100% 100%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bar 2: 40% Recover savings in 5 yrs */}
        <div className="flex flex-col items-center flex-1 min-w-0 max-w-[220px] relative">
          <div
            className="text-left w-full mb-2 absolute"
            style={{ top: "-20px", left: "40px" }}
          >
            <p className="text-white font-bold text-base lg:text-lg xl:text-[40px] leading-tight">
              40%
            </p>
            <p className="text-white/80 text-xs lg:text-sm mt-1 font-medium">
              Recover savings in 5 yrs
            </p>
          </div>
          <div className="w-full flex flex-col items-center flex-1 min-h-0 justify-end">
            <div className="relative w-full flex justify-center flex-shrink-0 h-[420px] lg:h-[480px] xl:h-[520px]">
              <div
                className="absolute bottom-0 w-full max-w-[90%] bg-no-repeat bg-left-bottom bg-contain"
                style={{
                  height: "105%",
                  backgroundImage: `url(${BAR_IMAGE})`,
                  backgroundSize: "100% 100%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bar 3: 50% Cut onboarding cycles */}
        <div className="flex flex-col items-center flex-1 min-w-0 max-w-[220px] relative">
          <div
            className="text-left w-full mb-2 absolute"
            style={{ top: "30px", left: "40px" }}
          >
            <p className="text-white font-bold text-base lg:text-lg xl:text-[40px] leading-tight">
              50%
            </p>
            <p className="text-white/80 text-xs lg:text-sm mt-1 font-medium">
              Cut onboarding cycles
            </p>
          </div>
          <div className="w-full flex flex-col items-center flex-1 min-h-0 justify-end">
            <div className="relative w-full flex justify-center flex-shrink-0 h-[420px] lg:h-[480px] xl:h-[520px]">
              <div
                className="absolute bottom-0 w-full max-w-[90%] bg-no-repeat bg-left-bottom bg-contain"
                style={{
                  height: "96%",
                  backgroundImage: `url(${BAR_IMAGE})`,
                  backgroundSize: "100% 100%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bar 4: 4x-10x ROI */}
        <div className="flex flex-col items-center flex-1 min-w-0 max-w-[220px] relative">
          <div
            className="text-left w-full mb-2 absolute"
            style={{ top: "-90px", left: "40px" }}
          >
            <p className="text-white font-bold text-base lg:text-lg xl:text-[40px] leading-tight">
              4x-10x
            </p>
            <p className="text-white/80 text-xs lg:text-sm mt-1 font-medium">
              ROI
            </p>
          </div>
          <div className="w-full flex flex-col items-center flex-1 min-h-0 justify-end">
            <div className="relative w-full flex justify-center flex-shrink-0 h-[420px] lg:h-[480px] xl:h-[520px]">
              <div
                className="absolute bottom-0 w-full max-w-[90%] bg-no-repeat bg-left-bottom bg-contain"
                style={{
                  height: "120%",
                  backgroundImage: `url(${BAR_IMAGE})`,
                  backgroundSize: "100% 100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient layer below globe – same colors as gradient_layer.png (no image) */}
      <div
        className="absolute inset-x-0 bottom-0 z-[5] pointer-events-none"
        style={{
          height: "10%",
          background: "linear-gradient(to bottom, #00165B00, #00165B00)",
        }}
      />

      {/* Globe on top so bars appear behind it */}
      <img
        src="/assets/packages/session3/globesvg.svg"
        alt="Earth"
        className="w-full h-full object-contain relative z-10"
      />
      <div className="hidden sm:flex absolute inset-0 z-10 items-end justify-center pointer-events-none">
        <div
          data-aos="fade-up"
          className="z-20 relative bottom-2 lg:bottom-40 flex flex-col items-center justify-center p-8 font-sans rounded-3xl pointer-events-auto"
        >
          <p className="text-center text-[34px] xl:text-[64px] text-white font-semibold tracking-wide">
            Upgrading to <br />
            <span className="text-center text-[34px] xl:text-[64px] font-bold bg-gradient-to-r from-[#B5D6FF] via-[#0071FF] to-[#90C63D] bg-clip-text text-transparent tracking-tighter">
              MACH1
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
