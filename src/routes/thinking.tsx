import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, useMemo } from "react";

export const Route = createFileRoute("/thinking")({
  component: ThinkingPage,
});

const ESSAY = [
  "Hi Chief, my name is Gifted, and I want to take you on a journey to Super-Intelligence.",
  "",
  "Think about termites. A single termite isn't so intelligent; isolated, it behaves quite simply. Yet, when you take multitudes of them, assign specific roles, and give them a structured way to communicate, they build incredibly complex mounds that requires an extreme level of intelligence to build. The intelligence isn't in the termite—it's in the organizational architecture.",
  "",
  "The human brain works exactly the same way. A single neuron isn't intelligent. But arrange millions of them into a specific structure with precise communication rules, and human intelligence emerges.",
  "",
  "Even the Burj Khalifa wasn't built by one super-intelligent entity. No single person had all the domain knowledge required. It took multitudes of humans with different specializations, arranged in a specific organizational architecture, to produce a super-intelligent outcome.",
  "",
  "Chief, after studying these patterns, I realized in December 2024 that Super-Intelligence is an architectural problem.",
  "",
  "I immediately started drafting a conceptual architecture using current AI models. So far, I've built a functional prototype of a \"system of systems\" that demonstrates human-level intelligence in backend software development. I also applied this concept to thinking in LLMs, and I built a thinking machine prototype with extreme depths of creative reasoning that could exceed today's best models.",
  "Right now, the AI industry is pouring billions of dollars into building larger models—essentially building bigger nuclear reactors. Yet, we are using these reactors to power bread toasters.",
  "",
  "We will never realize the ROI on the billions invested in AI until these systems can perform complex tasks with full autonomy and negligible hallucination. How well we can achieve this is determined by how much intelligence we can produce from them, and how much intelligence we can produce is determined by how well we design these cognitive architectures.",
  "",
  "Scaling laws will soon plateau, and open-source alternatives will converge toward state-of-the-art capabilities. The decisive advantage will no longer reside in owning the smartest individual model, but in the cognitive architecture that extracts maximum value (Intelligence) from it.",
  "",
  "This is my quest and my passion: to build the cognitive architectures that will extend the capabilities of AI models until we achieve true super, general intelligence."
];

const ROBOT_SVG = `
<svg class="robot-cursor" id="robot" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <line x1="16" y1="2" x2="16" y2="7" stroke="#F5AD8C" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="16" cy="1.5" r="1.5" fill="#F5AD8C"/>
  <rect x="7" y="7" width="18" height="13" rx="3" fill="#221F1C" stroke="#F5AD8C" stroke-width="1.1"/>
  <rect x="10" y="10.5" width="4" height="4" rx="1" fill="#F5AD8C" style="animation:eyeFlicker 3s ease-in-out infinite"/>
  <rect x="18" y="10.5" width="4" height="4" rx="1" fill="#F5AD8C" style="animation:eyeFlicker 3s ease-in-out infinite .18s"/>
  <rect x="12.5" y="17.5" width="7" height="1.2" rx="0.6" fill="#F5AD8C" opacity="0.4"/>
  <rect x="10" y="21" width="12" height="7" rx="2" fill="#221F1C" stroke="#F5AD8C" stroke-width="1" opacity="0.6"/>
  <line x1="10" y1="23" x2="3.5" y2="26.5" stroke="#F5AD8C" stroke-width="1.3" stroke-linecap="round"/>
  <line x1="22" y1="23" x2="28.5" y2="26.5" stroke="#F5AD8C" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="3" cy="27" r="1.3" fill="#F5AD8C" opacity="0.7"/>
  <circle cx="29" cy="27" r="1.3" fill="#F5AD8C" opacity="0.7"/>
</svg>
`;

type Segment = { type: "char"; ch: string } | { type: "newline" } | { type: "break" };

function ThinkingPage() {
  const [typedSegments, setTypedSegments] = useState<Segment[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const essayBoxRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);

  const segments = useMemo(() => {
    const segs: Segment[] = [];
    for (let li = 0; li < ESSAY.length; li++) {
      const line = ESSAY[li];
      if (line === "") {
        segs.push({ type: "break" });
      } else {
        for (let ci = 0; ci < line.length; ci++) {
          segs.push({ type: "char", ch: line[ci] });
        }
      }
    }
    return segs;
  }, []);

  const getDelay = (seg: Segment | undefined) => {
    if (!seg) return 60;
    if (seg.type === "break") return 1000 + Math.random() * 500; // Deep pause between paragraphs
    if (seg.type === "newline") return 200 + Math.random() * 150; // Pause at line ends

    const c = seg.ch;
    // Sentence endings deserve a thoughtful pause
    if (c === "." || c === "?" || c === "!") return 700 + Math.random() * 500;
    // Commas and other punctuation provide a rhythmic break
    if (c === ",") return 350 + Math.random() * 200;
    if (c === ";" || c === ":") return 450 + Math.random() * 200;
    if (c === "—") return 500 + Math.random() * 200;
    // Spaces between words
    if (c === " ") return 80 + Math.random() * 100;

    // Base character speed with natural jitter
    return 40 + Math.random() * 60;
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typeNext = () => {
      if (idxRef.current >= segments.length) {
        setIsDone(true);
        setTimeout(() => {
          if (essayBoxRef.current) {
            essayBoxRef.current.scrollTo({ top: 0, behavior: "smooth" });
          }
          setTimeout(() => setShowScrollHint(true), 900);
        }, 350);
        return;
      }

      const nextSeg = segments[idxRef.current];
      setTypedSegments((prev) => [...prev, nextSeg]);
      idxRef.current++;

      timeoutId = setTimeout(typeNext, getDelay(segments[idxRef.current]));
    };

    const startTimeout = setTimeout(() => {
      typeNext();
    }, 1050);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [segments]);

  useEffect(() => {
    if (essayBoxRef.current && !isDone) {
      essayBoxRef.current.scrollTop = essayBoxRef.current.scrollHeight;
    }
  }, [typedSegments, isDone]);

  const handleScroll = () => {
    setShowScrollHint(false);
  };

  return (
    <div className="thinking-page-root">
      <style>{`
        .thinking-page-root {
          --bg: #1A1714;
          --accent: #D97757;
          --text: #F5AD8C;
          --text-muted: #7A6E66;
          --border: rgba(245, 173, 140, 0.1);
          
          width: 100vw;
          height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: 'Share Tech Mono', monospace;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .thinking-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .thinking-page-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 45% at 50% 55%, rgba(217, 119, 87, 0.055) 0%, transparent 65%),
            radial-gradient(ellipse 70% 50% at 15% 85%, rgba(217, 119, 87, 0.025) 0%, transparent 55%);
          pointer-events: none;
          z-index: 0;
        }

        .thinking-page-root::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 44px 44px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
        }

        .essay-box {
          position: relative;
          z-index: 1;
          width: 40vw;
          height: 40vh;
          overflow-y: hidden;
          overflow-x: hidden;
          -webkit-mask-image: linear-gradient(to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.1) 5%,
              rgba(0, 0, 0, 0.55) 11%,
              black 20%,
              black 100%);
          mask-image: linear-gradient(to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.1) 5%,
              rgba(0, 0, 0, 0.55) 11%,
              black 20%,
              black 100%);
          scroll-behavior: smooth;
          animation: fadeIn 0.7s ease both 0.15s;
        }

        .essay-box::-webkit-scrollbar {
          width: 3px;
        }

        .essay-box::-webkit-scrollbar-track {
          background: transparent;
        }

        .essay-box::-webkit-scrollbar-thumb {
          background: rgba(245, 173, 140, 0.22);
          border-radius: 2px;
        }

        .essay-inner {
          width: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 0.5rem;
        }

        .essay-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(0.75rem, 1.5vw, 1rem);
          line-height: 1.95;
          color: var(--text);
          text-align: left;
          letter-spacing: 0.05em;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          word-break: normal;
        }

        .essay-box.done {
          overflow-y: auto;
        }

        .essay-box.done .essay-inner {
          justify-content: flex-start;
          padding-top: 16%;
        }

        .para-break {
          display: block;
          height: 1.1em;
        }

        /* ── Robot ── */
        .robot-cursor {
          display: inline-block;
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin-left: 3px;
          position: relative;
          top: -2px;
          animation: robotBob 0.11s ease-in-out infinite alternate;
        }

        .robot-cursor.idle {
          animation: robotIdle 1.8s ease-in-out infinite alternate !important;
        }

        /* ── Scroll hint ── */
        .scroll-hint {
          position: fixed;
          bottom: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 10;
          pointer-events: none;
          white-space: nowrap;
        }

        .scroll-hint.visible {
          opacity: 0.5;
        }

        .scroll-hint svg {
          animation: bounceDown 1.5s ease-in-out infinite;
        }

        /* ── Animations ── */
        @keyframes robotBob {
          from {
            transform: translateY(0px) rotate(-1.5deg) scale(1);
          }
          to {
            transform: translateY(-3px) rotate(1.5deg) scale(1.04);
          }
        }

        @keyframes robotIdle {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(-2px) rotate(0deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }

        @keyframes eyeFlicker {
          0%, 91%, 100% {
            opacity: 0.9;
          }
          93%, 97% {
            opacity: 0.15;
          }
        }

        @media (max-width: 480px) {
          .essay-box {
            width: 88vw;
            height: 58vh;
          }
          .essay-text {
            font-size: 0.76rem;
            line-height: 1.8;
            letter-spacing: 0.025em;
          }
          .robot-cursor {
            width: 18px;
            height: 18px;
          }
          .scroll-hint {
            font-size: 9px;
            bottom: 0.8rem;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .essay-box {
            width: 72vw;
            height: 52vh;
          }
          .essay-text {
            font-size: 0.82rem;
            line-height: 1.88;
          }
          .robot-cursor {
            width: 21px;
            height: 21px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .essay-box {
            width: 58vw;
            height: 46vh;
          }
          .essay-text {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 1400px) {
          .essay-box {
            width: 36vw;
            height: 40vh;
          }
          .essay-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <main className="thinking-content">
        <div
          className={`essay-box ${isDone ? 'done' : ''}`}
          id="essay-box"
          ref={essayBoxRef}
          onScroll={handleScroll}
        >
          <div className="essay-inner" id="essay-inner">
            <div className="essay-text" id="essay-text" aria-live="polite">
              {typedSegments.map((seg, i) => {
                if (seg.type === "char") {
                  return seg.ch;
                } else if (seg.type === "newline") {
                  return <br key={i} />;
                } else if (seg.type === "break") {
                  return <span key={i} className="para-break" />;
                }
                return null;
              })}<span
                className={`robot-cursor ${isDone ? "idle" : ""}`}
                dangerouslySetInnerHTML={{ __html: ROBOT_SVG }}
                style={{ display: "inline-block" }}
              />
            </div>
          </div>
        </div>

        <div className={`scroll-hint ${showScrollHint ? 'visible' : ''}`} id="scroll-hint">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 3L5 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          scroll to read
        </div>
      </main>
    </div>
  );
}
