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
        suggestions: ["How does it work?", "What problem does it solve?", "What was the hardest part?", "Tech stack deep-dive"]
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
      let response = `Great question about ${p.title}! ${p.ai} Is there a specific aspect you'd like to dig into further?`;
      
      const q = input.toLowerCase();
      if (q.includes("work") || q.includes("how")) {
        response = `${p.title} works by ${p.ai} The architecture prioritises low latency and developer ergonomics.`;
      } else if (q.includes("problem") || q.includes("solve") || q.includes("why")) {
        response = `The core problem ${p.title} solves is making ${p.tag.toLowerCase()} more accessible to teams without specialised infrastructure expertise. ${p.ai}`;
      } else if (q.includes("hard") || q.includes("challenge") || q.includes("difficult")) {
        response = `The toughest engineering challenge was building a reliable real-time feedback loop while keeping consistency across distributed systems. We had to rethink the data model three times before it clicked.`;
      } else if (q.includes("stack") || q.includes("tech") || q.includes("build") || q.includes("built")) {
        response = `${p.title} is built with **${p.stack.join(", ")}**. Each was chosen deliberately for core compute performance and API surface.`;
      }
      
      setChatHistory(prev => [...prev, { role: "assistant", text: response }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans flex flex-col items-center justify-center pt-20">
      <SiteHeader />
      
      {/* Atmosphere Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 50% 50%, rgba(217,119,87,0.06) 0%, transparent 65%),
              radial-gradient(ellipse 40% 35% at 15% 20%, rgba(91,155,213,0.04) 0%, transparent 55%),
              radial-gradient(ellipse 35% 30% at 85% 80%, rgba(109,184,138,0.03) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="page-header text-center mb-10 z-10 animate-fade-up">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] mb-2">Selected work · 2022 – 2024</div>
        <h1 className="font-serif text-[clamp(24px,4vw,38px)] text-[var(--text)] leading-tight mb-2">Systems I've Architected</h1>
        <p className="text-[13px] text-[var(--muted)] max-w-[380px] mx-auto leading-relaxed">
          A collection of production-grade backends, autonomous agents, and cognitive architectures.
        </p>
      </div>

      <div className="carousel-outer relative z-10 flex flex-col items-center gap-8 animate-fade-up">
        <div className="carousel-viewport relative overflow-hidden w-[calc(370px*2+28px*2+24px)] max-w-[98vw]" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)' }}>
          <div 
            ref={trackRef}
            className="carousel-track flex gap-[28px] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] py-5 px-1"
            style={{ 
              transform: `translateX(${ (active * -398) + ( (typeof window !== 'undefined' ? window.innerWidth : 1200) / 2 - 185 - (typeof window !== 'undefined' ? (window.innerWidth > 780 ? 0 : 0) : 0) ) }px)` 
            }}
          >
            {projectData.map((p, i) => {
              const diff = Math.abs(i - active);
              return (
                <div 
                  key={p.title}
                  onClick={() => goTo(i)}
                  className={`card shrink-0 w-[370px] h-[530px] rounded-[18px] overflow-hidden border border-[var(--border)] bg-[var(--bg2)] flex flex-col cursor-pointer transition-all duration-500 ${diff === 0 ? 'opacity-100 scale-100 border-[var(--border2)] shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_60px_rgba(217,119,87,0.07)]' : diff === 1 ? 'opacity-40 scale-[0.96]' : 'opacity-10 scale-[0.93]'}`}
                >
                  <div className="card-image flex-[0_0_40%] relative bg-cover bg-center overflow-hidden" style={{ background: p.gradient, backgroundImage: `${p.gradient}, url("data:image/svg+xml,${encodeURIComponent(patterns[p.pattern as keyof typeof patterns])}")` }}>
                    <span className="absolute top-4 left-4 z-10 font-mono text-[9px] tracking-widest uppercase py-1 px-2.5 rounded-full bg-[#111009]/65 backdrop-blur-md border border-[var(--text)/20] text-[var(--text2)]">{p.tag}</span>
                    <span className="absolute top-4 right-4 z-10 font-mono text-[9px] tracking-[0.08em] text-[var(--muted)] py-1 px-2.5 rounded-full bg-[#111009]/55 backdrop-blur-md border border-[var(--border)]">{p.year}</span>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg2)] opacity-80" />
                  </div>
                  <div className="card-body flex-1 p-5 flex flex-col gap-3">
                    <div className="font-serif text-[19px] text-[var(--text)] leading-tight">{p.title}</div>
                    <div className="text-[12.5px] text-[var(--muted)] leading-relaxed flex-1 overflow-hidden line-clamp-3">{p.desc}</div>
                    <div className="card-stack flex flex-wrap gap-1.5">
                      {p.stack.map(s => <span key={s} className="font-mono text-[9px] tracking-wider uppercase py-1 px-2.5 rounded-full bg-[var(--bg3)] border border-[var(--muted2)] text-[var(--muted)]">{s}</span>)}
                    </div>
                    <div className="h-px bg-[var(--border)]" />
                    <div className="flex items-center justify-between gap-2">
                      <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11.5px] font-medium text-[var(--muted)] border border-[var(--border)] bg-[var(--bg3)] px-3 py-1.5 rounded-lg hover:text-[var(--text)] transition-colors">
                        GitHub ↗
                      </a>
                      <button onClick={() => openAI(i)} className="flex items-center gap-1.5 text-[11.5px] font-medium text-[var(--accent)] border border-[var(--accent)/30] bg-[var(--accent)/10] px-3 py-1.5 rounded-lg hover:bg-[var(--accent)/20] transition-all">
                        Ask AI
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-nav flex items-center gap-6">
          <button onClick={() => goTo(active - 1)} disabled={active === 0} className="nav-btn w-11 h-11 rounded-full border border-[var(--border2)] bg-[var(--bg2)] text-[var(--muted)] flex items-center justify-center hover:enabled:text-[var(--text)] hover:enabled:border-[var(--accent)] hover:enabled:bg-[var(--accent)/8] disabled:opacity-20 transition-all">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="dots flex gap-2">
            {projectData.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} className={`dot h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'bg-[var(--accent)] w-5' : 'bg-[var(--muted2)] w-1.5'}`} />
            ))}
          </div>
          <button onClick={() => goTo(active + 1)} disabled={active === total - 1} className="nav-btn w-11 h-11 rounded-full border border-[var(--border2)] bg-[var(--bg2)] text-[var(--muted)] flex items-center justify-center hover:enabled:text-[var(--text)] hover:enabled:border-[var(--accent)] hover:enabled:bg-[var(--accent)/8] disabled:opacity-20 transition-all">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="ai-modal-backdrop fixed inset-0 bg-[#080705]/80 backdrop-blur-md z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setModalOpen(false)}>
          <div className="ai-modal bg-[var(--bg1)] border border-[var(--border2)] rounded-[20px] shadow-[0_32px_80px_rgba(0,0,0,0.7)] w-full max-w-[480px] max-height-[78vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="ai-modal-header p-4 border-b border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)/12] border border-[var(--accent)/25] flex items-center justify-center text-[var(--accent)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="font-serif text-[15px] text-[var(--text)]">Learn about {projectData[active].title}</div>
                  <div className="text-[11px] text-[var(--muted)]">Powered by TGM · Ask anything</div>
                </div>
              </div>
              <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-lg bg-[var(--bg3)] border border-[var(--border)] text-[var(--muted)] flex items-center justify-center hover:text-[var(--text)] transition-colors">
                ✕
              </button>
            </div>
            <div className="ai-chat-area flex-1 overflow-y-auto p-5 flex flex-col gap-4 min-h-[300px]">
              {chatHistory.map((chat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className={`ai-bubble max-w-[88%] p-3 rounded-[14px] text-[13px] leading-relaxed ${chat.role === 'assistant' ? 'bg-[var(--bg3)] border border-[var(--border)] text-[var(--text2)] self-start rounded-tl-[4px]' : 'bg-[var(--accent)/12] border border-[var(--accent)/22] text-[var(--text)] self-end rounded-tr-[4px]'}`}>
                    {chat.text}
                  </div>
                  {chat.suggestions && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {chat.suggestions.map(s => (
                        <button key={s} onClick={() => sendAI(s)} className="text-[11px] text-[var(--muted)] bg-[var(--bg2)] border border-[var(--border)] rounded-full px-3 py-1 hover:text-[var(--text)] transition-colors">
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="ai-bubble bg-[var(--bg3)] border border-[var(--border)] text-[var(--text2)] self-start rounded-[14px] rounded-tl-[4px] p-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
            </div>
            <div className="ai-input-area p-4 border-t border-[var(--border)] flex gap-2 items-center">
              <input 
                className="flex-1 bg-[var(--bg3)] border border-[var(--border2)] rounded-xl px-4 py-2 text-[13px] outline-none focus:border-[var(--accent)] transition-colors" 
                placeholder="Ask about this project..."
                onKeyDown={e => { if (e.key === 'Enter') sendAI((e.target as HTMLInputElement).value); (e.target as HTMLInputElement).value = ''; }}
              />
              <button className="w-9 h-9 rounded-lg bg-[var(--accent)] flex items-center justify-center text-[#1A0E08]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M13.5 7.5L2 2l2.5 5.5L2 13l11.5-5.5Z" fill="currentColor"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="scroll-hint fixed bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest uppercase text-[var(--text-ghost)] flex items-center gap-2 pointer-events-none opacity-50">
        Use arrow keys or swipe
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>

      <SiteFooter />
    </div>
  );
}
