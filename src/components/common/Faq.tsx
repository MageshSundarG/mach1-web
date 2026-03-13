import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const Faq = ({bg}) => {
  // Track which FAQ index is currently open
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How does MACH1 AI support daily operations?",
      answer: "MACH1 AI automates routine data entry, monitors real-time feeds for anomalies, and provides instant transcriptions of field notes, allowing staff to focus on critical safety tasks rather than paperwork."
    },
    {
      question: "What makes MACH1's AI different from generic AI tools?",
      answer: "Unlike general-purpose models, MACH1 is built exclusively for airport environments. It understands specific terminology like NOTAMs, wildlife strike risks, and FAA-compliant inspection workflows with high precision."
    },
    {
      question: "Does MACH1 AI improve over time?",
      answer: "Yes. The system uses continuous learning to adapt to your specific airport's operational patterns, becoming more accurate in predicting risks and categorizing insights the more it is used."
    },
    {
      question: "Can AI in MACH1 make recommendations or just automate tasks?",
      answer: "It does both. While it automates transcription and categorization, it also provides structured intelligence and foresight to help leadership make proactive, data-driven decisions."
    },
    {
      question: "Is MACH1 AI explainable?",
      answer: "Safety is our priority. MACH1 is designed to be transparent, linking every AI-generated summary or insight back to the original source data or voice recording for human verification."
    }
  ];

  const toggleFaq = (index) => {
    // If clicking the already open one, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <div className="bg-[#0066FF]">
    <section className="relative top-0 w-full py-20 bg-[#0066FF]">

      <div className="absolute z-20 w-full 2xl:top-[-100px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] sm:top-[-25px] left-1/2 -translate-x-1/2 pointer-events-none">
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

      <div className="bg-[#0066FF] relative z-30 sm:pb-20 ">

      <div className="max-w-[95rem] mx-auto text-center mb-16">
        <h2 data-aos="fade-up" className="text-4xl lg:text-[64px] font-regular text-white mb-4 tracking-tight">
          Frequently asked Questions
        </h2>
        <p data-aos="fade-up" className="text-white text-[16px] font-regular tracking-widest">
          Let's Build the Future of Airport Operations Together
        </p>
      </div>

      <div className="max-w-[95rem] px-4 2xl:px-0 mx-auto space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className="bg-white/95 backdrop-blur rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="flex items-stretch min-h-[64px]">
                {/* Question Area */}
                <div 
            data-aos="fade-up"
                  className="p-5 flex-grow text-black text-[16px] font-semibold flex items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                </div>

                {/* Vertical Dashed Divider */}
                <div className="w-px bg-blue-200/50 border-l border-dashed border-blue-400/50" />

                {/* Toggle Button */}
                <button 
                  onClick={() => toggleFaq(index)}
                  className="px-6 flex items-center justify-center bg-transparent hover:bg-gray-50 transition-colors group"
                  aria-expanded={isOpen}
                >
                  <div className={`bg-blue-600 rounded-lg p-1.5 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <Plus className="text-white w-8 h-8" />
                  </div>
                </button>
              </div>

              {/* Collapsible Answer Area */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>

    </section>
    // </div>

  );
};

export default Faq;