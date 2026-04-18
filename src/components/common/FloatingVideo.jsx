// import React from "react";
// import vid from "../../../assets/vid.mp4"

// export default function FloatingVideo() {
//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <div className="w-64 h-40 rounded-xl overflow-hidden shadow-2xl bg-black">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src={vid} type="video/mp4" />
//         </video>
//       </div>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const VolumeIcon = ({ muted }) => (
  <svg viewBox="0 0 24 24" fill="#fff" width="18" height="18">
    {muted ? (
      <>
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <line
          x1="23"
          y1="9"
          x2="17"
          y2="15"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="17"
          y1="9"
          x2="23"
          y2="15"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ) : (
      <>
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path
          d="M15.54 8.46a5 5 0 0 1 0 7.07"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M19.07 4.93a10 10 0 0 1 0 14.14"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </>
    )}
  </svg>
);

const FullscreenIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="18"
    height="18"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const CollapseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="18"
    height="18"
  >
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="10" y1="14" x2="3" y2="21" />
    <line x1="21" y1="3" x2="14" y2="10" />
  </svg>
);

const PipIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="18"
    height="18"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <rect
      x="12"
      y="9"
      width="9"
      height="7"
      rx="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="18"
    height="18"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function FloatingVideoWidget() {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [hoverBubble, setHoverBubble] = useState(false);
  const [videoAspectRatio, setVideoAspectRatio] = useState(16 / 9);
  const videoRef = useRef(null);
  const controlsTimer = useRef(null);
  const pendingFullscreenRef = useRef(false);

  useEffect(() => {
    if (expanded && videoRef.current) {
      videoRef.current.play();
      setPlaying(true);

      if (pendingFullscreenRef.current) {
        pendingFullscreenRef.current = false;
        window.setTimeout(() => {
          videoRef.current?.requestFullscreen?.();
        }, 120);
      }
    }
  }, [expanded]);

  useEffect(() => {
    const handleOpenVideo = (event) => {
      const shouldFullscreen = Boolean(event?.detail?.fullscreen);
      pendingFullscreenRef.current = shouldFullscreen;
      setIsVisible(true);
      setExpanded(true);
    };

    window.addEventListener("mach1:open-video", handleOpenVideo);

    return () => {
      window.removeEventListener("mach1:open-video", handleOpenVideo);
    };
  }, []);

  useEffect(() => {
    const syncOverlayState = (event) => {
      const nextOpen =
        typeof event?.detail?.open === "boolean"
          ? event.detail.open
          : document.body.classList.contains("mach1-overlay-open");

      setIsOverlayOpen(nextOpen);
    };

    syncOverlayState();
    window.addEventListener("mach1:overlay-visibility", syncOverlayState);

    return () => {
      window.removeEventListener("mach1:overlay-visibility", syncOverlayState);
    };
  }, []);

  useEffect(() => {
    const syncFullscreenState = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      setIsFullscreen(fullscreenElement === videoRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    document.addEventListener("webkitfullscreenchange", syncFullscreenState);
    document.addEventListener("mozfullscreenchange", syncFullscreenState);
    document.addEventListener("MSFullscreenChange", syncFullscreenState);

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
      document.removeEventListener("webkitfullscreenchange", syncFullscreenState);
      document.removeEventListener("mozfullscreenchange", syncFullscreenState);
      document.removeEventListener("MSFullscreenChange", syncFullscreenState);
    };
  }, []);

  const VIDEO_SRC = "https://ik.imagekit.io/5l25qpaqj/vid.mp4";

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const handleProgress = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress(v.currentTime / v.duration);
  };

  const handleLoaded = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      const { videoWidth, videoHeight } = videoRef.current;
      if (videoWidth && videoHeight) {
        setVideoAspectRatio(videoWidth / videoHeight);
      }
    }
  };

  const expandedWidth =
    videoAspectRatio >= 1
      ? Math.min(520, Math.max(360, Math.round(videoAspectRatio * 260)))
      : Math.min(420, Math.max(320, Math.round(videoAspectRatio * 420)));

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const v = videoRef.current;
    if (v && v.duration) {
      v.currentTime = ratio * v.duration;
      setProgress(ratio);
    }
  };

  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) videoRef.current.volume = val;
    setMuted(val === 0);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 2500);
  };

  const handleEnd = () => setPlaying(false);

  if (!isVisible) return null;

  return (
    <>
      {/* // <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
    //   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

    //   <div style={{ textAlign: "center", opacity: 0.4 }}>
    //     <div style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-2px", marginBottom: "12px" }}>Your App</div>
    //     <div style={{ fontSize: "14px", letterSpacing: "4px", textTransform: "uppercase", opacity: 0.6 }}>Floating video demo</div>
    //   </div>


    // </div> */}
      {/* Floating Widget */}
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          opacity: isOverlayOpen ? 0 : 1,
          pointerEvents: isOverlayOpen ? "none" : "auto",
          transform: isOverlayOpen ? "translateY(24px)" : "translateY(0)",
        }}
      >
        {/* EXPANDED PLAYER */}
        {expanded && (
          <div
            style={{
              width: `min(${expandedWidth}px, calc(100vw - 32px))`,
              background: "rgba(12, 10, 30, 0.96)",
              borderRadius: "20px",
              overflow: "hidden",
              // boxShadow:
              //   "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)",
              animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowControls(false)}
          >
            {/*               @keyframes bubblePulse { 0%,100%{box-shadow:0 8px 32px rgba(120,80,255,0.4),0 0 0 1px rgba(255,255,255,0.12);} 50%{box-shadow:0 8px 40px rgba(120,80,255,0.7),0 0 0 1px rgba(255,255,255,0.2);} }
             */}
            <style>{`
              @keyframes popIn { from { opacity:0; transform:scale(0.7) translateY(30px); } to { opacity:1; transform:scale(1) translateY(0); } }
              .scrubber::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:#0071FF;cursor:pointer;box-shadow:0 0 6px rgba(167,139,250,0.8);}
              .scrubber::-webkit-slider-runnable-track{background:transparent;}
              .vol-slider::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:10px;border-radius:50%;background:#0071FF;cursor:pointer;}
            `}</style>

            {/* Video */}
            <div
              style={{
                position: "relative",
                background: "#000",
                aspectRatio: `${videoAspectRatio}`,
              }}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: isFullscreen ? "contain" : "cover",
                  background: "#000",
                  display: "block",
                }}
                onTimeUpdate={handleProgress}
                onLoadedMetadata={handleLoaded}
                onEnded={handleEnd}
                onClick={togglePlay}
              />

              {/* Gradient overlay for controls */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "80px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                  opacity: showControls || !playing ? 1 : 0,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
              />

              {/* Top bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 14px",
                  background: "linear-gradient(rgba(0,0,0,0.6), transparent)",
                  // opacity: showControls || !playing ? 1 : 0,
                  // transition: "opacity 0.3s",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  Now Playing
                </span>
                <div style={{ display: "flex", gap: "6px" }}>
                  {/* <button
                    onClick={() => setExpanded(false)}
                    title="Mini player"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                      cursor: "pointer",
                      padding: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <PipIcon />
                  </button> */}
                  <button
                    onClick={() => {
                      setExpanded(false);
                    }}
                    style={{
                      // background: "rgba(255,255,255,0.1)",
                      background: "#0071FF",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                      cursor: "pointer",
                      padding: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <CollapseIcon />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    style={{
                      // background: "rgba(239, 68, 68, 0.8)",
                      background: "#0071FF",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                      cursor: "pointer",
                      padding: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Controls bar */}
            <div style={{ padding: "14px 16px 16px" }}>
              {/* Scrubber */}
              <div
                style={{
                  position: "relative",
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
                onClick={seek}
              >
                <div
                  style={{
                    height: "4px",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${progress * 100}%`,
                      // background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
                      background: "#0071FF",
                      borderRadius: "4px",
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={progress}
                  onChange={(e) => {
                    const v = videoRef.current;
                    if (v && v.duration)
                      v.currentTime = parseFloat(e.target.value) * v.duration;
                    setProgress(parseFloat(e.target.value));
                  }}
                  className="scrubber"
                  style={{
                    position: "absolute",
                    top: "-6px",
                    left: 0,
                    right: 0,
                    width: "100%",
                    opacity: 0,
                    height: "16px",
                    cursor: "pointer",
                  }}
                />
              </div>

              {/* Bottom row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Left: play + time */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <button
                    // className="bg-navy-deep"
                    onClick={togglePlay}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // boxShadow: "0 4px 16px rgba(124,58,237,0.5)",
                      transition: "transform 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    {playing ? <PauseIcon /> : <PlayIcon />}
                  </button>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.5)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {formatTime(progress * duration)}{" "}
                    <span style={{ opacity: 0.4 }}>
                      / {formatTime(duration)}
                    </span>
                  </span>
                </div>

                {/* Right: volume + fullscreen */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <button
                    onClick={toggleMute}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      padding: "4px",
                      display: "flex",
                    }}
                  >
                    <VolumeIcon muted={muted} />
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={muted ? 0 : volume}
                    onChange={handleVolume}
                    className="vol-slider"
                    style={{
                      width: "60px",
                      height: "3px",
                      cursor: "pointer",
                      appearance: "none",
                      background: "#0071FF",
                      // background: `linear-gradient(90deg, #a78bfa ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.15) ${(muted ? 0 : volume) * 100}%)`,
                      borderRadius: "4px",
                    }}
                  />
                  <button
                    onClick={() => videoRef.current?.requestFullscreen?.()}
                    style={{
                      background: "none",
                      border: "none",
                      // color: "rgba(255,255,255,0.6)",
                      color: "#0071FF",
                      cursor: "pointer",
                      padding: "4px",
                      display: "flex",
                    }}
                  >
                    <FullscreenIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BUBBLE (collapsed) */}
        {!expanded && (
          <div style={{ position: "relative" }}>
            <div
              // onClick={() => setExpanded(true)}
              onClick={() => {
                setExpanded(true);

                // setTimeout(() => {
                //   if (videoRef.current) {
                //     videoRef.current.play();
                //     setPlaying(true);
                //   }
                // }, 50);
              }}
              onMouseEnter={() => setHoverBubble(true)}
              onMouseLeave={() => setHoverBubble(false)}
              style={{
                width: "9.25rem",
                height: "5.5rem",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                animation: "bubblePulse 3s ease-in-out infinite",
                transform: hoverBubble ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                // boxShadow:
                //   "0 8px 32px rgba(120,80,255,0.4), 0 0 0 2px rgba(167,139,250,0.3)",
              }}
            >
              {/* <style>{`@keyframes bubblePulse { 0%,100%{box-shadow:0 8px 32px rgba(120,80,255,0.4),0 0 0 2px rgba(167,139,250,0.3);} 50%{box-shadow:0 8px 44px rgba(120,80,255,0.65),0 0 0 2px rgba(167,139,250,0.5);} }`}</style> */}
              <video
                src={VIDEO_SRC}
                muted
                autoPlay
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              />
              {/* Play hint overlay */}
              {/* <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: hoverBubble
                    ? "rgba(0,0,0,0.4)"
                    : "rgba(0,0,0,0.15)",
                  transition: "background 0.2s",
                }}
              >
                {hoverBubble && (
                  <div style={{ color: "#fff", opacity: 0.9 }}>
                    <PlayIcon />
                  </div>
                )}
              </div> */}
            </div>
            <button
              onClick={() => setIsVisible(false)}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                // background: "rgba(239, 68, 68, 0.9)",
                background: "#0071FF",
                color: "white",
                border: "none",
                borderRadius: "999px",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                boxShadow: "0 8px 22px rgba(0,0,0,0.28)",
                border: "2px solid rgba(255,255,255,0.85)",
              }}
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
