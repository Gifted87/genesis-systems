import { useState, useEffect } from "react";

const TERMINAL_LINES = [
  { text: "gifted@CYBERSPACE:~$ python3 ovan.py \"Build me a URL Shotener service\"", delay: 1000, type: "command", isTyping: true },
  { text: "[OVAN] Changing to ACN directory: /home/gifted/acn", delay: 1200, type: "system" },
  { text: "[OVAN] Starting Phase 1: ACN Genesis", delay: 400, type: "system" },
  { text: "[OVAN] Task: Build me a URL Shotener service", delay: 200, type: "system" },
  { text: "=== ACN GENESIS ===", delay: 800, type: "header" },
  { text: "Task: Build me a URL Shotener service", delay: 200, type: "info" },
  { text: "Core infrastructure initialized.", delay: 600, type: "info" },
  { text: "Spawning Root Node...", delay: 1000, type: "info" },
  { text: "📋 Applying specification fidelity mode for all tasks (6 words)", delay: 1200, type: "info" },
  { text: "✓ Child Node spawned: #PID<0.872.0>", delay: 600, type: "success" },
  { text: "✓ Governance initialized for root (Controller: #PID<0.874.0>)", delay: 500, type: "success" },
  { text: "live_wire: Active (#PID<0.879.0>)", delay: 250, type: "info" },
  { text: "messenger: Active (#PID<0.877.0>)", delay: 250, type: "info" },
  { text: "task_manager: Active (#PID<0.875.0>)", delay: 250, type: "info" },
  { text: "actuator: Active (#PID<0.876.0>)", delay: 250, type: "info" },
  { text: "✓ Root Node initialized", delay: 1000, type: "success" },
  { text: "✓ Genesis complete. The organism is alive.", delay: 1200, type: "success" },
  { text: "", delay: 200, type: "empty" },
  { text: "Dashboard: http://172.20.68.58:5051", delay: 500, type: "link" },
  { text: "Node ID: root", delay: 200, type: "info" },
  { text: "Press Ctrl+C to stop.", delay: 200, type: "warning" },
  { text: "05:55:29.369 [warning] CMS Query Network Error: %Mint.TransportError{reason: :timeout}. Proceeding without wisdom.", delay: 2500, type: "warning" },
  { text: "", delay: 400, type: "empty" },
  { text: "🟢 [Gemini Input] ================================================", delay: 1800, type: "header2" },
  { text: "Model: gemini-3.1-flash-lite-preview", delay: 300, type: "info" },
  { text: "Endpoint: Google Gemini API", delay: 200, type: "info" },
  { text: "✅ Function Calling Enabled: 1 tools (set_node_identity)", delay: 500, type: "success" },
  { text: "--- Messages Sent (1) ---", delay: 300, type: "info" },
  { text: "[USER]: STRICT BRAIN: You are the Dimensional Classifier of the ACN Lattice.", delay: 800, type: "user" },
  { text: "Your ONLY output must be a tool call to `set_node_identity`.", delay: 400, type: "user" },
  { text: "You must provide the `identity` (LEAF/INTERMEDIATE) and the `path` (the directory where the task is anch...", delay: 600, type: "user" }
];

export function TerminalAnimation() {
  const [lines, setLines] = useState<{ text: string; type: string; isTyping?: boolean; currentText?: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= TERMINAL_LINES.length) {
      const resetTimeout = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 5000); // Wait 5 seconds before repeating
      return () => clearTimeout(resetTimeout);
    }

    const lineDef = TERMINAL_LINES[currentIndex];

    if (lineDef.isTyping) {
      // Simulate typing effect
      let charIndex = 0;
      setLines((prev) => [...prev, { text: lineDef.text, type: lineDef.type, isTyping: true, currentText: "" }]);
      
      const typeInterval = setInterval(() => {
        charIndex++;
        setLines((prev) => {
          const newLines = [...prev];
          newLines[newLines.length - 1].currentText = lineDef.text.slice(0, charIndex);
          return newLines;
        });

        if (charIndex >= lineDef.text.length) {
          clearInterval(typeInterval);
          setTimeout(() => setCurrentIndex((prev) => prev + 1), lineDef.delay);
        }
      }, 80); // 80ms per character

      return () => clearInterval(typeInterval);
    } else {
      // Show line at once after delay
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, { text: lineDef.text, type: lineDef.type }]);
        setCurrentIndex((prev) => prev + 1);
      }, lineDef.delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const getColorClass = (type: string) => {
    switch (type) {
      case "command": return "text-foreground";
      case "system": return "text-brand/80";
      case "header": return "text-brand font-bold";
      case "header2": return "text-green-400 font-bold";
      case "info": return "text-muted-foreground";
      case "success": return "text-green-500";
      case "warning": return "text-yellow-500";
      case "link": return "text-blue-400 underline";
      case "user": return "text-purple-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="w-full max-w-3xl mt-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur-[20px] shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        <div className="ml-2 text-[10px] tracking-widest text-muted-foreground/50 uppercase">ovan_orchestrator</div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 md:p-6 min-h-[400px] text-left overflow-x-auto whitespace-pre-wrap">
        {lines.map((line, i) => (
          <div key={i} className={`leading-relaxed ${getColorClass(line.type)}`}>
            {line.isTyping && i === lines.length - 1 ? (
              <span>
                <span className="text-green-400">gifted@CYBERSPACE:~$ </span>
                {line.currentText?.replace("gifted@CYBERSPACE:~$ ", "")}
                <span className="animate-pulse bg-white/50 w-2 h-4 inline-block ml-1 align-middle" />
              </span>
            ) : line.type === "command" ? (
               <span>
                <span className="text-green-400">gifted@CYBERSPACE:~$ </span>
                {line.text.replace("gifted@CYBERSPACE:~$ ", "")}
               </span>
            ) : (
              line.text
            )}
          </div>
        ))}
        {currentIndex >= TERMINAL_LINES.length && (
          <div className="leading-relaxed mt-1 text-green-400">
            <span className="animate-pulse bg-white/50 w-2 h-4 inline-block align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
