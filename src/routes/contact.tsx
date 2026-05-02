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
    <div className="min-h-screen bg-transparent">
      <SiteHeader />

      <main className="main">
        {/* HERO */}
        <section className="section" id="hero">
          <div className="section-label">01 · Contact</div>
          <h1 className="section-title">See it live.</h1>
          <p className="section-desc">
            Bring your hardest backend challenge. TGM will architect it in front of you — no slides, no smoke.
          </p>
          <div className="divider"></div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="section" id="channels">
          <div className="section-label">02 · Channels</div>
          <div className="grid grid-1 gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="card-glow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 group"
            >
              <div>
                <span className="badge badge-accent mb-4">Primary</span>
                <h2 className="card-title text-2xl">Book a Live Demo</h2>
                <p className="card-body mt-2">Fill out the brief and schedule a technical walkthrough.</p>
              </div>
              <span className="btn btn-primary group-hover:scale-105 transition-transform">
                Open Form →
              </span>
            </a>

            <button
              onClick={(e) => handleCopy(e, "general")}
              className="card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 text-left w-full"
            >
              <div>
                <span className="badge badge-muted mb-4">Email</span>
                <h2 className="card-title text-2xl">General Inquiries</h2>
                <p className="card-body mt-2">Direct channel for specific questions or pitches.</p>
              </div>
              <span className="btn btn-outline">
                {copiedId === "general" ? "COPIED! ✓" : "Email Inquiries →"}
              </span>
            </button>

            <button
              onClick={(e) => handleCopy(e, "founder")}
              className="card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-10 text-left w-full"
            >
              <div>
                <span className="badge badge-muted mb-4">Direct Message</span>
                <h2 className="card-title text-2xl">Message Founder</h2>
                <p className="card-body mt-2">Send an email directly to my inbox.</p>
              </div>
              <span className="btn btn-outline">
                {copiedId === "founder" ? "COPIED! ✓" : "Email Founder →"}
              </span>
            </button>
          </div>
        </section>

        {/* CO-FOUNDERS */}
        <section className="section" id="opportunity">
          <div className="section-label">03 · Opportunity</div>
          <div className="card bg-[var(--accent)] text-[#1A0E08] p-12 md:p-16 border-none shadow-2xl shadow-[var(--accent)]/20">
            <div className="max-w-2xl">
              <span className="badge badge-muted bg-[#1A0E08]/10 border-none text-[#1A0E08]/60 mb-6">OPPORTUNITY</span>
              <h2 className="card-title text-3xl md:text-4xl text-[#1A0E08] mb-6">
                Looking for a Commercial Co-Founder.
              </h2>
              <p className="card-body text-[#1A0E08]/80 text-lg">
                TGM is built and tested. I am looking for a CEO-type partner to make the company viable—owning sales, partnerships, fundraising, and strategy.
              </p>
              <button
                onClick={(e) => handleCopy(e, "conversation")}
                className="btn btn-primary bg-[#1A0E08] text-[var(--accent)] border-none mt-10 btn-lg"
              >
                {copiedId === "conversation" ? "COPIED! ✓" : "START A CONVERSATION →"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
