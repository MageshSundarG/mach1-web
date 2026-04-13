export default function WhatWereSolving() {
  const challenges = [
    {
      title: ["Loss of Institutional", "Knowledge"],
      titleColors: ["text-blue-400", "text-green-400"],
      description: "AI-powered memory that preserves SOP logic and field wisdom"
    },
    {
      title: ["Disconnected", "Tools"],
      titleColors: ["text-blue-400", "text-white"],
      description: "A unified platform covering safety, operations, and compliance"
    },
    {
      title: ["Overloaded", "Managers"],
      titleColors: ["text-blue-400", "text-white"],
      description: "Smart automation aligned with ICAO protocols to reduce manual burden"
    },
    {
      title: ["Limited Safety", "Visibility"],
      titleColors: ["text-blue-400", "text-white"],
      description: "Live dashboards and alerts for proactive situational awareness"
    },
    {
      title: ["Outdated", "Interfaces"],
      titleColors: ["text-blue-400", "text-white"],
      description: "Live dashboards and alerts for proactive situational awareness"
    },
    {
      title: ["Lack of Real-Time", "Alerts"],
      titleColors: ["text-white", "text-green-400"],
      description: "Live dashboards and alerts for proactive situational awareness"
    },
    {
      title: ["No AI", "Support"],
      titleColors: ["text-white", "text-blue-400"],
      description: "Live dashboards and alerts for proactive situational awareness"
    },
    {
      title: ["Weak Data", "Advocacy"],
      titleColors: ["text-white", "text-green-400"],
      description: "Live dashboards and alerts for proactive situational awareness"
    },
    {
      title: ["Budget", "Constraints"],
      titleColors: ["text-white", "text-blue-400"],
      description: "Live dashboards and alerts for proactive situational awareness"
    }
  ];

  return (
    <section data-header-tone="dark" className="bg-[#020817] text-white">
      <div className="site-shell py-36 pb-[20rem]">
        {/* Header */}
        <div data-aos="fade-left" className="mb-12">
          <h1 className="lg:text-[56px] text-[36px] font-regular">
            What We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1763FA] to-[#90C63D]">Solving</span>
          </h1>
          <p className="text-white text-[16px] font-regular">
            Across various aviation sectors of all sizes, MACH1 addresses the real challenges
          </p>
        </div>

        {/* Grid of Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div
              style={{
                backgroundImage: "url('../assets/about/session4/bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              key={index}
              className="bg-gradient-to-br from-[#1a2942] to-[#0f1b2e] rounded-2xl p-8 border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300"
            >
              <h2 data-aos="fade-up" className="lg:text-[36px] text-[20px] font-regular mb-4 leading-tight">
                {/* background: linear-gradient(90deg, #B5D6FF 0%, #1763FA 24%, #90C63D 100%); */}

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5D6FF] via-[#1763FA] to-[#90C63D]">{challenge.title[0]}</span>
                {challenge.title.length > 1 && (
                  <>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5D6FF] via-[#1763FA] to-[#90C63D]">{challenge.title[1]}</span>
                  </>
                )}
              </h2>
              <p className="text-white text-[16px] font-medium leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
