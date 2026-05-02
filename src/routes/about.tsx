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
    <div className="min-h-screen bg-transparent text-[var(--foreground)] font-sans">
      <SiteHeader />

      {/* HERO */}
      <section className="relative border-b border-[var(--border)] overflow-hidden pt-[54px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-end overflow-hidden select-none">
          <span className="font-mono font-bold text-[clamp(4rem,12vw,11rem)] text-[var(--text-ghost)]/30 leading-none whitespace-nowrap">
            GIFT BRAIMAH
          </span>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] bg-[var(--brand)]/5 blur-[140px]" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">
            &gt; ABOUT THE FOUNDER
          </span>
          <h1 className="font-serif mt-6 text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-[0.95] tracking-tight text-[var(--text)]">
            Gift<br />Braimah
          </h1>
          <p className="font-mono text-[11px] text-[var(--brand)] mt-6 tracking-[0.2em] uppercase">
            FOUNDER & SYSTEMS ARCHITECT
          </p>
          <div className="mt-10 max-w-2xl border border-[var(--border)] bg-[var(--bg2)]/50 backdrop-blur-md px-8 py-6 rounded-2xl">
            <p className="text-[16px] text-[var(--text-dim)] leading-relaxed">
              Gift combines deep systems intuition with obsessive execution. He conceptualised and shipped the TGM — a complete cognitive infrastructure built from
              the ground up as a system of systems.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-[var(--border)] bg-[var(--bg1)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">TRAJECTORY</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mb-12">The build log</h2>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`flex flex-col md:flex-row gap-4 md:gap-12 p-6 rounded-2xl hover:bg-[var(--bg2)] transition-all ${i < timeline.length - 1 ? "border-b border-[var(--border)]" : ""}`}
              >
                <div className="shrink-0 w-24">
                  <span className="font-mono text-sm font-semibold text-[var(--brand)]">{t.year}</span>
                </div>
                <p className="text-[15px] text-[var(--text-dim)] leading-relaxed flex-1">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR FAQ */}
      <section className="border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">INVESTOR FAQ</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-12 max-w-4xl">
            <div>
              <h3 className="font-sans text-lg font-semibold text-[var(--brand)] mb-4 text-glow">Is this just an LLM wrapper?</h3>
              <p className="text-[15px] text-[var(--text-dim)] leading-relaxed">
                No. TGM is a distributed cognitive infrastructure. The LLM is one component among six specialised systems. The moat is in the orchestration, memory architecture, and self-correcting pipeline—not the model.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-lg font-semibold text-[var(--brand)] mb-4">What can TGM not do today?</h3>
              <p className="text-[15px] text-[var(--text-dim)] leading-relaxed">
                TGM is optimised for backend and UI-less systems. It does not generate frontends, mobile apps, or visual interfaces. This is a deliberate scope boundary, not a limitation.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[var(--bg1)] border border-[var(--border)]">
              <h3 className="font-sans text-xl font-semibold text-[var(--brand)] mb-6">What is the defensibility?</h3>
              <p className="text-[15px] text-[var(--text-dim)] leading-relaxed mb-8">
                The moat is the full System of Systems—not any single component. TGM is not a prompt engineering trick or a thin wrapper around a frontier model. It is a deeply integrated cognitive infrastructure:
              </p>
              <ul className="grid gap-6 text-[14px] text-[var(--text-dim)]">
                <li className="flex gap-4">
                  <span className="font-mono text-[var(--brand)] shrink-0">01</span>
                  <p><span className="text-[var(--text)] font-semibold">Obsidian</span> handles creative, lateral reasoning that formalises ambiguous intent into executable architecture.</p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[var(--brand)] shrink-0">02</span>
                  <p><span className="text-[var(--text)] font-semibold">Memory System</span> maintains long-horizon coherence across tens of thousands of lines—something standard context windows cannot do.</p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[var(--brand)] shrink-0">03</span>
                  <p><span className="text-[var(--text)] font-semibold">Digital Modelling</span> creates queryable digital environments that agents inhabit and reason within.</p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[var(--brand)] shrink-0">04</span>
                  <p><span className="text-[var(--text)] font-semibold">Cognitive Network</span> synthesises complex codebases through hierarchical task decomposition and context propagation.</p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[var(--brand)] shrink-0">05</span>
                  <p><span className="text-[var(--text)] font-semibold">Procoder</span> executes precise modifications using AST-based codegraphs—not guesswork.</p>
                </li>
              </ul>
              <div className="mt-10 pt-8 border-t border-[var(--border)]">
                <p className="text-[15px] font-medium text-[var(--text)] italic leading-relaxed">
                  Competitors can replicate a coding agent. They cannot easily replicate a self-correcting cognitive infrastructure built from the ground up as a System of Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE ASK */}
      <section className="bg-[var(--bg1)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">THE ASK</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] mb-4">TGM is built and tested.</h2>
          <p className="text-[15px] text-[var(--text-dim)] mb-12">The machine works. It needs velocity.</p>
          
          <div className="max-w-2xl rounded-3xl bg-[var(--bg)] border border-[var(--border)] p-10 hover:border-[var(--brand)]/40 transition-all">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase mb-6">OPPORTUNITY</p>
            <h3 className="font-sans text-xl font-semibold text-[var(--text)] mb-4">Business / Commercial Co-Founder (CEO-type)</h3>
            <p className="text-[15px] text-[var(--text-dim)] leading-relaxed mb-8">
              Looking for a commercial founder to lead the project to pre-seed funding and make the company viable.
            </p>
            <ul className="space-y-3 text-[14px] text-[var(--text-dim)]">
              <li className="flex gap-3 items-center">
                <div className="h-1 w-1 rounded-full bg-[var(--brand)]" />
                <p><span className="text-[var(--text)] font-medium">Owns:</span> Sales, partnerships, fundraising, and strategy.</p>
              </li>
              <li className="flex gap-3 items-center">
                <div className="h-1 w-1 rounded-full bg-[var(--brand)]" />
                <p><span className="text-[var(--text)] font-medium">Thinks in:</span> Revenue, margins, and growth loops.</p>
              </li>
              <li className="flex gap-3 items-center">
                <div className="h-1 w-1 rounded-full bg-[var(--brand)]" />
                <p><span className="text-[var(--text)] font-medium">Handles:</span> The external world—bringing in capital and enterprise deals.</p>
              </li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[var(--brand)] px-10 py-4 font-sans text-sm font-semibold text-[#1A0E08] transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(217,119,87,0.4)]"
            >
              Book a Live Demo
            </a>
            <button
              onClick={handleCopy}
              className="rounded-xl border border-[var(--border)] px-10 py-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--text)] hover:bg-[var(--bg2)] transition-colors"
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
