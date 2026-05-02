import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { useState } from "react";

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
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
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
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent text-[var(--foreground)] font-sans">
      <SiteHeader />

      {/* HERO */}
      <section className="relative border-b border-[var(--border)] overflow-hidden pt-[54px]">
        <div className="absolute left-1/3 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--brand)]/10 blur-[160px]" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden">
          <span className="font-mono font-bold text-[clamp(5rem,18vw,16rem)] text-[var(--text-ghost)]/20 leading-none">
            GET
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--brand)] uppercase">
            &gt; GET IN TOUCH
          </span>
          <h1 className="font-serif mt-6 text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[1.0] tracking-tight text-[var(--text)]">
            See it live.
          </h1>
          <div className="mt-10 max-w-2xl border border-[var(--border)] bg-[var(--bg2)]/50 backdrop-blur-md px-8 py-6 rounded-2xl">
            <p className="text-[17px] text-[var(--text-dim)] leading-relaxed">
              Bring your hardest backend challenge. TGM will architect it in front of you — no slides, no smoke.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="bg-[var(--bg1)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">CHANNELS</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="space-y-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 rounded-3xl bg-[var(--bg)] border border-[var(--brand)]/20 hover:border-[var(--brand)]/50 transition-all"
            >
              <div>
                <p className="font-mono text-[10px] tracking-widest text-[var(--brand)] uppercase mb-3">PRIMARY</p>
                <h2 className="font-serif text-2xl text-[var(--text)]">Book a Live Demo</h2>
                <p className="text-[15px] text-[var(--text-dim)] mt-2">Fill out the brief and schedule a technical walkthrough.</p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--brand)] group-hover:text-[var(--text)] transition-colors shrink-0">
                Open Form →
              </span>
            </a>

            <button
              onClick={(e) => handleCopy(e, "general")}
              className="w-full text-left group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 rounded-3xl bg-[var(--bg)] border border-[var(--border)] hover:bg-[var(--bg2)] hover:border-[var(--brand)]/30 transition-all"
            >
              <div>
                <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase mb-3">EMAIL</p>
                <h2 className="font-serif text-2xl text-[var(--text)]">General Inquiries</h2>
                <p className="text-[15px] text-[var(--text-dim)] mt-2">Direct channel for specific questions or pitches.</p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--brand)] shrink-0">
                {copiedId === "general" ? "COPIED! ✓" : "braimahgifted@gmail.com →"}
              </span>
            </button>

            <button
              onClick={(e) => handleCopy(e, "founder")}
              className="w-full text-left group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 rounded-3xl bg-[var(--bg)] border border-[var(--border)] hover:bg-[var(--bg2)] hover:border-[var(--brand)]/30 transition-all"
            >
              <div>
                <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase mb-3">DIRECT MESSAGE</p>
                <h2 className="font-serif text-2xl text-[var(--text)]">Message Founder</h2>
                <p className="text-[15px] text-[var(--text-dim)] mt-2">Send an email directly to my inbox.</p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--brand)] shrink-0">
                {copiedId === "founder" ? "COPIED! ✓" : "Email Founder →"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CO-FOUNDERS */}
      <section className="bg-[var(--bg)] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] bg-[var(--brand)] p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden relative shadow-2xl shadow-[var(--brand)]/20">
            <div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] bg-black/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="max-w-xl">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#1A0E08]/60 uppercase mb-6">
                &gt; OPPORTUNITY
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#1A0E08] leading-tight">
                Looking for a Commercial Co-Founder to lead to pre-seed funding.
              </h2>
              <p className="mt-6 text-[16px] text-[#1A0E08]/80 leading-relaxed">
                TGM is built and tested. I am looking for a CEO-type partner to make the company viable—owning sales, partnerships, fundraising, and strategy.
              </p>
            </div>
            <button
              onClick={(e) => handleCopy(e, "conversation")}
              className="rounded-xl bg-[#1A0E08] px-10 py-5 font-sans text-sm font-bold text-[var(--brand)] shrink-0 transition-all hover:scale-[1.02] hover:shadow-2xl shadow-black/40"
            >
              {copiedId === "conversation" ? "COPIED! ✓" : "START A CONVERSATION →"}
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
