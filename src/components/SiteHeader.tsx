import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/how-it-works", label: "HOW IT WORKS" },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function SiteHeader() {
  const { location } = useRouterState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="The Genesis Machine — Home" onClick={() => setIsOpen(false)}>
          <span className="font-mono text-xs text-brand cursor-blink select-none">█</span>
          <span className="font-mono text-sm font-semibold tracking-[0.15em] text-foreground group-hover:text-brand transition-colors">
            [TGM]
          </span>
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono text-[10px] tracking-[0.2em] transition-colors ${
                  isActive
                    ? "text-brand"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive ? `> ${link.label}` : link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            id="header-book-demo"
            className="hidden md:inline-block font-mono text-[10px] tracking-[0.2em] bg-brand text-brand-foreground px-4 py-2 uppercase font-semibold brand-glow-shadow transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_oklch(0.82_0.18_195)]"
          >
            BOOK DEMO
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-mono text-xs tracking-widest text-brand p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? "[X]" : "[MENU]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full border-b border-white/10 bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col p-6 gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-xs tracking-[0.2em] transition-colors ${
                    isActive
                      ? "text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive ? `> ${link.label}` : link.label}
                </Link>
              );
            })}
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 font-mono text-[11px] tracking-[0.2em] bg-brand text-brand-foreground px-4 py-3 uppercase font-semibold brand-glow-shadow transition-all text-center inline-block w-full max-w-xs"
            >
              BOOK A LIVE DEMO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-brand cursor-blink">█</span>
              <span className="font-mono text-sm font-semibold tracking-[0.15em] text-foreground">[TGM]</span>
            </div>
            <p className="mt-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              The Genesis Machine
            </p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground/50">
              v0.1.0-alpha · {year}
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 md:grid-cols-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground hover:text-brand transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact column */}
          <div className="space-y-2">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Contact</p>
            <a
              href="https://github.com/Gifted87"
              target="_blank"
              rel="noreferrer"
              className="block font-mono text-[10px] text-muted-foreground hover:text-brand transition-colors"
            >
              ↗ github.com/Gifted87
            </a>
            <a
              href="mailto:braimahgifted@gmail.com"
              className="block font-mono text-[10px] text-muted-foreground hover:text-brand transition-colors"
            >
              ↗ braimahgifted@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
          <p className="font-mono text-[9px] tracking-widest text-muted-foreground/40 uppercase">
            ARCHITECTED BY AI. DEPLOYED IN HOURS.
          </p>
          <p className="font-mono text-[9px] text-muted-foreground/30">
            SYS:ONLINE — ALL SYSTEMS NOMINAL
          </p>
        </div>
      </div>
    </footer>
  );
}
