import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { useState, useRef, useEffect, useMemo } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — The Genesis Machine" },
      {
        name: "description",
        content: "Audit the raw output of TGM. Production-grade backends generated, compiled, tested, and documented autonomously from a single prompt.",
      },
    ],
  }),
  component: Portfolio,
});

const projectData = [
  {
    title: "Ecommerce-Backend",
    tag: "Microservices",
    year: "2024",
    desc: "A massive, production-grade e-commerce backend architected with over 190 files and 20,000+ lines of code. Features complex inventory management, auth, and payment gateways.",
    stack: ["PostgreSQL", "Auth", "Payments", "Node.js"],
    github: "https://github.com/Gifted87/Ecommerce-Backend",
    aiLink: "https://gemini.google.com/share/bc39cfeb166a",
    ai: "The Ecommerce-Backend is a system-level generation showing TGM's ability to handle high complexity. It manages distributed transactions, data consistency across microservices, and robust error recovery.",
    gradient: "linear-gradient(135deg, #1E0E00 0%, #3D2000 40%, #2A1500 65%, #4A2800 100%)",
    pattern: "dots"
  },
  {
    title: "Fraud-Detection-Engine",
    tag: "Distributed Systems",
    year: "2024",
    desc: "Real-time financial fraud detection using Event Sourcing and CQRS patterns. Handles high-throughput transaction streams with surgical precision.",
    stack: ["Event Sourcing", "CQRS", "Distributed", "Real-time"],
    github: "https://github.com/Gifted87/fraud-detection-engine",
    aiLink: "https://gemini.google.com/share/0a6fd7867377",
    ai: "This engine demonstrates TGM's mastery of advanced architectural patterns. It uses an immutable event store for auditability and separate read/write models for extreme performance under load.",
    gradient: "linear-gradient(135deg, #0A1A0E 0%, #1A3A20 40%, #0D2210 65%, #1E4025 100%)",
    pattern: "grid"
  },
  {
    title: "URL-Shortener",
    tag: "Microservice",
    year: "2024",
    desc: "A high-performance URL shortening service with Redis-backed caching and high-fidelity analytics tracking. Built for global scale.",
    stack: ["Redis", "REST", "Microservice", "Go"],
    github: "https://github.com/Gifted87/Url-Shortener-Microservice",
    aiLink: "https://gemini.google.com/share/b8e28e34ac1c",
    ai: "VisionAPI is a unified gateway to 12+ computer vision models. A single REST or gRPC call routes to the optimal model for a task — object detection, OCR, semantic segmentation, or monocular depth estimation.",
    gradient: "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 40%, #0E2A3D 65%, #1C3F5E 100%)",
    pattern: "lines"
  },
  {
    title: "Calculator-Microservice",
    tag: "API Services",
    year: "2023",
    desc: "A hardened gRPC-based calculator microservice demonstrating AST-level forensics and surgical refinement in mathematical operations.",
    stack: ["gRPC", "Tests", "Microservice", "Rust"],
    github: "https://github.com/Gifted87/Calculator-Microservice",
    aiLink: "https://gemini.google.com/share/22a7a8fde36d",
    ai: "A robust demonstration of TGM's micro-architectural capabilities. Every mathematical operation is validated by exhaustive test suites generated alongside the implementation.",
    gradient: "linear-gradient(135deg, #1A0010 0%, #3A0025 40%, #250018 65%, #420030 100%)",
    pattern: "waves"
  }
];

const patterns = {
  dots: `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><circle cx='12' cy='12' r='1.5' fill='rgba(245,173,140,0.12)'/></svg>`,
  grid: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><path d='M0 0h32v32' fill='none' stroke='rgba(245,173,140,0.1)' stroke-width='0.5'/><path d='M0 16h32M16 0v32' stroke='rgba(245,173,140,0.07)' stroke-width='0.5' fill='none'/></svg>`,
  lines: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 20h40M20 0v40' stroke='rgba(245,173,140,0.08)' stroke-width='0.5' fill='none'/></svg>`,
  waves: `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='20'><path d='M0 10 Q15 0 30 10 Q45 20 60 10' stroke='rgba(245,173,140,0.1)' stroke-width='0.7' fill='none'/></svg>`,
};

function Portfolio() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{role: string, text: string, suggestions?: string[]}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const total = projectData.length;

  const goTo = (i: number) => {
    setActive(Math.max(0, Math.min(total - 1, i)));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(active - 1);
      if (e.key === "ArrowRight") goTo(active + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  const openAI = (index: number) => {
    const p = projectData[index];
    setChatHistory([
      { 
        role: "assistant", 
        text: `Hi! I can tell you all about **${p.title}**. What would you like to know?`,
        suggestions: ["How does it work?", "What problem does it solve?", "Tech stack deep-dive"]
      }
    ]);
    setModalOpen(true);
  };

  const sendAI = (input: string) => {
    if (!input.trim()) return;
    
    setChatHistory(prev => [...prev, { role: "user", text: input }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const p = projectData[active];
      let response = `Great question about ${p.title}! ${p.ai}`;
      setChatHistory(prev => [...prev, { role: "assistant", text: response }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-transparent">
      <SiteHeader />
      
      <main className="main">
        <section className="section" id="intro">
          <div className="section-label">01 · Portfolio</div>
          <h1 className="section-title">Systems I've Architected</h1>
          <p className="section-desc">
            A collection of production-grade backends, autonomous agents, and cognitive architectures.
          </p>
          <div className="divider"></div>

          <div className="carousel-outer flex flex-col items-center gap-12">
            <div className="carousel-viewport relative overflow-hidden w-full max-w-[100%] py-10" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)' }}>
              <div 
                ref={trackRef}
                className="carousel-track flex gap-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ 
                  transform: `translateX(calc(50% - 185px - ${active * (370 + 32)}px))` 
                }}
              >
                {projectData.map((p, i) => {
                  const diff = Math.abs(i - active);
                  return (
                    <div 
                      key={p.title}
                      onClick={() => goTo(i)}
                      className={`card shrink-0 w-[370px] h-[520px] flex flex-col cursor-pointer transition-all duration-500 ${diff === 0 ? 'opacity-100 scale-100' : 'opacity-20 scale-[0.9] pointer-events-none'}`}
                    >
                      <div className="flex-[0_0_40%] relative rounded-t-lg overflow-hidden mb-6" style={{ background: p.gradient, backgroundImage: `${p.gradient}, url("data:image/svg+xml,${encodeURIComponent(patterns[p.pattern as keyof typeof patterns])}")` }}>
                        <span className="absolute top-4 left-4 badge badge-accent">{p.tag}</span>
                        <span className="absolute top-4 right-4 badge badge-muted">{p.year}</span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="card-title text-xl mb-4">{p.title}</h3>
                        <p className="card-body mb-6 line-clamp-4">{p.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.stack.map(s => <span key={s} className="badge badge-muted lowercase">{s}</span>)}
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--border)]">
                          <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                            GitHub ↗
                          </a>
                          <button onClick={() => openAI(i)} className="btn btn-primary btn-sm">
                            Ask AI
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-8">
              <button onClick={() => goTo(active - 1)} disabled={active === 0} className="btn btn-outline btn-icon p-3 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
              <div className="flex gap-2">
                {projectData.map((_, i) => (
                  <div key={i} onClick={() => goTo(i)} className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'bg-[var(--accent)] w-6' : 'bg-[var(--muted2)] w-2'}`} />
                ))}
              </div>
              <button onClick={() => goTo(active + 1)} disabled={active === total - 1} className="btn btn-outline btn-icon p-3 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── AI MODAL ── */}
      <div className={`modal-backdrop ${modalOpen ? 'open' : ''}`} onClick={() => setModalOpen(false)}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title">Learn about {projectData[active].title}</div>
            <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
          </div>
          <div className="modal-body flex flex-col gap-6 max-h-[400px] overflow-y-auto">
            {chatHistory.map((chat, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className={`p-4 rounded-xl text-[13px] leading-relaxed ${chat.role === 'assistant' ? 'bg-[var(--bg3)] text-[var(--text)] self-start' : 'bg-[var(--accent)] text-[#1A0E08] self-end'}`}>
                  {chat.text}
                </div>
                {chat.suggestions && (
                  <div className="flex flex-wrap gap-2">
                    {chat.suggestions.map(s => (
                      <button key={s} onClick={() => sendAI(s)} className="btn btn-ghost btn-xs border border-[var(--border)]">
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && <div className="text-[var(--muted)] italic animate-pulse">Analysing system architecture...</div>}
          </div>
          <div className="modal-footer">
            <input 
              className="input flex-1" 
              placeholder="Ask about this project..."
              onKeyDown={e => { if (e.key === 'Enter') { sendAI((e.target as HTMLInputElement).value); (e.target as HTMLInputElement).value = ''; } }}
            />
            <button className="btn btn-primary" onClick={(e) => { 
              const input = (e.currentTarget.previousSibling as HTMLInputElement);
              sendAI(input.value);
              input.value = '';
            }}>Send</button>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
