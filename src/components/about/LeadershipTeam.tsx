type Person = {
  name: string;
  title: string;
  image: string;
};

const initialsFromName = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

const ProfileImage = ({ person }: { person: Person }) => (
  <div className="relative mb-6 h-[306px] w-[293px] overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#EEF4FF_0%,#E1ECFF_46%,#D6E5FF_100%)] shadow-lg">
    <img
      data-aos="fade-up"
      src={person.image}
      alt={person.name}
      className="h-full w-full object-cover"
      onError={(event) => {
        event.currentTarget.style.display = "none";
        event.currentTarget.nextElementSibling?.classList.remove("hidden");
      }}
    />

    <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96)_0%,rgba(223,236,255,0.94)_42%,rgba(205,224,255,0.96)_100%)] px-8 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[34px] font-semibold tracking-[-0.04em] text-[#1763FA] shadow-[0_18px_44px_rgba(23,99,250,0.14)]">
        {initialsFromName(person.name)}
      </div>
      <p className="mt-6 text-[18px] font-semibold text-slate-900">
        {person.name}
      </p>
    </div>
  </div>
);

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Dennis Raj",
      title: "Co-Founder & CSO",
      image:
        "./assets/about/session2/dennis.jpeg",
    },
    {
      name: "Abby Logan",
      title: "Co-Founder & CEO",
      image:
        "./assets/about/session2/abby.jpeg",
    },
  ];

  const team = [
    {
      name: "Rakesh P",
      title: "Head of Innovations",
      image:
        "./assets/about/session2/rakesh.jpeg",
    },
    {
      name: "Senthil",
      title: "Senior QA Manager",
      image:
        "./assets/about/session2/senthil.jpeg",
    },
    {
      name: "Magesh",
      title: "Senior AI Engineer",
      image:
        "./assets/about/session2/magesh.jpeg",
    },
  ];

  const advisors = [
    {
      name: "James A",
      title: "Compliance & QA Advisor",
      image:
        "./assets/about/session2/james.png",
    },
    {
      name: "Britteny R",
      title: "Marketing & Outreach Advisor",
      image:
        "./assets/about/session2/britteny.png",
    },
  ];

  return (
    <section data-header-tone="light" className="bg-[#020817]">
      {/* <div className=" relative h-[4rem] w-full">
        <img src="./assets/about/session1/Ellipse 3.png" alt="" className="w-full" />
      </div> */}
      <div className="relative rounded-3xl bg-white py-20">
        <div className="site-shell">
          {/* Top Transition Notch */}
      {/* <div className="absolute z-[100] w-full 2xl:top-[-98px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] top-[-18px] left-1/2 -translate-x-1/2 pointer-events-none"> */}
      <div className="absolute z-10 w-full 2xl:top-[-100px] xl:top-[-74px] lg:top-[-56px] md:top-[-38px] sm:top-[-25px] left-1/2 -translate-x-1/2 pointer-events-none">
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 180"
          fill="none"
        >
          <path
            d="M0 20.0058C0 8.96019 8.9541 0.00593454 19.9997 0.00574781L360 0L540 0.00608591H630H664.43C671.044 0.00608591 677.229 3.27496 680.955 8.73864L703.476 41.767C711.415 53.4104 728.585 53.4104 736.524 41.7669L759.045 8.73863C762.771 3.27495 768.956 0.00608591 775.57 0.00608591H810H900L1080 0L1420 0.00574781C1431.05 0.00593454 1440 8.96018 1440 20.0057V1171C1440 1182.05 1431.05 1191 1420 1191H20C8.95432 1191 0 1182.05 0 1171V20.0058Z"
            fill="#fff"
          />
        </svg>
      </div>
          {/* Header */}
          <div className="relative z-20 text-center mt-20 md:mt-2 mb-16">
            <h1 className="lg:text-[56px] text-[36px] font-regular my-6">
              Leadership That Powers <span className="text-[#1763FA]">MACH</span>
            </h1>
            <p className="text-black max-w-4xl font-regular text-[16px] mx-auto leading-relaxed">
              Alongside the core log, MACH includes a powerful, real-time
              AI-Driven Operational Dashboard, built with specialized smart
              tiles that continuously surface patterns, risks, and resources
              across the airport environment.
            </p>
          </div>

          {/* Co-Founders */}
          <div className="flex flex-wrap justify-center gap-16 mb-24">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <ProfileImage person={leader} />
                <h3 className="lg:text-[20px] text-[16px] font-bold">{leader.name}</h3>
                <p className="text-black lg:text-[20px] text-[16px] font-medium">{leader.title}</p>
              </div>
            ))}
          </div>

          {/* Team Members */}
          <div className="flex flex-wrap justify-center gap-12 mb-28">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <ProfileImage person={member} />
                <h3 className="lg:text-[20px] text-[16px] font-bold">{member.name}</h3>
                <p className="text-black lg:text-[20px] text-[16px] font-medium">{member.title}</p>
              </div>
            ))}
          </div>

          {/* Strategic Advisor Board */}
          {/* <div>
            <h2 className="lg:text-[56px] text-[36px] font-regular text-center mb-6">
              Strategic Advisor Board
            </h2>
            <div className="flex flex-wrap justify-center gap-16">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-[293px] h-[306px] rounded-3xl overflow-hidden mb-6 shadow-lg">
                    <img
                      data-aos="fade-up"
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="lg:text-[20px] text-[16px] font-bold">{advisor.name}</h3>
                  <p className="text-black lg:text-[20px] text-[16px] font-medium">{advisor.title}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
