// import React from "react";

// const InsightsSection = () => {
//   const blogs = [
//     {
//       title: "The Next Frontier of AI Powered Innovation",
//       desc: "Artificial Intelligence is no longer a futuristic concept—it's a strategic necessity...",
//       img: "/assets/home/session7/1.png",
//     },
//     {
//       title: "The Next Frontier of AI Powered Innovation",
//       desc: "Artificial Intelligence is no longer a futuristic concept—it's a strategic necessity...",
//       img: "/assets/home/session7/2.png",
//     },
//     {
//       title: "The Next Frontier of AI Powered Innovation",
//       desc: "Artificial Intelligence is no longer a futuristic concept—it's a strategic necessity...",
//       img: "/assets/home/session7/3.png",
//     },
//   ];

//   return (
//     <div>
//       <div className="relative bg-[#020B18] font-sans text-white overflow-x-hidden">
//         <div className="absolute w-full 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] top-[-18px] left-1/2 -translate-x-1/2 pointer-events-none">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="100%"
//             height="100%"
//             viewBox="0 0 1440 80"
//             fill="none"
//           >
//             <path
//               d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
//               fill="#ddd"
//             />
//           </svg>
//         </div>
//           <section className="max-w-[95rem] mx-auto pt-40 pb-24 text-center">
//             <h2
//               data-aos="fade-up"
//               className="text-[48px] md:text-[56px] font-regular tracking-tight mb-8"
//             >
//               Why MACH1
//             </h2>
//             <p
//               data-aos="fade-up"
//               className="max-w-4xl mx-auto text-white text-[20px] font-regular leading-relaxed font-medium"
//             >
//               Airports accumulate disconnected systems that slow operations and
//               strain staff. MACH1 unifies everything into one AI-driven platform
//               — a modern foundation built for the future.
//             </p>
//           </section>
//           <div className="hidden lg:flex justify-end h-[100px]">
//             <img
//               src="/assets/home/session7/Subtract.png"
//               className="w-full max-w-[95rem] relative right-0 object-contain"
//               alt="Mask"
//             />
//           </div>

//           <section className="max-w-[95rem] mx-auto pb-32 px-6 lg:px-0 relative">
//             <div className="text-center mb-20">
//               <span
//                 data-aos="fade-up"
//                 className="inline-block  bg-[#F4F9EC1A]
//   border-[0.2px]
//   border-[#A4A1A1]
//   rounded-full
//   shadow-[inset_0px_2px_10px_0px_#B5D97D33]
//   py-2 px-6
//   mb-6
// "
//               >
//                 <h1
//                   className="font-regular
//             text-[14px]
//           "
//                 >
//                   Recent Blogs
//                 </h1>
//               </span>

//               <h1 className="text-[48px] leading-tight md:text-[56px] font-regular tracking-tight">
//                 Get More{" "}
//                 <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent font-normal">
//                   Insights
//                 </span>
//               </h1>
//               <p className="mt-4 text-white text-[16px] font-regular">
//                 Let's Build the Future of Airport Operations Together
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {blogs.map((post, idx) => (
//                 <div key={idx} className="group cursor-pointer">
//                   <div className="overflow-hidden rounded-xl mb-6 aspect-video bg-gray-900 border border-white/5 shadow-lg">
//                     <img
//                       data-aos="fade-up"
//                       src={post.img}
//                       alt={post.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
//                     />
//                   </div>
//                   <h3 className="text-[28px] lg:text-[36px] font-regular leading-snug mb-3 group-hover:text-blue-400 transition-colors">
//                     {post.title}
//                   </h3>
//                   <p className="text-white text-[16px] font-regular leading-relaxed w-80 line-clamp-2">
//                     {post.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//       </div>
//     </div>
//   );
// };

// export default InsightsSection;
import React from "react";

const InsightsSection = () => {
  const blogs = [
    {
      title: "The Next Frontier of AI Powered Innovation",
      desc: "Artificial Intelligence is no longer a futuristic concept—it's a strategic necessity...",
      img: "/assets/home/session7/1.png",
    },
    {
      title: "The Next Frontier of AI Powered Innovation",
      desc: "Artificial Intelligence is no longer a futuristic concept—it's a strategic necessity...",
      img: "/assets/home/session7/2.png",
    },
    {
      title: "The Next Frontier of AI Powered Innovation",
      desc: "Artificial Intelligence is no longer a futuristic concept—it's a strategic necessity...",
      img: "/assets/home/session7/3.png",
    },
  ];

  return (
    <div className="relative top-0 mt-20">
      {/* --- FIXED SVG TRANSITION --- */}
      {/* <div className="absolute w-full left-0 bottom-full pointer-events-none overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1440 280"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#020B18"
          />
        </svg>
      </div> */}

      <div className="absolute z-0 w-full 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] sm:top-[-25px] left-1/2 -translate-x-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 480"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#020B18"
          />
        </svg>
      </div>

      <div className="relative z-10 font-sans text-white overflow-x-hidden">
        <div className="bg-[#020B18]">
          {/* --- Why MACH1 Section --- */}
          <section className="max-w-[95rem] mx-auto pt-20 pb-24 text-center px-4">
            <h2
              data-aos="fade-up"
              className="text-[40px] md:text-[56px] font-regular tracking-tight mb-8"
            >
              Why MACH1
            </h2>
            <p
              data-aos="fade-up"
              className="max-w-4xl mx-auto text-white text-[18px] md:text-[20px] leading-relaxed"
            >
              Airports accumulate disconnected systems that slow operations and
              strain staff. MACH1 unifies everything into one AI-driven platform
              — a modern foundation built for the future.
            </p>
          </section>

          {/* Mask Image */}
          <div className="hidden lg:flex justify-end h-[100px]">
            <img
              src="/assets/home/session7/Subtract.png"
              className="w-full max-w-[95rem] relative right-0 object-contain"
              alt="Mask"
            />
          </div>

          {/* --- Insights Section --- */}
          <section className="max-w-[95rem] mx-auto pb-52 px-6 lg:px-0">
            <div className="text-center mb-20">
              <span
                data-aos="fade-up"
                className="inline-block bg-[#F4F9EC1A] border-[0.2px] border-[#A4A1A1] rounded-full py-2 px-6 mb-6"
              >
                <h1 className="font-regular text-[14px]">Recent Blogs</h1>
              </span>

              <h1 className="text-[40px] leading-tight md:text-[56px] font-regular tracking-tight">
                Get More{" "}
                <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="mt-4 text-white/80 text-[16px]">
                Let's Build the Future of Airport Operations Together
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {blogs.map((post, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl mb-6 aspect-video bg-gray-900 border border-white/5 shadow-lg">
                    <img
                      data-aos="fade-up"
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="text-[24px] lg:text-[28px] font-regular leading-snug mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 text-[16px] leading-relaxed line-clamp-2">
                    {post.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
