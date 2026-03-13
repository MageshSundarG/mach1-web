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
    <section className="max-w-[95rem] mx-auto px-6 lg:px-0 pb-36 font-sans">
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

      <div className="mx-auto text-center pb-10 px-6">
        <h1
          data-aos="fade-down"
          className="lg:text-[56px] text-[34px] leading-tight max-w-2xl mx-auto md:text-5xl font-regular tracking-tight text-black mb-6"
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
        <p className="max-w-5xl mx-auto text-black text-[16px] font-regular leading-relaxed">
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
              className={`group relative overflow-hidden rounded-2xl p-8 min-h-[410px] flex flex-col transition-transform hover:scale-[1.02] duration-300 ${
                feature.variant === "blue" || hoveredCard === index
                  ? "bg-[#0071FF] text-white"
                  : "border border-slate-800"
              }`}
              style={
                feature.variant === "blue"
                  ? { backgroundColor: "#0071FF" }
                  : hoveredCard === index
                    ? { backgroundColor: "#0071FF" }
                    : {
                        backgroundImage:
                          "url('/assets/home/session3/Frame 467.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
                  className="text-[28px] sm:text-[36px] font-regular leading-tight mb-4"
                >
                  {/* Line 1 — gradient applies to whole line */}
                  <span
                    className={`block transition-all duration-300 ${
                      feature.variant === "blue"
                        ? "text-white"
                        : "bg-gradient-to-r from-[#B5D6FF] from-0% via-[#167EFF] via-24% to-[#90C63D] to-50% bg-clip-text text-transparent group-hover:text-white group-hover:bg-none"
                    }`}
                  >
                    {words.slice(0, -1).join(" ")}
                  </span>

                  {/* Line 2 — normal text */}
                  <span
                    className={`block transition-all duration-300 ${
                      feature.variant === "blue"
                        ? "text-white"
                        : "bg-gradient-to-r from-[#B5D6FF] from-0% via-[#167EFF] via-24% to-[#90C63D] to-50% bg-clip-text text-transparent group-hover:text-white group-hover:bg-none"
                    }`}
                  >
                    {words[words.length - 1]}
                  </span>
                </h4>

                <p
                  className={`text-[16px] font-regular leading-relaxed opacity-80 max-w-[95%] text-white`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Graphic Placeholder */}
              <div
                data-aos="fade-up"
                className="mt-auto self-end w-32 h-32 opacity-80"
              >
                <div className="w-full h-full flex items-center justify-center text-[10px]">
                  <img
                    src={`/assets/home/session3/${feature.image}`}
                    alt="Feature"
                  />
                </div>
              </div>

              {/* {feature.hasButton && (
                <button className="absolute bottom-6 left-6 right-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-[16px] text-white font-regular hover:bg-transparent transition">
                  Read More
                </button>
              )} */}
              {/* {feature.hasButton && ( */}
  <button
    className={`absolute bottom-6 left-6 right-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-[16px] text-white font-regular transition-all duration-300 ${
      feature.variant === "blue"
        ? "opacity-100"
        : "opacity-0 group-hover:opacity-100"
    }`}
  >
    Read More
  </button>
{/* )} */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
