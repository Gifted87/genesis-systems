import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — The Genesis Machine" },
      {
        name: "description",
        content:
          "Audit the raw output of TGM. Production-grade backends generated, compiled, tested, and documented autonomously from a single prompt.",
      },
      { property: "og:title", content: "Portfolio — The Genesis Machine" },
      {
        property: "og:description",
        content: "Real codebases generated from single prompts. No human edits.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    n: "01",
    prompt: "Build me a complex e-commerce backend",
    name: "Ecommerce-Backend",
    files: "190+",
    loc: "20,000+",
    time: "< 3 hrs",
    tags: ["Microservices", "PostgreSQL", "Auth", "Payments"],
    href: "https://github.com/Gifted87/Ecommerce-Backend",
    aiLink: "https://gemini.google.com/share/bc39cfeb166a",
  },
  {
    n: "02",
    prompt: "Build a high-throughput financial backend for real-time fraud detection using Event Sourcing and CQRS",
    name: "Fraud-Detection-Engine",
    files: "65+",
    loc: "7,000+",
    time: "< 2 hrs",
    tags: ["Event Sourcing", "CQRS", "Distributed", "Real-time"],
    href: "https://github.com/Gifted87/fraud-detection-engine",
    aiLink: "https://gemini.google.com/share/0a6fd7867377",
  },
  {
    n: "03",
    prompt: "Build a URL shortener microservice",
    name: "URL-Shortener",
    files: "40+",
    loc: "5,000+",
    time: "< 2 hrs",
    tags: ["Microservice", "Redis", "REST"],
    href: "https://github.com/Gifted87/Url-Shortener-Microservice",
    aiLink: "https://gemini.google.com/share/b8e28e34ac1c",
  },
  {
    n: "04",
    prompt: "Build me a calculator microservice",
    name: "Calculator-Microservice",
    files: "13+",
    loc: "1,900+",
    time: "< 1 hr",
    tags: ["Microservice", "gRPC", "Tests"],
    href: "https://github.com/Gifted87/Calculator-Microservice",
    aiLink: "https://gemini.google.com/share/22a7a8fde36d",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="scanline-overlay relative border-b border-white/10 overflow-hidden">
        <div className="absolute left-0 top-0 -z-10 h-[350px] w-[500px] bg-brand/8 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 right-6 select-none overflow-hidden" aria-hidden="true">
          <span className="font-mono font-bold text-[clamp(5rem,15vw,14rem)] text-white/[0.025] leading-none">
            OUT
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
            &gt; PORTFOLIO
          </span>
          <h1 className="font-mono mt-4 text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.0] tracking-tight">
            One prompt.<br />
            <span className="text-brand text-glow">Entire systems.</span>
          </h1>
          <div className="mt-8 max-w-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
            <p className="font-mono text-base text-muted-foreground leading-relaxed">
              Every codebase below was architected, written, compiled, tested, and documented
              by TGM with zero human intervention after intent. Audit the source on GitHub.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              GENERATED SYSTEMS
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group block border border-white/10 hover:border-brand/50 transition-all hover:bg-white/[0.015]"
              >
                {/* Top bar */}
                <div className="border-b border-white/10 bg-white/[0.02] px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] tracking-widest text-brand/60">{p.n}</span>
                    <span className="font-mono text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                      {p.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="border border-brand/30 bg-brand/10 px-3 py-0.5 font-mono text-[10px] font-semibold text-brand">
                      {p.time}
                    </span>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-muted-foreground hover:text-brand transition-colors"
                    >
                      VIEW ON GITHUB →
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 grid md:grid-cols-[1fr_auto] gap-6">
                  {/* Left: prompt */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mb-2">PROMPT</p>
                      <div className="border border-white/10 bg-white/[0.02] px-4 py-3">
                        <p className="font-mono text-sm text-foreground/80">"{p.prompt}"</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[9px] tracking-widest border border-white/10 px-3 py-1 text-muted-foreground uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      {p.aiLink && (
                        <a
                          href={p.aiLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 border border-[#8ab4f8]/30 bg-[#8ab4f8]/10 px-5 py-2.5 font-mono text-[11px] font-bold text-[#8ab4f8] hover:bg-[#8ab4f8]/20 hover:border-[#8ab4f8]/50 transition-colors uppercase tracking-[0.2em] shadow-[2px_2px_0_oklch(0_0_0/0.5)]"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                            <path d="M5 3v4M3 5h4"/>
                          </svg>
                          Analyse with AI
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: stats */}
                  <div className="flex md:flex-col gap-6 md:gap-4 shrink-0 md:border-l md:border-white/10 md:pl-6">
                    <div>
                      <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">FILES</p>
                      <p className="font-mono text-2xl font-semibold text-brand mt-1 text-glow">{p.files}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">LINES OF CODE</p>
                      <p className="font-mono text-2xl font-semibold text-brand mt-1 text-glow">{p.loc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — inverted ── */}
      <section className="bg-brand">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-brand-foreground/60 uppercase mb-2">
              &gt; SUBMIT A BRIEF
            </p>
            <h2 className="font-mono text-2xl md:text-3xl font-semibold text-brand-foreground">
              Have a harder one?
            </h2>
            <p className="mt-2 text-sm text-brand-foreground/70 max-w-md">
              Bring your toughest backend brief to a live demo. TGM will architect it in front of you.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            id="portfolio-submit-brief"
            className="font-mono text-[11px] tracking-[0.2em] uppercase font-semibold bg-brand-foreground text-brand px-8 py-3 shrink-0 hover:bg-white transition-colors shadow-[3px_3px_0_oklch(0_0_0/0.3)]"
          >
            SUBMIT A BRIEF →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
