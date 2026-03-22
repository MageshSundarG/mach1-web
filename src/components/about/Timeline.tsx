import React from "react";
import ResponsiveTimeline from "./ResponsiveTimeline";

const Timeline = () => {
  const timelineData = [
    {
      period: "2013-2014",
      description:
        "Entered aviation; early fieldwork revealed technology and knowledge gaps.",
    },
    {
      period: "2014-2016",
      description:
        "Built core operational, safety, and emergency expertise in challenging environments.",
    },
    {
      period: "2019-2020",
      description:
        "The concept for MACH1 is introduced as a unified platform for airport operations and safety.",
    },
    {
      period: "2020-2021",
      description:
        "Frontline validation across Canada; Ascend Technologies launched.",
    },
    {
      period: "2020-2024",
      description:
        "Platform proven through real-world events and evolution into AI-driven systems.",
    },
    {
      period: "2025-Present",
      description:
        "MACHI in live testing with global data expansion and active adoption.",
    },
  ];

  return (
    <div className="flex pb-40 mt-10 bg-[#020617] px-4 flex-col items-center pt-32 overflow-hidden">
      <div className="w-full max-w-[95rem] mx-auto">
        <h1 className="lg:text-[56px] text-[36px] font-regular text-white mb-20">
          A Timeline of{" "}
          <span className="opacity-60 font-normal bg-gradient-to-r from-[#1763FA] to-[#90C63D] bg-clip-text text-transparent">
            Purpose
          </span>
        </h1>



        {/* Timeline Container */}
        {/* <div data-aos="fade-up" className="relative max-w-[90rem] mx-auto"> */}
          {/* Horizontal Line */}
          {/* <div className="absolute top-0 left-0 right-0 h-[2px] bg-white"></div> */}

          {/* Timeline Items */}
          {/* <div className="grid md:grid-cols-6 gap-0">
            {timelineData.map((item, index) => (
              <div key={index} className="relative"> */}
                {/* <h3 className="absolute top-[-90px] left-[-30px] text-[#1763FA] text-md font-bold mb-3">
                  {item.period}
                </h3> */}
                {/* Vertical Line */}
                {/* <div className="absolute top-[-60px] left-[3px] border-l-[1.4px] border-dashed h-16"></div> */}

                {/* Dot */}
                {/* <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full -translate-y-[3px]"></div> */}

                {/* Vertical Line */}
                {/* <div className="absolute top-[0px] left-[3px] border-l-[1.4px] border-dashed h-16"></div> */}

                {/* Content */}
                {/* <div className="pt-20 absolute top-0 left-[3px]">
                  <p className="text-white text-[14px] w-[75%] leading-relaxed">
                    {item.description}
                  </p>
                </div> */}
              {/* </div>
            ))}
          </div> 
        </div>*/}
      </div>
      <div className="relative mb-40 w-full">
        {/* <div data-aos="fade-up" className="w-full max-w-[95rem] mx-auto">
          <img src="./assets/about/session1/Group 488.png" alt="" />
        </div> */}
        <ResponsiveTimeline />
        <div
          className="absolute top-1 w-full py-[30rem] z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(74, 55, 255, 0.7) 0%, rgba(74, 55, 255, 0) 70%)",
            filter: "blur(60px)",
            transform: "scaleY(0.8)", // Squashes it slightly to match the image aspect ratio
          }}
        />
      </div>
    </div>
  );
};

export default Timeline;
