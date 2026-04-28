import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { TerminalAnimation } from "@/components/TerminalAnimation";
import GradualBlur from "@/components/GradualBlur";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Genesis Machine — Complex Backends, Architected by AI" },
      {
        name: "description",
        content:
          "TGM is a zero-shot system of systems that architects, builds, tests, and hardens complex backend software from a single prompt. 30,000+ lines in hours, not months.",
      },
      { property: "og:title", content: "The Genesis Machine — Architected by AI" },
      {
        property: "og:description",
        content:
          "From prompt to production backend in hours. No mocks. No placeholders. No hand-holding.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Dev Time", traditional: "3-6 Months", ai: "Weeks", tgm: "~3 Hours" },
  { label: "Lines of Code", traditional: "Manual Entry", ai: "Snippets", tgm: "30k+ Generated" },
  { label: "Cost", traditional: "$100k+", ai: "Variable", tgm: "< $20 (Compute)" },
  { label: "Human Prompts", traditional: "N/A", ai: "Hundreds", tgm: "Zero (Autonomous)" },
];

const projects = [
  {
    prompt: "Build me a complex e-commerce backend",
    name: "Ecommerce-Backend",
    scale: "190+ files · 20,000+ LOC",
    time: "< 3 hrs",
    href: "https://github.com/Gifted87/Ecommerce-Backend",
    aiLink: "https://gemini.google.com/share/bc39cfeb166a",
  },
  {
    prompt: "Real-time fraud detection with Event Sourcing & CQRS",
    name: "Fraud-Detection-Engine",
    scale: "65+ files · 7,000+ LOC",
    time: "< 2 hrs",
    href: "https://github.com/Gifted87/fraud-detection-engine",
    aiLink: "https://gemini.google.com/share/0a6fd7867377",
  },
  {
    prompt: "Build a URL shortener microservice",
    name: "URL-Shortener",
    scale: "40+ files · 5,000+ LOC",
    time: "< 2 hrs",
    href: "https://github.com/Gifted87/Url-Shortener-Microservice",
    aiLink: "https://gemini.google.com/share/b8e28e34ac1c",
  },
  {
    prompt: "Build me a calculator microservice",
    name: "Calculator-Microservice",
    scale: "13+ files · 1,900+ LOC",
    time: "< 1 hr",
    href: "https://github.com/Gifted87/Calculator-Microservice",
    aiLink: "https://gemini.google.com/share/22a7a8fde36d",
  },
];

const systems = [
  { n: "01", name: "Obsidian", role: "Forced lateral contemplation — a true creative thinking machine.", href: "https://docs.google.com/document/d/10K29w6vLsIpEd4_fTLFINw95NCtVtps3h5w-LN-9sYA/edit?tab=t.0", github: "https://github.com/Gifted87/obsidian", type: "open_source" },
  { n: "02", name: "Associative Cognitive Memory System", role: "Spreading activation, neuroplasticity, Hebbian learning.", href: "https://docs.google.com/document/d/1S8oXnv_8IxSiB6q89H3mhlXWpxVvHq9cclwzb7_eWWk/edit?usp=sharing", type: "proprietary" },
  { n: "03", name: "Cognitive Digital Modelling System", role: "High-fidelity, queryable digital environments for agents.", href: "https://docs.google.com/document/d/1yzhXlG8CtXISzBGFRuVXTmfSFwJjM7Hxjfk2kYbccK8/edit?usp=sharing", type: "proprietary" },
  { n: "04", name: "Autonomous Cognitive Network", role: "Macro-architect. Synthesizes complex codebases from scratch.", href: "https://docs.google.com/document/d/1OsyLEqQYNW0p7F0msISDWNYoOSGOrxQ8vjPuYismpa8/edit?tab=t.0", type: "proprietary" },
  { n: "05", name: "Procoder", role: "Micro-architect. AST-level forensics, surgical refinement.", href: "https://docs.google.com/document/d/1qRG2SKwDx2WubwVaJSFyJ7-uvwDEL9zhQmaVr_f8-VY/edit?usp=sharing", github: "https://github.com/Gifted87/procoder", type: "open_source" },
  { n: "06", name: "Ovan", role: "Python orchestrator. Chains every system into TGM.", href: null, type: "proprietary" },
];

const tgmWinsData = [
  { dimension: "Primary Mode", others: "Refactoring existing code", tgm: "Greenfield architecture from scratch" },
  { dimension: "Scope", others: "File-level assistance", tgm: "System-level generation" },
  { dimension: "Human Supervision", others: "Continuous", tgm: "Zero after intent declaration" },
  { dimension: "Output", others: "Snippets, diffs, stubs", tgm: "Compiled, tested, documented codebases" },
  { dimension: "Coherence at Scale", others: "Degrades past ~2K lines", tgm: "Maintained past 26K+ lines" },
];

function Index() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-brand/30">
      <SiteHeader />

      {/* ── HERO ────────────────────────────────── */}
      <section className="scanline-overlay relative min-h-screen flex flex-col justify-center border-b border-white/10 overflow-hidden">
        {/* Background ghost text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none"
        >
          <span
            className="font-mono font-bold whitespace-nowrap text-[clamp(8rem,20vw,20rem)] text-white/[0.025] leading-none"
            style={{ animation: "drift 40s linear infinite" }}
          >
            GENESIS GENESIS GENESIS GENESIS&nbsp;
          </span>
        </div>

        {/* Cyan radial glow */}
        <div className="absolute left-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
              &gt; SYSTEM ONLINE — THE GENESIS MACHINE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-mono font-semibold leading-[1.0] tracking-tight">
            <span className="block text-[clamp(3.2rem,8vw,7.5rem)] text-foreground">
              Complex backend systems.
            </span>
            <span
              className="glitch-text block text-[clamp(3.2rem,8vw,7.5rem)] text-brand text-glow"
              data-text="Architected by AI."
            >
              Architected by AI.
            </span>
            <span className="block text-[clamp(1.8rem,5vw,4.5rem)] text-foreground/50 mt-2">
              Deployed in hours.
            </span>
          </h1>

          {/* Terminal sub-text */}
          <div className="mt-10 max-w-3xl border border-white/10 bg-white/[0.02] px-6 py-5">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-2">
              // SYSTEM DESCRIPTION
            </p>
            <p className="font-mono text-base text-muted-foreground leading-relaxed">
              A zero-shot system of systems that architects, builds, tests, and hardens
              production-grade backends from a single prompt. No mocks. No placeholders.
              No hand-holding.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              id="hero-book-demo"
              className="font-mono text-[11px] tracking-[0.2em] uppercase font-semibold bg-brand text-brand-foreground px-8 py-3 brand-glow-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_oklch(0.82_0.18_195)]"
            >
              BOOK A LIVE DEMO
            </a>
            <Link
              to="/portfolio"
              id="hero-see-output"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-brand hover:text-foreground transition-colors"
            >
              SEE THE OUTPUT →
            </Link>
          </div>

          {/* Terminal Animation */}
          <TerminalAnimation />
        </div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="12rem"
          strength={3}
          divCount={8}
          curve="bezier"
          exponential
          opacity={1}
        />
      </section>

      {/* ── STATS STRIP ─────────────────────────── */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* Label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              THE DELTA
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-3">
            Why current tools fail at scale
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mb-8">
            Tools like Devin, GitHub Copilot, and Claude 3.5 Sonnet are exceptional at writing functions or single files. But when asked to build a 65+ file distributed system, they collapse at three critical failure points:
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="border border-white/10 bg-white/[0.01] p-6">
              <h3 className="font-mono text-sm font-semibold text-brand mb-3">1. Wiring Breaks</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Imports drift out of sync. Database schemas no longer match the ORM models. Variable names change between files. The system compiles in pieces, but fails as a whole.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.01] p-6">
              <h3 className="font-mono text-sm font-semibold text-brand mb-3">2. Depth Collapses</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The output is riddled with <code>// TODO: implement real logic here</code>, generic mocks, and placeholder stubs. The skeleton looks impressive. The body is hollow.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.01] p-6">
              <h3 className="font-mono text-sm font-semibold text-brand mb-3">3. Advanced Patterns Hallucinate</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When asked for Event Sourcing, CQRS, or distributed transaction handling, they generate plausible-looking infrastructure that does not actually work. The complexity is faked.
              </p>
            </div>
          </div>
          <p className="text-brand text-sm max-w-xl mb-12 font-semibold">
            The outcome: A developer still spends weeks debugging, wiring, and rewriting—defeating the entire purpose of automation.
          </p>

          {/* Comparison rows */}
          <div className="border border-white/10 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.02] px-6 py-3">
                <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">Metric</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">Traditional Dev</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">Current AI Tools</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-brand uppercase">TGM Protocol</span>
              </div>
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`grid grid-cols-4 px-6 py-5 ${i < stats.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <span className="font-mono text-sm text-foreground/80">{s.label}</span>
                  <span className="font-mono text-sm text-muted-foreground line-through decoration-red-500/60">
                    {s.traditional}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground line-through decoration-red-500/60">
                    {s.ai}
                  </span>
                  <span className="font-mono text-sm font-semibold text-brand text-glow">
                    {s.tgm}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ───────────────────── */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 mb-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">RECEIPTS</span>
              <h2 className="font-mono text-2xl md:text-3xl font-semibold mt-2">See for yourself</h2>
            </div>
            <Link to="/portfolio" className="font-mono text-[10px] tracking-widest text-brand hover:text-foreground transition-colors uppercase hidden md:block">
              VIEW ALL →
            </Link>
          </div>
          <p className="text-muted-foreground text-sm max-w-xl mb-10">
            Audit the raw output — every line was generated, compiled, tested, and documented autonomously.
          </p>

          <div className="mb-16 border border-white/10 bg-white/[0.02] p-2 aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qqopP2Dgpsc?si=NL6wvjMQw3yipfw6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Project rows */}
          <div>
            {projects.map((p) => (
              <div
                key={p.name}
                className="row-item group flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 py-6 border-b border-white/10 last:border-0 hover:bg-white/[0.015] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase mb-1">PROMPT</p>
                  <p className="font-mono text-sm text-foreground/80">"{p.prompt}"</p>
                </div>
                <div className="flex items-center gap-6 shrink-0 flex-wrap">
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">Project</p>
                    <a href={p.href} target="_blank" rel="noreferrer" className="font-mono text-sm font-semibold text-foreground mt-1 hover:text-brand transition-colors flex items-center gap-1">
                      {p.name} <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">Scale</p>
                    <p className="font-mono text-sm text-muted-foreground mt-1">{p.scale}</p>
                  </div>
                  <div className="border border-brand/30 bg-brand/10 px-3 py-1">
                    <span className="font-mono text-xs font-semibold text-brand">{p.time}</span>
                  </div>
                  {p.aiLink && (
                    <a
                      href={p.aiLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-[#8ab4f8]/30 bg-[#8ab4f8]/10 px-4 py-2 font-mono text-[10px] font-bold text-[#8ab4f8] hover:bg-[#8ab4f8]/20 hover:border-[#8ab4f8]/50 transition-colors uppercase tracking-[0.1em] shadow-[2px_2px_0_oklch(0_0_0/0.5)] whitespace-nowrap"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                        <path d="M5 3v4M3 5h4"/>
                      </svg>
                      Analyse with AI
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start md:items-center text-left md:text-center">
            <p className="font-mono text-sm text-foreground mb-6">
              Come see it live. Bring your hardest backend challenge. It will architect it in real time.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] tracking-[0.2em] uppercase font-semibold bg-brand text-brand-foreground px-8 py-3 brand-glow-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_oklch(0.82_0.18_195)] inline-block"
            >
              BOOK LIVE DEMO
            </a>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS ─────────────────────────────── */}
      <section className="border-b border-white/10 relative overflow-hidden">
        {/* Faint scrolling hex background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none opacity-[0.03]"
        >
          <span
            className="font-mono text-[0.6rem] text-foreground leading-5 tracking-widest whitespace-nowrap"
            style={{ animation: "drift 60s linear infinite" }}
          >
            {Array.from({ length: 8 }, () =>
              "0x4F 0x56 0x41 0x4E 0x5F 0x4F 0x52 0x43 0x48 0x45 0x53 0x54 0x52 0x41 0x54 0x4F 0x52 0x20 "
            ).join("")}&nbsp;
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              THE ARCHITECTURE
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-3">
            Six systems. One machine.
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mb-10">
            Built in Elixir, Rust, Erlang, and Python. The moat is the integration —
            emergent properties of the whole.
          </p>

          {/* System manifest list */}
          <div>
            {systems.map((s) => (
              <div
                key={s.name}
                className="border-t border-brand/20 py-5 grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_auto] items-start gap-4 hover:bg-white/[0.02] transition-colors px-2"
              >
                <span className="font-mono text-sm font-semibold text-brand/40 pt-0.5">{s.n}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-sm font-semibold text-foreground">{s.name}</p>
                    {s.type === "open_source" && (
                      <span className="font-mono text-[9px] tracking-widest text-brand border border-brand/30 bg-brand/10 px-2 py-0.5 uppercase">
                        [OPEN SOURCE]
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{s.role}</p>
                  <div className="flex gap-4 mt-3">
                    {s.href && (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] text-muted-foreground hover:text-brand transition-colors uppercase tracking-widest"
                      >
                        Whitepaper ↗
                      </a>
                    )}
                    {s.github && (
                      <a
                        href={s.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] text-brand hover:text-foreground transition-colors uppercase tracking-widest"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
                <span className="font-mono text-[9px] tracking-widest text-brand/50 uppercase hidden md:block pt-0.5">
                  ONLINE
                </span>
              </div>
            ))}
            <div className="border-t border-brand/20" />
          </div>
        </div>
      </section>

      {/* ── WHY TGM WINS ────────────────────────── */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              THE ADVANTAGE
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-10">
            Why TGM Wins
          </h2>

          <div className="border border-white/10 overflow-x-auto">
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr] min-w-[700px] border-b border-white/10 bg-white/[0.02] px-6 py-4">
              <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">Dimension</span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">Devin / Copilot / Others</span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-brand uppercase">TGM</span>
            </div>
            {tgmWinsData.map((row, i) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-[1fr_1.5fr_1.5fr] min-w-[700px] px-6 py-5 ${i < tgmWinsData.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <span className="font-mono text-sm text-foreground/80">{row.dimension}</span>
                <span className="font-mono text-sm text-muted-foreground">
                  {row.others}
                </span>
                <span className="font-mono text-sm font-semibold text-brand">
                  {row.tgm}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MARKET ──────────────────────────── */}
      <section className="border-b border-white/10 bg-brand/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-brand/20" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
              TARGET AUDIENCE
            </span>
            <div className="h-px flex-1 bg-brand/20" />
          </div>

          <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-6">
            The Market
          </h2>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            Global backend development spend is measured in hundreds of billions annually. TGM targets:
          </p>
          
          <ul className="list-disc list-outside pl-5 space-y-4 text-sm text-muted-foreground mb-12 max-w-3xl">
            <li><span className="text-foreground font-semibold">High-growth startups</span> that need complex backends but cannot afford senior distributed systems teams.</li>
            <li><span className="text-foreground font-semibold">Enterprise engineering teams</span> looking to compress feature delivery timelines from quarters to days.</li>
            <li><span className="text-foreground font-semibold">AI-native development shops</span> that need to generate reliable, hardened infrastructure at software speed.</li>
          </ul>

          <div className="border-l-2 border-brand pl-4 py-2 bg-background p-6 border border-white/10 max-w-4xl hover:bg-white/[0.02] transition-colors">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              The difference between TGM and code assistants is the difference between a calculator and a civil engineer. It does not help you write code. <span className="text-brand font-semibold text-glow">It delivers systems.</span>
            </p>
          </div>
        </div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="8rem"
          strength={2}
          divCount={6}
          curve="bezier"
          exponential
          opacity={0.8}
        />
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-brand/8 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase mb-6">
            &gt; AWAITING INPUT
          </p>
          <h2 className="font-mono text-3xl md:text-5xl font-semibold leading-[1.05]">
            The machine works.<br />
            <span className="text-brand text-glow">What it needs now is velocity.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground text-sm">
            Bring your hardest backend challenge. TGM will architect it in real time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              id="cta-book-demo"
              className="font-mono text-[11px] tracking-[0.2em] uppercase font-semibold bg-brand text-brand-foreground px-8 py-3 brand-glow-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_oklch(0.82_0.18_195)]"
            >
              BOOK A LIVE DEMO
            </a>
            <Link
              to="/about"
              id="cta-about"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-brand transition-colors"
            >
              ABOUT THE FOUNDER →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
