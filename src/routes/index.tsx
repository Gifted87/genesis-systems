import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

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
  { label: "Dev time", traditional: "3–6 months", tgm: "3 hours" },
  { label: "Lines of code", traditional: "—", tgm: "30,000+" },
  { label: "Cost", traditional: "$80K–$150K", tgm: "<$20" },
  { label: "Human prompts after intent", traditional: "Continuous", tgm: "Zero" },
];

const projects = [
  {
    prompt: "Build me a complex e-commerce backend",
    name: "Ecommerce-Backend",
    scale: "190+ files · 20,000+ LOC",
    time: "< 3 hrs",
    href: "https://github.com/Gifted87",
  },
  {
    prompt: "Real-time fraud detection with Event Sourcing & CQRS",
    name: "Fraud-Detection-Engine",
    scale: "65+ files · 7,000+ LOC",
    time: "< 2 hrs",
    href: "https://github.com/Gifted87",
  },
  {
    prompt: "Build a URL shortener microservice",
    name: "URL-Shortener",
    scale: "40+ files · 5,000+ LOC",
    time: "< 2 hrs",
    href: "https://github.com/Gifted87",
  },
  {
    prompt: "Build me a calculator microservice",
    name: "Calculator-Microservice",
    scale: "13+ files · 1,900+ LOC",
    time: "< 1 hr",
    href: "https://github.com/Gifted87",
  },
];

const systems = [
  { name: "Obsidian", role: "Forced lateral contemplation — a true creative thinking machine." },
  { name: "Associative Cognitive Memory", role: "Spreading activation, neuroplasticity, Hebbian learning." },
  { name: "Cognitive Digital Modelling", role: "High-fidelity, queryable digital environments for agents." },
  { name: "Autonomous Cognitive Network", role: "Macro-architect. Synthesizes complex codebases from scratch." },
  { name: "Procoder", role: "Micro-architect. AST-level forensics, surgical refinement." },
  { name: "Ovan", role: "Python orchestrator. Chains every system into TGM." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at top, black 40%, transparent 75%)",
          }}
        />
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />

        <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            The Genesis Machine
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Complex backend systems.
            <br />
            <span className="bg-gradient-to-r from-brand via-brand-glow to-brand bg-clip-text text-transparent">
              Architected by AI. Deployed in hours.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
            A zero-shot system of systems that architects, builds, tests, and hardens
            production-grade backends from a single prompt. No mocks. No placeholders. No hand-holding.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground shadow-[0_0_50px_-10px_var(--brand)] transition-transform hover:scale-[1.03]"
            >
              Book a Live Demo
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex h-12 items-center rounded-md border border-border bg-card/40 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              See the Output →
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-brand">The delta</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Why current tools fail at scale</h2>
            <p className="mt-3 text-muted-foreground">
              Devin, Copilot, Claude — exceptional at functions. They collapse on 65+ file distributed systems.
              Wiring breaks. Depth collapses. Advanced patterns hallucinate.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-background/40">
            <div className="grid grid-cols-3 border-b border-border bg-card/60 px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <div>Metric</div>
              <div>Traditional / Current AI</div>
              <div className="text-brand">TGM</div>
            </div>
            {stats.map((s) => (
              <div key={s.label} className="grid grid-cols-3 border-b border-border/60 px-6 py-5 last:border-0">
                <div className="font-medium">{s.label}</div>
                <div className="text-muted-foreground">{s.traditional}</div>
                <div className="font-semibold text-brand">{s.tgm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand">Receipts</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">See for yourself</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              We don't ask you to trust slides. Audit the raw output — every line generated, compiled, tested, and documented autonomously.
            </p>
          </div>
          <Link to="/portfolio" className="hidden text-sm text-brand hover:underline md:inline">
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-brand/50 hover:bg-card"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition-all group-hover:bg-brand/20" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Prompt</p>
              <p className="mt-1 font-mono text-sm text-foreground">"{p.prompt}"</p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.scale}</p>
                </div>
                <div className="rounded-md border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {p.time}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="border-t border-border/60 bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-brand">The architecture</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Six systems. One machine.</h2>
            <p className="mt-3 text-muted-foreground">
              Built in Elixir, Rust, Erlang, and Python. The moat is the integration — emergent properties of the whole, not any single model call.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((s, i) => (
              <div
                key={s.name}
                className="rounded-xl border border-border bg-background/40 p-6 transition-colors hover:border-brand/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <div className="h-2 w-2 rounded-full bg-brand/60" />
                </div>
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="text-balance text-4xl font-semibold md:text-5xl">
          The machine works. What it needs now is{" "}
          <span className="bg-gradient-to-r from-brand to-brand-glow bg-clip-text text-transparent">velocity</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Bring your hardest backend challenge. TGM will architect it in real time.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground shadow-[0_0_50px_-10px_var(--brand)] transition-transform hover:scale-[1.03]"
          >
            Book a Live Demo
          </Link>
          <Link
            to="/about"
            className="inline-flex h-12 items-center rounded-md border border-border bg-card/40 px-6 text-sm font-medium text-foreground hover:bg-card"
          >
            About the founder
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
