import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mobileScreens = [
  "/assets/home/session2/mobile1.jpeg",
  "/assets/home/session2/mobile2.jpeg",
  "/assets/home/session2/mobile3.jpeg",
  "/assets/home/session2/mobile4.jpeg",
  "/assets/home/session2/mobile5.jpeg",
];

const AUTO_SLIDE_MS = 1800;
const RESUME_AFTER_INTERACTION_MS = 2000;

const MobileScreensCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });
  const autoplayRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const clearResumeTimer = useCallback(() => {
    if (resumeRef.current !== null) {
      window.clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!emblaApi || autoplayRef.current !== null) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTO_SLIDE_MS);
  }, [emblaApi]);

  const pauseAndResumeAutoplay = useCallback(() => {
    clearAutoplay();
    clearResumeTimer();

    resumeRef.current = window.setTimeout(() => {
      startAutoplay();
    }, RESUME_AFTER_INTERACTION_MS);
  }, [clearAutoplay, clearResumeTimer, startAutoplay]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollPrev();
    pauseAndResumeAutoplay();
  }, [emblaApi, pauseAndResumeAutoplay]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollNext();
    pauseAndResumeAutoplay();
  }, [emblaApi, pauseAndResumeAutoplay]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const syncSelectedIndex = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    const handlePointerDown = () => {
      pauseAndResumeAutoplay();
    };

    syncSelectedIndex();
    emblaApi.on("select", syncSelectedIndex);
    emblaApi.on("reInit", syncSelectedIndex);
    emblaApi.on("pointerDown", handlePointerDown);
    startAutoplay();

    return () => {
      emblaApi.off("select", syncSelectedIndex);
      emblaApi.off("reInit", syncSelectedIndex);
      emblaApi.off("pointerDown", handlePointerDown);
      clearAutoplay();
      clearResumeTimer();
    };
  }, [clearAutoplay, clearResumeTimer, emblaApi, pauseAndResumeAutoplay, startAutoplay]);

  return (
    <div className="relative mx-auto w-full max-w-[44rem] sm:max-w-[46rem] h-full overflow-hidden rounded-[24px]">
      <div ref={emblaRef} className="overflow-hidden rounded-[24px] h-full">
        <div className="flex h-full">
          {mobileScreens.map((screen, index) => (
            <div
              key={screen}
              className="min-w-0 shrink-0 grow-0 basis-full h-full flex items-center justify-center"
            >
              <img
                src={screen}
                alt={`Airport mobile screen ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain rounded-[24px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
        <button
          type="button"
          onClick={scrollPrev}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50"
          aria-label="Previous mobile screen"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50"
          aria-label="Next mobile screen"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {mobileScreens.map((screen, index) => (
          <button
            key={screen}
            type="button"
            onClick={() => {
              emblaApi?.scrollTo(index);
              pauseAndResumeAutoplay();
            }}
            className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/45"
              }`}
            aria-label={`Go to mobile screen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileScreensCarousel;
