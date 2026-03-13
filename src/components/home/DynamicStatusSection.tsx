import React from "react";

const DynamicStatusSection = () => {
  return (
    <div className="bg-white pb-40 text-[#020817] font-sans selection:bg-blue-100 max-w-[95rem] mx-auto">
      {/* Top Header Section */}
      <div className="px-4 py-32 text-center">
        <h2
          data-aos="fade-up"
          className="text-[30px] leading-tight lg:leading-[1] md:text-[56px] font-regular"
        >
          Enhance Situational Awareness with Mach1's <br />

        </h2>
        <span className="text-[30px] leading-tight lg:leading-[1]  md:text-[56px] font-regular block bg-[linear-gradient(90deg,#015BCD_41.83%,#90C63D_83.17%)] bg-clip-text text-transparent font-normal">
          AI-powered Dynamic Status Board
        </span>

        <p className="mt-4 p-4 text-black text-[16px] font-regular leading-relaxed max-w-5xl mx-auto">
          MACH1 runs on the world's first AI model built exclusively for airport
          operations and safety. Unlike general-purpose AIs, MACH1 "speaks
          airport" — understanding inspections, NOTAMs, incidents, and wildlife
          risks with unmatched operational precision.
        </p>
      </div>



      {/* Alternating Features Section */}
      <div className="lg:px-0 px-2 space-y-12">
        {/* Feature 1: Image Left, Text Right */}
        <div className="p-4 lg:px-0 rounded-2xl bg-white grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          <div className="relative rounded-3xl overflow-hidden">
            <img data-aos="fade-down" src="/assets/home/session6/1.png" className="h-full w-full object-cover"/>
          </div>

          <div className="space-y-6">
            <h3
              data-aos="fade-up"
              className="lg:text-[36px] text-[28px] font-regular text-black leading-snug"
            >
              A Unified, Live Operational <br /> Picture
            </h3>
            <p
              data-aos="fade-up"
              className="text-black font-medium text-[16px] max-w-xl  leading-relaxed"
            >
              At the core is a live ESRI Map Tile fully integrated with the Ops
              Record module. Instantly visualize infrastructure status while
              layering dynamic feeds such as NOAA weather, FIRMS wildfire and
              smoke data, flood risk overlays, and more — all within a single,
              intelligent visual dashboard.
            </p>
          </div>
        </div>

        {/* Feature 2: Text Left, Image Right */}
        <div className="p-4 px-6 lg:px-0 rounded-2xl bg-white grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h3
              data-aos="fade-up"
              className="lg:text-[36px] text-[28px] font-regular text-black leading-snug"
            >
              From Passive Monitoring to <br /> AI-Driven Foresight
            </h3>
            <p
              data-aos="fade-up"
              className="text-black font-medium text-[16px] max-w-xl leading-relaxed"
            >
              Turn passive monitoring into AI-enhanced foresight with MACH1's
              real-time Dynamic Status Board. Elevate your airport's situational
              awareness with an AI-powered command hub that consolidates
              critical operational data into one intuitive interface — giving
              leadership immediate, actionable visibility.
            </p>
          </div>

          <div className="order-1 lg:order-2  relative aspect-square rounded-3xl overflow-hidden">
            <div
              data-aos="fade-down"
              className="rounded-3xl overflow-hidden"
            >
              <img src="/assets/home/session6/2.png" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Feature 3: Image Left, Text Right */}
        <div className="p-4 px-6 2xl:px-0 rounded-2xl bg-white grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          <div className="relative rounded-3xl overflow-hidden">
            <img data-aos="fade-down" src="/assets/home/session6/3.png" className="h-full w-full object-cover"/>
          </div>

          <div className="space-y-6">
            <h3
              data-aos="fade-up"
              className="lg:text-[36px] text-[28px] font-regular text-black leading-snug"
            >
              {/* A Unified, Live Operational <br /> Picture */}
              Intelligent Tiles for Proactive <br /> Decision-Making
            </h3>
            <p
              data-aos="fade-up"
              className="text-black font-medium text-[16px] max-w-xl leading-relaxed"
            >
              MACH1’s Status Board is composed of intelligent, AI-driven tiles
              engineered for proactive decision-making. Every tile is
              intelligent. Every status is live. MACH1 delivers the clarity your
              team needs to act faster, smarter, and safer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicStatusSection;
