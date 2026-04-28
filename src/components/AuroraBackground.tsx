import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 120;
const AURORA_COLORS = [
  [127, 255, 212], // teal
  [176, 111, 255], // purple
  [255, 111, 216], // pink
  [111, 163, 255], // blue
  [255, 200, 100], // amber
];

export function AuroraBackground() {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const auroraRef = useRef<HTMLCanvasElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- Setup ---
    const starCanvas = starsRef.current;
    const canvas = auroraRef.current;
    if (!starCanvas || !canvas) return;

    const sCtx = starCanvas.getContext("2d");
    const ctx = canvas.getContext("2d");
    if (!sCtx || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      starCanvas.width = width;
      starCanvas.height = height;
      canvas.width = width;
      canvas.height = height;
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
    const particles: any[] = [];
    let animationFrameId: number;

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      life: number = 0;
      maxLife: number = 0;
      size: number = 0;
      color: number[] = [0,0,0];
      wander: number = 0;
      alive: number = 0;

      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.life = 0;
        this.maxLife = 80 + Math.random() * 120;
        this.size = 2 + Math.random() * 5;
        this.color = AURORA_COLORS[Math.floor(Math.random() * AURORA_COLORS.length)];
        this.wander = (Math.random() - 0.5) * 0.08;
        this.alive = initial ? Math.random() * this.maxLife : 0;
        if (initial) this.life = this.alive;
      }
      update() {
        this.life++;
        this.vx += this.wander;
        this.vy += (Math.random() - 0.5) * 0.05 - 0.01;
        this.vx *= 0.97;
        this.vy *= 0.97;
        this.x += this.vx;
        this.y += this.vy;
        if (this.life >= this.maxLife) this.reset(false);
      }
      draw() {
        const t = this.life / this.maxLife;
        const alpha = Math.sin(t * Math.PI) * 0.7;
        const s = this.size * (1 - t * 0.5);
        const [r, g, b] = this.color;
        const grad = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, s * 3);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, s * 3, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());


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
      ctx.clearRect(0, 0, width, height);

      // Draw ambient particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });


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
        <canvas
          ref={auroraRef}
          id="aurora"
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
