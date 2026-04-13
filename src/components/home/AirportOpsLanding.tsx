import React from "react";
import GradientBorderButton from "../common/GradientBorderButton";

const AirportOpsLanding = () => {
  return (
    <div data-header-tone="dark" className="bg-[#020817] text-white font-sans selection:bg-blue-500/30">
      {/* Main Container */}
      <div className="relative w-full">
        {/* Background Glows */}
        {/* <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" /> */}
        {/* <div className="absolute top-1/3 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" /> */}

        {/* Header Section */}
        <div className="mb-20">
          {/* <span className="inline-block px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-8">
            
          </span> */}
          {/* <div className="flex  flex-col h-full mx-auto">
            <span className="inline-block px-4 py-1 rounded-full border border-white/40 bg-gray/80 text-[10px] uppercase tracking-[0.3em] text-white mb-8">
              Operational Intelligence
            </span>
            <img
              src="/assets/home/session7/Subtract.png"
              className="w-full h-full max-w-7xl object-contain"
              alt=""
            />
          </div> */}



          {/* RIGHT: Image (below heading level) */}
          {/* <div className="relative">
              <img
                src="/assets/home/session7/Subtract.png"
                className="top-10 w-full object-contain overflow-hidden"
                alt="Mask"
              />
            </div> */}


          <div className="site-shell overflow-hidden">
            {/* LEFT: Heading */}
            {/* <div className="pb-10">
              <span className="inline-block px-6 py-2 rounded-full border border-white/40 bg-white/20 text-[1rem] font-regular tracking-[0.3em] text-white">
                Operational Intelligence
              </span>
            </div> */}

            <div
              data-aos="fade-up"
              className="
              mt-[4.37rem] h-[38px] w-[241px]
              flex items-center justify-center
              bg-[#F4F9EC1A] 
              border-[0.2px] 
              border-[#A4A1A1] 
              rounded-full 
              mb-[2.5rem]
              shadow-[inset_0px_2px_10px_0px_#B5D97D33]"
            >
              <h1
                className="font-regular
                text-[16px]
                leading-[16px]
                text-center
                opacity-100
              "
              >
                Operational Intelligence
              </h1>
            </div>
          </div>



          <div className="site-shell relative">
            <div className="max-w-[60rem]">
              <h3
                data-aos="fade-up"
                className="title-balanced text-[42px] font-regular lg:text-[56px]"
              >
                Built for Real-Time <br />
                <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
                  Airport Operations
                </span>
                {/* <span className="text-emerald-400 font-normal">Operations</span> */}
              </h3>
              <p className="copy-balanced mt-8 max-w-xl text-[16px] font-regular text-white">
                From mobile-first workflows to voice notes and automated
                transcripts, MACH1 ensures every insight is captured, categorized,
                and actionable.
              </p>
            </div>

            <div className="pointer-events-none absolute right-0 top-0 hidden overflow-visible 2xl:block">
              <img
                src="/assets/home/session7/Subtract.png"
                className="w-[42rem] max-w-none translate-x-[18.2%] object-contain"
                alt="MASK"
              />
            </div>



          </div>


        </div>

        {/* Sticky Grid Layout */}
        <div className="site-shell grid grid-cols-1 items-start pb-20 lg:grid-cols-2">
          {/* Left Column: STICKY IMAGE */}
          {/* Outer Glow */}
          {/* <div className="absolute -inset-0.5 bg-gradient(180deg, rgba(176, 204, 240, 0) 0%, rgba(0, 91, 205, 0.2) 100%) rounded-2xl blur-xl opacity-50"></div> */}

          <div className="lg:sticky lg:top-24">
            <img
              src="/assets/home/session2/Group 362.png"
              alt="Group 362"
              className="absolute top-[50%] left-[-8rem] translate-y-[-50%] translate-x-[-10%] hidden lg:block w-full h-auto z-0 object-cover overflow-hidden"
            />
            <div
              data-aos="zoom-in-up"
              className="border border-blue-100 border-opacity-10 bg-gradient-to-b from-blue-200/0 to-blue-700/20 rounded-2xl p-4 md:p-8 shadow-inner"
            >
              <img
                src="/assets/home/session2/main 1.png"
                // src="/assets/home/session2/st.jpeg"
                alt="Airport Dashboard Mockup"
                className="w-full h-auto z-10 object-cover rounded-lg"
              />
            </div>
          </div>
          {/* End of Left Column */}

          {/* Right Column: SCROLLING CONTENT */}
          <div className="lg:pl-20">
            {/* Feature 1 */}
            <section className="group">
              <h3 className="elegant-transition text-[28px] font-regular leading-[1.12] group-hover:text-blue-400 md:text-[36px]">
                Mobile-First Application
              </h3>
              <p className="copy-balanced text-[14px] font-regular text-white">
                MACH1's responsive design adapts across all devices, but our
                dedicated mobile app takes it further — enabling offline
                inspections, voice-to-text logging, and one-touch hazard
                reporting from the airside. <br />
                Whether you're in the terminal, on the apron, or responding to a
                wildlife strike, MACH1 travels with you.
              </p>
              <div
                className="w-full h-[1px] my-10"
                style={{
                  background:
                    "linear-gradient(90deg, #F1F7FF -1.2%, #0071FF 61.08%, #90C63D 100%)",
                }}
              />
            </section>

            {/* Feature 2 */}
            <section className="group">
              <h3 className="elegant-transition mb-6 text-[28px] font-regular leading-[1.12] group-hover:text-blue-400 md:text-[36px]">
                Voice Notes
              </h3>
              <p className="copy-balanced text-[14px] font-regular text-white">
                Quickly capture findings, hazards, or incident summaries using
                natural voice — right from the field. MACH1 AI interprets and
                categorizes your voice input, linking it to the correct
                workflow, task, or report instantly. Ideal for inspectors, duty
                managers, and maintenance personnel on the move.
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
              <h3 className="elegant-transition text-[28px] font-regular leading-[1.12] tracking-tight group-hover:text-blue-400 md:text-[36px]">
                AI Transcribe & Summarize
              </h3>
              {/* <span className="md:text-[30px] text-[20px] font-light leading-[0.5]">(under development)</span> */}

              <p className="copy-balanced mt-4 text-[14px] font-regular text-white">
                From incident briefings to safety meetings — MACH1 automatically
                transcribes voice inputs and meeting recordings. Then, it
                summarizes them into actionable records, sorted by topic and
                tagged by operational category. <br />
                No more lost insights or manual minutes — just structured
                intelligence, ready to act on.
              </p>
            </section>
          </div>
          {/* End of Right Column */}
        </div>
        {/* End of Sticky Grid Layout */}
      </div>
      {/* <div className="relative">
        <img
          src="/assets/home/session8/Group 204.png"
          className="relative top-0 left-[-7rem] z-0 object-contain"
          alt="image"
        />
      </div> */}
      {/* Footer CTA */}
      <div className="w-full bottom-0 bg-[#0F79FF] z-50">

        <div className="site-shell flex flex-col items-center justify-between py-10 md:flex-row">
          <p className="text-white/90 text-sm md:text-base text-center md:text-left leading-snug">
            These AI models aren't just tools — they're digital teammates that
            learn and adapt continuously. <br />Together, they guide your airport
            toward a safer, smarter future with every use.
          </p>
          <div className="flex flex-wrap justify-center gap-4 shrink-0 py-4">
            {/* <button className="px-8 py-3 bg-black text-white rounded-full text-[14px] font-medium hover:bg-gray-900 transition-all active:scale-95">
              Request Demo
            </button> */}
            <GradientBorderButton className="h-[48px]">
              <span className="px-8 py-3.5 text-[14px] font-medium bg-black rounded-full">
                Request Demo
              </span>
            </GradientBorderButton>

            <button className="px-8 py-3 bg-white text-black rounded-full text-[14px] font-semibold hover:bg-gray-100 transition-all active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportOpsLanding;
