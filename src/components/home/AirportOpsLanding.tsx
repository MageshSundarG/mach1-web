import React from "react";
import GradientBorderButton from "../common/GradientBorderButton";

const AirportOpsLanding = () => {
  return (
    <div data-header-tone="dark" className="bg-[#020817] font-sans text-white selection:bg-blue-500/30">
      <div className="relative">
        <div className="mb-14 md:mb-20">
          <div className="site-shell overflow-hidden">
            <div
              data-aos="fade-up"
              className="
                mt-[4.37rem] mb-[2.5rem] flex h-[38px] w-[241px] items-center justify-center rounded-full
                border-[0.2px] border-[#A4A1A1] bg-[#F4F9EC1A] shadow-[inset_0px_2px_10px_0px_#B5D97D33]
              "
            >
              <h1 className="text-center text-[16px] leading-[16px] font-regular opacity-100">
                Operational Intelligence
              </h1>
            </div>
          </div>

          <div className="site-shell relative">
            <div className="max-w-[60rem] 2xl:pl-20">
              <h3
                data-aos="fade-up"
                className="text-[34px] font-regular leading-tight tracking-tight md:text-[48px] lg:text-[56px]"
              >
                Built for Real-Time <br />
                <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
                  Airport Operations
                </span>
              </h3>
              <p className="mt-6 max-w-xl text-[15px] font-regular leading-relaxed text-white md:mt-8 md:text-[16px]">
                From mobile-first workflows to voice notes and automated
                transcripts, MACH1 ensures every insight is captured, categorized,
                and actionable.
              </p>
            </div>

            <div className="absolute right-0 top-0 hidden overflow-hidden 2xl:block">
              <img
                src="/assets/home/session7/Subtract.png"
                className="object-contain"
                alt="MASK"
              />
            </div>
          </div>
        </div>

        <div className="site-shell grid grid-cols-1 items-start gap-10 pb-16 md:pb-20 lg:grid-cols-2 lg:gap-0">
          <div className="lg:sticky lg:top-24">
            <img
              src="/assets/home/session2/Group 362.png"
              alt="Group 362"
              className="absolute left-[-8rem] top-[50%] hidden h-auto w-full translate-x-[-10%] translate-y-[-50%] overflow-hidden object-cover lg:block"
            />
            <div
              data-aos="zoom-in-up"
              className="rounded-2xl border border-blue-100 border-opacity-10 bg-gradient-to-b from-blue-200/0 to-blue-700/20 p-4 shadow-inner md:p-8"
            >
              <img
                src="/assets/home/session2/main 1.png"
                alt="Airport Dashboard Mockup"
                className="z-10 h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="lg:pl-20">
            <section className="group">
              <h3 className="text-[24px] font-regular transition-colors group-hover:text-blue-400 md:text-[36px]">
                Mobile-First Application
              </h3>
              <p className="text-[15px] font-regular leading-relaxed text-white md:text-[14px]">
                MACH1's responsive design adapts across all devices, but our
                dedicated mobile app takes it further â€” enabling offline
                inspections, voice-to-text logging, and one-touch hazard
                reporting from the airside. <br />
                Whether you're in the terminal, on the apron, or responding to a
                wildlife strike, MACH1 travels with you.
              </p>
              <div
                className="my-10 h-[1px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #F1F7FF -1.2%, #0071FF 61.08%, #90C63D 100%)",
                }}
              />
            </section>

            <section className="group">
              <h3 className="mb-5 text-[24px] font-regular transition-colors group-hover:text-blue-400 md:mb-6 md:text-[36px]">
                Voice Notes
              </h3>
              <p className="text-[15px] font-regular leading-relaxed text-white md:text-[14px]">
                Quickly capture findings, hazards, or incident summaries using
                natural voice â€” right from the field. MACH1 AI interprets and
                categorizes your voice input, linking it to the correct
                workflow, task, or report instantly. Ideal for inspectors, duty
                managers, and maintenance personnel on the move.
              </p>
              <div
                className="my-10 h-[1px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #F1F7FF -1.2%, #0071FF 61.08%, #90C63D 100%)",
                }}
              />
            </section>

            <section className="group">
              <h3 className="text-[24px] font-regular tracking-tight transition-colors group-hover:text-blue-400 md:text-[36px]">
                AI Transcribe & Summarize
              </h3>
              <p className="mt-4 text-[15px] font-regular leading-relaxed text-white md:text-[14px]">
                From incident briefings to safety meetings â€” MACH1 automatically
                transcribes voice inputs and meeting recordings. Then, it
                summarizes them into actionable records, sorted by topic and
                tagged by operational category. <br />
                No more lost insights or manual minutes â€” just structured
                intelligence, ready to act on.
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="bottom-0 z-50 w-full bg-[#0F79FF]">
        <div className="site-shell flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:py-10">
          <p className="text-center text-sm leading-snug text-white/90 md:text-left md:text-base">
            These AI models aren't just tools â€” they're digital teammates that
            learn and adapt continuously. <br />
            Together, they guide your airport toward a safer, smarter future
            with every use.
          </p>
          <div className="shrink-0 flex flex-wrap justify-center gap-4 py-4">
            <GradientBorderButton className="h-[48px]">
              <span className="rounded-full bg-black px-8 py-3.5 text-[14px] font-medium">
                Request Demo
              </span>
            </GradientBorderButton>

            <button className="rounded-full bg-white px-8 py-3 text-[14px] font-semibold text-black transition-all hover:bg-gray-100 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportOpsLanding;
