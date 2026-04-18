import { useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type ModuleInfo = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  imageSrc: string;
  learnMoreTag?: string;
  learnMorePunchline?: string;
  learnMoreContent?: string[];
};

type ModuleInfoModalProps = {
  moduleInfo: ModuleInfo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ModuleInfoModal = ({
  moduleInfo,
  open,
  onOpenChange,
}: ModuleInfoModalProps) => {
  useEffect(() => {
    document.body.classList.toggle("mach1-overlay-open", open);
    window.dispatchEvent(
      new CustomEvent("mach1:overlay-visibility", {
        detail: { open },
      }),
    );

    return () => {
      document.body.classList.remove("mach1-overlay-open");
      window.dispatchEvent(
        new CustomEvent("mach1:overlay-visibility", {
          detail: { open: false },
        }),
      );
    };
  }, [open]);

  if (!moduleInfo) return null;

  const bodyContent =
    moduleInfo.learnMoreContent && moduleInfo.learnMoreContent.length > 0
      ? moduleInfo.learnMoreContent
      : [moduleInfo.description];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-[min(84vh,820px)] w-[calc(100vw-20px)] max-w-[1240px] overflow-hidden rounded-[28px] border border-white/10 bg-[#061326] p-0 text-white shadow-[0_32px_80px_rgba(0,0,0,0.45)] sm:w-[calc(100vw-36px)] [&>button:last-child]:hidden">
        <div className="relative overflow-hidden">
          <style>{`
            .mach1-modal-scroll {
              scrollbar-width: thin;
              scrollbar-color: rgba(23,126,255,0.9) rgba(255,255,255,0.08);
            }
            .mach1-modal-scroll::-webkit-scrollbar {
              width: 10px;
            }
            .mach1-modal-scroll::-webkit-scrollbar-track {
              background: rgba(255,255,255,0.07);
              border-radius: 999px;
            }
            .mach1-modal-scroll::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, rgba(23,126,255,0.95), rgba(144,198,61,0.85));
              border-radius: 999px;
              border: 2px solid rgba(6,19,38,0.92);
            }
            .mach1-modal-scroll::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, rgba(66,153,255,1), rgba(169,220,89,0.95));
            }
          `}</style>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,126,255,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(144,198,61,0.16),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(22,126,255,0),rgba(22,126,255,0.8),rgba(144,198,61,0))]" />

          <DialogClose className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#167EFF]/70 focus:ring-offset-0">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="grid h-[min(84vh,820px)] gap-4 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(220px,0.7fr)] lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-6 lg:p-8 xl:grid-cols-[minmax(0,1.8fr)_minmax(240px,0.62fr)]">
            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <div className="mb-4 inline-flex items-center rounded-full border border-[#A4A1A1] bg-[#F4F9EC1A] px-4 py-2 text-[12px] font-medium text-white shadow-[inset_0px_2px_10px_0px_#B5D97D33]">
                {moduleInfo.badge}
              </div>

              <DialogTitle className="max-w-none text-left text-[20px] font-regular leading-tight text-white sm:text-[30px] lg:text-[34px] xl:text-[38px]">
                {moduleInfo.title}{" "}
                <span className="bg-gradient-to-r from-[#167EFF] to-[#90C63D] bg-clip-text text-transparent">
                  {moduleInfo.highlight}
                </span>
              </DialogTitle>

              {moduleInfo.learnMoreTag && (
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#90C63D] sm:text-[12px]">
                  {moduleInfo.learnMoreTag}
                </p>
              )}

              {moduleInfo.learnMorePunchline && (
                <p className="mt-3 max-w-[56rem] pr-3 text-[17px] font-medium leading-8 text-[#B7D5FF] sm:text-[19px] lg:text-[20px]">
                  {moduleInfo.learnMorePunchline}
                </p>
              )}
            </div>

            <div className="order-2 min-w-0 lg:order-none lg:col-span-2 lg:row-start-2">
              <div
                className="mach1-modal-scroll mt-1 max-h-[calc(min(84vh,820px)-220px)] space-y-4 overflow-y-auto pr-1 sm:pr-3 lg:max-h-[calc(min(84vh,820px)-210px)]"
                style={{
                  scrollbarGutter: "stable",
                }}
              >
                {bodyContent.map((paragraph) => (
                  <DialogDescription
                    key={paragraph}
                    className="max-w-none text-left text-[15px] leading-7 text-white/80 sm:text-[16px] sm:leading-8"
                  >
                    {paragraph}
                  </DialogDescription>
                ))}
              </div>
            </div>

            <div className="order-1 hidden justify-center self-start lg:flex lg:col-start-2 lg:row-start-1 lg:items-start lg:justify-end">
              <div className="relative w-full max-w-[140px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:max-w-[170px] lg:mt-4 xl:max-w-[190px]">
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(22,126,255,0.18),transparent_56%)]" />
                <img
                  src={moduleInfo.imageSrc}
                  alt={`${moduleInfo.title} ${moduleInfo.highlight}`}
                  loading="lazy"
                  decoding="async"
                  className="relative z-[1] mx-auto h-auto max-h-[110px] w-full object-contain sm:max-h-[135px] lg:max-h-[155px]"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModuleInfoModal;
