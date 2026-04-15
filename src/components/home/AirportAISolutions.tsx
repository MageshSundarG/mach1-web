import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GradientBorderButton from "../common/GradientBorderButton";
import { navigateWithScrollTop } from "@/lib/navigateWithScrollTop";

const ModuleCard = ({
  badge,
  title,
  highlight,
  description,
  alignment = "left",
  imageSrc,
  index = 0,
  onCtaClick,
}) => {
  const isRight = alignment === "right";

  return (
    <div
      style={{
        top: "140px",
        backgroundImage: `url(${
          index === 0
            ? "/assets/home/session4/1bg.png"
            : "/assets/home/session4/4bg.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        zIndex: index + 1,
      }}
      className="sticky mb-6 flex w-full flex-col items-center rounded-3xl border border-white/10 px-5 py-10 md:mb-8 md:flex-row md:px-6 md:py-12 lg:px-20 lg:pl-32"
    >
      {isRight && (
        <div className="mb-8 flex w-full justify-center md:mb-0 md:block md:flex-1">
          <img
            src={imageSrc}
            alt="Module Visual"
            data-aos="zoom-in"
            loading="lazy"
            decoding="async"
            className="h-[14rem] w-[14rem] object-cover md:h-[20rem] md:w-[20rem]"
          />
        </div>
      )}

      <div className="flex-1">
        <div
          className="
            mb-2 inline-flex h-[27px] items-center gap-2 rounded-full border border-[#A4A1A1]
            bg-[#F4F9EC1A] px-8 py-5 shadow-[inset_0px_2px_10px_0px_#B5D97D33] lg:py-2
          "
        >
          <span className="text-[12px] font-medium text-white">{badge}</span>
        </div>

        <h2
          data-aos="fade-up"
          className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text py-2 text-[28px] font-regular leading-tight text-transparent sm:text-[36px]"
        >
          {title}
          <br />
          <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text font-normal text-transparent">
            {highlight}
          </span>
        </h2>

        <p className="max-w-xl text-[16px] font-regular leading-relaxed text-white">
          {description}
        </p>

        <GradientBorderButton
          className="mt-4 h-[46px] w-full md:w-[14rem]"
          onClick={onCtaClick}
        >
          <span className="block px-10 py-2 text-[16px] font-regular">
            Learn More
          </span>
        </GradientBorderButton>
      </div>

      {!isRight && (
        <div className="mt-8 flex w-full items-center justify-center md:mt-0 md:flex-1">
          <img
            src={imageSrc}
            data-aos="fade-up"
            alt="Module Visual"
            loading="lazy"
            decoding="async"
            className="h-[14rem] w-[14rem] object-cover md:h-[20rem] md:w-[20rem]"
          />
        </div>
      )}
    </div>
  );
};

export default function AirportAISolutions() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div data-header-tone="dark" className="bg-[#020817] py-24 md:py-36 font-sans text-white">
      <img
        src="/assets/home/session4/Group 204.png"
        className="absolute m-0 hidden h-[50rem] w-full lg:block"
        alt=""
        loading="lazy"
        decoding="async"
      />

      <div className="site-shell flex justify-center">
        <div
          data-aos="fade-up"
          className="
            mt-[4.37rem] mb-[1rem] flex h-[38px] w-[184px] items-center justify-center rounded-full
            border-[0.2px] border-[#A4A1A1] bg-[#F4F9EC1A] shadow-[inset_0px_2px_10px_0px_#B5D97D33]
          "
        >
          <h1 className="text-center text-[16px] leading-[16px] font-regular opacity-100">
            Core AI modules
          </h1>
        </div>
      </div>

      <div className="site-shell mb-14 text-center md:mb-20">
        <h1 className="mt-6 mb-4 px-2 text-[34px] font-regular leading-tight md:px-6 md:text-[38px] lg:text-[56px]">
          Our AI solutions
        </h1>
        <p className="mx-auto max-w-5xl px-2 text-center text-[15px] font-regular text-white md:px-10 md:text-[16px]">
          MACH1 runs on the world's first AI model built exclusively for airport
          operations and safety. Unlike general-purpose AIs, MACH1 speaks
          airport -
          <span className="text-gray-200">
            {" "}
            " understanding inspections, NOTAMs, incidents, and wildlife risks
            with unmatched operational precision."
          </span>
          .
        </p>
      </div>

      <div className="site-shell">
        <ModuleCard
          badge="Auto-sort and standardize"
          title="AI Categorization"
          highlight="Engine"
          description="Automatically classifies incidents, tasks and observations using historical context and airport-specific logic. Trained on 500,000+ aviation entries to remove manual tagging and reduce data entry errors."
          alignment="right"
          imageSrc="/assets/home/session4/1.png"
          index={0}
          onCtaClick={() => navigateWithScrollTop(navigate, location.pathname, "/solutions")}
        />
        <ModuleCard
          badge="Actionable foresight"
          title="Insights &"
          highlight="Recommendation Engine"
          description="Scans reports and activity to surface emerging trends, flag recurring hazards, expose compliance gaps, and recommend evidence-backed corrective actions based on aviation best practices. Itâ€™s proactive guidance, not just alerts."
          alignment="left"
          imageSrc="/assets/home/session4/2.png"
          index={1}
          onCtaClick={() => navigateWithScrollTop(navigate, location.pathname, "/solutions")}
        />
        <ModuleCard
          badge="Ask in plain language"
          title="AI Conversation"
          highlight="Engine"
          description="A chat-style co-pilot for your operations: query records, request summaries, or trigger workflows using everyday language with answers grounded in your airport/'s data and context."
          alignment="right"
          imageSrc="/assets/home/session4/3.png"
          index={2}
          onCtaClick={() => navigateWithScrollTop(navigate, location.pathname, "/solutions")}
        />
        <ModuleCard
          badge="Connects the dots across time and teams"
          title="Pattern Recognition"
          highlight="Model"
          description="Trained on thousands of ops reports, this model detects subtle, long term trends repeat inspection gaps, cross department anomalies, and slow building risks and surfaces early warnings so you can act before small issues escalate."
          alignment="left"
          imageSrc="/assets/home/session4/4.png"
          index={3}
          onCtaClick={() => navigateWithScrollTop(navigate, location.pathname, "/solutions")}
        />
      </div>
    </div>
  );
}
