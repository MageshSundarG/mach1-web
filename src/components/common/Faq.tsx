import React, { useState } from "react";
import { Plus } from "lucide-react";

const Faq = ({ bg = "#020817" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How does MACH1 AI support daily operations?",
      answer:
        "MACH1 AI automates routine data entry, monitors real-time feeds for anomalies, and provides instant transcriptions of field notes, allowing staff to focus on critical safety tasks rather than paperwork.",
    },
    {
      question: "What makes MACH1's AI different from generic AI tools?",
      answer:
        "Unlike general-purpose models, MACH1 is built exclusively for airport environments. It understands specific terminology like NOTAMs, wildlife strike risks, and FAA-compliant inspection workflows with high precision.",
    },
    {
      question: "Does MACH1 AI improve over time?",
      answer:
        "Yes. The system uses continuous learning to adapt to your specific airport's operational patterns, becoming more accurate in predicting risks and categorizing insights the more it is used.",
    },
    {
      question: "Can AI in MACH1 make recommendations or just automate tasks?",
      answer:
        "It does both. While it automates transcription and categorization, it also provides structured intelligence and foresight to help leadership make proactive, data-driven decisions.",
    },
    {
      question: "Is MACH1 AI explainable?",
      answer:
        "Safety is our priority. MACH1 is designed to be transparent, linking every AI-generated summary or insight back to the original source data or voice recording for human verification.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      data-header-tone={bg === "#fff" ? "light" : "dark"}
      className="relative isolate top-0 w-full overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: bg }}
    >
      <div className="pointer-events-none absolute left-1/2 z-20 w-full -translate-x-1/2 top-[-16px] sm:top-[-25px] md:top-[-38px] lg:top-[-56px] xl:top-[-74px] 2xl:top-[-100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 480"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#0066FF"
          />
        </svg>
      </div>

      <div className="relative z-30 bg-[#0066FF] sm:pb-20">
        <div className="site-shell mb-12 text-center sm:mb-16">
          <h2
            data-aos="fade-up"
            className="title-balanced mb-4 text-[32px] font-regular text-white sm:text-4xl lg:text-[64px]"
          >
            Frequently Asked Questions
          </h2>
          <p
            data-aos="fade-up"
            className="copy-balanced mx-auto max-w-2xl text-[15px] font-regular text-white sm:text-[16px]"
          >
            {`Let's Build the Future of Airport Operations Together`}
          </p>
        </div>

        <div className="site-shell space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[18px] bg-white/95 shadow-lg backdrop-blur sm:rounded-xl"
              >
                <div className="flex min-h-[64px] items-stretch">
                  <button
                    type="button"
                    data-aos="fade-up"
                    className="flex min-w-0 flex-1 items-center px-4 py-4 text-left text-[15px] font-semibold leading-[1.45] text-black sm:px-5 sm:text-[16px]"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="block">{item.question}</span>
                  </button>

                  <div className="w-px border-l border-dashed border-blue-400/50 bg-blue-200/50" />

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex shrink-0 items-center justify-center bg-transparent px-4 transition-colors hover:bg-gray-50 sm:min-w-[5.25rem] sm:px-5"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                  >
                    <div
                      className={`rounded-lg bg-blue-600 p-1.5 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    >
                      <Plus className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                  </button>
                </div>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-1 border-t border-gray-100 px-4 pb-5 pt-3 text-[14px] leading-7 text-gray-600 sm:px-6 sm:pb-6 sm:text-sm">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
