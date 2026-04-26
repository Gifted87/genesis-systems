import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-brand to-brand-glow shadow-[0_0_20px_-2px_var(--brand)]" />
          <span className="text-sm font-semibold tracking-[0.2em] text-foreground">TGM</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/how-it-works" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">How it works</Link>
          <Link to="/portfolio" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Portfolio</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">About</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground shadow-[0_0_30px_-8px_var(--brand)] transition-transform hover:scale-[1.03]"
        >
          Book Demo
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gradient-to-br from-brand to-brand-glow" />
          <span>The Genesis Machine — Architected by AI.</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Gifted87" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="mailto:braimahgifted@gmail.com" className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
