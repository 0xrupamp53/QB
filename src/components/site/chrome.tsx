import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

export const COPYRIGHT_LINES = ["Copyright ©2026", "QB Pro Support", "Services LLC"];
export const COPYRIGHT = "© 2026 QB PRO SUPPORT SERVICES LLC";

export function Tracked({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`tracked-display ${className}`} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} aria-hidden="true">
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

const NAV = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/research", label: "R&D" },
  { to: "/process", label: "Process" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="nav-pill nav-float mx-auto grid max-w-[96rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-3 sm:flex sm:justify-between sm:gap-4 sm:px-4 md:px-5">
        <Link to="/" className="flex min-w-0 items-center gap-2 whitespace-nowrap font-semibold tracking-tight">
          <span className="grid h-7 w-7 shrink-0 grid-cols-2 gap-0.5 rounded-full border border-foreground p-1">
            <i className="rounded-full bg-foreground" /><i className="rounded-full border border-foreground" />
            <i className="rounded-full border border-foreground" /><i className="rounded-full bg-foreground" />
          </span>
          QB PRO
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground is-active" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href="tel:+19163746747" aria-label="Call QB Pro at +1 (916) 374-6747" className="hidden h-10 w-10 items-center justify-center rounded-full border border-hairline transition-colors hover:bg-accent md:flex"><Phone className="h-4 w-4" /></a>
          <Link
            to="/contact"
            className="action-pill min-h-10 border border-hairline bg-card px-3 sm:px-5"
          >
            <span className="sm:hidden">Start</span><span className="hidden sm:inline">Start a project</span>
          </Link>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline lg:hidden">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
        </div>
      </div>
      {open ? <nav className="content-shell mt-2 grid gap-1 p-4 lg:hidden">{NAV.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-mono text-xs uppercase text-muted-foreground hover:bg-accent hover:text-foreground">{l.label}</Link>)}</nav> : null}
    </header>
  );
}

export function Footer() {
  const siteLinks = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/products", label: "Products" },
    { to: "/research", label: "R&D" },
    { to: "/services", label: "Services" },
    { to: "/process", label: "Process" },
    { to: "/faq", label: "FAQ" },
  ] as const;

  const legalLinks = [
    { to: "/team", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/refund", label: "Refund Policy" },
  ] as const;

  return (
    <footer className="px-3 pb-3 pt-16 md:px-6 md:pb-6">
      <div className="content-shell grid min-h-[32rem] gap-12 bg-accent p-8 md:grid-cols-[1.3fr_.7fr_.7fr] md:p-14">
        <div className="space-y-1 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
          <Link to="/" className="mb-10 flex items-center gap-3 text-xl font-bold text-foreground"><span className="grid h-9 w-9 grid-cols-2 gap-0.5 rounded-full border border-foreground p-1.5"><i className="rounded-full bg-foreground" /><i className="rounded-full border border-foreground" /><i className="rounded-full border border-foreground" /><i className="rounded-full bg-foreground" /></span>QB PRO</Link>
          <p className="text-foreground">{COPYRIGHT}</p>
          <p>California LLC · File No. B20260388113</p>
          <p>4431 Silver Cedar Ln, Sacramento, CA 95834</p>
          <p>Registered agent on file</p>
          <p>info@qbprosupportservices.com</p>
          <a href="tel:+19163746747" className="block text-foreground">+1 (916) 374-6747</a>
        </div>
        <nav className="flex flex-col gap-3">
          <p className="crumb mb-3 text-foreground">Quick links</p>
          {siteLinks.map((l) => (
            <Link key={l.to} to={l.to} className="crumb transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div>
          <Link to="/contact" className="action-pill mb-8 bg-signal text-signal-foreground">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
          <p className="crumb text-foreground">Legals</p>
          <nav className="mt-4 flex flex-col gap-2">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="crumb transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-3 text-sm"><a href="mailto:info@qbprosupportservices.com" className="flex items-center gap-2"><Mail className="h-4 w-4" /> Send email</a><a href="#top" className="flex items-center gap-2">Back to top ↑</a></div>
        </div>
      </div>
    </footer>
  );
}

/** Inner-page chrome: meta rail + edge-to-edge page title, exactly like the reference. */
export function PageChrome({
  title,
  descriptor,
  children,
}: {
  title: string;
  descriptor: string[];
  children?: ReactNode;
}) {
  return (
    <section id="top" className="px-3 pb-4 pt-8 md:px-6 md:pt-14">
      <div className="content-shell flex min-h-[31rem] min-w-0 flex-col items-center justify-center px-5 py-20 text-center sm:px-6 sm:py-24 md:min-h-[38rem]">
        <span className="section-label">{descriptor.join(" · ")}</span>
        <h1 className="mt-7 max-w-full text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">{title}</h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">QB Pro Support Services — production software designed, engineered, and shipped with one accountable team.</p>
        {children}
      </div>
    </section>
  );
}

export function MetaCell({ lines, last = false }: { lines: ReactNode; last?: boolean }) {
  const arr = Array.isArray(lines) ? lines : [lines];
  return (
    <div
      className={`min-w-[8.5rem] max-w-[13rem] px-4 font-mono text-[10px] uppercase leading-[1.9] tracking-[0.14em] text-muted-foreground ${
        last ? "" : "border-r border-hairline"
      }`}
    >
      {arr.map((l, i) => (
        <p key={i}>{l}</p>
      ))}
    </div>
  );
}
