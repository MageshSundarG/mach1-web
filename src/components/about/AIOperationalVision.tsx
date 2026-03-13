export default function AIOperationalVision() {
  const visionPoints = [
    {
      text: "Embedded safety intelligence aligned with ICAO, TC, and FAA",
      position: "top",
    },
    {
      text: "Scalable systems that grow with your airport's needs",
      position: "left",
    },
    {
      text: "Unified workflows from inspections to investigation",
      position: "right",
    },
    {
      text: "Purpose-built tools that enable faster decisions with less friction",
      position: "bottom",
    },
  ];

  return (
    <div className=" bg-[#020817] text-white relative overflow-hidden">
      <div className="max-w-[95rem] mx-auto">
        {/* Decorative top border with notch */}
        <div className="absolute top-10 hidden 2xl:block  h-full ">
          <img
            src="/assets/about/session4/Subtract.png"
            className="object-contain"
            alt="Image"
          />
        </div>

        <div className="py-20 h-[600px] lg:mt-24 flex items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 px-4 lg:px-0 lg:pr-16">
            {/* <div data-aos="fade-up" className="inline-block px-4 py-1 rounded-full border border-white/40 bg-gray-800/80 text-[10px] uppercase tracking-[0.3em] text-white mb-8">
            Our Broader Vision
          </div> */}
            <span
              data-aos="fade-up"
              className="inline-block  bg-[#F4F9EC1A] 
  border-[0.2px] 
  border-[#A4A1A1] 
  rounded-full 
  shadow-[inset_0px_2px_10px_0px_#B5D97D33] 
  py-1 px-6
  mb-6
"
            >
              <h1
                className="font-regular
            text-[16px]
          "
              >
                Our Broader Vision
              </h1>
            </span>

            <h1
              data-aos="fade-right"
              className="lg:text-[56px] text-[36px] font-regular mb-8 leading-[1]"
            >
              AI-Driven Operational
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1763FA] to-[#90C63D]">
                Intelligence
              </span>
            </h1>

            <p className="text-white text-[16px] font-regular mb-8 leading-relaxed">
              At Wavionx, we believe in equitable access to smart, scalable
              systems— regardless of airport size or budget. Our AI is built not
              only to power insights, but to preserve knowledge, enhance
              compliance, and guide every user from reporting to resolution.
            </p>

            <p className="text-white font-bold text-[20px]">
              We're not just building software. We're shaping the next
              generation of aviation intelligence.
            </p>
          </div>

          {/* Right Content - Venn Diagram */}
          <div data-aos="fade-left" className="w-1/2 hidden md:block relative">
            <div className="relative w-full h-[600px]">
              <img src="/assets/about/session4/Group 448.png" alt="Image" className="w-full h-[600px] object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
