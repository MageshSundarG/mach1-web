const BAR_IMAGE = "/assets/packages/session3/bar.png";

const metrics = [
  {
    value: "35-40%",
    label: "Less consultant dependency",
    wrapperClass:
      "left-[5.5%] w-[13.5%] md:left-[5.5%] md:w-[13.5%] lg:left-[5.5%] lg:w-[13.5%] xl:left-[6%] xl:w-[13%]",
    copyClass:
      "top-[82px] left-[12%] md:top-[76px] md:left-[11%] lg:top-[68px] lg:left-[10%] xl:top-[62px] xl:left-[10%]",
    barClass: "h-[74%] lg:h-[80%] xl:h-[86%]",
    delay: "0s",
  },
  {
    value: "40%",
    label: "Recover savings in 5 yrs",
    wrapperClass:
      "left-[28%] w-[15.5%] md:left-[28%] md:w-[15.5%] lg:left-[28%] lg:w-[15.5%] xl:left-[28%] xl:w-[15%]",
    copyClass:
      "top-[4px] left-[14%] md:top-[-2px] md:left-[13%] lg:top-[-10px] lg:left-[12%] xl:top-[-16px] xl:left-[12%]",
    barClass: "h-[86%] lg:h-[94%] xl:h-[101%]",
    delay: "0.16s",
  },
  {
    value: "50%",
    label: "Cut onboarding cycles",
    wrapperClass:
      "left-[54.5%] w-[12.5%] md:left-[54.5%] md:w-[12.5%] lg:left-[54.5%] lg:w-[12.5%] xl:left-[54.5%] xl:w-[12.5%]",
    copyClass:
      "top-[50px] left-[8%] md:top-[44px] md:left-[8%] lg:top-[36px] lg:left-[7%] xl:top-[28px] xl:left-[7%]",
    barClass: "h-[80%] lg:h-[86%] xl:h-[92%]",
    delay: "0.32s",
  },
  {
    value: "4x-10x",
    label: "ROI",
    wrapperClass:
      "left-[78%] w-[14.5%] md:left-[78%] md:w-[14.5%] lg:left-[78%] lg:w-[14.5%] xl:left-[78%] xl:w-[14%]",
    copyClass:
      "top-[-14px] left-[9%] md:top-[-18px] md:left-[9%] lg:top-[-28px] lg:left-[8%] xl:top-[-36px] xl:left-[8%]",
    barClass: "h-[92%] lg:h-[104%] xl:h-[116%]",
    delay: "0.48s",
  },
] as const;

export default function Dash() {
  return (
    <section
      data-header-tone="dark"
      className="relative w-full overflow-hidden bg-[#020617] text-white"
    >
      <div className="site-shell relative overflow-hidden pb-12 pt-20 sm:hidden">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {metrics.map((metric) => (
            <div key={metric.value} className="relative">
              <p className="package-metric-copy text-[28px] font-bold leading-none text-white">
                {metric.value}
              </p>
              <p className="mt-2 max-w-[9rem] text-[12px] font-medium leading-[1.35] text-white/74">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="pointer-events-none relative mt-10 h-[17rem]">
          <div className="package-globe-halo absolute inset-x-[8%] bottom-[18%] h-[34%] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.62)_0%,rgba(181,214,255,0.38)_17%,rgba(23,99,250,0.16)_44%,rgba(23,99,250,0.02)_76%,transparent_100%)] blur-[18px]" />
          <div className="package-globe-glow absolute inset-x-[4%] bottom-[-6%] h-[52%] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(23,99,250,0.42)_0%,rgba(23,99,250,0.18)_52%,transparent_82%)] blur-[42px]" />
          <div className="package-globe-scan absolute left-1/2 top-[6%] h-[72%] w-[62%] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.22)_20%,rgba(255,255,255,0.04)_52%,transparent_88%)] blur-xl" />
          <div className="package-globe-rim-sweep absolute inset-x-[10%] top-[12%] h-[34%] rounded-[999px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_20%,rgba(255,255,255,0.58)_48%,rgba(255,255,255,0.12)_76%,transparent_100%)] blur-[8px]" />
          <img
            src="/assets/packages/session3/globesvg.svg"
            alt="Earth"
            className="motion-globe absolute inset-x-1/2 bottom-0 h-full w-[150%] max-w-none -translate-x-1/2 object-contain object-bottom"
          />
          <div className="package-globe-title absolute inset-x-0 bottom-3 z-10 text-center">
            <p className="text-[24px] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
              Upgrading to
            </p>
            <p className="mt-1 bg-gradient-to-r from-[#B5D6FF] via-[#0071FF] to-[#90C63D] bg-clip-text text-[28px] font-bold leading-[0.92] tracking-[-0.05em] text-transparent">
              MACH1
            </p>
          </div>
        </div>
      </div>

      <div className="site-shell relative hidden h-[42rem] md:h-[48rem] lg:h-[54rem] xl:h-[60rem] sm:block">
        <div className="pointer-events-none absolute inset-x-0 top-[3%] bottom-[31%] z-0">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className={`absolute bottom-0 ${metric.wrapperClass}`}
            >
              <div
                className={`package-metric-copy absolute z-10 mb-2 w-[8.5rem] text-left md:w-[8.75rem] lg:w-[9.25rem] xl:w-[9.75rem] ${metric.copyClass}`}
                style={{
                  animationDelay: metric.delay,
                }}
              >
                <p className="text-[22px] font-semibold leading-[0.96] tracking-[-0.04em] text-white lg:text-[28px] xl:text-[34px]">
                  {metric.value}
                </p>
                <p className="mt-1 text-[9px] font-normal leading-[1.28] text-white/80 lg:text-[11px] xl:text-[13px]">
                  {metric.label}
                </p>
              </div>

              <div className="flex min-h-0 w-full flex-col items-start justify-end">
                <div className="relative h-[320px] w-full shrink-0 md:h-[380px] lg:h-[440px] xl:h-[520px]">
                  <div
                    className={`package-metric-bar-reveal absolute bottom-0 left-0 w-full ${metric.barClass}`}
                    style={{
                      animationDelay: metric.delay,
                    }}
                  >
                    <div
                      className="package-metric-bar relative h-full w-full bg-contain bg-left-bottom bg-no-repeat"
                      style={{
                        backgroundImage: `url(${BAR_IMAGE})`,
                        backgroundSize: "100% 100%",
                        animationDelay: metric.delay,
                      }}
                    >
                      <div
                        className="package-metric-line-trace absolute inset-y-[7%] left-[1%] w-[98%] rounded-[999px]"
                        style={{ animationDelay: metric.delay }}
                      />
                      <div
                        className="package-metric-head-glow absolute left-[4%] right-[11%] top-[4%] h-6 rounded-full"
                        style={{ animationDelay: metric.delay }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5]"
          style={{
            height: "10%",
            background: "linear-gradient(to bottom, #00165B00, #00165B00)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-[0%] z-[8] h-[38%] md:bottom-[0%] lg:bottom-[-1%] xl:bottom-[-1%]">
          <div className="package-globe-halo absolute inset-x-[8%] bottom-[14%] h-[50%] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.62)_0%,rgba(181,214,255,0.38)_17%,rgba(23,99,250,0.16)_44%,rgba(23,99,250,0.02)_76%,transparent_100%)] blur-[24px]" />
          <div className="package-globe-glow absolute inset-x-[6%] bottom-[-8%] h-[60%] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(23,99,250,0.44)_0%,rgba(23,99,250,0.18)_52%,transparent_82%)] blur-[58px]" />
          <div className="package-globe-scan absolute left-1/2 top-[5%] h-[78%] w-[44%] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.22)_20%,rgba(255,255,255,0.04)_52%,transparent_88%)] blur-xl" />
          <div className="package-globe-rim-sweep absolute inset-x-[12%] top-[11%] h-[33%] rounded-[999px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_20%,rgba(255,255,255,0.58)_48%,rgba(255,255,255,0.12)_76%,transparent_100%)] blur-[9px]" />
        </div>

        <div className="pointer-events-none absolute inset-x-1/2 bottom-[-1%] z-10 h-[73%] w-[102%] max-w-none -translate-x-1/2 md:w-[98%] lg:bottom-[-2%] lg:w-[93%] xl:bottom-[-3%] xl:w-[88%]">
          <img
            src="/assets/packages/session3/globesvg.svg"
            alt="Earth"
            className="motion-globe h-full w-full object-contain object-bottom"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 hidden items-end justify-center sm:flex">
          <div className="package-globe-title pointer-events-auto relative bottom-[11%] z-20 flex flex-col items-center justify-center rounded-3xl p-8 font-sans md:bottom-[3%] lg:bottom-[4%] xl:bottom-[5%]">
            <p className="text-center text-[28px] font-semibold tracking-[-0.03em] text-white lg:text-[34px] xl:text-[56px]">
              Upgrading to <br />
              <span className="bg-gradient-to-r from-[#B5D6FF] via-[#0071FF] to-[#90C63D] bg-clip-text text-center text-[32px] font-bold tracking-[-0.05em] text-transparent lg:text-[40px] xl:text-[54px]">
                MACH1
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
