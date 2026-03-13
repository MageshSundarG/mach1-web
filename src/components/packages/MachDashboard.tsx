import React from "react";

const MachDashboard = () => {
  const data = [
    { value: "35–40%", label: "Less consultant dependency", height: "h-48" },
    { value: "40%", label: "Recover savings in 5 yrs **", height: "h-64" },
    { value: "50%", label: "Cut onboarding cycles", height: "h-56" },
    { value: "4x–10x", label: "ROI", height: "h-80" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#020617] flex flex-col items-center justify-between overflow-hidden font-sans text-white pt-20 pb-0">
      {/* Background Glows */}
      {/* <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full" /> */}

      {/* Main Content Grid (Images) */}
      <div className="relative w-full h-[50vh] max-w-7xl mx-auto mb-10">
        <img
          className="absolute object-contain top-[65%] left-[5%] w-[18%]"
          src="/assets/packages/session3/Group 439.png"
          alt=""
        />
        <img
          className="absolute object-contain top-[15%] left-[28%] w-[18%]"
          src="/assets/packages/session3/Group 440.png"
          alt=""
        />
        <img
          className="absolute object-contain top-[45%] left-[53%] w-[18%]"
          src="/assets/packages/session3/Group 441.png"
          alt=""
        />
        <img
          className="absolute object-contain top-[5%] left-[78%] w-[18%]"
          src="/assets/packages/session3/Group 432.png"
          alt=""
        />
      </div>

      {/* The Globe Section */}
      <div className="relative w-full flex flex-col items-center justify-end mt-auto">
        <div className="absolute top-64 left-1/2 transform -translate-x-1/2 z-20 text-center mt-10">
          <h3 className="text-5xl font-semibold tracking-wide">
            Upgrading to <br />
            <span className="text-5xl font-bold bg-gradient-to-r from-[#B5D6FF] via-[#0071FF] to-[#90C63D] bg-clip-text text-transparent tracking-tighter">
              MACH1
            </span>
          </h3>
        </div>

        <img
          className="w-full object-cover z-10 translate-y-20"
          src="/assets/packages/session3/Group 433.png"
          alt="Globe Texture"
        />
      </div>
    </div>
  );
};

export default MachDashboard;
