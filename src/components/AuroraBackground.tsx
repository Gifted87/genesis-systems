import React, { useEffect, useRef } from "react";

export function AuroraBackground() {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- Setup ---
    const starCanvas = starsRef.current;
    if (!starCanvas) return;

    const sCtx = starCanvas.getContext("2d");
    if (!sCtx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      starCanvas.width = width;
      starCanvas.height = height;
      drawStars();
    };

    const drawStars = () => {
      sCtx.clearRect(0, 0, width, height);
      const count = 220;
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * 1.2;
        const a = Math.random() * 0.6 + 0.1;
        sCtx.beginPath();
        sCtx.arc(x, y, r, 0, Math.PI * 2);
        sCtx.fillStyle = `rgba(255,255,255,${a})`;
        sCtx.fill();
      }
    };

    // Initialize canvases
    resize();
    window.addEventListener("resize", resize);

    // --- State ---
    let ox = width / 2;
    let oy = height / 2;
    let animationFrameId: number;

    // Hover effect for links/buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        document.body.classList.add("hovering");
      } else {
        document.body.classList.remove("hovering");
      }
    };
    document.addEventListener("mouseover", handleMouseOver);

    // --- Render Loop ---
    const render = () => {
      // Track orb3
      ox += (window.innerWidth / 2 - ox) * 0.04;
      oy += (window.innerHeight / 2 - oy) * 0.04;
      if (orb3Ref.current) {
        orb3Ref.current.style.left = ox + "px";
        orb3Ref.current.style.top = oy + "px";
        orb3Ref.current.style.transform = "translate(-50%,-50%)";
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Container */}
      <div className="fixed inset-0 pointer-events-none -z-50 bg-[#050810] overflow-hidden">
        <canvas
          ref={starsRef}
          id="stars"
          className="absolute inset-0 w-full h-full"
        />

        <div className="orb orb-1 absolute rounded-full blur-[80px] opacity-10 w-[500px] h-[500px] bg-[#7B2FFF] -top-[100px] -left-[100px]" />
        <div className="orb orb-2 absolute rounded-full blur-[80px] opacity-10 w-[400px] h-[400px] bg-[#00CDB0] -bottom-[80px] -right-[80px]" />
        <div
          ref={orb3Ref}
          className="orb orb-3 absolute rounded-full blur-[80px] opacity-[0.05] w-[300px] h-[300px] bg-[#FF3CAC] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </>
  );
}
