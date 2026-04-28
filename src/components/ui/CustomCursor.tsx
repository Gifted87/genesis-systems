import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const smokeContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Use refs to store position to avoid state closures in requestAnimationFrame
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const circlePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = "none";
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button'], [tabindex]:not([tabindex='-1'])"
    );

    interactiveElements.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
    });

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Move the dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Spawn a smoke particle randomly, throttling slightly
      if (Math.random() > 0.4 && smokeContainerRef.current) {
        spawnSmokeParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        "a, button, input, textarea, select, [role='button'], [tabindex]:not([tabindex='-1'])"
      );
      setIsHovering(isInteractive);
    };

    const spawnSmokeParticle = (x: number, y: number) => {
      const particle = document.createElement("div");
      
      // Initial state
      particle.className = "smoke-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      // Randomize size and offset slightly
      const size = Math.random() * 20 + 30; // 30px to 50px
      const offsetX = (Math.random() - 0.5) * 10;
      const offsetY = (Math.random() - 0.5) * 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.transform = `translate3d(-50%, -50%, 0) translate(${offsetX}px, ${offsetY}px) scale(0.5)`;
      
      smokeContainerRef.current?.appendChild(particle);

      // Trigger reflow to ensure the transition runs
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      particle.offsetHeight;

      // Animate
      requestAnimationFrame(() => {
        particle.style.transform = `translate3d(-50%, -50%, 0) translate(${offsetX * 3}px, ${offsetY * 3 - 20}px) scale(2)`;
        particle.style.opacity = "0";
      });

      // Cleanup
      setTimeout(() => {
        particle.remove();
      }, 800);
    };

    // Animation loop for the trailing circle
    let animationFrameId: number;
    const renderLoop = () => {
      // Ease circle towards mouse position
      circlePos.current.x += (mouse.current.x - circlePos.current.x) * 0.15;
      circlePos.current.y += (mouse.current.y - circlePos.current.y) * 0.15;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0) translate(-50%, -50%) ${
          isHovering ? "scale(1.5)" : "scale(1)"
        }`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    renderLoop();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = "";
      interactiveElements.forEach((el) => {
        (el as HTMLElement).style.cursor = "";
      });
    };
  }, [isHovering]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .smoke-particle {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(0, 255, 255, 0) 70%);
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          opacity: 0.8;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out;
          will-change: transform, opacity;
        }
      `}} />
      
      {/* Smoke Container */}
      <div ref={smokeContainerRef} className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden" />

      {/* Trailing Circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand/50 pointer-events-none z-[9999] transition-transform duration-75 will-change-transform flex items-center justify-center bg-brand/5 backdrop-blur-[2px]"
      />

      {/* Inner Precise Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand rounded-full pointer-events-none z-[10000] will-change-transform"
      />
    </>
  );
}
