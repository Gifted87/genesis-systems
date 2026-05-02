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
    <div className="min-h-screen bg-transparent">
      <SiteHeader />

      <main className="main">
        {/* ── HERO ────────────────────────────────── */}
        <section className="section" id="hero">
          <div className="section-label">00 · Initialization</div>
          <h1 className="section-title text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-6">
            Complex backend systems.<br />
            <span className="text-[var(--accent)]">Architected by AI.</span>
          </h1>
          <p className="section-desc">
            A zero-shot system of systems that architects, builds, tests, and hardens
            production-grade backends from a single prompt. 30,000+ lines in hours, not months.
          </p>

          <div className="row mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg"
            >
              Book a Live Demo
            </a>
            <Link to="/portfolio" className="btn btn-secondary btn-lg">
              See the Output →
            </Link>
          </div>

          <div className="mt-20 opacity-90">
            <TerminalAnimation />
          </div>
        </section>

        {/* ── THE DELTA ─────────────────────────── */}
        <section className="section" id="delta">
          <div className="section-label">01 · Analysis</div>
          <h2 className="section-title">Why current tools fail at scale</h2>
          <p className="section-desc">
            Tools like Devin, GitHub Copilot, and Claude are exceptional at writing functions or single files. But they collapse when building complex distributed systems.
          </p>
          <div className="divider"></div>

          <div className="grid grid-3 mb-16">
            {[
              { title: "1. Wiring Breaks", desc: "Imports drift out of sync. Database schemas no longer match the ORM models." },
              { title: "2. Depth Collapses", desc: "The output is riddled with mocks and placeholder stubs. The body is hollow." },
              { title: "3. Pattern Hallucination", desc: "Plausible-looking infrastructure that does not actually work in production." }
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="sub text-[var(--accent)]">Critical Point {i + 1}</div>
                <div className="card-title text-base mb-2">{item.title}</div>
                <div className="card-body">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="sub">Comparison Protocol</div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Traditional</th>
                  <th>Current AI</th>
                  <th>TGM Protocol</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td className="opacity-40 line-through">{s.traditional}</td>
                    <td className="opacity-40 line-through">{s.ai}</td>
                    <td><span className="badge badge-accent">{s.tgm}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── PORTFOLIO PREVIEW ───────────────────── */}
        <section className="section" id="portfolio">
          <div className="section-label">02 · Receipts</div>
          <h2 className="section-title">Built by the Machine</h2>
          <p className="section-desc">
            Audit the raw output — every line was generated, compiled, tested, and documented autonomously.
          </p>
          <div className="divider"></div>

          <div className="card-glow mb-16 overflow-hidden p-0">
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

          <div className="grid grid-2">
            {projects.map((p) => (
              <div key={p.name} className="card">
                <div className="card-header">
                  <span className="badge badge-muted">Prompt</span>
                  <span className="badge badge-accent">{p.time}</span>
                </div>
                <div className="card-body mb-6">
                  <p className="font-serif italic text-lg mb-4">"{p.prompt}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="profile-name text-sm">{p.name}</div>
                      <div className="profile-role text-[10px]">{p.scale}</div>
                    </div>
                    <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-xs btn-outline">
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SYSTEMS ─────────────────────────────── */}
        <section className="section" id="architecture">
          <div className="section-label">03 · Architecture</div>
          <h2 className="section-title">Six systems. One machine.</h2>
          <p className="section-desc">
            The moat is the integration — emergent properties of the whole system of systems.
          </p>
          <div className="divider"></div>

          <div className="grid grid-3">
            {systems.map((s) => (
              <div key={s.name} className="card-flat">
                <div className="card-header">
                  <span className="font-mono text-xs opacity-30">{s.n}</span>
                  {s.type === "open_source" && <span className="badge badge-success btn-xs">Open</span>}
                </div>
                <div className="card-title text-base">{s.name}</div>
                <div className="card-body mb-6">{s.role}</div>
                <div className="row gap-4">
                  {s.href && <a href={s.href} target="_blank" rel="noreferrer" className="btn btn-xs btn-ghost">Paper ↗</a>}
                  {s.github && <a href={s.github} target="_blank" rel="noreferrer" className="btn btn-xs btn-ghost">GitHub ↗</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────── */}
        <section className="section text-center py-20" id="cta">
          <div className="section-label">04 · Awaiting Input</div>
          <h2 className="section-title text-4xl md:text-6xl mb-8">
            The machine works.<br />
            <span className="text-[var(--accent)]">What it needs now is velocity.</span>
          </h2>
          <div className="row justify-center mt-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-xl"
            >
              Book a Live Demo
            </a>
            <Link to="/about" className="btn btn-secondary btn-xl">
              About the Founder →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
