import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // State for cursor positions (used by animation frame, not React state)
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ringPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  
  // Particles array
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    let animationFrameId: number;
    let isHovering = false;

    // Handle mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Spawn smoke particles
      if (Math.random() > 0.3) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * -1.5 - 0.5, // drift upwards
          life: 60,
          maxLife: 60,
          size: Math.random() * 20 + 20
        });
      }
    };

    // Handle hover states for links/buttons
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, select, textarea")) {
        isHovering = true;
      }
    };

    const onMouseOut = () => {
      isHovering = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    // Animation Loop
    const render = () => {
      // 1. Update Dot Position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      // 2. Update Ring Position (Lerp)
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;
      
      if (ringRef.current) {
        // Grow ring if hovering
        const scale = isHovering ? 1.5 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scale})`;
      }

      // 3. Render Canvas Smoke Trail
      const canvas = canvasRef.current;
      if (canvas) {
        // Resize canvas to match window if needed
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Apply glassmorphic filter via canvas
          ctx.filter = "blur(12px) saturate(150%)";

          for (let i = particles.current.length - 1; i >= 0; i--) {
            const p = particles.current[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 1;
            p.size += 0.5; // expand over time

            if (p.life <= 0) {
              particles.current.splice(i, 1);
              continue;
            }

            const opacity = (p.life / p.maxLife) * 0.3; // max opacity 0.3
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            // Use brand color or cyan tint for smoke
            ctx.fillStyle = `rgba(180, 200, 255, ${opacity})`; 
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Smoke Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-brand pointer-events-none z-[9998] transition-transform duration-75 ease-out"
        style={{ willChange: "transform" }}
      />
      
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-foreground pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
