import React from "react";
import ResponsiveTimeline from "./ResponsiveTimeline";

const Timeline = () => {
  return (
    <section data-header-tone="dark" className="flex flex-col items-center overflow-visible bg-[#020617] px-4 pb-32 pt-28">
      <div className="site-shell relative mb-12 w-full lg:mb-16">
        {/* <div data-aos="fade-up" className="w-full max-w-[95rem] mx-auto">
          <img src="./assets/about/session1/Group 488.png" alt="" />
        </div> */}
        <ResponsiveTimeline />
        <div
          className="pointer-events-none absolute top-1 z-0 w-full py-[30rem]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(74, 55, 255, 0.36) 0%, rgba(74, 55, 255, 0) 70%)",
            filter: "blur(60px)",
            transform: "scaleY(0.8)", // Squashes it slightly to match the image aspect ratio
          }}
        />
      </div>
    </section>
  );
};

export default Timeline;
