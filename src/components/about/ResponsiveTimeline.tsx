import { useState, useEffect } from "react";

const milestones = [
  {
    period: "2013–2014",
    description:
      "Entered aviation; early fieldwork revealed technology and knowledge gaps.",
  },
  {
    period: "2014–2016",
    description:
      "Built core operational, safety, and emergency expertise in challenging environments.",
  },
  {
    period: "2019–2020",
    description:
      "Citizenship milestone followed by MACH1's conceptual design during COVID.",
  },
  {
    period: "2020–2021",
    description:
      "Frontline validation across Canada; Ascend Technologies launched.",
  },
  {
    period: "2020–2024",
    description:
      "Platform proven through real-world events and evolution into AI-driven systems.",
  },
  {
    period: "2025–Present",
    description:
      "MACH1 in live testing with global data expansion and active adoption.",
  },
];

export default function ResponsiveTimeline() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    milestones.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <div
      style={{
        // background: "linear-gradient(135deg, #020818 0%, #050d2e 50%, #020818 100%)",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "220px",
        padding: "48px 40px 56px",
        position: "relative",
        maxWidth: "100rem",
        margin: "0 auto",
      }}
      className="overflow-x-auto"
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,80,200,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Space+Grotesk:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Period labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "25px",
          }}
        >
          {milestones.map((m, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                opacity: visible.includes(i) ? 1 : 0,
                transform: visible.includes(i) ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#3b82f6",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {m.period}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline line + dots */}
        <div style={{ position: "relative", height: "24px" }}>
          {/* Horizontal line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "calc(100% / 12)",
              right: "calc(100% / 12)",
              height: "1px",
              background: "#fff",
              // background:
              //   "linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 10%, rgba(255,255,255,0.35) 90%, transparent)",
              transform: "translateY(-50%)",
            }}
          />

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            {milestones.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {/* Vertical dotted connector */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "0",
                    height: "60px",
                    borderLeft: "2px dotted #fff",
                    opacity: visible.includes(i) ? 1 : 0,
                    transition: `opacity 0.4s ease ${i * 0.15}s`,
                    zIndex: 0,
                  }}
                />
                {/* Dot */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: visible.includes(i)
                      ? "white"
                      : "rgba(255,255,255,0.1)",
                    boxShadow: visible.includes(i)
                      ? "0 0 0 3px rgba(255,255,255,0.15), 0 0 15px rgba(255,255,255,0.3)"
                      : "none",
                    transition: `background 0.4s ease ${i * 0.15}s, box-shadow 0.4s ease ${i * 0.15}s`,
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description text */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "25px",
            gap: "8px",
            textAlign:"center"
          }}
        >
          {milestones.map((m, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                maxWidth: "180px",
                textAlign: "left",
                paddingLeft: "4px",
                paddingRight: "12px",
                opacity: visible.includes(i) ? 1 : 0,
                transform: visible.includes(i) ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.5s ease ${i * 0.15 + 0.1}s, transform 0.5s ease ${i * 0.15 + 0.1}s`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "1.55",
                  color: "rgb(255, 255, 255)",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                }}
              >
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}