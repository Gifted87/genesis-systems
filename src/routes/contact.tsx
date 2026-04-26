import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Demo — The Genesis Machine" },
      {
        name: "description",
        content:
          "Book a live demo of The Genesis Machine. Bring your hardest backend challenge — TGM will architect it in real time.",
      },
      { property: "og:title", content: "Book a Live Demo — The Genesis Machine" },
      { property: "og:description", content: "Bring your hardest backend challenge." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/15 blur-[160px]" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Get in touch</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            See it live.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Bring your hardest backend challenge. TGM will architect it in front of you — no slides, no smoke.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:braimahgifted@gmail.com?subject=TGM%20Live%20Demo"
            className="group rounded-2xl border border-border bg-card/40 p-8 transition-all hover:border-brand/50"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
              ✉
            </div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-1 text-sm text-muted-foreground">Book a demo or pitch a brief.</p>
            <p className="mt-4 font-mono text-sm text-brand transition-colors group-hover:underline">
              braimahgifted@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Gifted87"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-card/40 p-8 transition-all hover:border-brand/50"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
              ◆
            </div>
            <h2 className="text-xl font-semibold">GitHub</h2>
            <p className="mt-1 text-sm text-muted-foreground">Audit the raw output.</p>
            <p className="mt-4 font-mono text-sm text-brand transition-colors group-hover:underline">
              github.com/Gifted87
            </p>
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-8 text-center">
          <h3 className="text-2xl font-semibold">Investors & co-founders</h3>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
            TGM is built and tested. Looking for a technical co-founder and up to $50K to reach pre-seed.
          </p>
          <a
            href="mailto:braimahgifted@gmail.com?subject=TGM%20Investment%20%2F%20Co-founder"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground shadow-[0_0_40px_-10px_var(--brand)]"
          >
            Start a conversation
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
