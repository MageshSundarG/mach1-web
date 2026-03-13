import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Footer from "./Footer";
import GradientBorderButton from "./GradientBorderButton";

const SocialIcon = ({ d }) => (
  <svg
    className="w-5 h-5 fill-current text-white transition-colors cursor-pointer"
    viewBox="0 0 24 24"
  >
    <path d={d} />
  </svg>
);

const Contact = ({ gradient = true }: { gradient?: boolean }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    console.log("Request Demo clicked");
  };

  return (
    <div className="bg-white h-full pb-20 overflow-hidden">
      {/* Main Contact Content */}

      <div className="max-w-[95rem] mt-44 mx-auto py-34 pb-44 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Text and Info */}
        <div className="lg:pt-52 relative ">
          <div className="absolute h-full hidden lg:block w-full left-0 top-[4rem]">
            <img
              src="/assets/home/session8/Mask.png"
              className="w-full object-contain"
              alt="Mask"
            />
          </div>

          <div className="lg:pl-14 pl-4">
            <h2
              data-aos="fade-up"
              className="text-[48px] lg:text-[56px] font-regular text-black mb-2 tracking-tight"
            >
              Contact Us
            </h2>
            <p
              data-aos="fade-up"
              className="text-black font-regular text-[16px] leading-relaxed max-w-sm mb-12"
            >
              Whether you're optimizing a regional strip or modernizing a major
              hub, MACH1 is ready to think with you. Book a walkthrough, launch
              a pilot, or just say hello.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div
                  data-aos="zoom-in"
                  className="w-12 h-12 rounded-full bg-[#15263F] flex items-center justify-center text-white shrink-0"
                >
                  {/* <MapPin size={18} /> */}
                  <img src="/assets/home/session8/1.png" alt="" />
                </div>
                <span className="text-black text-[16px] font-medium">
                  Edmonton, Alberta, Canada
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div
                  data-aos="zoom-in"
                  className="w-12 h-12 rounded-full bg-[#15263F] flex items-center justify-center text-white shrink-0"
                >
                  {/* <Phone size={18} /> */}
                  <img src="/assets/home/session8/2.png" alt="" />
                </div>
                <span className="text-black text-[16px] font-medium">
                  +1 780-803-9856
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div
                  data-aos="zoom-in"
                  className="w-12 h-12 rounded-full bg-[#15263F] flex items-center justify-center text-white shrink-0"
                >
                  {/* <Mail size={18} /> */}
                  <img src="/assets/home/session8/3.png" alt="" />
                </div>
                <span className="text-black text-[16px] font-medium">
                  contact@wavionix.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphic Form Card */}
        <div className="relative px-4 lg:px-0">
          <div
            style={{
              backgroundImage: "url('/assets/home/session8/Frame 198.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative rounded-[12px] pt-20 px-6 lg:px-10 shadow-2xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name and Mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div data-aos="zoom-in" className="space-y-2">
                  <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Value"
                    className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  />
                </div>
                <div data-aos="zoom-in" className="space-y-2">
                  <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Value"
                    className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div data-aos="zoom-in" className="space-y-2">
                <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Value"
                  className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                />
              </div>

              {/* Row 3: Job Title and Airport / Company */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div data-aos="zoom-in" className="space-y-2">
                  <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Value"
                    className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  />
                </div>
                <div data-aos="zoom-in" className="space-y-2">
                  <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                    Airport / Company
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Value"
                    className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Row 4: Anything we should know about your operation? */}
              <div data-aos="zoom-in" className="space-y-2">
                <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                  Anything we should know about your operation?
                </label>
                <textarea
                  placeholder="Enter Value"
                  rows={1}
                  className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm resize-none"
                />
              </div>

              {/* Row 5: What areas would you like us to focus on? */}
              <div data-aos="zoom-in" className="space-y-2">
                <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                  What areas would you like us to focus on? (Select all that
                  apply)
                </label>
                <input
                  type="text"
                  placeholder="Enter Value"
                  className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                />
                {/* Checkboxes for areas */}
                <div className="space-y-3 pt-2">
                  {/* Row 1: 4 checkboxes */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: "AI", name: "ai" },
                      { label: "Safety", name: "safety" },
                      { label: "Operations", name: "operations" },
                      { label: "Emergency", name: "emergency" },
                    ].map((checkbox) => (
                      <label
                        key={checkbox.name}
                        className="flex items-center gap-2 text-white text-[14px] lg:text-[16px] font-regular cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name={checkbox.name}
                          className="w-4 h-4 rounded border-white/20 bg-white/20 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <span>{checkbox.label}</span>
                      </label>
                    ))}
                  </div>

                  {/* Row 2: 2 checkboxes */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "LMS (In progress)", name: "lms" },
                      {
                        label: "Maintenance (In progress)",
                        name: "maintenance",
                      },
                    ].map((checkbox) => (
                      <label
                        key={checkbox.name}
                        className="flex items-center gap-2 text-white text-[14px] lg:text-[16px] font-regular cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name={checkbox.name}
                          className="w-4 h-4 rounded border-white/20 bg-white/20 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <span>{checkbox.label}</span>
                      </label>
                    ))}
                  </div>

                  {/* Row 3: 3 checkboxes */}
                  <div
                    className="grid grid-cols-2 lg:[grid-template-columns:repeat(3,max-content)]
 gap-x-24"
                  >
                    {[
                      { label: "Drone (Phase 3)", name: "drone" },
                      { label: "Compliance (Phase 3)", name: "compliance" },
                      { label: "Wildlife", name: "wildlife" },
                    ].map((checkbox) => (
                      <label
                        key={checkbox.name}
                        className="flex items-center gap-2 text-white text-[14px] lg:text-[16px] font-regular cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name={checkbox.name}
                          className="w-4 h-4 rounded border-white/20 bg-white/20 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <span>{checkbox.label}</span>
                      </label>
                    ))}
                  </div>

                  {/* Row 4: 1 checkbox */}
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { label: "Security (In progress)", name: "security" },
                    ].map((checkbox) => (
                      <label
                        key={checkbox.name}
                        className="flex items-center gap-2 text-white text-[14px] lg:text-[16px] font-regular cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name={checkbox.name}
                          className="w-4 h-4 rounded border-white/20 bg-white/20 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <span>{checkbox.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 6: Interested in any of these products? */}
              <div data-aos="zoom-in" className="space-y-2">
                <label className="text-white text-[16px] lg:text-[20px] font-regular ml-1">
                  Interested in any of these products?
                </label>
                <input
                  type="text"
                  placeholder="Enter Value"
                  className="w-full bg-white/20 border-[0.5px] border-white/20 font-regular rounded-lg py-3 px-4 text-white text-[16px] placeholder:text-[#919191] focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                />
                {/* Checkboxes for products */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: "MACH1", name: "mach1" },
                    { label: "Wordspint", name: "wordspint" },
                    { label: "Crowd Sourcing", name: "crowdsourcing" },
                    { label: "Preventive Pro", name: "preventivepro" },
                  ].map((checkbox) => (
                    <label
                      key={checkbox.name}
                      className="flex items-center gap-2 text-white text-[14px] lg:text-[16px] font-regular cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name={checkbox.name}
                        className="w-4 h-4 rounded border-white/20 bg-white/20 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                      />
                      <span>{checkbox.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pb-10 pt-6">
                <GradientBorderButton
                  animation="fade-up"
                  className="w-full h-[56px]"
                >
                  <span className="block w-full text-center text-white font-medium lg:text-[20px] text-[16px] py-4">
                    Request Demo
                  </span>
                </GradientBorderButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --- Bottom Footer Banner --- */}
      {/* <div className="pb-20 mb-20">
        <div className="max-w-[95rem] mx-auto relative rounded-[10px] overflow-hidden bg-gradient-to-tr from-[#0B3A7E] to-[#020B18] px-4 py-12 md:p-20 flex flex-col md:flex-row items-center justify-between border border-white/5">
          <div className="absolute hidden lg:block right-20 top-1/2 -translate-y-1/2 pointer-events-none">
            <img data-aos="zoom-in" src="/assets/home/session8/4.png" alt="" />
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-[30px] md:text-[48px] font-regular text-white mb-6 leading-tight">
              Make your operations <br /> better than ever!
            </h2>
            <p className="text-white lg:text-[20px] text-[16px] font-regular mb-10">
              Let's Build the Future of Airport Ops — Together
            </p>
            <button data-aos="fade-up" className="rounded-full w-full bg-[#fff] hover:bg-white/80 lg:text-[20px] text-[16px] text-black font-semibold py-4 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20">
              Book a Demo
            </button>
          </div>
        </div>
      </div> */}

      {/* --- Lower Page Wrapper with Background Gradient --- */}
      <div className="relative w-full">
        {/* The Gradient Image Background */}
        {gradient && (
          <div className="hidden sm:block absolute top-36 left-0 w-full h-full z-0 pointer-events-none opacity-60">
            <img
              src="/assets/home/session8/Group 354.png" // Ensure the path matches your public folder
              className="w-full h-full object-bottom"
              alt="Background Gradient"
            />
          </div>
        )}

        {/* Content Container (Ensure z-10 so it sits above the gradient) */}
        {/* <div className="relative z-10"> */}

        {/* --- Bottom Footer Banner --- */}
        <div className=" pb-40 px-6 lg:px-4">
          <div className="max-w-[95rem] mx-auto relative rounded-[10px] overflow-hidden bg-gradient-to-tr from-[#0B3A7E] to-[#020B18] px-4 py-12 md:p-20 flex flex-col md:flex-row items-center justify-between border border-white/5">
            <div className="absolute hidden lg:block right-20 top-1/2 -translate-y-1/2 pointer-events-none">
              <img
                data-aos="zoom-in"
                src="/assets/home/session8/4.png"
                alt=""
              />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-[30px] md:text-[48px] font-regular text-white mb-6 leading-tight">
                Make your operations <br /> better than ever!
              </h2>
              <p className="text-white lg:text-[20px] text-[16px] font-regular mb-10">
                Let's Build the Future of Airport Ops — Together
              </p>
              <div className="max-w-xs">
                <button
                  data-aos="fade-up"
                  className="rounded-full w-full bg-[#fff] hover:bg-white/80 lg:text-[20px] text-[16px] text-black font-semibold py-4 transition-all active:scale-[0.98] shadow-lg"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Footer (Add your Footer component here) --- */}
        {/* Since your screenshot includes a footer with a map, ensure it's inside this relative z-10 div */}
        {/* <footer className="pb-20 px-6 lg:px-4"> */}
        {/* <Footer variant="dark" /> */}
        {/* </footer> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
