import React from "react";
import {
  Play,
  ShieldAlert,
  HardHat,
  FileText,
  PawPrint,
  Settings,
  Bell,
} from "lucide-react";
import GradientBorderButton from "../common/GradientBorderButton";

const MachLandingPage = () => {
  return (
    <div className="bg-[#020617] mt-10 py-10 2xl:pb-44 md:pb-28 pb-10 text-white font-sans selection:bg-white/30 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute overflow-x-hidden top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-radial-gradient from-blue-900/20 to-transparent pointer-events-none" />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center text-center mt-2">
        <div
          data-aos="fade-up"
          className="
        mt-[4.37rem] h-[2rem] lg:w-[22.75rem] w-[16rem] p-6 lg:p-0
        flex items-center justify-center
  bg-[#F4F9EC1A] 
  border-[0.2px] 
  border-[#A4A1A1] 
  rounded-full 
  mb-[2.5rem]
"
        >
          <h1
            className="font-medium
            text-[14px]
            leading-[16px]
            tracking-[0.46em]
            text-center
            uppercase
            opacity-100
          "
          >
            AI-Powered Innovation
          </h1>
        </div>
        {/* <div data-aos="fade-up" className="flex items-center justify-center letter-spacing-[2.88rem] font-medium line-height-[1rem] px-4 mt-[4.37rem] h-[2rem] w-[22.75rem] rounded-full border border-white/40 bg-[#F4F9EC] text-[10px] uppercase tracking-[0.3em] text-white mb-8">
          AI-Powered Innovation
        </div> */}

        <h1
          data-aos="fade-up"
          className="lg:text-[64px] leading-tight px-4 text-[36px] font-light mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#929292] to-white bg-clip-text text-transparent">
            The AI-Powered Platform
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-white to-[#929292] bg-clip-text text-transparent">
            for Airport Operations
          </span>
        </h1>

        <p className="text-center text-[#ECECEC] px-10 text-[16px] md:text-[1rem] font-regular leading-relaxed mb-10">
          MACH1 delivers predictive monitoring, continuous communication,
          automated <br />
          workflows, and intelligent safety insights — all in real time.
        </p>

        {/* <div className="flex flex-rows sm:row space-y-4 sm:space-y-0 sm:space-x-4 "> */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          {/*border-[linear-gradient(65.39deg,rgba(255,255,255,0)_35.24%,#B8D7FF_51.15%,rgba(255,255,255,0)_68.54%,#D2E6FF_86.17%)]*/}

          {/* <button
            data-aos="fade-right"
            className="text-[1rem] font-medium sm:w-[15rem] bg-[#0071FF] 
            px-10 py-3 rounded-full flex items-center justify-center 
            space-x-2 transition"
          >
            Watch Video
          </button> */}

          {/* <div 
      className="p-[1px] rounded-[56px] inline-block"
      style={{
        background: `linear-gradient(65.39deg, rgb(184, 215, 255) 15.24%,  rgb(255, 255, 255) 51.15%, rgba(255, 255, 255, 0) 68.54%, rgb(210, 230, 255) 86.17%)`
      }}
    >
      <button
        // className="
        //   flex items-center justify-center gap-2
        //   h-[46px] w-[254px]
        //   rounded-[56px]
        //   px-8 py-3
        //   bg-[#0071FF]
        //   text-white
        //   shadow-[0_0_50px_#0071FF]
        //   transition hover:opacity-90
        // "
                className="
          flex items-center justify-center gap-2
          h-[46px] w-[254px]
          rounded-[56px]
          px-8 py-3
          bg-[#0071FF]
          text-white
          transition hover:opacity-90
        "
      >
        Watch Video
      </button>
    </div> */}

          {/* <GradientBorderButton
                className="
          flex items-center justify-center gap-2
          h-[46px] w-[254px]
          rounded-[56px]
          px-8 py-3
          bg-[#0071FF]
          text-white
          transition hover:opacity-90
        "
          >
            Watch Video
          </GradientBorderButton> */}
          <GradientBorderButton
            animation="fade-right"
            className="sm:w-[15rem] h-[46px]"
          >
            <span className="px-10 py-3 text-[16px] font-medium">
              Watch Video
            </span>
          </GradientBorderButton>

          <button
            data-aos="fade-left"
            className="text-[1rem] font-medium sm:w-[15rem] bg-white text-black px-10 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Learn More
          </button>
        </div>

        <div className=" hidden sm:block relative w-full my-6">
          {/* Overlap section */}
          <div className="relative w-full  ">
            {/* Group 489 */}
            <img
              src="/assets/home/session1/Group 489.png"
              alt="Group 489"
              className="w-full object-cover mb-2 relative z-20"
              // style={{ minHeight: "200px", maxHeight: "30vh" }}
            />

            {/* ELLIPSE 2 IMAGE */}
            <img
              src="/assets/home/session1/Ellipse 2.png"
              alt="Background Glow"
              className="absolute hidden lg:block top-[14rem] w-full h-full object-bottom z-10"
              style={
                {
                  // filter: "blur(260px)",
                  // transform: "scaleY(1)", // Squashes it slightly to match the image aspect ratio
                }
              }
            />

            {/* Group 490 */}
            <img
              src="/assets/home/session1/Group 490.png"
              alt="Group 490"
              data-aos="fade-up"
              className="relative hidden lg:block z-20 w-full max-w-7xl mx-auto h-24 object-contain mt-14"
            />
          </div>
        </div>

        {/* Support Section: ellipse 2 background with Group 490 overlay */}
        {/* <div className="w-full mt-12 pb-20"></div> */}
      </main>
    </div>
  );
};

// Sub-component for the glowing icons
const IconCircle = ({ icon, active }) => (
  <div
    className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md hover:border-blue-500/50 transition duration-500 cursor-pointer`}
  >
    {icon}
  </div>
);

export default MachLandingPage;
