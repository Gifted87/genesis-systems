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

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="topbar-logo">
            <div className="logo-dot"></div>
            <span>Genesis Machine</span>
          </Link>
          
          <div className="topbar-actions">
            <span className="system-status">v1.0 · Systems Nominal</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Book Demo
            </a>
          </div>
        </div>
      </header>

      <aside className="sidebar">
        <div className="sidebar-section">
          <div className="sidebar-label">Infrastructure</div>
          <nav className="sidebar-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-item ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="sidebar-section">
          <div className="sidebar-label">Connect</div>
          <nav className="sidebar-nav">
            <a href="https://github.com/Gifted87" target="_blank" rel="noreferrer" className="nav-item">
              GitHub
            </a>
            <a href="mailto:braimahgifted@gmail.com" className="nav-item">
              Email
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="main border-t border-[var(--border)] pt-12 pb-24">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="logo-dot"></div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
            Genesis Machine — {year}
          </span>
        </div>
        
        <div className="flex gap-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted2)]">
            ALL SYSTEMS NOMINAL · AUTHORED BY GIFT BRAIMAH
          </p>
        </div>
      </div>
    </footer>
  );
}
