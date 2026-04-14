import React, { useState } from "react";

const FeatureGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const features = [
    {
      title: "Operational depth",
      description:
        "Structured across 500+ operational categories to cover everything from routine checks to complex multi-department incidents.",
      image: "1.png", // Replace with your isometric stack icon
      variant: "dark",
    },
    {
      title: "Complex Reasoning",
      description:
        "Built to understand 90,000+ report combinations, so it sees interdependencies other systems miss.",
      image: "2.png", // Replace with your neural network icon
      variant: "dark",
    },
    {
      title: "Aviation Native Dataset",
      description:
        "Purpose-trained on 150GB+ of aviation operations data (growing toward 200GB)",
      image: "3.png", // Replace with your airplane wireframe icon
      variant: "dark",
    },
    {
      title: "Wildlife Intelligence",
      description:
        "Embedded data for 1,500+ species to predict and help prevent wildlife strikes.",
      image: "4.png", // Replace with your bird icon
      variant: "blue",
      hasButton: true,
    },
    {
      title: "Workflow First",
      description:
        "AI is integrated into inspections, NOTAMs, incidents and dashboards, not an addon.",
      image: "5.png", // Replace with your workflow icon
      variant: "dark",
    },
  ];

  return (
    <section data-header-tone="light" className="site-shell pb-36 font-sans mt-10">
      {/* Header */}
      {/* <div className="text-center mb-10"> */}
      {/* <span className="text-[56px] font-regular text-black">
          How MACH1 Redefines
        </span>
        <br />
        <span className="text-[56px] font-regular">
          <span className="bg-[linear-gradient(90deg,#025CCD_72.6%,#90C63E_100%)] bg-clip-text text-transparent">
            Aviation Intelligence
          </span>
        </span> */}

      <div className="mx-auto px-2 pb-10 text-center">
        <h1
          data-aos="fade-down"
          className="title-balanced mx-auto mb-6 max-w-2xl text-[34px] font-regular text-white md:text-5xl lg:text-[56px]"
        >
          How MACH1 Redefines
          <br />
          {/* <span className="text-teal-500 font-normal bg-linear-gradient(90deg, #015BCD 41.83%, #90C63D 83.17%);
">Operational</span> <br /> */}
          <span className="font-normal bg-[linear-gradient(90deg,#025CCD_72.6%,#90C63E_100%)] bg-clip-text text-transparent">
            {" "}
            Aviation Intelligence
          </span>
          <br />
          {/* <span className="text-blue-600 font-normal">Intelligence</span> */}
        </h1>
        <p className="copy-balanced mx-auto max-w-5xl text-[16px] font-regular text-white">
          MACH1 runs on the world's first AI model built exclusively for airport
          operations and safety. Unlike general-purpose AIs, MACH1 "speaks
          airport" — understanding inspections, NOTAMs, incidents, and wildlife
          risks with unmatched operational precision.
        </p>
      </div>

      {/* </div> */}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const words = feature.title.split(" ");
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`hover-lift premium-card group relative flex min-h-[410px] flex-col overflow-hidden rounded-[26px] border p-8 text-white ${
                feature.variant === "blue" ? "border-[#2D89FF]/45 bg-[#0071FF]" : "border-slate-800"
              }`}
              style={
                feature.variant === "blue"
                  ? { backgroundColor: "#0071FF" }
                  : {
                        backgroundImage:
                          "url('/assets/home/session3/Frame 467.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        boxShadow:
                          hoveredCard === index
                            ? "0 0 0 1px rgba(126,180,255,0.28), 0 18px 50px rgba(23,99,250,0.18), 0 0 42px rgba(126,180,255,0.12)"
                            : "0 10px 30px rgba(2, 6, 23, 0.08)",
                      }
              }
            >
              <div className="relative z-10">
                {/* <h4
                data-aos="fade-up"
                className="text-2xl font-light leading-tight mb-4"
              >
                {feature.title.split(" ").map((word, i, arr) => {
                const isLastWord = i === arr.length - 1;
                console.log(isLastWord);
                
                
                 return(
                  <>
                    <span
                      key={`${i}-line1`}
                      className={
                        i === 1 && feature.variant !== "blue"
                          ? "block bg-gradient-to-r from-[#B5D6FF] from-0% via-[#167EFF] via-24% to-[#90C63D] to-60% bg-clip-text text-transparent"
                          : "hidden"
                      }
                    >
                      {word}
                    </span>
                    <span
                      key={`${i}-line2`}
                      className={
                        i !== 1 && feature.variant !== "blue"
                          ? "block bg-gradient-to-r from-[#B5D6FF] from-0% via-[#167EFF] via-24% to-[#90C63D] to-50% bg-clip-text text-transparent"
                          : "hidden"
                      }
                    >
                      {word}
                    </span>
                    <span
                      key={`${i}-button`}
                      className={feature.hasButton ? "block" : "hidden"}
                    >
                      {word}
                    </span>
                  </>
                )})}
              </h4> */}

                <h4
                  data-aos="fade-up"
                  className="mb-4 text-[28px] font-regular leading-[1.06] sm:text-[36px]"
                >
                  {/* Line 1 — gradient applies to whole line */}
                  <span
                    className={`block elegant-transition ${
                      feature.variant === "blue"
                        ? "text-white"
                        : "bg-gradient-to-r from-[#B5D6FF] from-0% via-[#167EFF] via-24% to-[#90C63D] to-50% bg-clip-text text-transparent"
                    }`}
                  >
                    {words.slice(0, -1).join(" ")}
                  </span>

                  {/* Line 2 — normal text */}
                  <span
                    className={`block elegant-transition ${
                      feature.variant === "blue"
                        ? "text-white"
                        : "bg-gradient-to-r from-[#B5D6FF] from-0% via-[#167EFF] via-24% to-[#90C63D] to-50% bg-clip-text text-transparent"
                    }`}
                  >
                    {words[words.length - 1]}
                  </span>
                </h4>

                <p
                  className={`copy-balanced max-w-[95%] text-[16px] font-regular ${
                    feature.variant === "blue" ? "text-white/88" : "text-[#E6EEF8]"
                  }`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Graphic Placeholder */}
              <div
                data-aos="fade-up"
                className="mt-auto h-32 w-32 self-end opacity-80"
              >
                <div className="w-full h-full flex items-center justify-center text-[10px]">
                  <img
                    src={`/assets/home/session3/${feature.image}`}
                    alt="Feature"
                    loading="lazy"
                    decoding="async"
                    className="elegant-transition group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              {/* {feature.hasButton && (
                <button className="absolute bottom-6 left-6 right-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-[16px] text-white font-regular hover:bg-transparent transition">
                  Read More
                </button>
              )} */}
              {/* {feature.hasButton && ( */}
  {/* <button
    className={`premium-chip-button elegant-transition absolute bottom-6 left-6 right-6 rounded-xl py-3 text-[16px] font-medium text-white ${
      feature.variant === "blue"
        ? "opacity-100"
        : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
    }`}
  >
    Read More
  </button> */}
{/* )} */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
