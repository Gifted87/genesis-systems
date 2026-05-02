import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — The Genesis Machine" },
      {
        name: "description",
        content:
          "TGM is a self-correcting cognitive infrastructure built from six specialized systems. From prompt to production through six orchestrated phases.",
      },
      { property: "og:title", content: "How It Works — The Genesis Machine" },
      { property: "og:description", content: "Six systems. Six phases. Zero hand-holding." },
    ],
  }),
  component: HowItWorks,
});

const phases = [
  {
    n: "01",
    title: "Intent Clarification",
    body: "Ovan uses Obsidian to contemplate the task — formalizing intent and clearing ambiguities before a single line is written.",
  },
  {
    n: "02",
    title: "Architecture & Boilerplate",
    body: "The Autonomous Cognitive Network generates the foundational codebase from scratch with hierarchical task decomposition.",
  },
  {
    n: "03",
    title: "Build, Test & Document",
    body: "Procoder takes over: debugging, compiling, running, and documenting the project end to end.",
  },
  {
    n: "04",
    title: "Critic Loop",
    body: "A critic agent exposes mocks, flaws, and oversights. Procoder fixes. Repeat until clean.",
  },
  {
    n: "05",
    title: "Review Loop",
    body: "A review agent audits against the original plan and production-readiness criteria. Procoder addresses every concern.",
  },
  {
    n: "06",
    title: "Delivery",
    body: "Final tests pass, docs are updated, and the codebase ships. The user can run Procoder later to evolve it.",
  },
];

const systems = [
  { name: "Obsidian", tag: "THINKING", body: "A true creative thinking machine achieved through forced lateral contemplation.", href: "https://docs.google.com/document/d/10K29w6vLsIpEd4_fTLFINw95NCtVtps3h5w-LN-9sYA/edit?tab=t.0", github: "https://github.com/Gifted87/obsidian", type: "open_source" },
  { name: "Associative Cognitive Memory System", tag: "MEMORY", body: "Neuro-inspired memory with spreading activation, neuroplasticity, and Hebbian learning.", href: "https://docs.google.com/document/d/1S8oXnv_8IxSiB6q89H3mhlXWpxVvHq9cclwzb7_eWWk/edit?usp=sharing", type: "proprietary" },
  { name: "Cognitive Digital Modelling System", tag: "WORLD MODEL", body: "High-fidelity, autonomous, queryable digital environments for AI agents.", href: "https://docs.google.com/document/d/1yzhXlG8CtXISzBGFRuVXTmfSFwJjM7Hxjfk2kYbccK8/edit?usp=sharing", type: "proprietary" },
  { name: "Autonomous Cognitive Network", tag: "MACRO-ARCHITECT", body: "Synthesizes complex codebases from scratch via discovery search and hierarchical decomposition.", href: "https://docs.google.com/document/d/1OsyLEqQYNW0p7F0msISDWNYoOSGOrxQ8vjPuYismpa8/edit?tab=t.0", type: "proprietary" },
  { name: "Procoder", tag: "MICRO-ARCHITECT", body: "An autonomous coding agent using AST-based codegraphs to inhabit and modify complex projects.", href: "https://docs.google.com/document/d/1qRG2SKwDx2WubwVaJSFyJ7-uvwDEL9zhQmaVr_f8-VY/edit?usp=sharing", github: "https://github.com/Gifted87/procoder", type: "open_source" },
  { name: "Ovan", tag: "ORCHESTRATOR", body: "Python-based orchestrator that chains every system into The Genesis Machine.", href: null, type: "proprietary" },
];

function HowItWorks() {
  return (
    <div className="min-h-screen bg-transparent">
      <SiteHeader />

      <main className="main">
        {/* ── HERO ── */}
        <section className="section" id="hero">
          <div className="section-label">01 · Logic</div>
          <h1 className="section-title">
            Not a chatbot wrapper.<br />
            <span className="text-[var(--accent)]">A system of systems.</span>
          </h1>
          <p className="section-desc">
            TGM is a self-contained, self-correcting, self-organising cognitive
            infrastructure built in Elixir, Rust, Erlang, and Python.
          </p>
          <div className="divider"></div>
        </section>

        {/* ── SYSTEMS SPEC SHEET ── */}
        <section className="section" id="manifest">
          <div className="section-label">02 · Manifest</div>
          <h2 className="section-title">The six systems</h2>
          <div className="divider"></div>

          <div className="grid grid-3">
            {systems.map((s) => (
              <div key={s.name} className="card-flat">
                <div className="card-header">
                  <span className="badge badge-muted lowercase">{s.tag}</span>
                  {s.type === "open_source" && <span className="badge badge-success lowercase">Open</span>}
                </div>
                <h3 className="card-title text-lg mb-4">{s.name}</h3>
                <p className="card-body mb-8">{s.body}</p>
                <div className="row mt-auto">
                  {s.href && <a href={s.href} target="_blank" rel="noreferrer" className="btn btn-ghost btn-xs">Paper ↗</a>}
                  {s.github && <a href={s.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-xs">GitHub ↗</a>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MACRO / MICRO SYMBIOSIS ── */}
        <section className="section" id="symbiosis">
          <div className="section-label">03 · Symbiosis</div>
          <h2 className="section-title">Macro & Micro</h2>
          <p className="section-desc">Engineering lifecycle separation of concerns.</p>
          <div className="divider"></div>

          <div className="grid grid-2 gap-8">
            <div className="card-glow p-10">
              <h3 className="card-title text-xl mb-6">ACN: The Macro-Architect</h3>
              <p className="card-body mb-8 text-lg">
                Bootstrap structural boilerplate, schemas, brokers, and security constraints.
              </p>
              <div className="divider"></div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                ACN builds the city from the ground up.
              </p>
            </div>
            
            <div className="card p-10">
              <h3 className="card-title text-xl mb-6">Procoder: The Micro-Architect</h3>
              <p className="card-body mb-8 text-lg">
                Surgically refine, optimise, bug-fix, and evolve the code using AST-level forensics.
              </p>
              <div className="divider"></div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                Procoder maintain and evolves the city.
              </p>
            </div>
          </div>
        </section>

        {/* ── PHASES PIPELINE ── */}
        <section className="section" id="pipeline">
          <div className="section-label">04 · Execution</div>
          <h2 className="section-title">From prompt to production</h2>
          <p className="section-desc">Six orchestrated phases. Zero supervision.</p>
          <div className="divider"></div>

          <div className="flex flex-col gap-4">
            {phases.map((p) => (
              <div key={p.n} className="card-flat flex flex-col md:flex-row gap-6 p-8 group">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)] text-[#1A0E08]">
                  <span className="font-mono text-lg font-bold">{p.n}</span>
                </div>
                <div>
                  <h3 className="card-title text-lg mb-2">{p.title}</h3>
                  <p className="card-body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
