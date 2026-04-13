const rowOne = [
  "Edmonton Regional Airport",
  "Northern Airfield Ops",
  "SkyBridge Aviation Services",
  "Runway Intelligence Group",
  "Prairie Safety Command",
  "Terminal Ops Network",
];

const rowTwo = [
  "AeroShield Systems",
  "Global Apron Response",
  "Wildlife Risk Unit",
  "Integrated Airside Control",
  "Flightfield Services",
  "Smart Airport Programs",
];

const repeated = (items: string[]) => [...items, ...items];

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <div className="relative overflow-hidden">
    <div className={reverse ? "marquee-track-reverse flex gap-4" : "marquee-track flex gap-4"}>
      {repeated(items).map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="inline-flex min-w-max items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-[14px] font-semibold tracking-[0.08em] text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const BusinessMarquee = () => {
  return (
    <section data-header-tone="light" className="bg-white py-14">
      <div className="site-shell">
        <div className="mb-8 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-slate-500">
            Built For Modern Operations
          </p>
          <h2 className="title-balanced mt-4 text-[30px] font-normal text-slate-950 md:text-[44px]">
            Trusted across airport operations teams, safety leaders, and airside programs
          </h2>
        </div>

        <div className="space-y-4">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </div>
      </div>
    </section>
  );
};

export default BusinessMarquee;
