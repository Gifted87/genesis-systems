import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { useState } from "react";

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
      { property: "og:description", content: "He conceptualized and shipped the TGM" },
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
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const text = "braimahgifted@gmail.com";
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.prepend(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="scanline-overlay relative border-b border-white/10 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-end overflow-hidden select-none">
          <span className="font-mono font-bold text-[clamp(4rem,12vw,11rem)] text-white/[0.03] leading-none whitespace-nowrap">
            GIFT BRAIMAH
          </span>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] bg-brand/8 blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
            &gt; ABOUT THE FOUNDER
          </span>
          <h1 className="font-mono mt-4 text-[clamp(3.5rem,10vw,8.5rem)] font-semibold leading-[0.95] tracking-tight text-foreground">
            Gift<br />Braimah
          </h1>
          <p className="font-mono text-base text-brand mt-4 tracking-widest">
            FOUNDER & SYSTEMS ARCHITECT
          </p>
          <div className="mt-8 max-w-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
            <p className="font-mono text-base text-muted-foreground leading-relaxed">
              Gift combines deep systems intuition with obsessive execution. He conceptualized and shipped the TGM — a complete cognitive infrastructure built from
              the ground up as a system of systems.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">TRAJECTORY</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="font-mono text-xl md:text-2xl font-semibold mb-10">The build log</h2>
          <div>
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`flex gap-8 py-6 hover:bg-white/[0.015] transition-colors px-2 ${i < timeline.length - 1 ? "border-b border-white/8" : ""}`}
              >
                <div className="shrink-0 w-20 text-right">
                  <span className="font-mono text-sm font-semibold text-brand">{t.year}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR FAQ */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">INVESTOR FAQ</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="font-mono text-xl md:text-2xl font-semibold mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-4xl">
            <div>
              <h3 className="font-mono text-sm font-semibold text-brand mb-2">Is this just an LLM wrapper?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No. TGM is a distributed cognitive infrastructure. The LLM is one component among six specialized systems. The moat is in the orchestration, memory architecture, and self-correcting pipeline—not the model.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm font-semibold text-brand mb-2">What can TGM not do today?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                TGM is optimized for backend and UI-less systems. It does not generate frontends, mobile apps, or visual interfaces. This is a deliberate scope boundary, not a limitation.
              </p>
            </div>


            <div>
              <h3 className="font-mono text-sm font-semibold text-brand mb-2">What is the defensibility?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The moat is the full System of Systems—not any single component. TGM is not a prompt engineering trick or a thin wrapper around a frontier model. It is a deeply integrated cognitive infrastructure where five highly sophisticated systems operate in concert:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-muted-foreground mb-4">
                <li><span className="text-foreground">Obsidian</span> handles creative, lateral reasoning that formalizes ambiguous intent into executable architecture.</li>
                <li><span className="text-foreground">Associative Cognitive Memory System</span> maintains long-horizon coherence across tens of thousands of lines—something standard context windows cannot do.</li>
                <li><span className="text-foreground">Cognitive Digital Modelling System</span> creates queryable digital environments that agents inhabit and reason within.</li>
                <li><span className="text-foreground">Autonomous Cognitive Network</span> synthesizes complex codebases from scratch through hierarchical task decomposition and context propagation.</li>
                <li><span className="text-foreground">Procoder</span> executes precise modifications using AST-based codegraphs and the cognitive model—not guesswork.</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This architecture cannot be replicated by prompting a general-purpose LLM, because the coherence, memory persistence, and multi-phase self-correction are emergent properties of the integration—not of any individual model call. The more TGM builds, the stronger its associative memory becomes, and the tighter the feedback loops between the critic, reviewer, and Procoder grow.
              </p>
              <p className="text-sm font-semibold text-foreground mt-4 leading-relaxed">
                In short: Competitors can replicate a coding agent. They cannot easily replicate a self-correcting cognitive infrastructure built from the ground up as a System of Systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE ASK */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">THE ASK</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="font-mono text-xl md:text-2xl font-semibold mb-3">TGM is built and tested.</h2>
          <p className="text-sm text-muted-foreground mb-10">The machine works. It needs velocity.</p>
          <div className="grid gap-px md:grid-cols-2">
            <div className="border border-white/10 bg-background p-8 border-t-2 border-t-brand hover:bg-white/[0.02] transition-colors">
              <p className="font-mono text-[9px] tracking-[0.3em] text-brand uppercase mb-4">01</p>
              <h3 className="font-mono text-lg font-semibold">A Technical Co-Founder</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Own infrastructure, scaling, and commercialization. Obsessed with distributed systems, autonomous agents, or developer tools.
              </p>
            </div>
            <div className="border border-white/10 bg-background p-8 border-t-2 border-t-brand hover:bg-white/[0.02] transition-colors">
              <p className="font-mono text-[9px] tracking-[0.3em] text-brand uppercase mb-4">02</p>
              <h3 className="font-mono text-lg font-semibold">Up to $50K in Capital</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Cloud, AI credits, security audits, design partners — to prepare TGM for public testing and a proper pre-seed round.
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              id="about-get-in-touch"
              className="font-mono text-[11px] tracking-[0.2em] uppercase font-semibold bg-brand text-brand-foreground px-8 py-3 brand-glow-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_oklch(0.82_0.18_195)]"
            >
              BOOK A LIVE DEMO
            </a>
            <button
              onClick={handleCopy}
              id="about-email"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground border border-white/10 px-8 py-3 hover:text-brand hover:border-brand/50 transition-colors"
            >
              {copied ? "COPIED! ✓" : "EMAIL →"}
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
