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
    prompt: "Build me a complex e-commerce backend",
    name: "Ecommerce-Backend",
    files: "190+",
    loc: "20,000+",
    time: "< 3 hrs",
    tags: ["Microservices", "PostgreSQL", "Auth", "Payments"],
    href: "https://github.com/Gifted87",
  },
  {
    prompt: "Build a high-throughput financial backend for real-time fraud detection using Event Sourcing and CQRS",
    name: "Fraud-Detection-Engine",
    files: "65+",
    loc: "7,000+",
    time: "< 2 hrs",
    tags: ["Event Sourcing", "CQRS", "Distributed", "Real-time"],
    href: "https://github.com/Gifted87",
  },
  {
    prompt: "Build a URL shortener microservice",
    name: "URL-Shortener",
    files: "40+",
    loc: "5,000+",
    time: "< 2 hrs",
    tags: ["Microservice", "Redis", "REST"],
    href: "https://github.com/Gifted87",
  },
  {
    prompt: "Build me a calculator microservice",
    name: "Calculator-Microservice",
    files: "13+",
    loc: "1,900+",
    time: "< 1 hr",
    tags: ["Microservice", "gRPC", "Tests"],
    href: "https://github.com/Gifted87",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Portfolio</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            One prompt. Entire systems.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every codebase below was architected, written, compiled, tested, and documented by TGM
            with zero human intervention after intent. Audit the source on GitHub.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 transition-all hover:border-brand/50"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition-all group-hover:bg-brand/20" />

              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">{p.name}</h2>
                <span className="shrink-0 rounded-md border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {p.time}
                </span>
              </div>

              <div className="mt-5 rounded-lg border border-border bg-background/60 p-4">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Prompt</p>
                <p className="mt-1 font-mono text-sm">"{p.prompt}"</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Files</p>
                  <p className="mt-1 text-2xl font-semibold text-brand">{p.files}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Lines of Code</p>
                  <p className="mt-1 text-2xl font-semibold text-brand">{p.loc}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center text-sm font-medium text-brand hover:underline"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card/40 p-8 text-center">
          <h3 className="text-2xl font-semibold">Have a harder one?</h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Bring your toughest backend brief to a live demo. TGM will architect it in front of you.
          </p>
          <a
            href="mailto:braimahgifted@gmail.com"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground shadow-[0_0_40px_-10px_var(--brand)]"
          >
            Submit a brief
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
