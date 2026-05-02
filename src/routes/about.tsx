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
    <div className="min-h-screen bg-transparent">
      <SiteHeader />

      <main className="main">
        {/* HERO */}
        <section className="section" id="hero">
          <div className="section-label">01 · Founder</div>
          <h1 className="section-title text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.95]">
            Gift<br />Braimah
          </h1>
          <div className="badge badge-accent mt-6">Founder & Systems Architect</div>
          
          <div className="card mt-12 max-w-2xl">
            <p className="card-body text-lg leading-relaxed">
              Gift combines deep systems intuition with obsessive execution. He conceptualised and shipped the TGM — a complete cognitive infrastructure built from
              the ground up as a system of systems.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="section" id="trajectory">
          <div className="section-label">02 · Trajectory</div>
          <h2 className="section-title">The build log</h2>
          <p className="section-desc">A chronological record of systems evolution.</p>
          <div className="divider"></div>

          <div className="flex flex-col gap-4">
            {timeline.map((t, i) => (
              <div key={t.year} className="card-flat flex flex-col md:flex-row gap-6 md:gap-12 p-6">
                <div className="shrink-0 w-24">
                  <span className="badge badge-accent">{t.year}</span>
                </div>
                <p className="card-body flex-1 text-[15px]">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INVESTOR FAQ */}
        <section className="section" id="faq">
          <div className="section-label">03 · Investor FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider"></div>

          <div className="grid grid-2 gap-12 mb-16">
            <div className="card">
              <div className="card-title text-xl mb-4">Is this just an LLM wrapper?</div>
              <p className="card-body">
                No. TGM is a distributed cognitive infrastructure. The LLM is one component among six specialised systems. The moat is in the orchestration, memory architecture, and self-correcting pipeline.
              </p>
            </div>
            <div className="card">
              <div className="card-title text-xl mb-4">What can TGM not do today?</div>
              <p className="card-body">
                TGM is optimised for backend and UI-less systems. It does not generate frontends or mobile apps. This is a deliberate scope boundary to ensure production-grade reliability.
              </p>
            </div>
          </div>

          <div className="card-glow p-10">
            <h3 className="card-title text-2xl mb-8">What is the defensibility?</h3>
            <p className="card-body mb-8 text-lg">
              The moat is the full System of Systems — not any single component.
            </p>
            <div className="grid grid-1 gap-6">
              {[
                { n: "01", name: "Obsidian", role: "Handles creative, lateral reasoning that formalises ambiguous intent." },
                { n: "02", name: "Memory System", role: "Maintains long-horizon coherence across tens of thousands of lines." },
                { n: "03", name: "Digital Modelling", role: "Creates queryable digital environments for agents." },
                { n: "04", name: "Cognitive Network", role: "Synthesises complex codebases through hierarchical task decomposition." },
                { n: "05", name: "Procoder", role: "Executes precise modifications using AST-based codegraphs." }
              ].map((item) => (
                <div key={item.n} className="flex gap-4 p-4 rounded-lg bg-[var(--bg3)] border border-[var(--border)]">
                  <span className="font-mono text-[var(--accent)] shrink-0">{item.n}</span>
                  <p className="text-sm"><span className="text-[var(--text)] font-semibold">{item.name}:</span> {item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ASK */}
        <section className="section" id="opportunity">
          <div className="section-label">04 · The Ask</div>
          <h2 className="section-title">TGM is built and tested.</h2>
          <p className="section-desc">The machine works. It needs velocity.</p>
          <div className="divider"></div>
          
          <div className="card max-w-2xl">
            <div className="section-label mb-6">OPPORTUNITY</div>
            <h3 className="card-title text-2xl mb-4">Business / Commercial Co-Founder (CEO-type)</h3>
            <p className="card-body text-lg mb-8">
              Looking for a commercial founder to lead the project to pre-seed funding and make the company viable.
            </p>
            <div className="row mt-12 gap-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg"
              >
                Book a Live Demo
              </a>
              <button
                onClick={handleCopy}
                className="btn btn-outline btn-lg"
              >
                {copied ? "COPIED! ✓" : "EMAIL →"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
