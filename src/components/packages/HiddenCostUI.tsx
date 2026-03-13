import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Consultant cycle loss", value: 40, color: "#2563eb" }, // Darker Blue
  { name: "Software fragmentation", value: 20, color: "#3b82f6" }, // Medium Blue
  { name: "Staff retraining and turnover", value: 30, color: "#60a5fa" }, // Light Blue
  { name: "Audit/compliance inefficiency", value: 10, color: "#93c5fd" }, // Soft Blue
];

const HiddenCostUI = () => {
  return (
    <div className="hidden sm:block relative bg-[#020817] ">
      {/* <div className="absolute z-[200] w-full 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] top-[-18px] left-1/2 -translate-x-1/2 pointer-events-none"> */}
      <div className="absolute w-full z-10 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] sm:top-[-25px] left-1/2 -translate-x-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 280"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="z-20 lg:pb-24 relative flex flex-col items-center justify-center bg-white p-8 font-sans">
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <svg width="120" height="40" viewBox="0 0 120 40" className="block">
            <path
              d="M0 0C20 0 30 30 60 30C90 30 100 0 120 0H0Z"
              className="fill-[#0C0E38]"
            />
          </svg>
        </div> */}
        {/* Header Badge */}
        {/* <div className="mb-4 mt-24">
        <span className="px-4 py-1 border border-slate-300 bg-slate-200 rounded-full text-[15px] font-regular text-black uppercase tracking-widest">
          Per Medium Airport
        </span>
      </div> */}
        {/* <div
      className="
        mb-4 mt-24
        flex items-center justify-center
        w-[200px] h-[24px]
        px-[12px] py-[2px]
        rounded-full
        border-[0.2px] border-black
        bg-[#1763FA1A]
      "
      // style={{ borderWidth: "0.2px" }}
    >
      <span
        className="
          text-center
          font-normal
          text-[15px]
          leading-[20px]
          tracking-[0px]
          uppercase
          text-black
        "
        style={{ fontFamily: "Gilroy" }}
      >
        Per Medium Airport
      </span>
    </div> */}

        <div
          className="
        mb-4 mt-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="174"
            height="24"
            viewBox="0 0 174 24"
            fill="none"
          >
            <rect
              x="0.1"
              y="0.1"
              width="173.8"
              height="23.8"
              rx="11.9"
              fill="#1763FA"
              fill-opacity="0.1"
            />
            <rect
              x="0.1"
              y="0.1"
              width="173.8"
              height="23.8"
              rx="11.9"
              stroke="black"
              stroke-width="0.2"
            />
            <path
              d="M17.2063 6.5C18.1463 6.5 18.9313 6.815 19.5613 7.445C20.1913 8.075 20.5063 8.86 20.5063 9.8C20.5063 10.74 20.1913 11.525 19.5613 12.155C18.9313 12.785 18.1463 13.1 17.2063 13.1H14.5063V17H13.4563V6.5H17.2063ZM17.2063 12.11C17.8563 12.11 18.3913 11.895 18.8113 11.465C19.2413 11.025 19.4563 10.47 19.4563 9.8C19.4563 9.13 19.2413 8.58 18.8113 8.15C18.3913 7.71 17.8563 7.49 17.2063 7.49H14.5063V12.11H17.2063ZM23.354 16.01H28.454V17H22.304V6.5H28.379V7.49H23.354V11.21H28.004V12.2H23.354V16.01ZM36.7081 17L34.2481 12.8H31.3081V17H30.2581V6.5H34.4581C35.3281 6.5 36.0681 6.81 36.6781 7.43C37.2981 8.04 37.6081 8.78 37.6081 9.65C37.6081 10.36 37.3931 10.995 36.9631 11.555C36.5431 12.105 36.0031 12.475 35.3431 12.665L37.9081 17H36.7081ZM31.3081 7.49V11.81H34.4581C35.0381 11.81 35.5331 11.6 35.9431 11.18C36.3531 10.75 36.5581 10.24 36.5581 9.65C36.5581 9.05 36.3531 8.54 35.9431 8.12C35.5331 7.7 35.0381 7.49 34.4581 7.49H31.3081ZM52.7634 6.5V17H51.7134V8.09L48.0384 14.24H47.8884L44.2134 8.09V17H43.1634V6.5H44.4684L47.9634 12.35L51.4584 6.5H52.7634ZM56.2104 16.01H61.3104V17H55.1604V6.5H61.2354V7.49H56.2104V11.21H60.8604V12.2H56.2104V16.01ZM67.1646 6.5C68.5946 6.5 69.7746 7.01 70.7046 8.03C71.6446 9.04 72.1146 10.28 72.1146 11.75C72.1146 13.22 71.6446 14.465 70.7046 15.485C69.7746 16.495 68.5946 17 67.1646 17H63.1146V6.5H67.1646ZM67.1646 16.01C68.3146 16.01 69.2546 15.6 69.9846 14.78C70.7246 13.96 71.0946 12.95 71.0946 11.75C71.0946 10.55 70.7246 9.54 69.9846 8.72C69.2546 7.9 68.3146 7.49 67.1646 7.49H64.1646V16.01H67.1646ZM73.9104 6.5H74.9604V17H73.9104V6.5ZM83.9375 16.16C83.2175 16.84 82.2775 17.18 81.1175 17.18C79.9575 17.18 79.0175 16.84 78.2975 16.16C77.5775 15.48 77.2175 14.57 77.2175 13.43V6.5H78.2675V13.43C78.2675 14.27 78.5175 14.935 79.0175 15.425C79.5175 15.915 80.2175 16.16 81.1175 16.16C82.0175 16.16 82.7175 15.915 83.2175 15.425C83.7175 14.935 83.9675 14.27 83.9675 13.43V6.5H85.0175V13.43C85.0175 14.57 84.6575 15.48 83.9375 16.16ZM96.8698 6.5V17H95.8198V8.09L92.1448 14.24H91.9948L88.3198 8.09V17H87.2698V6.5H88.5748L92.0698 12.35L95.5648 6.5H96.8698ZM110.007 17L109.032 14.42H104.052L103.077 17H101.967L106.002 6.5H107.082L111.117 17H110.007ZM104.427 13.43H108.657L106.542 7.805L104.427 13.43ZM112.465 6.5H113.515V17H112.465V6.5ZM122.372 17L119.912 12.8H116.972V17H115.922V6.5H120.122C120.992 6.5 121.732 6.81 122.342 7.43C122.962 8.04 123.272 8.78 123.272 9.65C123.272 10.36 123.057 10.995 122.627 11.555C122.207 12.105 121.667 12.475 121.007 12.665L123.572 17H122.372ZM116.972 7.49V11.81H120.122C120.702 11.81 121.197 11.6 121.607 11.18C122.017 10.75 122.222 10.24 122.222 9.65C122.222 9.05 122.017 8.54 121.607 8.12C121.197 7.7 120.702 7.49 120.122 7.49H116.972ZM128.827 6.5C129.767 6.5 130.552 6.815 131.182 7.445C131.812 8.075 132.127 8.86 132.127 9.8C132.127 10.74 131.812 11.525 131.182 12.155C130.552 12.785 129.767 13.1 128.827 13.1H126.127V17H125.077V6.5H128.827ZM128.827 12.11C129.477 12.11 130.012 11.895 130.432 11.465C130.862 11.025 131.077 10.47 131.077 9.8C131.077 9.13 130.862 8.58 130.432 8.15C130.012 7.71 129.477 7.49 128.827 7.49H126.127V12.11H128.827ZM142.537 15.605C141.487 16.655 140.202 17.18 138.682 17.18C137.162 17.18 135.877 16.655 134.827 15.605C133.777 14.545 133.252 13.26 133.252 11.75C133.252 10.24 133.777 8.96 134.827 7.91C135.877 6.85 137.162 6.32 138.682 6.32C140.202 6.32 141.487 6.85 142.537 7.91C143.587 8.96 144.112 10.24 144.112 11.75C144.112 13.26 143.587 14.545 142.537 15.605ZM135.562 14.885C136.402 15.735 137.442 16.16 138.682 16.16C139.922 16.16 140.962 15.735 141.802 14.885C142.642 14.025 143.062 12.98 143.062 11.75C143.062 10.52 142.642 9.48 141.802 8.63C140.962 7.77 139.922 7.34 138.682 7.34C137.442 7.34 136.402 7.77 135.562 8.63C134.722 9.48 134.302 10.52 134.302 11.75C134.302 12.98 134.722 14.025 135.562 14.885ZM152.358 17L149.898 12.8H146.958V17H145.908V6.5H150.108C150.978 6.5 151.718 6.81 152.328 7.43C152.948 8.04 153.258 8.78 153.258 9.65C153.258 10.36 153.043 10.995 152.613 11.555C152.193 12.105 151.653 12.475 150.993 12.665L153.558 17H152.358ZM146.958 7.49V11.81H150.108C150.688 11.81 151.183 11.6 151.593 11.18C152.003 10.75 152.208 10.24 152.208 9.65C152.208 9.05 152.003 8.54 151.593 8.12C151.183 7.7 150.688 7.49 150.108 7.49H146.958ZM161.443 6.5V7.49H158.218V17H157.168V7.49H153.943V6.5H161.443Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-[56px] font-regular bg-gradient-to-r from-[#015BCD] to-[#90C63D] bg-clip-text text-transparent py-2">
          Total 5-Year Hidden Cost ≈
        </h1>
        <h2
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#015BCD] to-[#90C63D] bg-clip-text text-transparent pb-12"
        >
          $3.5M+
        </h2>

        {/* Chart Container */}
        <div className="hidden md:flex relative w-full mt-10 max-w-5xl h-[400px] items-center justify-center">
          {/* Legend / Labels - Positioned Absolutely to mimic the screenshot */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left Label */}
            <div className="absolute z-10 top-[-10%] left-[16%] flex flex-col items-start">
              {/* <div
                className="w-[24rem] h-[1px] 
  bg-[repeating-linear-gradient(to_right,theme(colors.blue.400)_0_10px,transparent_10px_20px)]
  mt-1"
              ></div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="260"
                height="100"
                viewBox="0 0 260 100"
                fill="none"
              >
                <path
                  d="M-0.00032568 5.3335C-0.00032568 8.27901 2.38749 10.6668 5.33301 10.6668C8.27853 10.6668 10.6663 8.27901 10.6663 5.3335C10.6663 2.38798 8.27853 0.000162601 5.33301 0.000162601C2.38749 0.000162601 -0.00032568 2.38798 -0.00032568 5.3335ZM165.333 5.3335L166.04 4.62639L165.747 4.3335H165.333V5.3335ZM249 94.3335C249 97.279 251.387 99.6668 254.333 99.6668C257.279 99.6668 259.666 97.279 259.666 94.3335C259.666 91.388 257.279 89.0002 254.333 89.0002C251.387 89.0002 249 91.388 249 94.3335ZM5.33301 5.3335V6.3335H165.333V5.3335V4.3335H5.33301V5.3335ZM165.333 5.3335L164.626 6.0406L253.626 95.0406L254.333 94.3335L255.04 93.6264L166.04 4.62639L165.333 5.3335Z"
                  fill="black"
                />
              </svg>
              <p className="absolute top-[30px] left-[-90px] text-sm font-bold text-slate-800">
                Audit/compliance inefficiency: 10%
              </p>
            </div>

            {/* Bottom Left Label */}
            <div className="absolute z-10 bottom-[30%] left-[6%] flex flex-col items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="313"
                height="69"
                viewBox="0 0 313 69"
                fill="none"
              >
                <path
                  d="M-0.00032568 63.0684C-0.00032568 66.0139 2.38749 68.4017 5.33301 68.4017C8.27853 68.4017 10.6663 66.0139 10.6663 63.0684C10.6663 60.1228 8.27853 57.735 5.33301 57.735C2.38749 57.735 -0.00032568 60.1228 -0.00032568 63.0684ZM105.333 5.3335V4.3335H105.065L104.833 4.46747L105.333 5.3335ZM301.5 5.3335C301.5 8.27901 303.887 10.6668 306.833 10.6668C309.779 10.6668 312.166 8.27901 312.166 5.3335C312.166 2.38798 309.779 0.000162601 306.833 0.000162601C303.887 0.000162601 301.5 2.38798 301.5 5.3335ZM5.33301 63.0684L5.83301 63.9344L105.833 6.19952L105.333 5.3335L104.833 4.46747L4.83301 62.2023L5.33301 63.0684ZM105.333 5.3335V6.3335H306.833V5.3335V4.3335H105.333V5.3335Z"
                  fill="black"
                />
              </svg>
              <p className="absolute top-[80px] left-[-50px] text-sm font-bold text-slate-800">
                Staff retraining and turnover: 30%
              </p>
              {/* <div
                className="w-[24rem] h-[1px] 
  bg-[repeating-linear-gradient(to_right,theme(colors.blue.400)_0_10px,transparent_10px_20px)]
  mt-1"
              ></div> */}
            </div>

            {/* Right Top Label */}
            <div className="absolute z-10 top-[10%] right-[6%] flex flex-col items-end">
              {/* <div
                className="w-[24rem] h-[1px] 
  bg-[repeating-linear-gradient(to_right,theme(colors.blue.400)_0_10px,transparent_10px_20px)]
  mt-1"
              ></div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="313"
                height="69"
                viewBox="0 0 313 69"
                fill="none"
              >
                <path
                  d="M-0.00032568 63.0684C-0.00032568 66.0139 2.38749 68.4017 5.33301 68.4017C8.27853 68.4017 10.6663 66.0139 10.6663 63.0684C10.6663 60.1228 8.27853 57.735 5.33301 57.735C2.38749 57.735 -0.00032568 60.1228 -0.00032568 63.0684ZM105.333 5.3335V4.3335H105.065L104.833 4.46747L105.333 5.3335ZM301.5 5.3335C301.5 8.27901 303.887 10.6668 306.833 10.6668C309.779 10.6668 312.166 8.27901 312.166 5.3335C312.166 2.38798 309.779 0.000162601 306.833 0.000162601C303.887 0.000162601 301.5 2.38798 301.5 5.3335ZM5.33301 63.0684L5.83301 63.9344L105.833 6.19952L105.333 5.3335L104.833 4.46747L4.83301 62.2023L5.33301 63.0684ZM105.333 5.3335V6.3335H306.833V5.3335V4.3335H105.333V5.3335Z"
                  fill="black"
                />
              </svg>
              <p className="absolute top-[30px] right-[-90px] text-sm font-bold text-slate-800">
                Consultant cycle loss: 40%
              </p>
            </div>

            {/* Right Bottom Label */}
            {/* <div className="absolute bottom-[10%] right-[5%] flex flex-col items-start">
            <p className="text-sm font-bold text-slate-800">
              Software fragmentation: 20%
            </p>
            <div className="w-24 h-[1px] bg-blue-300 border-t border-dashed mt-1"></div>
          </div> */}
            <div className="absolute z-10 bottom-[-4%] right-[12%] flex flex-col items-end">
              <p className="absolute top-[60px] right-[-90px] text-sm font-bold text-slate-800">
                Software fragmentation: 20%
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="353"
                height="123"
                viewBox="0 0 353 123"
                fill="none"
              >
                <path
                  d="M-0.00032568 5.3335C-0.00032568 8.27901 2.38749 10.6668 5.33301 10.6668C8.27853 10.6668 10.6663 8.27901 10.6663 5.3335C10.6663 2.38798 8.27853 0.000162601 5.33301 0.000162601C2.38749 0.000162601 -0.00032568 2.38798 -0.00032568 5.3335ZM117.333 117.333L116.626 118.041L116.919 118.333H117.333V117.333ZM341.5 117.333C341.5 120.279 343.887 122.667 346.833 122.667C349.779 122.667 352.166 120.279 352.166 117.333C352.166 114.388 349.779 112 346.833 112C343.887 112 341.5 114.388 341.5 117.333ZM5.33301 5.3335L4.6259 6.0406L116.626 118.041L117.333 117.333L118.04 116.626L6.04011 4.62639L5.33301 5.3335ZM117.333 117.333V118.333H346.833V117.333V116.333H117.333V117.333Z"
                  fill="black"
                />
              </svg>

              {/* <div
                className="w-[24rem] h-[1px] 
  bg-[repeating-linear-gradient(to_right,theme(colors.blue.400)_0_10px,transparent_10px_20px)]
  mt-1"
              ></div> */}
            </div>
          </div>

          {/* The Donut Chart */}

          <img
            data-aos="zoom-in"
            src="/assets/packages/session2/hidden.png"
            alt="Hidden Cost Donut Chart"
            className="w-full h-full relative object-contain z-0"
          />

          {/* Center Percentage Overlay (Optional, based on your visual preference) */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none">
            {/* Keeping the center hollow as per the donut design */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenCostUI;
