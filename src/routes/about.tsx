import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gift Braimah, Founder of TGM" },
      {
        name: "description",
        content:
          "Gift Braimah, founder and systems architect of The Genesis Machine. From firmware in C to a self-correcting cognitive infrastructure for backend generation.",
      },
      { property: "og:title", content: "About — Gift Braimah, Founder of TGM" },
      { property: "og:description", content: "He didn't prototype TGM. He shipped it." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2022", text: "Began writing firmware in C and C++ for microcontrollers." },
  { year: "2023", text: "Completed Google's IT Automation with Python specialization. Started building production tooling." },
  { year: "Late 2023", text: "Identified the long-horizon coherence gap in current LLMs." },
  { year: "Dec 2024", text: "Began drafting the conceptual architecture for TGM." },
  { year: "Dec 2025", text: "Discovered Elixir and the Actor Model. Started building." },
  { year: "Apr 2026", text: "Seven sophisticated cognitive systems operating as a unified System of Systems." },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">About the founder</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Gift Braimah
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">Founder & Systems Architect</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Gift combines deep systems intuition with obsessive execution. He didn't prototype TGM.
            He shipped it — a complete cognitive infrastructure built from the ground up as a system of systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Trajectory</h2>
        <div className="mt-10 space-y-4">
          {timeline.map((t) => (
            <div key={t.year} className="grid grid-cols-[120px_1fr] items-start gap-6 rounded-xl border border-border bg-card/40 p-6">
              <div className="font-mono text-sm text-brand">{t.year}</div>
              <p className="text-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/20">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-semibold">The ask</h2>
          <p className="mt-3 text-muted-foreground">TGM is built and tested. The machine works. It needs velocity.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background/40 p-6">
              <p className="text-xs uppercase tracking-wider text-brand">01</p>
              <h3 className="mt-2 text-xl font-semibold">A Technical Co-Founder</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Own infrastructure, scaling, and commercialization. Obsessed with distributed systems, autonomous agents, or developer tools.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background/40 p-6">
              <p className="text-xs uppercase tracking-wider text-brand">02</p>
              <h3 className="mt-2 text-xl font-semibold">Up to $50K in Capital</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cloud, AI credits, security audits, design partners — to prepare TGM for public testing and a proper pre-seed round.
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground shadow-[0_0_40px_-10px_var(--brand)]"
            >
              Get in touch
            </Link>
            <a
              href="https://github.com/Gifted87"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-md border border-border bg-card/40 px-6 text-sm font-medium hover:bg-card"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
