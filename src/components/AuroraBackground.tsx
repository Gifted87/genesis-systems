import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 120;
const MAX_TRAIL = 80;
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
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const glowOrbRef = useRef<HTMLDivElement>(null);

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
    let mouse = { x: width / 2, y: height / 2 };
    let velocity = { x: 0, y: 0 };
    let rx = width / 2;
    let ry = height / 2;
    let ox = width / 2;
    let oy = height / 2;
    const trail: any[] = [];
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
        this.x = initial ? Math.random() * width : mouse.x;
        this.y = initial ? Math.random() * height : mouse.y;
        this.vx = (Math.random() - 0.5) * 1.5 + velocity.x * 0.3;
        this.vy = (Math.random() - 0.5) * 1.5 + velocity.y * 0.3;
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

    // --- Mouse Move ---
    const handleMouseMove = (e: MouseEvent) => {
      velocity.x = e.clientX - mouse.x;
      velocity.y = e.clientY - mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }

      // Spawn trail points
      trail.push({
        x: mouse.x,
        y: mouse.y,
        vx: velocity.x * 0.5,
        vy: velocity.y * 0.5,
        life: 0,
        maxLife: 50 + Math.random() * 30,
        color: AURORA_COLORS[Math.floor(Math.random() * AURORA_COLORS.length)],
        size: 3 + Math.random() * 4,
      });
      if (trail.length > MAX_TRAIL) trail.shift();
    };

    document.addEventListener("mousemove", handleMouseMove);

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

      // Draw trail
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.93;
        p.vy *= 0.93;
        const t = p.life / p.maxLife;
        if (t >= 1) {
          trail.splice(i, 1);
          continue;
        }
        const a = Math.sin(t * Math.PI) * 0.85;
        const s = p.size * (1 - t * 0.6);
        const [r, g, b] = p.color;
        const g2 = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, s * 5);
        g2.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        g2.addColorStop(0.5, `rgba(${r},${g},${b},${a * 0.3})`);
        g2.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, s * 5, 0, Math.PI * 2);
        ctx.fillStyle = g2;
        ctx.fill();
      }

      // Draw ambient particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Cursor glow bloom
      const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
      const bloomR = 60 + speed * 4;
      const bloom = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, bloomR);
      bloom.addColorStop(0, `rgba(127,255,212,${Math.min(speed * 0.015, 0.18)})`);
      bloom.addColorStop(1, "rgba(127,255,212,0)");
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, bloomR, 0, Math.PI * 2);
      ctx.fillStyle = bloom;
      ctx.fill();

      velocity.x *= 0.85;
      velocity.y *= 0.85;

      // Track orb3
      ox += (mouse.x - ox) * 0.04;
      oy += (mouse.y - oy) * 0.04;
      if (orb3Ref.current) {
        orb3Ref.current.style.left = ox + "px";
        orb3Ref.current.style.top = oy + "px";
        orb3Ref.current.style.transform = "translate(-50%,-50%)";
      }

      // Track glow orb
      if (glowOrbRef.current) {
        glowOrbRef.current.style.transform = `translate(calc(${mouse.x}px - 50%), calc(${mouse.y}px - 50%))`;
        glowOrbRef.current.style.setProperty('--x', `${mouse.x}px`);
        glowOrbRef.current.style.setProperty('--y', `${mouse.y}px`);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
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

        {/* The new glowing light engine */}
        <div id="glow-orb" ref={glowOrbRef} />
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorDotRef}
        id="cursor-dot"
        className="fixed z-[9999] pointer-events-none w-2.5 h-2.5 rounded-full bg-white/90 -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-75"
      />
    </>
  );
}
