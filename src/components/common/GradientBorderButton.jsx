// function GradientBorderButton({ children, onClick, font, bgColor, size, style, mobileSize, animation }) {
//   return (
//     // <button
//     //   onClick={onClick}
//     // //   className="relative px-8 py-3 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
//     //   className="relative px-8 py-3 text-white font-medium rounded-full transition-all hover:opacity-90"
//     //   style={{
//     //     background: "#0071FF",
//     //     border: "1px solid transparent",
//     //     backdropFilter: "blur(50px)",
//     //     minWidth: "254px",
//     //     height: "46px",
//     //   }}
//     // >
//     //   <span className="relative z-10">{children}</span>
//     //   <div
//     //     className="absolute inset-0 rounded-full"
//     //     style={{
//     //       background:
//     //         "linear-gradient(65.39deg, rgba(255, 255, 255, 0) 15.24%, #B8D7FF 51.15%, rgba(255, 255, 255, 0) 68.54%, #D2E6FF 86.17%)",
//     //       WebkitMask:
//     //         "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//     //       WebkitMaskComposite: "xor",
//     //       maskComposite: "exclude",
//     //       padding: "1px",
//     //       pointerEvents: "none",
//     //     }}
//     //   />
//     // </button>
//     <div className="flex items-center justify-center p-10">
//       <div data-aos={animation} className={`relative group`}>
//         <button
//           //       className="
//           //   relative flex items-center justify-center
//           //   w-[254px] h-[46px]
//           //   bg-[#0071FF]
//           //   rounded-[56px]
//           //   text-white font-medium tracking-wide
//           //   backdrop-blur-[50px]
//           //   transition-all duration-300
//           //   hover:brightness-110 active:scale-95
//           //   overflow-hidden
//           // "
//           className={`
//       relative flex items-center justify-center
//       w-[254px] h-[46px] 
//       bg-[${bgColor}]
//       rounded-[56px] 
//       text-white ${font} tracking-wide
//       backdrop-blur-[50px]
//       transition-all duration-300
//       hover:brightness-110 active:scale-95
//       overflow-hidden
//     `}
//         >
//           <span
//             className="absolute inset-0 rounded-[56px] border border-transparent"
//             style={{
//               background:
//                 "linear-gradient(65.39deg, rgba(255, 255, 255, 0) 15.24%, #B8D7FF 51.15%, rgba(255, 255, 255, 0) 68.54%, #D2E6FF 86.17%) border-box",
//               WebkitMask:
//                 "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
//               WebkitMaskComposite: "destination-out",
//               maskComposite: "exclude",
//             }}
//           ></span>

//           <span className={`relative z-10 flex items-center gap-2 font-medium text-white lg:text-[${size}] text-[${mobileSize}]`}>
//             {children}
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default GradientBorderButton;


import React from "react";

const GradientBorderButton = ({
  children,
  className = "",
  font = "font-medium",
  animation,
}) => {
  return (
    <div
      data-aos={animation}
      className={`p-[1px] rounded-full inline-flex ${className}`}
      style={{
        background:
          "linear-gradient(25.39deg, rgba(255,255,255,0) 35.24%, #B8D7FF 51.15%, rgba(255,255,255,0) 68.54%, #D2E6FF 86.17%)",
      }}
    >
      <button
        className={`
          w-full h-full
          rounded-full
          bg-[#0071FF]
          text-white
          ${font}
          transition hover:opacity-90
        `}
      >
        {children}
      </button>
    </div>
  );
};

export default GradientBorderButton;