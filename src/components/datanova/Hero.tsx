import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Reveal, SectionLabel } from "./primitives";
import analystImg from "@/assets/hero-analyst.jpg";
import teamImg from "@/assets/hero-team.jpg";
import avatarsImg from "@/assets/hero-avatars.jpg";

const LOGOS = ["DataCore", "NexusERP", "Mountana", "FactFix", "LogTrans", "MeetHub"];

const STATS = [
  { label: "Satisfied rate", value: "98%", delay: 0.50 },
  { label: "Successful projects", value: "14K", delay: 0.65 },
  { label: "Clients served", value: "5,8K", delay: 0.80 },
];

/* ── Mini bar-chart SVG ── */
function GrowthChart() {
  const bars = [40, 55, 38, 70, 52, 85, 65, 100];
  return (
    <svg viewBox="0 0 80 48" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={i * 10 + 1}
          width={7}
          rx={2}
          fill={i === bars.length - 1 ? "var(--primary)" : "rgba(245,165,36,0.35)"}
          initial={{ height: 0, y: 48 }}
          whileInView={{ height: h * 0.42, y: 48 - h * 0.42 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08, type: "spring", bounce: 0.2 }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-background pt-16 sm:pt-20 lg:pt-20 pb-16 min-h-[100dvh]">
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      {/* Warm ambient glow */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,165,36,0.13) 0%, transparent 70%)" }}
      />

      {/* ── Page grid: single col on mobile → two cols on lg ── */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10
                      grid grid-cols-1 lg:grid-cols-2
                      gap-12 lg:gap-16
                      items-center">

        {/* ════════════ LEFT — text ════════════ */}
        <div className="flex flex-col items-start">


          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display font-bold leading-[1.05] tracking-tight text-foreground
                           text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem]">
              Fragmented Data <br />
              Into <span style={{ color: "var(--primary)" }}>Real-Time</span> <br />
              Decisions
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[480px] leading-relaxed text-base sm:text-lg"
              style={{ color: "var(--muted-foreground)" }}>
              DatanovaIQ connects your data, finds the patterns, and shows you what to do next.
            </p>
          </Reveal>

          {/* CTA row */}
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 sm:px-7 sm:py-3.5
                           text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  boxShadow: "0 12px 32px -8px rgba(245,165,36,0.6)",
                }}
              >
                Request Demo
              </a>
              <Link to="/Product" className="flex items-center gap-2 group">
                <span className="text-sm font-semibold">NovaIQ</span>
                <div
                  aria-label="Start"
                  className="grid h-11 w-11 place-items-center rounded-full
                           transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    boxShadow: "0 6px 18px -4px rgba(245,165,36,0.5)",
                  }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </Link>



            </div>
          </Reveal>

          {/* Powered by */}

        </div>

        {/* ════════════════════════════════════════════════════════════════════
            RIGHT — Redesigned layout based on reference image
            Main Grid: 88% width to leave space for badges.
              - Top Row (60% height):
                  - Left: Orange cards
                  - Right: Portrait photo
              - Bottom Row (40% height):
                  - Full width: Team photo
            Floating Elements:
              - Play button: overlaps the left edge of the orange cards.
              - Stat Badges: positioned on the right edge, overlapping the images.
        ════════════════════════════════════════════════════════════════════ */}
        <Reveal delay={0.22}>
          {/* ── Outer wrapper ── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(360px, 54vw, 520px)",
            }}
          >
            {/* ── Main Image Grid ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "88%",
                height: "100%",
              }}
            >
              {/* Top Row */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flex: "3 1 0",
                  minHeight: 0,
                }}
              >
                {/* Left Col: Orange Cards */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: "4 1 0",
                    minWidth: 0,
                    position: "relative",
                  }}
                >
                  {/* Orange 124K+ card */}
                  <div
                    style={{
                      flex: "3 1 0",
                      minHeight: 0,
                      background: "var(--primary)",
                      borderRadius: "18px",
                      overflow: "hidden",
                      padding: "14px 14px 16px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                    }}
                  >
                    {/* Avatars — top-left */}
                    <div style={{ display: "flex" }}>
                      <img
                        src={avatarsImg}
                        alt="Team avatars"
                        style={{
                          width: 30, height: 30,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid rgba(255,255,255,0.45)",
                        }}
                      />
                      <div
                        style={{
                          width: 30, height: 30,
                          borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.45)",
                          background: "rgba(255,255,255,0.25)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 9, fontWeight: 700,
                          color: "var(--primary-foreground)",
                          marginLeft: -8,
                        }}
                      >
                        +2
                      </div>
                    </div>

                    {/* Stat number + description */}
                    <div>
                      <div
                        style={{
                          fontWeight: 900,
                          fontSize: "clamp(26px, 4.5vw, 40px)",
                          lineHeight: 1,
                          color: "var(--primary-foreground)",
                        }}
                      >
                        124K+
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          lineHeight: 1.45,
                          marginTop: 6,
                          opacity: 0.88,
                          color: "var(--primary-foreground)",
                        }}
                      >
                        More than 2,000 people has joined us
                      </div>
                    </div>

                    {/* Decorative translucent circle */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: -40, right: -40,
                        width: 110, height: 110,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.09)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Growth card */}
                  <div
                    style={{
                      flex: "2 1 0",
                      minHeight: 0,
                      background: "var(--accent)",
                      borderRadius: "18px",
                      overflow: "hidden",
                      padding: "10px 12px 12px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ flex: 1, minHeight: 0, width: "100%" }}>
                      <GrowthChart />
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: "var(--ink)",
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    >
                      Successful<br />growth
                    </div>
                  </div>

                  {/* ── Play button ── */}
                  <a
                    href="#demo-video"
                    className="left-[-16px] sm:left-[-32px] md:left-[-46px]"
                    style={{
                      position: "absolute",
                      top: "calc(60% - 46px)",
                      zIndex: 20,
                      width: 92,
                      height: 92,
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: "8px solid var(--background)",
                      backgroundColor: "var(--ink)",
                      display: "grid", placeItems: "center",
                      textDecoration: "none"
                    }}
                  >
                    <Play
                      style={{
                        width: 18, height: 18, marginLeft: 2,
                        color: "var(--ink-foreground)",
                        fill: "var(--ink-foreground)",
                      }}
                    />
                    <svg
                      className="absolute inset-0 w-full h-full animate-spin"
                      style={{ animationDuration: "20s" }}
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <path
                          id="heroRing"
                          d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                        />
                      </defs>
                      <text
                        style={{
                          fill: "var(--ink-foreground)",
                          fontSize: 8.5,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          opacity: 0.8,
                        }}
                      >
                        <textPath href="#heroRing" startOffset="0%">
                          WATCH VIDEO OF OUR ACTION •
                        </textPath>
                      </text>
                    </svg>
                  </a>
                </div>

                {/* Right Col: Portrait Photo */}
                <div
                  style={{
                    flex: "5 1 0",
                    minWidth: 0,
                    borderRadius: "18px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={analystImg}
                    alt="Data analyst"
                    fetchPriority="high"
                    style={{
                      position: "absolute", inset: 0,
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center top",
                    }}
                  />
                </div>
              </div>

              {/* Bottom Row: Team Photo */}
              <div
                style={{
                  flex: "2 1 0",
                  minHeight: 0,
                  borderRadius: "18px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={teamImg}
                  alt="Enterprise team"
                  loading="lazy"
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* ── Stat Badges Container ── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: "clamp(100px, 28%, 150px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "24px",
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  style={{ pointerEvents: "auto" }}
                >
                  <div
                    style={{
                      background: "var(--ink)",
                      borderRadius: "14px",
                      padding: "12px 14px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.30)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 8,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.12em",
                        color: "var(--ink-foreground)",
                        opacity: 0.55,
                        lineHeight: 1.3,
                        marginBottom: 4,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "clamp(20px, 3.2vw, 30px)",
                        lineHeight: 1,
                        color: "var(--primary)",
                      }}
                    >
                      {s.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
