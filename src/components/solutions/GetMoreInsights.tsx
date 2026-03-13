import React from "react";

const GetMoreInsights = () => {
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
    <div className="relative">
      <div className="absolute w-full left-0 bottom-full pointer-events-none overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1440 80"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#020B18"
          />
        </svg>
      </div>

      <div className="font-sans text-white">
        <div className="bg-[#020B18] p-4 overflow-x-hidden pb-52">
          {/* --- Insights Section --- */}
          <section className="max-w-[95rem] mx-auto px-2 lg:px-0 py-24 relative">
            {/* Subtle Background Path Line */}
            {/* <div className="absolute top-0 right-0 w-1/3 h-32 border-t border-r border-gray-800 rounded-tr-[60px] translate-y-[-50%] hidden lg:block" /> */}

            <div className="text-left mb-16">
              <span
                data-aos="fade-up"
                className="inline-block  bg-[#F4F9EC1A] 
  border-[0.2px] 
  border-[#A4A1A1] 
  rounded-full 
  shadow-[inset_0px_2px_10px_0px_#B5D97D33] 
  py-2 px-6
  mb-6
"
              >
                <h1
                  className="font-regular
            text-[14px]
          "
                >
                  Recent Blogs
                </h1>
              </span>

              <h2
                data-aos="fade-up"
                className="lg:text-[56px] text-[36px] font-regular tracking-tight"
              >
                Get More{" "}
                <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent font-normal">
                  Insights
                </span>
              </h2>
              <p className="mt-4 text-white lg:text-[16px] text-[14px] font-regular">
                Let's Build the Future of Airport Operations Together
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="text-[36px] font-regular leading-snug mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white 2xl:text-[16px] text-[14px] font-regular leading-relaxed w-80 line-clamp-4">
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

export default GetMoreInsights;
