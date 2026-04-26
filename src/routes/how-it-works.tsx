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
  { n: "01", title: "Intent Clarification", body: "Ovan uses Obsidian to contemplate the task — formalizing intent and clearing ambiguities before a single line is written." },
  { n: "02", title: "Architecture & Boilerplate", body: "The Autonomous Cognitive Network generates the foundational codebase from scratch with hierarchical task decomposition." },
  { n: "03", title: "Build, Test & Document", body: "Procoder takes over: debugging, compiling, running, and documenting the project end to end." },
  { n: "04", title: "Critic Loop", body: "A critic agent exposes mocks, flaws, and oversights. Procoder fixes. Repeat until clean." },
  { n: "05", title: "Review Loop", body: "A review agent audits against the original plan and production-readiness criteria. Procoder addresses every concern." },
  { n: "06", title: "Delivery", body: "Final tests pass, docs are updated, and the codebase ships. The user can run Procoder later to evolve it." },
];

const systems = [
  { name: "Obsidian", tag: "Thinking", body: "A true creative thinking machine achieved through forced lateral contemplation." },
  { name: "Associative Cognitive Memory", tag: "Memory", body: "Neuro-inspired memory with spreading activation, neuroplasticity, and Hebbian learning." },
  { name: "Cognitive Digital Modelling", tag: "World Model", body: "High-fidelity, autonomous, queryable digital environments for AI agents." },
  { name: "Autonomous Cognitive Network", tag: "Macro-Architect", body: "Synthesizes complex codebases from scratch via discovery search and hierarchical decomposition." },
  { name: "Procoder", tag: "Micro-Architect", body: "An autonomous coding agent using AST-based codegraphs to inhabit and modify complex projects." },
  { name: "Ovan", tag: "Orchestrator", body: "Python-based orchestrator that chains every system into The Genesis Machine." },
];

function HowItWorks() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">How it works</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Not a chatbot wrapper. A system of systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            TGM is a self-contained, self-correcting, self-organizing cognitive infrastructure
            built in Elixir, Rust, Erlang, and Python — composed of six specialized systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">The six systems</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((s) => (
            <div key={s.name} className="rounded-xl border border-border bg-card/40 p-6">
              <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-brand">
                {s.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">From prompt to production</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            When the machine receives a task, Ovan goes to work immediately. Six phases. Zero supervision.
          </p>

          <div className="relative mt-12 space-y-4">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/60 via-border to-transparent" />
            {phases.map((p) => (
              <div key={p.n} className="relative flex gap-6 rounded-xl border border-border bg-background/40 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-card font-mono text-sm text-brand shadow-[0_0_30px_-10px_var(--brand)]">
                  {p.n}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
