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
      {/* ── Topbar ── */}
      <header className="topbar fixed w-full">
        <div className="topbar-logo">
          <Link to="/" className="logo-hex">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L12 4V10L7 13L2 10V4L7 1Z" fill="white" opacity="0.9"/>
            </svg>
          </Link>
          <span className="font-sans font-medium">Genesis Machine</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="topbar-badge hidden sm:inline-flex">v1.0 · Systems</span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScetSvFllRTSmNZuiHig8wKKvofyRu9Ch6BIV2TW_gAu3_YVg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-xs"
          >
            Book Demo
          </a>
        </div>
      </header>

      {/* ── Sidebar ── */}
      <nav className="sidebar">
        <div className="sidebar-section">Infrastructure</div>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`sidebar-link ${isActive ? "active" : ""}`}
            >
              <span className="dot"></span> {link.label}
            </Link>
          );
        })}
        
        <div className="sidebar-section">Connect</div>
        <a href="https://github.com/Gifted87" target="_blank" rel="noreferrer" className="sidebar-link">
          <span className="dot"></span> GitHub
        </a>
        <a href="mailto:braimahgifted@gmail.com" className="sidebar-link">
          <span className="dot"></span> Email
        </a>
      </nav>
    </>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-12 ml-0 md:ml-[220px]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="logo-hex">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L12 4V10L7 13L2 10V4L7 1Z" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-sans text-sm font-medium">Genesis Machine — {year}</span>
          </div>
          
          <div className="flex gap-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
              ALL SYSTEMS NOMINAL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
