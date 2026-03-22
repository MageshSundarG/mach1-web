import React from "react";
import GradientBorderButton from "../common/GradientBorderButton";

const PurposeImpact = () => {
  return (
    <div className=" bg-[#020817] text-white font-sans selection:bg-blue-500/30">
      {/* Main Container */}
      <div className="max-w-[95rem] mx-auto px-6 py-20 relative">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Section */}
        <div className="my-20">
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
            {/* LEFT: Heading */}
            {/* <div className="relative bottom-[1.5rem] left-6">
              <span className="inline-block px-6 py-2 rounded-full border border-white/40 bg-white/20 text-[1rem] font-regular tracking-[0.3em] text-white">
                Purpose & Impact
              </span>
            </div> */}
            <h1
              data-aos="fade-right"
              className="lg:text-[56px] text-[36px] tracking-tight leading-[1.1] bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent font-normal"
            >
              Purpose & Impact
            </h1>

            {/* RIGHT: Image (below heading level) */}
            {/* <div className="relative">
              <img
                src="/assets/home/session7/Subtract.png"
                className="relative top-0 right-[-20%] w-full object-contain overflow-hidden"
                alt="Mask"
              />
            </div> */}
          </div>

          {/* <h3
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-regular tracking-tight leading-[1.1]"
          >
            Rethinking Aviation. Rebuilding Confidence. <br />
            <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
              Redefining Intelligence.
            </span>
          </h3> */}
          <p className="max-w-xl text-white text-[16px] font-regular leading-relaxed">
            Rethinking Aviation. Rebuilding Confidence. Redefining Intelligence.
          </p>
        </div>

        {/* Sticky Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Left Column: STICKY IMAGE */}
          <div className="lg:sticky lg:top-24 my-2">
            <img
              src="/assets/home/session2/Group 362.png"
              alt="Group 362"
              className="absolute top-[50%] left-[-10rem] translate-y-[-50%] translate-x-[-10%] hidden lg:block w-full h-auto z-0 object-cover overflow-hidden"
            />
            <div
              data-aos="zoom-in-up"
              className="border border-blue-100 border-opacity-10 max-w-[800px] max-h-[800px] bg-gradient-to-b from-blue-200/0 to-blue-700/20 rounded-2xl p-4 md:p-8 shadow-inner"
            >
              <img
                src="/assets/home/session5/main 2.png"
                alt="MACH1 Airport Operations Mockup"
                className="w-full h-auto z-10 object-cover rounded-lg"
              />
            </div>
          </div>
          {/* End of Left Column */}

          {/* Right Column: SCROLLING CONTENT */}
          <div className="lg:px-10 max-w-[600px] lg:ml-[7%] ">
            {/* Feature 1 */}
            <section className="group">
              <h3
                data-aos="fade-up"
                className="lg:text-[36px] text-[20px] font-regular group-hover:text-blue-400 transition-colors"
              >
                Vision and Approach
              </h3>
              <p className="text-white text-[14px] lg:text-[16px] leading-relaxed">
                Since 2019, Wavionix has been committed to transforming aviation
                sectors—not by reinventing the wheel, but by learning from how
                other industries successfully adopt AI and automation.
              </p>
              <div
                className="w-full h-[1px] my-11"
                style={{
                  background:
                    "linear-gradient(90deg, #F1F7FF -1.2%, #0071FF 61.08%, #90C63D 100%)",
                }}
              />
            </section>

            {/* Feature 2 */}
            <section className="group">
              <h3
                data-aos="fade-up"
                className="lg:text-[36px] text-[20px] font-regular group-hover:text-blue-400 transition-colors"
              >
                Research and Discovery
              </h3>
              <p className="text-white text-[14px] lg:text-[16px] leading-relaxed">
                Our journey began with deep, cross-industry research within
                aviation and beyond, uncovering more than 264 recurring
                inefficiencies ranging from safety blind spots to operational
                bottlenecks.
              </p>
              <div
                className="w-full h-[1px] my-10"
                style={{
                  background:
                    "linear-gradient(90deg, #F1F7FF -1.2%, #0071FF 61.08%, #90C63D 100%)",
                }}
              />
            </section>

            {/* Feature 3 */}
            <section className="group">
              <h3
                data-aos="fade-up"
                className="lg:text-[36px] text-[20px] font-regular group-hover:text-blue-400 transition-colors tracking-tight"
              >
                Systemic Challenges
              </h3>

              <p className="text-white text-[14px] lg:text-[16px] leading-relaxed">
                What we uncovered was not merely a lack of technology, but a
                systemic challenge. Many aviation sectors still rely on outdated
                tools with poor UI/UX, minimal automation, and little to no
                real-time decision support. These limitations are compounded by
                resistance to change, budget constraints, and the complexity of
                modernizing legacy systems.
              </p>
              <div
                className="w-full h-[1px] my-6"
                style={{
                  background:
                    "linear-gradient(90deg, #F1F7FF -1.2%, #0071FF 61.08%, #90C63D 100%)",
                }}
              />
            </section>

            {/* Feature 4 */}
            <section className="group">
              <h3
                data-aos="fade-up"
                className="lg:text-[36px] text-[20px] font-regular group-hover:text-blue-400 transition-colors tracking-tight line-height-[0.1]"
              >
                MACH1 was built to bridge that gap.
              </h3>

              <p className="text-white text-[14px] lg:text-[16px] leading-relaxed">
                An AI-powered platform designed not to disrupt—but to enhance.
                It unifies fragmented workflows, reduces reporting fatigue, and
                gives frontline teams the real-time intelligence they need,
                while aligning with ICAO, Transport Canada, and FAA standards.
              </p>
             
              {/* <GradientBorderButton
                animation="zoom-in"
                className="w-full h-[46px] my-4"
              >
                <span className="block w-full text-center px-8 py-3 text-[16px] font-bold">
                  Explore MACH1
                </span>
              </GradientBorderButton> */}
            </section>
          </div>
          {/* End of Right Column */}
        </div>
        {/* End of Sticky Grid Layout */}
      </div>

      {/* Footer CTA */}
      {/* <div className="w-full bottom-0 bg-[#0F79FF] z-50">

        <div className="max-w-[95rem] mx-auto lg:px-6 py-10 flex flex-col md:flex-row items-center justify-between ">
          <p className="text-white/90 text-sm md:text-base text-center md:text-left leading-snug">
            These AI models aren't just tools — they're digital teammates that
            learn and adapt continuously. <br />Together, they guide your airport
            toward a safer, smarter future with every use.
          </p>
          <div className="flex flex-wrap justify-center gap-4 shrink-0 py-4">
            <button className="px-8 py-3 bg-black text-white rounded-full text-[14px] font-medium hover:bg-gray-900 transition-all active:scale-95">
              Request Demo
            </button>
            <button className="px-8 py-3 bg-white text-black rounded-full text-[14px] font-semibold hover:bg-gray-100 transition-all active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PurposeImpact;
