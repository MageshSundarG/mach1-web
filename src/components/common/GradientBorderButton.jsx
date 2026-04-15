import React from "react";

const GradientBorderButton = ({
  children,
  className = "",
  font = "font-medium",
  type = "button",
  ...props
}) => {
  return (
    <div
      className={`elegant-transition inline-flex rounded-full p-[1px] ${className}`}
      style={{
        background:
          "linear-gradient(115deg, rgba(255,255,255,0.28) 0%, rgba(196,223,255,0.94) 34%, rgba(58,127,255,0.98) 64%, rgba(181,214,255,0.34) 100%)",
      }}
    >
      <button
        type={type}
        {...props}
        className={`
          premium-button elegant-transition relative h-full w-full rounded-full px-0 text-white ${font}
          active:translate-y-0 active:shadow-[0_12px_26px_rgba(0,113,255,0.22)]
        `}
      >
        <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-white/55" />
        <span className="pointer-events-none absolute inset-y-[18%] left-4 w-10 rounded-full bg-white/12 blur-xl" />
        <span className="relative z-10 flex h-full w-full items-center justify-center">
          {children}
        </span>
      </button>
    </div>
  );
};

export default GradientBorderButton;
