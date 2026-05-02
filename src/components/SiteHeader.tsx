import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/how-it-works", label: "HOW IT WORKS" },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/thinking", label: "THINKING" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function SiteHeader() {
  const { location } = useRouterState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[54px] border-b border-[var(--border)] bg-[#111009]/85 backdrop-blur-[16px]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="logo-mark flex h-7 w-7 items-center justify-center rounded-[7px] bg-[var(--accent)] transition-transform hover:scale-105"
            aria-label="Home"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L12 4V10L7 13L2 10V4L7 1Z" fill="white" opacity="0.9"/>
            </svg>
          </Link>
          <span className="font-sans text-sm font-medium text-[var(--text)]">The Genesis Machine</span>
          <span className="h-4 w-px bg-[var(--text-ghost)] mx-1 hidden sm:block"></span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)] hidden sm:block">
            {location.pathname.split("/").pop() || "Systems"}
          </span>
        </div>

        {/* Nav Desktop */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] transition-colors ${
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            className="ml-4 rounded-lg bg-[var(--accent)] px-4 py-1.5 font-sans text-xs font-medium text-[#1A0E08] transition-all hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(217,119,87,0.45)]"
          >
            Book Demo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[54px] left-0 w-full border-b border-[var(--border)] bg-[#111009]/fb backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-5 p-8" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-lg bg-[var(--accent)] py-3 text-center font-sans text-sm font-medium text-[#1A0E08]"
            >
              Book Demo
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
    <footer className="border-t border-[var(--border)] bg-[#111009] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[var(--accent)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L12 4V10L7 13L2 10V4L7 1Z" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span className="font-sans text-sm font-medium text-[var(--text)]">The Genesis Machine</span>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-[var(--text-muted)]">
              Architecting production-grade backends at software speed. v0.1.0-alpha · {year}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-[var(--text-muted)]">Connect</p>
            <a href="https://github.com/Gifted87" target="_blank" rel="noreferrer" className="block text-xs text-[var(--text-muted)] hover:text-[var(--text)]">
              ↗ GitHub
            </a>
            <a href="mailto:braimahgifted@gmail.com" className="block text-xs text-[var(--text-muted)] hover:text-[var(--text)]">
              ↗ Email
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-ghost)]">
            ARCHITECTED BY AI. DEPLOYED IN HOURS.
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-ghost)]">
            SYS:ONLINE — ALL SYSTEMS NOMINAL
          </p>
        </div>
      </div>
    </footer>
  );
}
