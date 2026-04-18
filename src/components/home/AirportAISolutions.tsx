import React, { useState } from "react";
import GradientBorderButton from "../common/GradientBorderButton";
import ModuleInfoModal from "../common/ModuleInfoModal";

const moduleCards = [
  {
    badge: "Auto-sort and standardize",
    title: "Categorization-to-Decision",
    highlight: "AI Engine",
    description:
      "Automatically classifies incidents, tasks and observations using historical context and airport-specific logic. Trained on 500,000+ aviation entries to remove manual tagging and reduce data entry errors.",
    alignment: "right",
    imageSrc: "/assets/home/session4/1.png",
    learnMoreTag: "Auto-sort. Understand. Act.",
    learnMorePunchline: "Not just tagging. Understanding what to do next.",
    learnMoreContent: [
      "This is where action turns into real-time operations.",
      "MACH1's Categorization AI ensures data is structured and standardized at the moment it is captured, whether through notes or voice input in the field. Every entry is automatically classified using aviation-specific logic, eliminating inconsistent wording, missed details, and duplicate reporting.",
      "This creates a clean data foundation where inputs are not only organized, but immediately usable across operational workflows.",
      "As context builds, the system goes beyond classification. It evaluates inputs against operational rules, thresholds, and historical patterns, understanding what is happening and what needs to happen next.",
      "For example, when consecutive runway light failures are recorded, MACH1 recognizes the sequence, evaluates the number and location of affected lights, and calculates allowable tolerance based on runway dimensions. Once the threshold is exceeded, the system prompts the need to issue a NOTAM.",
      "A pre-built NOTAM template is surfaced instantly, allowing staff to issue it within seconds. The system then automatically creates expiry tracking and links the record to follow-up actions, ensuring nothing is missed.",
      "Because data is structured at the source, these decisions are consistent, traceable, and aligned with operational and regulatory requirements.",
      "MACH1 also connects this data across METAR, NOTAM, safety, and other modules in real time. Weather conditions, operational context, and historical records are inherently linked, creating a single, continuous flow of information rather than disconnected entries.",
      "Each record becomes audit-ready at the moment it is created, with full traceability of actions, timestamps, and linked workflows, eliminating the need for manual reconciliation later.",
      "At the same time, communication and coordination are built into the process. Notifications, alerts, and workflow triggers ensure the right teams are informed instantly, while customizable forms and templates reduce repetitive inputs and form fatigue.",
      "Instead of capturing data and figuring it out later, MACH1 ensures that every input immediately contributes to operational awareness and action.",
      "Clean data at the source leads to accurate interpretation. Accurate interpretation drives reliable decisions.",
      "And that is what enables faster response, stronger compliance, and greater confidence across daily airport operations.",
    ],
  },
  {
    badge: "Actionable foresight",
    title: "Insights &",
    highlight: "Recommendation Engine",
    description:
      "Scans reports and activity to surface emerging trends, flag recurring hazards, expose compliance gaps, and recommend evidence-backed corrective actions based on aviation best practices. It's proactive guidance, not just alerts.",
    alignment: "left",
    imageSrc: "/assets/home/session4/2.png",
    learnMoreTag: "Actionable foresight",
    learnMorePunchline: "Not just insights. Knowing what's coming next.",
    learnMoreContent: [
      "This is where data turns into real-time operational foresight.",
      "For airports looking to go beyond reporting and monitoring, MACH1 introduces real-time operational intelligence across safety, operations, and wildlife management.",
      "The Insights & Recommendation Engine continuously scans reports, activities, and system-wide inputs to identify emerging trends, recurring hazards, and hidden operational risks. Instead of reviewing data after the fact, teams gain visibility into what is developing in real time, across safety events, operational conditions, and wildlife activity.",
      "At the core of this capability is the intelligence board, a unified view that connects multiple operational data points to provide clarity on arrival feasibility, runway utilization, runway availability, and preferred runway usage.",
      "This is powered by MACH1's operational models: Arrival Feasibility Model evaluates whether incoming traffic can be safely and efficiently handled based on current runway status, weather conditions, traffic flow, and operational constraints. DRUM (Dynamic Runway Utilization Model) analyzes real-time runway usage patterns to highlight optimal runway allocation and efficiency opportunities. RAM (Runway Availability Model) tracks runway status, restrictions, and dependencies to provide a clear picture of operational capacity.",
      "Safety trends and wildlife intelligence are layered into this same view, ensuring decisions are made with full operational context, not isolated metrics.",
      "But visibility alone is not enough.",
      "MACH1 translates complex data into clear, actionable insights that guide decision-making across all levels. From executives planning strategy to operations teams managing daily resources, the system highlights what the data means and what actions should follow.",
      "The engine identifies recurring safety patterns within your airport, helping teams detect risks earlier and act before they escalate. At the same time, it analyzes wildlife activity in real time using the WARM model, assessing risk levels based on species behavior, movement patterns, environmental conditions, and historical activity.",
      "This enables proactive mitigation, not just response, improving both airside safety and operational planning.",
      "MACH1 also surfaces best practices based on historical trends and operational outcomes, supporting consistent and informed decision-making across teams.",
      "Because all insights are built on structured, connected data, every recommendation is grounded in real operational context, not isolated alerts. The result is a system that moves beyond dashboards and notifications, delivering real-time safety intelligence, wildlife awareness, and operational foresight that drives faster decisions, stronger compliance, and greater confidence across the airport.",
      "Grounded in aviation data and practices, all MACH1 models incorporate inputs such as METAR/TAF, NOTAMs, runway configuration, runway surface conditions, traffic flow, species-defined risk scores, migration patterns, and wildlife observations, aligned with ICAO, Transport Canada, and FAA operational guidance.",
      "From data to foresight, enabling safer, smarter, and more proactive operations.",
    ],
  },
  {
    badge: "Ask in plain language",
    title: "AI Conversation",
    highlight: "Engine",
    description:
      "A chat-style co-pilot for your operations: query records, request summaries, or trigger workflows using everyday language with answers grounded in your airport's data and context.",
    alignment: "right",
    imageSrc: "/assets/home/session4/3.png",
    learnMoreTag: "Context-aware answers",
    learnMorePunchline: "Not just answers. Reasoning you can act on.",
    learnMoreContent: [
      "This is where questions turn into confident decisions.",
      "To make operational intelligence accessible across all levels, MACH1 introduces a Conversational Decision Engine built specifically for aviation environments.",
      "This is not a generic chatbot layered over documents. It is a context-aware decision and execution capability embedded directly into your airport's operations.",
      "In real-world scenarios, teams often face moments where they need to act quickly but require clarity. There is no time to search through manuals, verify multiple sources, or wait for responses. Whether it's confirming a procedure, validating a decision, or understanding the next step, delays introduce risk.",
      "MACH1 is designed to eliminate that gap.",
      "Users can ask questions in plain language and receive immediate, context-aware answers aligned with their airport's data, procedures, and operational workflows. The system understands not just the question, but the environment in which it is being asked.",
      "Built on aviation-specific knowledge, including ICAO, FAA, EASA, Transport Canada, TSB, and NTSB guidance, the engine provides responses that are both relevant and operationally grounded. More importantly, it explains the reasoning behind each answer, allowing users to understand the logic and apply it with confidence.",
      "But it goes beyond answering questions.",
      "MACH1 actively supports execution. It can generate SOPs, checklists, summaries, and short operational guides tailored to the situation, helping teams move from understanding to action without delay. It also supports workflow triggers, ensuring that decisions are not just discussed, but carried forward into operations.",
      "As teams interact with the system, it continuously aligns with your airport's documents, workflows, and operational patterns. Over time, it becomes a living knowledge layer, capturing not just information, but decisions and the reasoning behind them.",
      "This ensures that operational knowledge is not lost when staff move on. Instead, it is retained, refined, and made accessible across the organization.",
      "Embedded within daily workflows, the Conversational Decision Engine reduces dependency on manual lookup, minimizes delays, and helps standardize execution across teams and departments.",
      "The result is a system where knowledge is always available, decisions are supported in real time, and actions are carried out with clarity and confidence.",
      "Not just answering questions, enabling better decisions, every time.",
    ],
  },
  {
    badge: "Connects the dots across time and teams",
    title: "Pattern Recognition",
    highlight: "Model",
    description:
      "Trained on thousands of ops reports, this model detects subtle, long-term trends, repeat inspection gaps, cross-department anomalies, and slow-building risks and surfaces early warnings so you can act before small issues escalate.",
    alignment: "left",
    imageSrc: "/assets/home/session4/4.png",
    learnMoreTag: "Connects patterns across time, teams, and systems",
    learnMorePunchline: "Not just patterns. Seeing what others miss.",
    learnMoreContent: [
      "This is where hidden patterns become visible.",
      "In complex airport environments, risks rarely appear as single events. They build over time across shifts, departments, locations, and conditions, often going unnoticed until they escalate.",
      "MACH1's Operational Pattern Intelligence is designed to detect these signals early.",
      "By continuously analyzing structured data across safety reports, inspections, operations logs, wildlife activity, maintenance records, and more, the system identifies subtle trends, recurring gaps, and cross-system anomalies that are difficult to detect through manual review.",
      "This includes: repeating inspection findings across locations or time periods, cross-department patterns that indicate coordination gaps, slow-building risks that do not trigger immediate alerts, and behavioral or environmental trends influencing operations.",
      "Because MACH1 operates on structured, connected data, it is able to link patterns across modules rather than analyzing them in isolation. This allows the system to understand how small signals combine into larger operational risks.",
      "Over time, this creates a continuously improving intelligence layer where the system not only reacts to events but learns from them.",
      "Instead of relying on periodic reviews or manual analysis, teams gain early visibility into developing issues and can take proactive action before they escalate.",
      "This shifts operations from reactive response to informed prevention.",
      "It also strengthens long-term decision-making by providing a clearer understanding of how risks evolve, how patterns repeat, and where interventions create the most impact.",
      "The result is a system that sees beyond individual events, revealing the underlying patterns that drive them.",
      "Not just detecting issues, uncovering the patterns behind them.",
    ],
  },
];

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
      className="mb-6 flex w-full flex-col items-center rounded-3xl border border-white/10 px-5 py-10 md:mb-8 md:flex-row md:px-6 md:py-12 lg:sticky lg:px-20 lg:pl-32"
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
  const [selectedModule, setSelectedModule] = useState<
    (typeof moduleCards)[number] | null
  >(null);

  return (
    <div
      data-header-tone="dark"
      className="bg-[#020817] py-24 font-sans text-white md:py-36"
    >
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
            understanding inspections, NOTAMs, incidents, and wildlife risks
            with unmatched operational precision.
          </span>
        </p>
      </div>

      <div className="site-shell">
        {moduleCards.map((card, index) => (
          <ModuleCard
            key={`${card.title}-${card.highlight}`}
            {...card}
            index={index}
            onCtaClick={() => setSelectedModule(card)}
          />
        ))}
      </div>

      <ModuleInfoModal
        moduleInfo={selectedModule}
        open={Boolean(selectedModule)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedModule(null);
          }
        }}
      />
    </div>
  );
}
