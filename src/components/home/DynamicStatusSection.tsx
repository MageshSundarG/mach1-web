import React from "react";

const DynamicStatusSection = () => {
  return (
    <section data-header-tone="light" className="w-full bg-white font-sans text-[#020817] selection:bg-blue-100">
      <div className="site-shell pb-24 md:pb-40">
        {/* Top Header Section */}
        <div className="px-2 py-20 text-center md:py-32">
          <h2
            data-aos="fade-up"
            className="title-balanced text-[28px] font-regular md:text-[56px]"
          >
            Enhance Situational Awareness with Mach1&apos;s <br />
          </h2>
          <span className="block bg-[linear-gradient(90deg,#015BCD_41.83%,#90C63D_83.17%)] bg-clip-text text-[28px] font-normal leading-tight text-transparent md:text-[56px] lg:leading-[1]">
            AI-powered Dynamic Status Board
          </span>

          <p className="copy-balanced mx-auto mt-4 max-w-5xl p-4 text-[16px] font-regular text-black">
            MACH1 runs on the world&apos;s first AI model built exclusively for airport
            operations and safety. Unlike general-purpose AIs, MACH1 &quot;speaks
            airport&quot; — understanding inspections, NOTAMs, incidents, and wildlife
            risks with unmatched operational precision.
          </p>
        </div>

        {/* Alternating Features Section */}
        <div className="space-y-10 md:space-y-12">
          {/* Feature 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-white p-4 md:gap-14 lg:grid-cols-2 lg:gap-28 lg:px-0">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                data-aos="fade-down"
                src="/assets/home/session6/1.png"
                alt="Unified live operational dashboard map"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3
                data-aos="fade-up"
                className="text-[28px] font-regular leading-[1.12] text-black lg:text-[36px]"
              >
                A Unified, Live Operational <br /> Picture
              </h3>
              <p
                data-aos="fade-up"
                className="copy-balanced max-w-xl text-[16px] font-medium text-black"
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
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-white p-4 px-4 md:gap-14 md:px-6 lg:grid-cols-2 lg:gap-28 lg:px-0">
            <div className="order-2 space-y-6 lg:order-1">
              <h3
                data-aos="fade-up"
                className="text-[28px] font-regular leading-[1.12] text-black lg:text-[36px]"
              >
                From Passive Monitoring to <br /> AI-Driven Foresight
              </h3>
              <p
                data-aos="fade-up"
                className="copy-balanced max-w-xl text-[16px] font-medium text-black"
              >
                Turn passive monitoring into AI-enhanced foresight with MACH1&apos;s
                real-time Dynamic Status Board. Elevate your airport&apos;s situational
                awareness with an AI-powered command hub that consolidates
                critical operational data into one intuitive interface — giving
                leadership immediate, actionable visibility.
              </p>
            </div>

            <div className="order-1 relative aspect-square overflow-hidden rounded-3xl lg:order-2">
              <div
                data-aos="fade-down"
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src="/assets/home/session6/2.png"
                  alt="AI-driven foresight board interface"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 3: Image Left, Text Right */}
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-white p-4 px-4 md:gap-14 md:px-6 2xl:px-0 lg:grid-cols-2 lg:gap-28">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                data-aos="fade-down"
                src="/assets/home/session6/3.png"
                alt="Intelligent tiles for proactive decision-making"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3
                data-aos="fade-up"
                className="text-[28px] font-regular leading-[1.12] text-black lg:text-[36px]"
              >
                Intelligent Tiles for Proactive <br /> Decision-Making
              </h3>
              <p
                data-aos="fade-up"
                className="copy-balanced max-w-xl text-[16px] font-medium text-black"
              >
                MACH1&apos;s Status Board is composed of intelligent, AI-driven tiles
                engineered for proactive decision-making. Every tile is
                intelligent. Every status is live. MACH1 delivers the clarity your
                team needs to act faster, smarter, and safer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicStatusSection;
