import { useEffect, useState } from "react";

const mobileScreens = [
  "/assets/home/session2/mobile1.jpeg",
  "/assets/home/session2/mobile2.jpeg",
  "/assets/home/session2/mobile3.jpeg",
  "/assets/home/session2/mobile4.jpeg",
  "/assets/home/session2/mobile5.jpeg",
];

const AUTO_SLIDE_MS = 2500;

const MobileScreensCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % mobileScreens.length);
    }, AUTO_SLIDE_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[24px]">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {mobileScreens.map((screen, index) => (
          <img
            key={screen}
            src={screen}
            alt={`Airport mobile screen ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="block w-full shrink-0 rounded-[24px] object-cover"
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {mobileScreens.map((screen, index) => (
          <span
            key={screen}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileScreensCarousel;
