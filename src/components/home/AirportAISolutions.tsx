import React from "react";
import GradientBorderButton from "../common/GradientBorderButton";

const ModuleCard = ({
  badge,
  title,
  highlight,
  description,
  alignment = "left",
  imageSrc,
  index = 0,
}) => {
  const isRight = alignment === "right";

  return (
    <div
      style={{
        // top: `${140 + index * 40}px`,
        top: `140px`,
        backgroundImage: `url(${
          index === 0
            ? "/assets/home/session4/1bg.png"
            : "/assets/home/session4/4bg.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      /*         ${isRight
        ? "px-6 md:pl-32 md:pr-20"
        : "px-6 md:pl-20 md:pr-32"} */
      className="site-shell sticky mb-8 flex w-full flex-col items-center rounded-3xl border border-white/10 px-6 py-12 lg:px-20 lg:pl-32 md:flex-row"
    >
      {/* Background Glow Effect */}
      {/* <div className="absolute -inset-24 bg-blue-500/10 blur-[100px] pointer-events-none" /> */}

      {isRight && (
        <div className="flex-1 hidden md:block">
          {" "}
          <img
            src={imageSrc}
            alt="Module Visual"
            data-aos="zoom-in"
            className="w-[20rem] h-[20rem] object-cover"
          />
        </div>
      )}

      <div className={`flex-1`}>
        {/* <span className="inline-block px-4 py-1 font-medium rounded-full border-[0.2px] border-[#A4A1A1] bg-[#F4F9EC1A] text-[12px] text-white">
          {badge}
        </span> */}
        <div
          className="
    h-[27px]
    bg-[#F4F9EC1A]
    border
    border-[#A4A1A1]
    rounded-full
    px-8
    py-5
    lg:py-2
    shadow-[inset_0px_2px_10px_0px_#B5D97D33]
    inline-flex
    items-center
    gap-2
    mb-2
  "
        >
          <span className="text-[12px] font-medium text-white">{badge}</span>
        </div>

        <h2
          data-aos="fade-up"
          className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text py-2 text-[28px] font-regular leading-[1.08] text-transparent sm:text-[36px]"
        >
          {title}
          <br />
          {/* <div className="relative z-10">
            <h4 className="text-2xl font-light leading-tight mb-4">
              {feature.title.split(" ").map((word, i) => (
                <>
                  <span
                    key={i}
                    className={
                      i === 1 && feature.variant !== "blue"
                        ? "block bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent"
                        : "hidden"
                    }
                  >
                    {word}
                  </span>
                  <span
                    key={i}
                    className={
                      i !== 1 && feature.variant !== "blue"
                        ? "block bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent"
                        : "hidden"
                    }
                  >
                    {word}
                  </span>
                  <span
                    key={i}
                    className={feature.hasButton ? "block" : "hidden"}
                  >
                    {word}
                  </span>
                </>
              ))}
            </h4>
          </div> */}
          <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent font-normal">
            {highlight}
          </span>
        </h2>
        <p className="copy-balanced max-w-xl text-[16px] font-regular text-white">
          {description}
        </p>
        {/* <button
          data-aos="fade-left"
          className="mt-4 px-10 w-full md:w-[14rem] py-2 bg-[#0071FF] hover:bg-[#0071FF]/80 text-white rounded-full font-regular transition-all shadow-lg shadow-[#0071FF]/20"
        >
          Learn More
        </button> */}

        {/* <GradientBorderButton
          className="mt-4 px-10 w-full md:w-[14rem] py-2 bg-[#0071FF] hover:bg-[#0071FF]/80 text-white rounded-full font-regular transition-all shadow-lg shadow-[#0071FF]/20"
        >
          Learn More
        </GradientBorderButton> */}

        <GradientBorderButton
  animation="fade-left"
  className="mt-4 w-full md:w-[14rem] h-[46px]"
>
  <span className="px-10 py-2 block text-[16px] font-regular">
    Learn More
  </span>
</GradientBorderButton>


      </div>

      {!isRight && (
        <div className="flex-1 hidden md:flex justify-center items-center">
          {/* Replace with your specific SVG or 3D asset */}
          {/* <div className="w-64 h-64 bg-gradient-to-t from-blue-500/20 to-cyan-500/20 rounded-lg animate-pulse border border-white/10" > */}
          <img
            src={imageSrc}
            data-aos="fade-up"
            alt="Module Visual"
            className="w-[20rem] h-[20rem] object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default function AirportAISolutions() {
  return (
    // <div className="min-h-screen bg-[gradient #B0CCF000 #005BCD] text-white py-20 px-6 font-sans">
    <div data-header-tone="dark" className="bg-[#020817] text-white py-36 font-sans">
      <img
        src="/assets/home/session4/Group 204.png"
        className="w-full h-[50rem] hidden lg:block m-0 absolute"
        alt=""
      />
      {/* Header Section */}
      <div className="flex justify-center">
        <div
          data-aos="fade-up"
          className="
              mt-[4.37rem] h-[38px] w-[184px]
              flex items-center justify-center
              bg-[#F4F9EC1A] 
              border-[0.2px] 
              border-[#A4A1A1] 
              rounded-full 
              mb-[1rem]
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
            Core AI modules
          </h1>
        </div>
      </div>

      <div className="mb-20 text-center">
        {/* <div
          data-aos="fade-up"
          className="inline-block px-4 py-1 rounded-full border border-white/40 bg-gray-800/80 text-[10px] uppercase tracking-[0.3em] text-white mb-8"
        >
          Core AI modules{" "}
        </div> */}

        <h1 className="title-balanced mt-6 mb-4 px-6 text-[38px] font-regular lg:text-[56px]">
          Our AI solutions
        </h1>
        <p className="copy-balanced mx-auto max-w-5xl px-10 text-center text-[16px] font-regular text-white">
          MACH1 runs on the world's first AI model built exclusively for airport
          operations and safety. Unlike general-purpose AIs, MACH1 speaks
          airport -
          <span className="text-gray-200">
            " understanding inspections, NOTAMs, incidents, and wildlife risks
            with unmatched operational precision."
          </span>
          .
        </p>
      </div>

      <div>
        {/* Cards Section */}
        <ModuleCard
          badge="Auto-sort and standardize"
          title="AI Categorization"
          highlight="Engine"
          description="Automatically classifies incidents, tasks and observations using historical context and airport-specific logic. Trained on 500,000+ aviation entries to remove manual tagging and reduce data entry errors."
          alignment="right"
          imageSrc={"/assets/home/session4/1.png"}
          index={0}
        />
        <ModuleCard
          badge="Actionable foresight"
          title="Insights &"
          highlight="Recommendation Engine"
          description="Scans reports and activity to surface emerging trends, flag recurring hazards, expose compliance gaps, and recommend evidence-backed corrective actions based on aviation best practices. It’s proactive guidance, not just alerts."
          alignment="left"
          imageSrc={"/assets/home/session4/2.png"}
          index={1}
        />
        <ModuleCard
          badge="Ask in plain language"
          title="AI Conversation"
          highlight="Engine"
          description="A chat-style co-pilot for your operations: query records, request summaries, or trigger workflows using everyday language with answers grounded in your airport/'s data and context."
          alignment="right"
          imageSrc={"/assets/home/session4/3.png"}
          index={2}
        />
        <ModuleCard
          badge="Connects the dots across time and teams"
          title="Pattern Recognition"
          highlight="Model"
          description="Trained on thousands of ops reports, this model detects subtle, long term trends repeat inspection gaps, cross department anomalies, and slow building risks and surfaces early warnings so you can act before small issues escalate."
          alignment="left"
          imageSrc={"/assets/home/session4/4.png"}
          index={3}
        />
      </div>
    </div>
  );
}
