import { useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "motion/react";
import { Turnstile } from '@marsidev/react-turnstile';
import {
  Database, Brain, TrendingUp, Cog, Network, Activity,
  Building2, HeartPulse, ShoppingBag, Landmark, Factory, ServerCog,
  AlertTriangle, Clock, FileWarning, EyeOff, Workflow as WorkflowIcon, Layers,
  Users, Cloud, BarChart, ChevronDown, MessageSquare, PhoneCall, Mail, Play,
  Code2, Terminal, Webhook, ShieldCheck, Lock, Fingerprint, FileKey,
  Calendar, ChevronRight, Zap, CheckCircle2, ArrowRight, X, MapPin
} from "lucide-react";
import { Reveal, SectionLabel, Counter } from "./primitives";
import networkImg from "@/assets/intelligence-network.jpg";
import archImg from "@/assets/architecture-grid.jpg";
import cubeImg from "@/assets/glass_cube_orange.png";
import stackImg from "@/assets/glass_stack_orange.png";
import backboneCoreImg from "@/assets/ai_backbone_core.png";
import officeImg from "@/assets/corporate_office_ai.png";
import { Check } from "lucide-react";
import capDatabaseImg from "@/assets/cap_database.png";
import capBrainImg from "@/assets/cap_brain.png";
import capTrendingImg from "@/assets/cap_trending.png";
import capGearsImg from "@/assets/cap_gears.png";
import capNetworkImg from "@/assets/cap_network.png";
import capPulseImg from "@/assets/cap_pulse.png";
// ============ SECTION 02 — DATA CHAOS ============

const CHAOS = [
  { icon: Layers, label: "Data Silos", desc: "Information trapped across disconnected enterprise systems, preventing a single source of truth.", alert: "Silos increase costs and create blind spots." },
  { icon: Clock, label: "Delayed Reporting", desc: "Insights arrive days after the decisions are needed.", alert: "Slow data = missed opportunities." },
  { icon: FileWarning, label: "Manual Analytics", desc: "Engineers stitching spreadsheets instead of solving problems.", alert: "High effort, low impact." },
  { icon: EyeOff, label: "Fragmented Visibility", desc: "No single source of truth across business units.", alert: "Incomplete data leads to incomplete decisions." },
  { icon: AlertTriangle, label: "Reactive Decisions", desc: "Operations driven by lagging indicators, not foresight.", alert: "Reacting to problems instead of preventing them." },
];

export function DataChaos() {
  return (
    <section className="relative bg-background pt-32 pb-24 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                THE PROBLEM
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                Five Cracks In Every <span className="text-primary">Enterprise Data.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-xl">
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Disconnected systems, manual processes, and lagging indicators turn valuable data into a liability instead of an asset.
              </p>
            </Reveal>
          </div>
          <div className="hidden lg:block relative shrink-0">
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full" />
            <img src={cubeImg} alt="Abstract 3D Glass Cube" className="relative w-64 h-64 object-contain drop-shadow-2xl animate-float" />
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAOS.map((c, i) => {
            const isLarge = i === 0;
            return (
              <Reveal key={c.label} delay={0.1 * i} className={isLarge ? "lg:col-span-2" : ""}>
                <div className="group relative h-full rounded-[32px] bg-card border border-border/40 p-8 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden">

                  {/* Premium watermark icon effect */}
                  <div className="absolute -right-8 -top-8 text-foreground/[0.02] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                    <c.icon strokeWidth={1} style={{ width: isLarge ? 260 : 180, height: isLarge ? 260 : 180 }} />
                  </div>

                  <div className={`relative z-10 flex flex-col justify-between gap-8 h-full ${isLarge ? "lg:flex-row" : ""}`}>
                    <div className={`flex flex-col justify-between ${isLarge ? "lg:max-w-sm flex-1" : "h-full"}`}>
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-2xl bg-background border border-border/50 shadow-sm flex items-center justify-center text-primary">
                            <c.icon className="h-6 w-6" strokeWidth={1.5} />
                          </div>
                          <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                            0{i + 1}
                          </span>
                        </div>

                        <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-foreground">{c.label}</h3>
                        <div className="w-8 h-1 bg-primary/30 mt-3 mb-4 rounded-full" />
                        <p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p>
                      </div>

                      <div className={`inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-3 text-xs font-medium text-foreground ${isLarge ? "mt-8" : "mt-8 self-start"}`}>
                        <AlertTriangle className="h-4 w-4 text-primary shrink-0" />
                        {c.alert}
                      </div>
                    </div>

                    {isLarge && (
                      <div className="hidden lg:flex flex-1 items-center justify-center relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
                        <img src={stackImg} alt="3D Glass Layers" className="relative w-full max-w-[280px] object-contain drop-shadow-2xl" />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ SECTION 03 — WHO WE ARE ============

const ABOUT_POINTS = [
  "Our Mission", "Engineering DNA", "Enterprise Trust", "Innovation First"
];

export function IntelligenceLayer() {
  return (
    <section id="about" className="relative section-pad bg-background overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: 'Who We Are' Style Image Collage */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-3xl">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 blur-[80px] rounded-full pointer-events-none z-0" />

            {/* Primary Large Image */}
            <Reveal className="absolute top-0 right-0 w-[80%] h-[70%] z-10">
              <div className="w-full h-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl bg-card">
                <img src={backboneCoreImg} alt="Enterprise AI Core" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-[2rem]" />
              </div>
            </Reveal>

            {/* Secondary Overlapping Image */}
            <Reveal delay={0.2} className="absolute bottom-0 left-0 w-[65%] h-[60%] z-20">
              <div className="w-full h-full rounded-[2rem] overflow-hidden border-[8px] border-background bg-card shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <img src={officeImg} alt="Corporate AI Office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-[1.5rem]" />
              </div>
            </Reveal>

            {/* Floating Experience Badge */}
            <Reveal delay={0.4} className="absolute bottom-16 right-4 sm:right-12 z-30">
              <div className="bg-background/80 backdrop-blur-xl border border-border p-5 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full bg-accent border-2 border-background flex items-center justify-center shrink-0">
                      <Database className="h-4 w-4 text-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-display font-bold text-lg leading-none">500+</div>
                  <div className="text-xs text-muted-foreground mt-1">Clients Served</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Text & STACK List */}
          <div className="flex flex-col justify-center py-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                WHO WE ARE
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground">
                Pioneering the Future of <br /><span className="text-primary">Data Intelligence</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                We are a team of data experts and engineers dedicated to unifying enterprise systems and unlocking the true potential of AI-driven analytics.
              </p>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {ABOUT_POINTS.map((layer, i) => {
                const Icon =
                  i === 0 ? TrendingUp :
                    i === 1 ? Cog :
                      i === 2 ? Building2 :
                        i === 3 ? Brain :
                          i === 4 ? Network :
                            Users;

                return (
                  <Reveal key={layer} delay={0.2 + (i * 0.05)}>
                    <div className="group flex flex-col h-full gap-2 p-5 rounded-[20px] bg-card/50 hover:bg-card border border-border/40 hover:border-primary/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300">
                      <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div className="mt-2">
                        <h4 className="font-display text-[1.1rem] font-bold text-foreground">{layer}</h4>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {i === 0 && "To unify fragmented enterprise systems and activate real-time intelligence."}
                          {i === 1 && "Built by engineers, for engineers. We prioritize robust, scalable architecture."}
                          {i === 2 && "Trusted by top enterprises with mission-critical data security and governance."}
                          {i === 3 && "Pioneering new approaches in AI-driven analytics and data fabrics."}

                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============ SECTION 04 — CAPABILITIES ============

const CAPS = [
  { icon: Database, title: "Data Unification", desc: "Connect ERP, CRM, warehouses, lakes and streaming sources into one fabric." },
  { icon: Brain, title: "AI Analytics", desc: "Apply foundation models, ML pipelines and LLMs across enterprise data." },
  { icon: TrendingUp, title: "Predictive Intelligence", desc: "Forecast risk, demand, churn and operational anomalies in real time." },
  { icon: Cog, title: "Decision Automation", desc: "Trigger automated workflows from AI-generated insights and policies." },
  { icon: Network, title: "Enterprise Integration", desc: "Native connectors, APIs, event streams and zero-copy data sharing." },
  { icon: Activity, title: "Real-Time Monitoring", desc: "Observability across pipelines, models, infra and business KPIs." },
];

const GRAPHIC_DATA: Record<string, { main: any, satellites: { icon: any, label?: string, x: number, y: number, color?: string }[] }> = {
  "Data Unification": {
    main: Database,
    satellites: [
      { icon: Cloud, x: -110, y: 50, color: "text-blue-500" },
      { icon: Users, label: "CRM", x: 100, y: -40, color: "text-indigo-500" },
      { icon: Layers, label: "ERP", x: -120, y: -20, color: "text-orange-500" },
      { icon: Network, x: 110, y: 50, color: "text-emerald-500" },
    ]
  },
  "AI Analytics": {
    main: Brain,
    satellites: [
      { icon: Database, x: -100, y: -30, color: "text-indigo-500" },
      { icon: TrendingUp, x: 110, y: 10, color: "text-orange-500" },
      { icon: BarChart, x: -80, y: 50, color: "text-blue-500" },
    ]
  },
  "Predictive Intelligence": {
    main: TrendingUp,
    satellites: [
      { icon: Activity, x: -110, y: 10, color: "text-emerald-500" },
      { icon: AlertTriangle, x: 90, y: -40, color: "text-orange-500" },
      { icon: HeartPulse, x: 80, y: 50, color: "text-red-500" },
    ]
  },
  "Decision Automation": {
    main: Cog,
    satellites: [
      { icon: WorkflowIcon, x: -110, y: -30, color: "text-indigo-500" },
      { icon: ServerCog, x: 100, y: -20, color: "text-blue-500" },
      { icon: Network, x: 0, y: 60, color: "text-orange-500" },
    ]
  },
  "Enterprise Integration": {
    main: Network,
    satellites: [
      { icon: Building2, x: -100, y: -40, color: "text-emerald-500" },
      { icon: Landmark, x: 110, y: -30, color: "text-indigo-500" },
      { icon: ShoppingBag, x: 90, y: 40, color: "text-orange-500" },
      { icon: Cloud, x: -80, y: 50, color: "text-blue-500" },
    ]
  },
  "Real-Time Monitoring": {
    main: Activity,
    satellites: [
      { icon: Clock, x: -100, y: -20, color: "text-blue-500" },
      { icon: EyeOff, x: 110, y: 20, color: "text-orange-500" },
      { icon: FileWarning, x: -60, y: 50, color: "text-red-500" },
    ]
  }
};

function MiniGraphic({ title }: { title: string }) {
  const data = GRAPHIC_DATA[title];
  if (!data) return null;

  return (
    <div className="absolute left-0 right-0 bottom-0 h-[240px] flex items-center justify-center pointer-events-none">
      {/* Background gradient fade to hide bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent z-30" />

      {/* Perspective Rings */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-12">
        <div className="w-[320px] h-[320px] border border-primary/10 rounded-full" style={{ transform: 'rotateX(75deg)' }} />
        <div className="absolute w-[220px] h-[220px] border border-primary/20 rounded-full" style={{ transform: 'rotateX(75deg)' }} />
        <div className="absolute w-[120px] h-[120px] border-[3px] border-primary/30 rounded-full shadow-[0_0_30px_rgba(242,107,42,0.2)] bg-primary/[0.02]" style={{ transform: 'rotateX(75deg)' }} />
      </div>

      {/* Connections (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240" style={{ zIndex: 10 }}>
        <g transform="translate(200, 140)">
          {data.satellites.map((sat, i) => (
            <path
              key={i}
              d={`M 0 0 C ${sat.x / 2} 0, ${sat.x / 2} ${sat.y}, ${sat.x} ${sat.y}`}
              fill="none"
              stroke="var(--primary)"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          ))}
        </g>
      </svg>

      {/* Center Icon */}
      <div className="absolute z-20 w-16 h-16 bg-card rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-border flex items-center justify-center translate-y-5">
        <div className="absolute inset-0 rounded-full bg-primary/5" />
        <data.main className="w-7 h-7 text-primary" />
      </div>

      {/* Satellites */}
      <div className="absolute inset-0 z-20 flex items-center justify-center translate-y-5">
        {data.satellites.map((sat, i) => (
          <div
            key={i}
            className="absolute bg-card backdrop-blur-sm rounded-xl p-2 shadow-sm border border-border flex flex-col items-center justify-center"
            style={{ transform: `translate(${sat.x}px, ${sat.y}px)` }}
          >
            <sat.icon className={`w-5 h-5 ${sat.color}`} strokeWidth={1.5} />
            {sat.label && <span className="text-[10px] font-bold text-foreground/60 mt-0.5">{sat.label}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Capabilities() {
  return (
    <section className="relative bg-background pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-background to-surface" />
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Platform
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
              Architecture For Autonomous <span className="text-primary">Intelligence</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Six core systems powering data unification, predictive analytics, and real-time decision automation at enterprise scale.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="group relative h-[480px] rounded-[32px] bg-card border border-border/40 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 overflow-hidden flex flex-col">

                {/* Top content */}
                <div className="relative z-20">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/20 mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                    <c.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{c.title}</h3>
                  <div className="w-10 h-1 bg-primary rounded-full mt-4 mb-4" />
                  <p className="text-muted-foreground leading-relaxed text-[15px] max-w-[90%]">{c.desc}</p>
                </div>

                {/* Bottom Interactive Graphic */}
                <MiniGraphic title={c.title} />

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SECTION 05 — PIPELINE (DARK) ============

const LEFT_NODES = [
  { id: 'l1', label: 'CRM Systems', desc: 'Customer data', icon: Users, x: 150, y: 60, value: 'APIs' },
  { id: 'l2', label: 'ERP Data', desc: 'Business operations', icon: Database, x: 150, y: 153, value: 'Batch' },
  { id: 'l3', label: 'Cloud Lakes', desc: 'Raw & semi-structured', icon: Cloud, x: 150, y: 246, value: 'Zero-copy' },
  { id: 'l4', label: 'Streaming', desc: 'Real-time events', icon: Activity, x: 150, y: 340, value: 'Real-time' },
];

const RIGHT_NODES = [
  { id: 'r1', label: 'Real-time BI', desc: 'Live dashboards', icon: BarChart, x: 850, y: 60, value: '<1s', color: '#F26B2A', bg: 'bg-[#F26B2A]/20' },
  { id: 'r2', label: 'AI Models', desc: 'Predict & optimize', icon: Brain, x: 850, y: 153, value: '99%', color: '#F5A524', bg: 'bg-[#F5A524]/20' },
  { id: 'r3', label: 'Automation', desc: 'Intelligent workflows', icon: Cog, x: 850, y: 246, value: 'Sync', color: '#ff8c5a', bg: 'bg-[#ff8c5a]/20' },
  { id: 'r4', label: 'Data Fabric', desc: 'Unified governance', icon: Network, x: 850, y: 340, value: 'Unified', color: '#8B5CF6', bg: 'bg-[#8B5CF6]/20' },
];

export function IntelligencePipeline() {
  return (
    <section id="architecture" className="relative bg-background pt-24 pb-12 overflow-hidden border-y border-border/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,107,42,0.05),transparent_70%)]" />

      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">

        {/* Top Grid: Text Left, Diagram Right */}
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-8 items-center mb-20 lg:mb-28">
          
          {/* Left Text */}
          <div className="max-w-xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                UNIFIED INTELLIGENCE
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-[1.1]">
                Auto-structured <br /> data for the <br />
                <span className="text-primary">modern era.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
                Granular intelligence delivered in real time to power faster, smarter decisions across your entire business.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#contact" className="mt-10 inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(242,107,42,0.3)] hover:shadow-[0_0_40px_rgba(242,107,42,0.5)] items-center gap-2 group">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Right Diagram */}
          <Reveal delay={0.2}>
            <div className="relative w-full aspect-[0.9/1] sm:aspect-[1.5/1] lg:aspect-[1.3/1] select-none ml-0 lg:ml-0">
              <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Left Paths */}
                {LEFT_NODES.map((n) => (
                  <g key={`path-${n.id}`}>
                    <path
                      d={`M ${n.x + 90} ${n.y} C ${(n.x + 90 + 500) / 2} ${n.y}, ${(n.x + 90 + 500) / 2} 200, 500 200`}
                      stroke="var(--foreground)" strokeOpacity="0.1" strokeWidth="2" fill="none" strokeDasharray="4 4"
                    />
                    <path
                      d={`M ${n.x + 90} ${n.y} C ${(n.x + 90 + 500) / 2} ${n.y}, ${(n.x + 90 + 500) / 2} 200, 500 200`}
                      stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="2" fill="none" className="animate-flow"
                    />
                  </g>
                ))}

                {/* Right Paths */}
                {RIGHT_NODES.map((n) => (
                  <g key={`path-${n.id}`}>
                    <path
                      d={`M 500 200 C ${(n.x - 90 + 500) / 2} 200, ${(n.x - 90 + 500) / 2} ${n.y}, ${n.x - 90} ${n.y}`}
                      stroke={n.color} strokeWidth="2" strokeOpacity="0.25" fill="none" strokeDasharray="4 4"
                    />
                    <path
                      d={`M 500 200 C ${(n.x - 90 + 500) / 2} 200, ${(n.x - 90 + 500) / 2} ${n.y}, ${n.x - 90} ${n.y}`}
                      stroke={n.color} strokeWidth="2" fill="none" className="animate-flow"
                    />
                  </g>
                ))}
              </svg>

              {/* Central Concentric Circles */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] sm:w-[300px] aspect-square rounded-full border border-primary/10 bg-primary/[0.02]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] sm:w-[220px] aspect-square rounded-full border border-primary/20 bg-primary/[0.04]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%] sm:w-[150px] aspect-square flex items-center justify-center z-20">
                <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
                <img src={cubeImg} alt="Data Fabric Core" className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700 cursor-pointer rounded-full" />
              </div>

              {/* Central Label */}
              <div className="absolute left-1/2 top-1/2 translate-y-[80px] sm:translate-y-[130px] -translate-x-1/2 bg-card border border-border/50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full z-20 shadow-xl">
                <span className="text-foreground font-display font-semibold text-[10px] sm:text-sm whitespace-nowrap">Unified Data Fabric</span>
              </div>

              {/* Left Nodes */}
              {LEFT_NODES.map((n) => {
                const midX = (n.x + 90 + 500) / 2;
                const midY = (n.y + 200) / 2;
                return (
                  <div key={n.id}>
                    <div className="absolute w-[110px] sm:w-[180px] h-[36px] sm:h-[50px] bg-card border border-border/50 rounded-xl flex items-center p-1.5 sm:p-2 z-20 shadow-xl transition-transform hover:-translate-y-1"
                      style={{ left: `${(n.x / 1000) * 100}%`, top: `${(n.y / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}>
                      <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-border/50 flex items-center justify-center bg-accent mr-2 sm:mr-3 flex-shrink-0">
                        <n.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                         <span className="text-foreground text-[9px] sm:text-xs font-bold leading-tight truncate">{n.label}</span>
                         <span className="text-muted-foreground text-[7px] sm:text-[10px] leading-tight mt-0.5 truncate">{n.desc}</span>
                      </div>
                    </div>
                    <div className="absolute bg-accent text-foreground text-[7px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full border border-border/50 z-20 shadow-lg"
                      style={{ left: `${(midX / 1000) * 100}%`, top: `${(midY / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}>
                      {n.value}
                    </div>
                  </div>
                );
              })}

              {/* Right Nodes */}
              {RIGHT_NODES.map((n) => {
                const midX = (n.x - 90 + 500) / 2;
                const midY = (n.y + 200) / 2;
                return (
                  <div key={n.id}>
                    <div className="absolute w-[110px] sm:w-[180px] h-[36px] sm:h-[50px] bg-card border border-border/50 rounded-xl flex items-center p-1.5 sm:p-2 z-20 shadow-xl transition-transform hover:-translate-y-1"
                      style={{ left: `${(n.x / 1000) * 100}%`, top: `${(n.y / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}>
                      <div className={`w-5 h-5 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 ${n.bg}`}>
                        <n.icon className={`w-3 h-3 sm:w-4 sm:h-4`} style={{ color: n.color }} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                         <span className="text-foreground text-[9px] sm:text-xs font-bold leading-tight truncate">{n.label}</span>
                         <span className="text-muted-foreground text-[7px] sm:text-[10px] leading-tight mt-0.5 truncate">{n.desc}</span>
                      </div>
                    </div>
                    <div className="absolute text-[7px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full z-20 shadow-lg"
                      style={{ backgroundColor: n.color, color: 'white', left: `${(midX / 1000) * 100}%`, top: `${(midY / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}>
                      {n.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

// ============ SECTION 06 — INDUSTRIES ============

const INDUSTRIES = [
  { icon: Building2, title: "Financial Services", use: "Real-time fraud detection & risk intelligence" },
  { icon: HeartPulse, title: "Healthcare", use: "Patient outcome prediction & operational AI" },
  { icon: ShoppingBag, title: "Retail & Commerce", use: "Demand forecasting & personalization engines" },
  { icon: Landmark, title: "Government", use: "Citizen-data intelligence with sovereign AI" },
  { icon: Factory, title: "Manufacturing", use: "Predictive maintenance & supply-chain twins" },
  { icon: ServerCog, title: "Enterprise IT", use: "Observability, FinOps and autonomous ops" },
];

export function Industries() {
  return (
    <section className="relative section-pad">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Industries</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold">High Stakes <span className="text-primary">Speak DatanovaIQ </span></h2>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 h-full transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-accent p-2.5">
                    <ind.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{ind.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.use}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SECTION 07 — AI ARCHITECTURE (DARK + IMAGE) ============

const LAYERS = [
  { name: "Applications", desc: "Dashboards, agents, business apps" },
  { name: "Analytics", desc: "BI, ad-hoc query, semantic layer" },
  { name: "AI Models", desc: "LLMs, ML, foundation models" },
  { name: "Decision Intelligence", desc: "Policies, optimization, agents" },
  { name: "Data Fabric", desc: "Unified governance & lineage" },
  { name: "Cloud Infrastructure", desc: "Multi-cloud, hybrid, edge" },
  { name: "GPU Compute", desc: "NVIDIA accelerated runtime" },
];

export function AIArchitecture() {
  return (
    <section className="relative section-pad ink-section overflow-hidden">
      <div className="absolute inset-0">
        <img src={archImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" width={1024} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Architecture
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-ink-foreground">Built for <span className="text-primary">Enterprise Scale</span></h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Powered by NVIDIA SDK
            </div>
          </Reveal>
        </div>

        <div className="mt-16 mx-auto max-w-4xl space-y-2">
          {LAYERS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.05}>
              <div
                className="rounded-xl bg-white/5 border border-white/10 backdrop-blur px-6 py-4 flex items-center justify-between hover:bg-white/10 transition"
                style={{ marginLeft: `${i * 16}px`, marginRight: `${i * 16}px` }}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-mono text-xs text-white/50 shrink-0">L{LAYERS.length - i}</span>
                  <div className="min-w-0">
                    <div className="font-display font-semibold truncate text-ink-foreground">{l.name} Layer</div>
                    <div className="text-xs text-white/60 truncate">{l.desc}</div>
                  </div>
                </div>
                <WorkflowIcon className="h-4 w-4 text-primary shrink-0" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoVideoBanner() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo-video" className="relative section-pad">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl ink-section border border-border aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-black group shadow-2xl">
            {!isPlaying ? (
              <>
                {/* Background Image */}
                <img src={networkImg} alt="Datanova Platform Preview" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/20 to-transparent" />

                {/* Central Play Button Area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-colors duration-500" onClick={() => setIsPlaying(true)}>

                  <div className="relative flex items-center justify-center mb-2 sm:mb-8 shrink-0">
                    {/* Thin Pulse Rings */}
                    <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#F5A524]/40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#F5A524]/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />

                    <div className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5A524] text-white shadow-xl transition-transform group-hover:scale-105 shrink-0">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1.5 fill-white text-white" strokeWidth={0} />
                    </div>
                  </div>

                  <h3 className="text-white font-display text-[1.8rem] sm:text-[2.2rem] font-bold tracking-tight text-center px-4 leading-tight drop-shadow-md shrink-0">
                    See DatanovaIQ in Action
                  </h3>

                  <div className="mt-4 text-[#5c729e] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-[#08080A]/90 backdrop-blur-md px-5 py-2 rounded-full border border-white/5">
                    2 Minute Demo
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 w-full h-full bg-black">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-2.5 bg-black/60 hover:bg-black/90 backdrop-blur-md rounded-full text-white/90 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl border border-white/10 cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="DatanovaIQ Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============ SECTION 09 — PRICING ============

const PRICING_TIERS = [
  {
    name: "IQ Starter",
    price: "$59",
    period: "/mo",
    desc: "For small teams getting their first unified data view",
    features: ["Up to 5 data connectors", "1TB Data Processing", "Basic AI Analytics", "Standard Support"],
    buttonText: "Get Started",
    popular: false,
    link: "https://buy.stripe.com/test_8x26oz47OdYT8Iq7K25AQ01",
    isExternal: true,
  },
  {
    name: "IQ Pro",
    price: "$159",
    period: "/mo",
    desc: "For growing teams needing predictive analytics + integrations",
    features: ["Unlimited connectors", "10TB Data Processing", "Predictive Intelligence", "Decision Automation", "Priority Support"],
    buttonText: "Get Started",
    popular: true,
    link: "https://buy.stripe.com/test_4gM4grfQw1c74sa2pI5AQ00",
    isExternal: true,
  },
  {
    name: "IQ Enterprise",
    price: "Custom",
    period: "",
    desc: "For large orgs needing a full platform, dedicated support, and custom SLAs",
    features: ["Unlimited Data Processing", "Custom AI Models (BYOM)", "VPC Peering & BYOK", "Dedicated Solutions Architect", "24/7 SLA Support"],
    buttonText: "Contact Sales",
    popular: false,
    link: "#contact",
    isExternal: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative section-pad bg-surface">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal><SectionLabel>Pricing</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold">Pick Your Level Of <span className="text-primary">Intelligence.</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground text-lg">
              Capacity-based models built to scale with your enterprise needs. No hidden fees.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div className={`relative flex flex-col h-full rounded-[2rem] p-8 sm:p-10 transition-shadow duration-300 hover:shadow-xl ${tier.popular ? 'bg-card border-2 border-primary shadow-[0_8px_40px_rgba(242,107,42,0.12)] -translate-y-2' : 'bg-card border border-border shadow-sm'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <h3 className="font-display text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground min-h-[40px] leading-relaxed">{tier.desc}</p>

                <div className="mt-8 mb-8 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground font-medium">{tier.period}</span>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                        <Check className="w-3 h-3 text-primary shrink-0" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={tier.link}
                  target={tier.isExternal ? "_blank" : undefined}
                  rel={tier.isExternal ? "noopener noreferrer" : undefined}
                  className={`block text-center w-full rounded-xl py-4 font-semibold transition-all duration-300 shadow-sm ${tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_4px_14px_rgba(242,107,42,0.4)]' : 'bg-accent text-foreground hover:bg-accent/80 hover:shadow-md'}`}
                >
                  {tier.buttonText}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SECTION 10 — TESTIMONIALS ============

const TESTIMONIALS = [
  {
    id: 1,
    name: "RACHEL BENNETT",
    shortName: "RACHEL",
    role: "VP OF OPERATIONS",
    company: "MERIDIAN FINANCIAL GROUP",
    quote: "DatanovaIQ completely transformed how we handle fragmented data. We've reduced insight latency from days to mere milliseconds.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "TYLER BROOKS",
    shortName: "TYLER",
    role: "HEAD OF DATA ENGINEERING",
    company: "VORTEX HEALTH SYSTEMS",
    quote: "We stopped stitching spreadsheets the day we onboarded DatanovaIQ. Our entire reporting pipeline now runs itself, end to end.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "OLIVIA SANDERS",
    shortName: "OLIVIA",
    role: "CHIEF ANALYTICS OFFICER",
    company: "BRIGHTLINE RETAIL CO.",
    quote: "Forecasting used to be a guessing game. DatanovaIQ gave us predictive accuracy we can actually build a strategy around.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "BRANDON WALSH",
    shortName: "BRANDON",
    role: "DIRECTOR OF IT INFRASTRUCTURE",
    company: "CALDWELL LOGISTICS",
    quote: "Every system we own finally talks to each other. DatanovaIQ didn't replace our stack — it made it actually work.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "HANNAH FOSTER",
    shortName: "HANNAH",
    role: "SENIOR BUSINESS INTELLIGENCE LEAD",
    company: "NORTHGATE GOVERNMENT SERVICES",
    quote: "Our leadership team gets real-time answers now, not week-old reports. That shift alone changed how fast we move.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
  },
];

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(2); // Middle one active by default

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface" />
      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal><SectionLabel>Testimonials</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold">
              Decisions Speak Louder Than <span className="text-primary">Demos</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground text-lg">
              DatanovaIQ gives you the autonomous intelligence and capabilities you need to create a truly scalable enterprise data ecosystem.
            </p>
          </Reveal>
        </div>

        <div className="flex justify-center items-center h-[350px] sm:h-[450px] md:h-[550px] gap-2 sm:gap-4 mt-10">
          {TESTIMONIALS.map((t, idx) => {
            const isActive = idx === activeIdx;
            const distance = Math.abs(idx - activeIdx);

            let heightClass = 'h-full';
            if (distance === 1) heightClass = 'h-[85%]';
            if (distance === 2) heightClass = 'h-[70%]';

            return (
              <div
                key={t.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${heightClass} ${isActive ? 'w-[280px] sm:w-[500px] md:w-[700px] shadow-2xl scale-100 opacity-100 z-10' : 'w-[50px] sm:w-[70px] shadow-md opacity-70 hover:opacity-100 z-0 bg-ink'}`}
              >
                {/* Background Image */}
                <img src={t.img} alt={t.name} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isActive ? 'scale-100 opacity-90' : 'scale-125 opacity-40 grayscale-[50%]'}`} />
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent' : 'bg-black/40'}`} />

                {isActive ? (
                  // Active Content
                  <div className="absolute inset-0 flex flex-col justify-end animate-in fade-in duration-700 delay-150 p-6 sm:p-10">
                    <div className="max-w-xl">
                      {/* Review Quote */}
                      <p className="text-white text-lg sm:text-[1.35rem] font-display font-medium leading-relaxed drop-shadow-md">
                        "{t.quote}"
                      </p>

                      {/* Name, Position, Company */}
                      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="font-display text-white text-lg sm:text-xl font-bold tracking-wide">
                          {t.name}
                        </div>
                        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(242,107,42,0.8)]" />
                        <div className="text-white/80 text-xs sm:text-sm font-semibold tracking-widest uppercase flex flex-wrap gap-2 items-center">
                          <span>{t.role}</span>
                          <span className="text-white/30">AT</span>
                          <span className="text-primary">{t.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Inactive Content (Rotated Text)
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80 font-display font-bold tracking-[0.3em] text-xs sm:text-sm -rotate-90 whitespace-nowrap">
                      {t.shortName}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}

// ============ SECTION 11 — FAQ ============

const FAQS = [
  { q: "How long does implementation take?", a: "Most enterprise deployments take 4-8 weeks depending on the complexity of legacy systems being integrated." },
  { q: "What data sources do you support?", a: "We support over 150+ native connectors, including SAP, Salesforce, Oracle, Snowflake, Azure, and custom REST APIs." },
  { q: "Is DatanovaIQ secure enough for healthcare/finance?", a: "Yes. Our platform is SOC2 Type II, HIPAA compliant, and supports VPC peering and bring-your-own-key (BYOK) encryption." },
  { q: "Do I need a team of data engineers to run this?", a: "No. While built for engineers, the platform is designed to be autonomous. Once pipelines are set, business users can operate via natural language." },
  { q: "How is pricing structured?", a: "We use a capacity-based model (compute and storage) rather than seat-based, allowing unlimited users to access intelligence." }
];

export function FAQSection() {
  return (
    <section className="relative section-pad bg-background border-t border-border/40">
      <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Reveal><SectionLabel>FAQ</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold">No Jargon. <span className="text-primary">Just Answers.</span></h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group rounded-2xl border border-border/50 bg-card p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] [&_summary::-webkit-details-marker]:hidden transition-shadow hover:shadow-md cursor-pointer">
                <summary className="flex items-center justify-between gap-4 font-display text-lg font-semibold text-foreground outline-none">
                  {faq.q}
                  <span className="shrink-0 rounded-full bg-accent p-2 text-primary group-open:-rotate-180 transition-transform duration-300">
                    <ChevronDown className="h-5 w-5" strokeWidth={2} />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed pr-8">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ SECTION 11 — CONTACT ============

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative section-pad bg-surface border-t border-border/40">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Get In Touch
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
                Ready to unify <br />your <span className="text-primary">enterprise data?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-lg">
                Connect with our solutions architects to see how DatanovaIQ can transform your fragmented systems into real-time intelligence.
              </p>
            </Reveal>

            <div className="mt-4 sm:mt-10 space-y-6">
              <Reveal delay={0.3}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center text-primary shadow-sm border border-border/50">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground font-medium">Email Us</div>
                    <a href="mailto:contact@datanovaiq.com" className="font-display font-semibold text-base sm:text-lg text-foreground mt-0.5 hover:text-primary transition-colors block truncate">contact@datanovaiq.com</a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center text-primary shadow-sm border border-border/50">
                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground font-medium">Call Us</div>
                    <a href="tel:+14156904538" className="font-display font-semibold text-base sm:text-lg text-foreground mt-0.5 hover:text-primary transition-colors block truncate">+1 (415) 690-4538</a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center text-primary shadow-sm border border-border/50 mt-1 sm:mt-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground font-medium">Headquarters</div>
                    <div className="font-display font-semibold text-base sm:text-lg text-foreground mt-0.5 pr-2">525 Market St, San Francisco, CA 94105, USA</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Form */}
          <Reveal delay={0.2}>
            <div className="bg-card border border-border/50 rounded-[32px] p-5 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 sm:mb-8">Send a message</h3>

              <form action="https://formspree.io/f/xvzjopen" method="POST" className="space-y-4 sm:space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">First Name</label>
                    <input type="text" name="first_name" required className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Last Name</label>
                    <input type="text" name="last_name" required className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Last Name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Work Email</label>
                  <input type="email" name="email" required className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="name@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="How can we help you?" />
                </div>

                <div className="flex justify-center my-2 sm:my-4 overflow-hidden">
                  <div className="scale-[0.85] sm:scale-100 origin-center">
                    <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAADo6Df32CXQLnfkw'} />
                  </div>
                </div>

                <button type="submit" disabled={status === "loading"} className="w-full bg-primary text-primary-foreground font-semibold rounded-xl px-6 py-3.5 sm:py-4 mt-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
                {status === "success" && (
                  <p className="text-sm text-green-500 font-medium text-center mt-2">Message sent successfully! We'll be in touch soon.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500 font-medium text-center mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

// ============ SECTION 13 — INTEGRATIONS ============

const INTEGRATIONS = [
  "Salesforce", "Snowflake", "Databricks", "AWS", "Google Cloud", 
  "Microsoft Azure", "SAP", "Oracle", "MongoDB", "PostgreSQL", 
  "Stripe", "ServiceNow", "Zendesk", "Workday"
];

function SmoothMarquee({ items, reverse = false, speed = 1.25 }: { items: string[], reverse?: boolean, speed?: number }) {
  const baseX = useMotionValue(0);
  const targetVelocity = reverse ? 1 : -1;
  const velocity = useSpring(targetVelocity, { damping: 50, stiffness: 400 });

  useAnimationFrame((time, delta) => {
    let moveBy = velocity.get() * speed * (delta / 1000);
    let newX = baseX.get() + moveBy;
    
    if (reverse) {
      if (newX >= 0) newX -= 50;
    } else {
      if (newX <= -50) newX += 50;
    }
    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div 
      className={`relative w-full flex overflow-hidden group ${reverse ? "mt-6" : ""}`}
      onMouseEnter={() => velocity.set(0)}
      onMouseLeave={() => velocity.set(targetVelocity)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      
      <motion.div style={{ x }} className="flex w-max">
        {[...items, ...items].map((integration, idx) => (
          <div key={idx} className="flex items-center justify-center h-20 px-8 mx-3 sm:mx-4 rounded-xl bg-card border border-border shadow-sm min-w-[200px] sm:min-w-[240px] transition-colors hover:border-primary/40 hover:bg-accent cursor-pointer">
            <span className="font-display font-bold text-xl text-foreground/80 tracking-wide">{integration}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Integrations() {
  return (
    <section className="relative section-pad overflow-hidden bg-surface border-y border-border">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 mb-14 text-center">
        <Reveal><SectionLabel>Ecosystem</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
            Your Stack Stays and<br/><span className="text-primary">Intelligence Grows</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A growing library of native connectors, built to integrate into your existing stack in minutes.
          </p>
        </Reveal>
      </div>

      <SmoothMarquee items={INTEGRATIONS} speed={1.25} />
      <SmoothMarquee items={INTEGRATIONS.slice().reverse()} reverse speed={1.43} />
    </section>
  );
}
