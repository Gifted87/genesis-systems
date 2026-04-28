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
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="scanline-overlay relative border-b border-white/10 overflow-hidden">
        <div className="absolute left-1/3 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[160px]" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden">
          <span className="font-mono font-bold text-[clamp(5rem,18vw,16rem)] text-white/[0.025] leading-none">
            GET
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand uppercase">
            &gt; GET IN TOUCH
          </span>
          <h1 className="font-mono mt-4 text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[1.0] tracking-tight">
            See it live.
          </h1>
          <div className="mt-8 max-w-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
            <p className="font-mono text-base text-muted-foreground leading-relaxed">
              Bring your hardest backend challenge. TGM will architect it in front of you — no slides, no smoke.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS — full-width rows */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">CHANNELS</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              id="contact-form"
              className="row-item group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-8 bg-brand/5 border-l-brand"
            >
              <div>
                <p className="font-mono text-[9px] tracking-widest text-brand uppercase mb-1">PRIMARY</p>
                <h2 className="font-mono text-lg font-semibold text-foreground">Book a Live Demo</h2>
                <p className="text-sm text-muted-foreground mt-1">Fill out the brief and schedule a technical walkthrough.</p>
              </div>
              <span className="font-mono text-sm text-brand group-hover:underline shrink-0">
                Open Form →
              </span>
            </a>

            <button
              onClick={(e) => handleCopy(e, "general")}
              id="contact-email"
              className="w-full text-left row-item group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-8"
            >
              <div>
                <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase mb-1">EMAIL</p>
                <h2 className="font-mono text-lg font-semibold text-foreground">General Inquiries</h2>
                <p className="text-sm text-muted-foreground mt-1">Direct channel for specific questions or pitches.</p>
              </div>
              <span className="font-mono text-sm text-brand group-hover:underline shrink-0">
                {copiedId === "general" ? "COPIED! ✓" : "braimahgifted@gmail.com →"}
              </span>
            </button>

            <button
              onClick={(e) => handleCopy(e, "founder")}
              id="contact-direct-email"
              className="w-full text-left row-item group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-8"
            >
              <div>
                <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase mb-1">DIRECT MESSAGE</p>
                <h2 className="font-mono text-lg font-semibold text-foreground">Message Founder</h2>
                <p className="text-sm text-muted-foreground mt-1">Send an email directly to my inbox.</p>
              </div>
              <span className="font-mono text-sm text-brand group-hover:underline shrink-0">
                {copiedId === "founder" ? "COPIED! ✓" : "Email Founder →"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* INVESTORS — cyan inverted block */}
      <section className="bg-brand">
        <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-brand-foreground/60 uppercase mb-2">
              &gt; CO-FOUNDERS
            </p>
            <h2 className="font-mono text-2xl md:text-3xl font-semibold text-brand-foreground">
              Looking for a Business Co-Founder<br />to lead to pre-seed funding.
            </h2>
            <p className="mt-3 text-sm text-brand-foreground/70 max-w-md">
              TGM is built and tested. I am looking for a CEO-type partner to make the company viable—owning sales, partnerships, fundraising, and strategy.
            </p>
          </div>
          <button
            onClick={(e) => handleCopy(e, "conversation")}
            id="contact-investor"
            className="font-mono text-[11px] tracking-[0.2em] uppercase font-semibold bg-brand-foreground text-brand px-8 py-3 shrink-0 hover:bg-white transition-colors shadow-[3px_3px_0_oklch(0_0_0/0.3)]"
          >
            {copiedId === "conversation" ? "COPIED! ✓" : "START A CONVERSATION →"}
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
