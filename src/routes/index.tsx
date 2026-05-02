import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { TerminalAnimation } from "@/components/TerminalAnimation";

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
    <div className="min-h-screen bg-transparent text-[var(--foreground)] selection:bg-[var(--brand)]/30 font-sans">
      <SiteHeader />

      {/* ── HERO ────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[54px]">
        {/* Background ghost text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none"
        >
          <span
            className="font-mono font-bold whitespace-nowrap text-[clamp(8rem,20vw,20rem)] text-[var(--text-ghost)]/40 leading-none"
            style={{ animation: "drift 60s linear infinite" }}
          >
            GENESIS GENESIS GENESIS GENESIS&nbsp;
          </span>
        </div>

        {/* Atmosphere glow */}
        <div className="absolute left-1/4 top-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-[var(--brand)]/5 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">
              &gt; SYSTEM ONLINE — THE GENESIS MACHINE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-medium leading-[1.05] tracking-tight">
            <span className="block text-[clamp(3.2rem,8vw,7.5rem)] text-[var(--text)]">
              Complex backend systems.
            </span>
            <span
              className="block text-[clamp(3.2rem,8vw,7.5rem)] text-[var(--brand)]"
            >
              Architected by AI.
            </span>
            <span className="block text-[clamp(1.8rem,5vw,4.5rem)] text-[var(--text-dim)] mt-4">
              Deployed in hours.
            </span>
          </h1>

          {/* Terminal sub-text */}
          <div className="mt-12 max-w-3xl border border-[var(--border)] bg-[var(--bg2)]/50 backdrop-blur-md px-8 py-6 rounded-2xl">
            <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase mb-3">
              // SYSTEM DESCRIPTION
            </p>
            <p className="font-sans text-[17px] text-[var(--text-dim)] leading-relaxed">
              A zero-shot system of systems that architects, builds, tests, and hardens
              production-grade backends from a single prompt. No mocks. No placeholders.
              No hand-holding.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              id="hero-book-demo"
              className="rounded-xl bg-[var(--brand)] px-10 py-4 font-sans text-sm font-semibold text-[#1A0E08] transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(217,119,87,0.4)]"
            >
              Book a Live Demo
            </a>
            <Link
              to="/portfolio"
              id="hero-see-output"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--brand)] hover:text-[var(--text)] transition-colors"
            >
              SEE THE OUTPUT →
            </Link>
          </div>

          {/* Terminal Animation */}
          <div className="mt-20 opacity-80">
            <TerminalAnimation />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-[var(--bg1)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">THE DELTA</span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mt-4 mb-6">
                Why current tools fail at scale
              </h2>
              <p className="text-[var(--text-dim)] text-[15px] leading-relaxed max-w-xl">
                Tools like Devin, GitHub Copilot, and Claude are exceptional at writing functions or single files. But when asked to build a 65+ file distributed system, they collapse at three critical failure points.
              </p>
            </div>
            
            <div className="flex-1 grid gap-6">
              {[
                { title: "1. Wiring Breaks", desc: "Imports drift out of sync. Database schemas no longer match the ORM models. The system compiles in pieces, but fails as a whole." },
                { title: "2. Depth Collapses", desc: "The output is riddled with mocks and placeholder stubs. The skeleton looks impressive. The body is hollow." },
                { title: "3. Pattern Hallucination", desc: "When asked for Event Sourcing or CQRS, they generate plausible-looking infrastructure that does not actually work." }
              ].map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-[var(--bg2)] border border-[var(--border)] transition-all hover:border-[var(--brand)]/30">
                  <h3 className="font-sans text-[15px] font-semibold text-[var(--brand)] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <div className="mt-20 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)]">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Header */}
                <div className="grid grid-cols-4 border-b border-[var(--border)] bg-[var(--bg3)] px-8 py-4">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase">Metric</span>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase">Traditional Dev</span>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase">Current AI Tools</span>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--brand)] uppercase font-semibold">TGM Protocol</span>
                </div>
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`grid grid-cols-4 px-8 py-6 ${i < stats.length - 1 ? "border-b border-[var(--border)]" : ""}`}
                  >
                    <span className="font-sans text-[14px] text-[var(--text-dim)]">{s.label}</span>
                    <span className="font-mono text-[13px] text-[var(--text-muted)] line-through opacity-50">
                      {s.traditional}
                    </span>
                    <span className="font-mono text-[13px] text-[var(--text-muted)] line-through opacity-50">
                      {s.ai}
                    </span>
                    <span className="font-mono text-[14px] font-semibold text-[var(--brand)]">
                      {s.tgm}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ───────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">RECEIPTS</span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mt-4 mb-6">Built by the Machine</h2>
              <p className="text-[var(--text-dim)] text-[15px] leading-relaxed">
                Audit the raw output — every line was generated, compiled, tested, and documented autonomously. No human intervention.
              </p>
            </div>
            <Link to="/portfolio" className="rounded-xl border border-[var(--border)] px-6 py-3 font-sans text-xs font-medium text-[var(--text)] transition-colors hover:bg-[var(--bg2)]">
              View All Projects →
            </Link>
          </div>

          {/* Project video */}
          <div className="mb-20 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg2)] shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full opacity-90"
                src="https://www.youtube.com/embed/qqopP2Dgpsc?si=NL6wvjMQw3yipfw6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project rows */}
          <div className="divide-y divide-[var(--border)]">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 transition-all hover:px-4 hover:bg-[var(--bg2)]/50 rounded-2xl"
              >
                <div className="flex-1">
                  <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase mb-3">PROMPT</p>
                  <p className="font-serif text-lg text-[var(--text)] italic leading-relaxed">"{p.prompt}"</p>
                </div>
                <div className="flex items-center gap-10 shrink-0 flex-wrap">
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase mb-2">Project</p>
                    <a href={p.href} target="_blank" rel="noreferrer" className="font-sans text-[15px] font-medium text-[var(--text)] hover:text-[var(--brand)] transition-colors flex items-center gap-1.5">
                      {p.name} <span className="text-xs opacity-50">↗</span>
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase mb-2">Scale</p>
                    <p className="font-mono text-[14px] text-[var(--text-dim)]">{p.scale}</p>
                  </div>
                  <div className="rounded-lg bg-[var(--brand)]/10 border border-[var(--brand)]/20 px-4 py-1.5">
                    <span className="font-mono text-[13px] font-semibold text-[var(--brand)]">{p.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEMS ─────────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-[var(--bg1)] py-24 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">THE ARCHITECTURE</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mt-4 mb-6">
              Six systems. One machine.
            </h2>
            <p className="text-[var(--text-dim)] text-[15px] leading-relaxed">
              Built in Elixir, Rust, Erlang, and Python. The moat is the integration —
              emergent properties of the whole.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((s) => (
              <div
                key={s.name}
                className="flex flex-col p-8 rounded-3xl bg-[var(--bg2)] border border-[var(--border)] hover:border-[var(--brand)]/30 transition-all"
              >
                <span className="font-mono text-xs font-semibold text-[var(--brand)]/40 mb-6">{s.n}</span>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-serif text-xl text-[var(--text)]">{s.name}</h3>
                  {s.type === "open_source" && (
                    <span className="font-mono text-[9px] tracking-widest text-[var(--brand)] border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-2 py-0.5 rounded-full uppercase">
                      Open
                    </span>
                  )}
                </div>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-8 flex-1">{s.role}</p>
                <div className="flex gap-6 mt-auto">
                  {s.href && (
                    <a href={s.href} target="_blank" rel="noreferrer" className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors">
                      Paper ↗
                    </a>
                  )}
                  {s.github && (
                    <a href={s.github} target="_blank" rel="noreferrer" className="text-[11px] uppercase tracking-widest text-[var(--brand)] hover:text-[var(--text)] transition-colors">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden bg-[var(--bg)]">
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[var(--brand)]/5 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase mb-8 block">
            &gt; AWAITING INPUT
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-tight text-[var(--text)]">
            The machine works.<br />
            <span className="text-[var(--brand)]">What it needs now is velocity.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[var(--text-dim)] text-[16px] leading-relaxed">
            Bring your hardest backend challenge. TGM will architect it in real time.
          </p>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[var(--brand)] px-10 py-4 font-sans text-sm font-semibold text-[#1A0E08] transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(217,119,87,0.4)]"
            >
              Book a Live Demo
            </a>
            <Link
              to="/about"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors"
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
