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
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="scanline-overlay relative border-b border-white/10 overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] bg-brand/8 blur-[140px]" />

        {/* Ghost label */}
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-6 select-none overflow-hidden">
          <span className="font-mono font-bold text-[clamp(5rem,15vw,14rem)] text-white/[0.025] leading-none">
            SYS
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
            &gt; HOW IT WORKS
          </span>
          <h1 className="font-mono mt-4 text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.0] tracking-tight">
            Not a chatbot wrapper.<br />
            <span className="text-brand text-glow">A system of systems.</span>
          </h1>
          <div className="mt-8 max-w-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
            <p className="font-mono text-base text-muted-foreground leading-relaxed">
              TGM is a self-contained, self-correcting, self-organizing cognitive
              infrastructure built in Elixir, Rust, Erlang, and Python — composed of six
              specialized systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS SPEC SHEET ── */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              SYSTEM MANIFEST
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="font-mono text-xl md:text-2xl font-semibold mb-10">
            The six systems
          </h2>

          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {systems.map((s) => (
              <div
                key={s.name}
                className="group relative border border-white/5 bg-white/[0.01] p-6 hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-brand/50">
                    // {s.tag}
                  </span>
                  {s.type === "open_source" && (
                    <span className="font-mono text-[9px] tracking-widest text-brand border border-brand/30 bg-brand/10 px-2 py-0.5 uppercase">
                      [OPEN SOURCE]
                    </span>
                  )}
                </div>
                <h3 className="font-mono text-sm font-semibold text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                <div className="flex gap-4 mt-4">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── MACRO / MICRO SYMBIOSIS ── */}
      <section className="border-b border-white/10 bg-brand/5">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-brand/20" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
              THE SYMBIOSIS
            </span>
            <div className="h-px flex-1 bg-brand/20" />
          </div>

          <h2 className="font-mono text-xl md:text-2xl font-semibold mb-6">
            ACN & Procoder: The Macro/Micro Symbiosis
          </h2>
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            It is vital to understand where each system fits in the engineering lifecycle.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-brand/20 bg-background p-8 hover:bg-white/[0.02] transition-colors">
              <h3 className="font-mono text-sm font-semibold text-brand mb-4">ACN: The Macro-Architect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Its job is bootstrapping. It generates the complex structural boilerplate, establishes the database schemas, wires the message brokers, enforces initial security constraints, and lays down the foundational codebase of a massive system from scratch.
              </p>
              <div className="border-l-2 border-brand pl-4 py-1">
                <p className="font-mono text-[11px] text-foreground uppercase tracking-widest leading-relaxed">
                  ACN builds the city from the ground up.
                </p>
              </div>
            </div>
            
            <div className="border border-brand/20 bg-background p-8 hover:bg-white/[0.02] transition-colors">
              <h3 className="font-mono text-sm font-semibold text-brand mb-4">Procoder: The Micro-Architect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                It is the micro-architect and refiner. It uses its advanced CodeGraph Engine, AST-level forensics, and the cognitive model to surgically refine, optimize, bug-fix, and evolve the code that ACN generated.
              </p>
              <div className="border-l-2 border-brand pl-4 py-1">
                <p className="font-mono text-[11px] text-foreground uppercase tracking-widest leading-relaxed">
                  Procoder lives in the city, maintains it, and evolves it.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center border border-white/10 bg-white/[0.02] p-4">
            <p className="font-mono text-sm text-foreground/80 uppercase tracking-widest">
              Together, ACN and Procoder form a complete, end-to-end software lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHASES PIPELINE ── */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              EXECUTION PIPELINE
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="font-mono text-xl md:text-2xl font-semibold mb-3">
            From prompt to production
          </h2>
          <p className="text-sm text-muted-foreground mb-12">
            When the machine receives a task, Ovan goes to work immediately. Six phases. Zero supervision.
          </p>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-brand/60 via-brand/20 to-transparent hidden md:block" />

            <div className="space-y-2">
              {phases.map((p) => (
                <div
                  key={p.n}
                  className="group relative border border-white/10 bg-background hover:border-brand/50 hover:bg-white/[0.02] transition-all"
                >
                  {/* Left border highlight */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex gap-6 p-6 pl-8">
                    {/* Big number */}
                    <div className="shrink-0 flex h-14 w-14 items-center justify-center border border-brand/30 bg-brand/5">
                      <span className="font-mono text-sm font-semibold text-brand">{p.n}</span>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                    </div>
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
