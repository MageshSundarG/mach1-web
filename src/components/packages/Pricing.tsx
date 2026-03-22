import React from "react";

const PricingPage = () => {
  const plans = [
    {
      name: "Foundation",
      subtitle: "Small Airports, Airlines, GSE & MRO",
      description:
        "Ops + Safety platform for foundational operational & safety excellence",
      buttonText: "Start Demo",
      buttonStyle: "border-[1px] border-white text-white hover:bg-white/10",
      bgColor: "bg-[#0A2463]",
      sections: [
        {
          title: "INCLUDES",
          features: [
            // "Operations",
            {
              main: "Safety",
              sub: [
                "Risk & Hazard Intelligence (HIRA)",
                "Visual RCA (5 Whys & Cause Mapping)",
                "Risk Register",
              ],
            },
            "Forms & Checklists",
            "Resource Library",
            "Incident Reporting",
            "Work Orders, Tasks & Corrective Actions",
          ],
        },
        {
          title: "KEY FEATURES",
          features: [
            "NOTAMs, METAR/TAF Alerts & Library",
            "Dynamic Status Board (6 Tiles)",
            "Surveys",
            "Safety Reviews & Meetings (Add-on)",
            "ESRI Integrated Mapping (Basic)",
            "Basic Audit trail / activity logs",
          ],
        },
        {
          title: "AI-POWERED FEATURES ( Addon )",
          features: [
            "Categorization AI",
            "Safety Dashboard (AI Insight Options)",
            "Risk trends & hotspot visibility",
            "AI-assisted summaries (Add on)",
          ],
        },
      ],
    },
    {
      name: "Scale",
      subtitle: "Regional & Small City Airports",
      description:
        "Ops & Safety with medium-high operational complexity and AI-value",
      buttonText: "Get Started",
      buttonStyle:
        "border-[1px] border-white bg-[#98C13F] text-white hover:bg-[#86ad35]",
      /* "border-[1px] border-white text-white hover:bg-white/10", */
      bgColor: "bg-[#1763FA]",
      isFeatured: true,
      sections: [
        {
          title: "INCLUDES",
          features: [
            {
              main: "Operations & Safety",
              sub: [
                "Risk & Hazard Intelligence (HIRA)",
                "Visual RCA (5 Whys & Cause Mapping)",
                "Advanced Ops Tools",
                "Wildlife",
                "Inspection (Online & Offline)",
                "NOTAMs, Inspection, Investigation checklist library",
              ],
            },
          ],
        },
        {
          title: "KEY FEATURES",
          features: [
            "Geo-Tracked Inspections",
            "Smart AI Dashboards (Ops, Safety, Wildlife)",
            "Dynamic Status Board (6 or 9 Tiles, 12 Add-on)",
            "Survey & Meeting",
            "Wildlife Risk Insights (AI-assisted)",
            "Trend & pattern visibility across Ops, Safety & Wildlife",
            "Audit trail / activity logs",
          ],
        },
        {
          title: "AI-POWERED FEATURES ( Addon )",
          features: [
            "Conversational AI",
            "Categorization Model",
            "Insights & Recommendations",
            "Predictive risk & prioritization signals",
            "AI daily summaries",
          ],
        },
      ],
    },
    {
      name: "Command",
      subtitle: "City & Government Agencies",
      description:
        "Enterprise-grade for multi-airport, multi-department operations",
      buttonText: "Lets Talk",
      buttonStyle: "border-[1px] border-white text-white hover:bg-white/10",
      bgColor: "bg-[#0A2463]",
      sections: [
        {
          title: "INCLUDES",
          features: [
            "Operations, Safety & Emergency",
            "Inspection (Online & Offline)",
            "Wildlife",
            "Work Order (Basic, Full Preventative Maintenance add on)",
            "Recommendations & Crowdsourced Intelligence",
            "Mass Communication (Phone + App)",
            "Emergency Exercises & Playbooks",
            "Emergency Response Tracking",
          ],
        },
        {
          title: "KEY FEATURES",
          features: [
            "Smart Dashboards (Ops, Safety, Emergency)",
            "Dynamic Status Board (9 Tiles. 12 Tiles add on)",
            "ESRI Integrated Mapping (Advanced, Weather, Environment, Assets)",
            "Emergency Timelines & After-Action Insights",
            "Cross-department situational awareness",
            "Maintenance & Wildlife intelligence",
            "Ops Control Centre (KPI-based)",
          ],
        },
        {
          title: "AI-POWERED FEATURES ( Addon )",
          features: [
            "Full AI Suite",
            "Explainable AI insights",
            "Scenario-based recommendations",
            "Real-time operational intelligence",
            "DRUM Model, Arrival Probability & RWY Availability",
          ],
        },
      ],
    },
    {
      name: "Enterprise",
      subtitle: "Major Airport Authorities",
      description:
        "Authority-wide capabilities with advanced regulations & oversight",
      buttonText: "Contact Us",
      buttonStyle: "border-[1px] border-white text-white hover:bg-white/10",
      bgColor: "bg-[#0A2463]",
      sections: [
        {
          title: "INCLUDES",
          features: [
            "Authority-Wide Capabilities",
            "Regulatory Mapping (CARs, CASRs, ICAO, OC)",
            "Recommendations & Crowdsourced Intelligence",
            "Mass Communication (Phone + App)",
            "Emergency Exercises & Playbooks",
            "Learning, Maintenance, Drone & Compliance Suites",
            "Multi-airport & authority-wide deployments",
            "CAP tracking, audit-readiness & evidence traceability",
            "Security, AVOP/AVIP",
            "Environment (Interest based)",
            "Gate Management (Interest based)",
            "Schedule & Time Clock (Interest based)",
            "Pavement Intelligence (Interest based)",
          ],
        },
        {
          title: "ADVANCED AI PIPELINE",
          features: [
            "Agentic AI & auto-assignment",
            "Computer Vision (Secured Passenger & Flight Tracking)",
            "Real time QC & QA (Interest based)",
            "Predictive Maintenance (Phase 2)",
            "Wildlife Risk Model",
            "AI-driven graphical & executive summaries",
            "Explainable AI insights",
            "DRUM Model, Arrival Probability & RWY Availability",
          ],
        },
      ],
    },
  ];

  return (
    <div className="mt-10 bg-[#020817] text-white py-20 font-sans">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h1 className="text-[36px] text-center md:text-[56px] font-semibold mt-20 mb-10">
          Choose the plan that fit your needs
        </h1>
        <p className="text-white text-[16px] font-regular px-6 leading-relaxed">
          MACH1 connects your operations, safety, maintenance, and emergency
          teams into one unified system, powered by deep aviation AI. Customize
          workflows, automate reports, and access predictive insights from any
          device. Every decision, guided by intelligence.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-[95rem] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2  justify-items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            // className={`${plan.bgColor} rounded-2xl p-6 lg:p-8 flex flex-col h-full border border-white/10`}
            className={`border-[1px] lg:border-b-0 border-[#1763FA]/20 relative rounded-t-2xl mx-4 w-[80%] lg:w-[90%] p-8 transition-all duration-300  
              ${
                plan.isFeatured
                  ? "bg-gradient-to-b from-[#1763FA] via-[#1763FA]/50 to-[#1763FA00]"
                  : "bg-[linear-gradient(180deg,rgba(23,99,250,0.5)_10%,rgba(23,99,250,0)_95%)]"
              }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Card Header */}
            <div className="mb-6 md:h-52 xl:h-36">
              <h3 className="text-[28px] lg:text-[32px] font-semibold mb-2 text-white">
                {plan.name}
              </h3>
              <p className="text-[14px] lg:text-[16px] text-white/90 mb-3">
                {plan.subtitle}
              </p>
              <p className="text-[12px] lg:text-[14px] text-white/90 leading-relaxed">
                {plan.description}
              </p>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-3 rounded-full font-semibold text-[16px] lg:text-[18px] mb-8 transition-all ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>

            {/* Features Sections */}
            <div className="space-y-6 flex-grow overflow-y-auto">
              {plan.sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h4 className="text-[14px] lg:text-[14px] font-bold uppercase tracking-wider text-white mb-4">
                    {section.title}
                  </h4>
                  <div className="space-y-3">
                    {section.features.map((feature, featureIdx) => (
                      <div key={featureIdx}>
                        {typeof feature === "string" ? (
                          <div className="flex items-start space-x-2">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center mt-0.5">
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-[13px] lg:text-[15px] text-white/90 leading-snug">
                              {feature}
                            </span>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-start space-x-2 mb-2">
                              <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center mt-0.5">
                                <svg
                                  className="w-2.5 h-2.5 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-[13px] lg:text-[15px] text-white/90 font-medium leading-snug">
                                {feature.main}
                              </span>
                            </div>
                            {feature.sub && (
                              <div className="ml-6 space-y-2 mt-2">
                                {feature.sub.map((subFeature, subIdx) => (
                                  <div
                                    key={subIdx}
                                    className="flex items-start space-x-2"
                                  >
                                    <span className="text-white/90 text-[12px] mt-0.5">
                                      •
                                    </span>
                                    <span className="text-[14px] lg:text-[16px] text-white/90 leading-snug">
                                      {subFeature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* REPLACED IMAGE WITH CSS GRADIENT */}
      <div
        className="relative top-40 w-full py-[4rem] z-10 mt-30 hidden lg:block"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74, 55, 255, 0.4) 70%, rgba(74, 55, 255, 0) 30%)",
          filter: "blur(120px)",
          transform: "scaleY(1.5)", // Squashes it slightly to match the image aspect ratio
        }}
      />
    </div>
  );
};

export default PricingPage;
