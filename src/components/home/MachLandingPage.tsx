import { Link } from "react-router-dom";
import GradientBorderButton from "../common/GradientBorderButton";

const MachLandingPage = () => {
  return (
    <section data-header-tone="dark" className="relative overflow-hidden bg-[#020617] pb-16 pt-10 text-white selection:bg-white/30 md:pb-24 2xl:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-28 h-[26rem] bg-[radial-gradient(circle_at_center,rgba(15,78,183,0.14),transparent_68%)] blur-[110px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-10 h-[22rem] bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.08),transparent_70%)] blur-[140px]" />

      <main className="site-shell relative z-10 flex flex-col items-center text-center">
        <div className="motion-fade-up mt-14 inline-flex min-h-[2.5rem] items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-6 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          <span className="text-[12px] font-semibold uppercase tracking-[0.42em] text-white/76 md:text-[13px]">
            AI-Powered Innovation
          </span>
        </div>

        <h1 className="motion-fade-up motion-delay-1 title-balanced mt-6 max-w-4xl px-2 text-[36px] font-light sm:px-4 md:text-[54px] lg:px-10 lg:text-[66px]">
          <span className="inline-block bg-gradient-to-r from-[#B7C9E8] via-white to-[#F7FBFF] bg-clip-text text-transparent">
            The AI-Powered Platform
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-white via-[#EAF3FF] to-[#9AB7DA] bg-clip-text text-transparent">
            for Airport Operations
          </span>
        </h1>

        <p className="motion-fade-up motion-delay-2 copy-balanced mt-5 max-w-3xl px-4 text-center text-[16px] text-[#E6EEF8] md:px-8 md:text-[17px]">
          MACH1 delivers predictive monitoring, continuous communication, automated workflows, and intelligent safety insights in one refined operating layer built for real-time airport teams.
        </p>

        <div className="motion-fade-up motion-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
          <GradientBorderButton className="h-[50px] sm:w-[14rem]">
            <span className="px-8 py-3 text-[15px] font-medium">Watch Video</span>
          </GradientBorderButton>

          <Link
            to="/solutions"
            className="premium-button-secondary elegant-transition inline-flex h-[50px] items-center justify-center rounded-full px-8 text-[15px] font-semibold text-slate-950 sm:w-[14rem]"
          >
            Learn More
          </Link>
        </div>

        <div className="relative mt-6 w-full self-center sm:mt-8 sm:w-screen">
          <div className="relative w-full">
            <img
              src="/assets/home/session1/Ellipse 2.png"
              alt="Hero glow"
              className="motion-float absolute inset-x-0 top-[10rem] z-10 hidden h-[102%] w-full object-bottom lg:block"
            />

            <div className="relative z-20 mb-1 mt-2 w-full overflow-visible sm:mb-2 sm:mt-4">
              <img
                src="/assets/home/session1/Group 489.png"
                alt="MACH1 platform preview"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="motion-fade-up motion-delay-2 relative z-20 mx-auto w-[122%] max-w-[34rem] -translate-x-[6%] object-contain sm:right-3/4 sm:w-[250%] sm:max-w-none sm:translate-x-0"
              />
            </div>

            <div className="relative z-20 mt-2 px-4 sm:mt-4 lg:mt-6">
              <div className="mb-3 text-center sm:mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-white/78 md:text-[12px]">
                  Supported By
                </span>
              </div>

              <div className="site-shell">
                <div className="relative mx-auto max-w-[1020px] overflow-hidden rounded-[18px] border border-white/14 bg-[linear-gradient(180deg,rgba(96,135,208,0.4),rgba(77,116,189,0.28))] px-3 py-3 shadow-[0_16px_50px_rgba(5,14,36,0.28),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl sm:px-4 sm:py-4 md:rounded-[20px] md:px-8 md:py-5">
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-[18%] top-1/2 h-10 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />

                  <img
                    src="/assets/home/session1/supported-by.svg"
                    alt="Supported by NVIDIA, AWS Activate, and Google Cloud"
                    className="relative z-10 mx-auto w-full max-w-[760px] object-contain md:max-w-[820px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </section>
  );
};

export default MachLandingPage;
