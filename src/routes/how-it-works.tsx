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
    <div className="min-h-screen bg-transparent text-[var(--foreground)] font-sans">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative border-b border-[var(--border)] overflow-hidden pt-[54px]">
        <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] bg-[var(--brand)]/5 blur-[140px]" />

        {/* Ghost label */}
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-6 select-none overflow-hidden">
          <span className="font-mono font-bold text-[clamp(5rem,15vw,14rem)] text-[var(--text-ghost)]/20 leading-none">
            SYS
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">
            &gt; HOW IT WORKS
          </span>
          <h1 className="font-serif mt-6 text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[1.0] tracking-tight text-[var(--text)]">
            Not a chatbot wrapper.<br />
            <span className="text-[var(--brand)]">A system of systems.</span>
          </h1>
          <div className="mt-10 max-w-2xl border border-[var(--border)] bg-[var(--bg2)]/50 backdrop-blur-md px-8 py-6 rounded-2xl">
            <p className="text-[17px] text-[var(--text-dim)] leading-relaxed">
              TGM is a self-contained, self-correcting, self-organising cognitive
              infrastructure built in Elixir, Rust, Erlang, and Python — composed of six
              specialised systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS SPEC SHEET ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg1)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">
              SYSTEM MANIFEST
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mb-12">
            The six systems
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((s) => (
              <div
                key={s.name}
                className="group relative flex flex-col p-8 rounded-3xl bg-[var(--bg2)] border border-[var(--border)] hover:border-[var(--brand)]/30 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--brand)]/50">
                    // {s.tag}
                  </span>
                  {s.type === "open_source" && (
                    <span className="font-mono text-[9px] tracking-widest text-[var(--brand)] border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-2 py-0.5 rounded-full uppercase">
                      Open
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl text-[var(--text)] mb-4">{s.name}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-8 flex-1">{s.body}</p>
                <div className="flex gap-6 mt-auto">
                  {s.href && (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors"
                    >
                      Paper ↗
                    </a>
                  )}
                  {s.github && (
                    <a
                      href={s.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] uppercase tracking-widest text-[var(--brand)] hover:text-[var(--text)] transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MACRO / MICRO SYMBIOSIS ── */}
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">
              THE SYMBIOSIS
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mb-8">
            ACN & Procoder: The Macro/Micro Symbiosis
          </h2>
          <p className="text-[16px] text-[var(--text-dim)] mb-12 max-w-2xl leading-relaxed">
            It is vital to understand where each system fits in the engineering lifecycle.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-10 hover:border-[var(--brand)]/30 transition-all">
              <h3 className="font-sans text-lg font-semibold text-[var(--brand)] mb-6 text-glow">ACN: The Macro-Architect</h3>
              <p className="text-[15px] text-[var(--text-dim)] leading-relaxed mb-8">
                Its job is bootstrapping. It generates the complex structural boilerplate, establishes the database schemas, wires the message brokers, enforces initial security constraints, and lays down the foundational codebase of a massive system from scratch.
              </p>
              <div className="border-l-2 border-[var(--brand)] pl-6 py-1">
                <p className="font-mono text-[11px] text-[var(--text)] uppercase tracking-widest leading-relaxed">
                  ACN builds the city from the ground up.
                </p>
              </div>
            </div>
            
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-10 hover:border-[var(--brand)]/30 transition-all">
              <h3 className="font-sans text-lg font-semibold text-[var(--brand)] mb-6">Procoder: The Micro-Architect</h3>
              <p className="text-[15px] text-[var(--text-dim)] leading-relaxed mb-8">
                It is the micro-architect and refiner. It uses its advanced CodeGraph Engine, AST-level forensics, and the cognitive model to surgically refine, optimise, bug-fix, and evolve the code that ACN generated.
              </p>
              <div className="border-l-2 border-[var(--brand)] pl-6 py-1">
                <p className="font-mono text-[11px] text-[var(--text)] uppercase tracking-widest leading-relaxed">
                  Procoder lives in the city, maintains it, and evolves it.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--bg1)]/50 p-6 text-center">
            <p className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em]">
              Together, ACN and Procoder form a complete, end-to-end software lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHASES PIPELINE ── */}
      <section className="bg-[var(--bg1)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">
              EXECUTION PIPELINE
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mb-4">
            From prompt to production
          </h2>
          <p className="text-[16px] text-[var(--text-dim)] mb-16">
            When the machine receives a task, Ovan goes to work immediately. Six phases. Zero supervision.
          </p>

          <div className="relative">
            <div className="space-y-4">
              {phases.map((p) => (
                <div
                  key={p.n}
                  className="group relative flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--bg2)] hover:border-[var(--brand)]/30 transition-all"
                >
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 text-glow">
                    <span className="font-mono text-lg font-semibold text-[var(--brand)]">{p.n}</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-[var(--text)] mb-3">{p.title}</h3>
                    <p className="text-[15px] text-[var(--text-dim)] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
