import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import logoDn from "@/assets/Logo DN.png";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./primitives";
import networkImg from "@/assets/intelligence-network.jpg";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#capabilities" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const viewportMiddle = window.innerHeight / 3;
      let current = "";
      
      for (const { href } of NAV) {
        const id = href.split("#")[1];
        if (!id) continue;
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            current = href;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className={`rounded-full px-4 sm:px-6 py-1.5 flex items-center justify-between transition-all duration-300 border ${
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-border shadow-sm" 
            : "bg-transparent border-transparent shadow-none"
        }`}>
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logoDn} alt="DatanovaIQ Logo" className="w-[140px] sm:w-[160px] lg:w-[200px] h-auto object-contain shrink-0" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className={`rounded-full px-3 py-1.5 text-sm transition ${activeSection === n.href ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/product" className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_rgba(245,165,36,0.5)] transition hover:shadow-[0_12px_32px_-6px_rgba(245,165,36,0.7)]">
              Request Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button onClick={() => setOpen((v) => !v)} className="lg:hidden rounded-full border border-border p-2" aria-label="Menu">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 rounded-2xl bg-card border border-border p-3 shadow-lg"
            >
              <div className="flex flex-col">
                {NAV.map((n) => (
                  <a key={n.label} href={n.href} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2 text-sm transition ${activeSection === n.href ? "text-foreground bg-accent" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}>
                    {n.label}
                  </a>
                ))}
                <div className="mt-2 pt-3 border-t border-border">
                  <Link to="/product" onClick={() => setOpen(false)} className="flex items-center justify-center gap-1.5 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_rgba(245,165,36,0.5)] transition hover:shadow-[0_12px_32px_-6px_rgba(245,165,36,0.7)]">
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function FinalCTA() {
  return (
    <section id="cta" className="relative section-pad overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-[#0A0A0E] px-6 py-20 sm:py-28 text-center border border-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            
            {/* Subtle background radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,107,42,0.15)_0%,transparent_60%)]" />

            {/* Decorative Isometric Tiles (CSS 3D) */}
            <div className="absolute left-[5%] top-[15%] w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-md rounded-xl animate-float pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" 
                 style={{ transform: 'rotateX(60deg) rotateZ(-45deg)' }} />
            
            <div className="absolute right-[5%] lg:right-[15%] top-[25%] w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-md rounded-xl animate-float pointer-events-none shadow-[0_0_30px_rgba(242,107,42,0.2)]" 
                 style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', animationDelay: '1.5s' }} />
                 
            <div className="absolute left-[10%] lg:left-[20%] bottom-[15%] w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 backdrop-blur-md rounded-lg animate-float pointer-events-none shadow-[0_0_20px_rgba(242,107,42,0.3)]" 
                 style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', animationDelay: '2.5s' }} />
                 
            <div className="absolute right-[10%] bottom-[20%] w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md rounded-xl animate-float pointer-events-none" 
                 style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', animationDelay: '0.8s' }} />

            {/* Faint Abstract Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
              <path d="M 0 400 L 1000 0" stroke="currentColor" className="text-white" strokeWidth="1" />
              <path d="M 300 400 L 1300 0" stroke="currentColor" className="text-white" strokeWidth="1" />
              <path d="M 0 100 L 1000 500" stroke="currentColor" className="text-white" strokeWidth="1" />
            </svg>

            {/* Content Area */}
            <div className="relative z-10">
              <h2 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] text-white tracking-tight">
                Transform enterprise data <br className="hidden sm:block" /> into <span className="text-primary">decision intelligence</span>
              </h2>
              
              <p className="mt-6 mx-auto max-w-2xl text-[17px] text-white/60 leading-relaxed">
                Unify data, accelerate analytics, and empower AI-driven business decisions. Create a single source of truth across all systems.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-[15px] font-semibold text-primary-foreground shadow-[0_0_20px_rgba(242,107,42,0.4)] transition-all hover:shadow-[0_0_30px_rgba(242,107,42,0.6)] hover:-translate-y-0.5">
                  Start a free 14-day trial
                </a>
                <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F1F2A] border border-white/5 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#2A2A38] hover:-translate-y-0.5">
                  Request a demo
                </a>
              </div>
              
              <div className="mt-8 text-sm text-white/40 font-medium">
                14-day free trial. No credit card required.
              </div>
            </div>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FOOTER_COLS = [
  { 
    title: "Quick Links", 
    items: [
      { name: "About", href: "/#about" },
      { name: "Product", href: "/product" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Contact", href: "/#contact" }
    ] 
  },
  { 
    title: "Legal", 
    items: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ] 
  }
];

const SOCIALS = [
  { 
    name: "Facebook", 
    href: "https://facebook.com", 
    icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> 
  },
  { 
    name: "YouTube", 
    href: "https://youtube.com", 
    icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> 
  },
  { 
    name: "TwitterX", 
    href: "https://twitter.com", 
    icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> 
  },
  { 
    name: "Pinterest", 
    href: "https://pinterest.com", 
    icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.633 0 12.017 0z"/></svg> 
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com", 
    icon: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> 
  }
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-16 pb-4">
        <div className="grid lg:grid-cols-[1.4fr_2fr] gap-12">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <img src={logoDn} alt="DatanovaIQ Logo" className="h-10 w-auto object-contain" />
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              The intelligent data platform for enterprise AI and decision intelligence.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border/60 text-foreground/70 transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground hover:-translate-y-1 shadow-sm" 
                   aria-label={s.name}>
                  <s.icon className={s.name === 'TwitterX' ? 'w-[15px] h-[15px]' : s.name === 'YouTube' ? 'w-5 h-5' : 'w-[18px] h-[18px]'} />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-start w-full">
            {FOOTER_COLS.map((c) => (
              <div key={c.title}>
                <div className="font-display font-semibold text-sm">{c.title}</div>
                <ul className="mt-4 space-y-2">
                  {c.items.map((it) => (
                    <li key={it.name}>
                      <a href={it.href} className="text-sm text-muted-foreground transition hover:text-primary">{it.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full h-[160px] sm:h-[180px]">
              <div className="rounded-xl overflow-hidden border border-border/60 h-full w-full shadow-sm bg-accent/20">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=525+Market+St,+San+Francisco,+CA+94105,+USA&t=&z=14&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} DatanovaIQ. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
