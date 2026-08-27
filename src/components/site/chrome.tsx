import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { FillText } from "@/components/site/wordmark";

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
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="nav-pill mx-auto flex max-w-[104rem] items-center justify-between gap-4 px-4 py-2.5 md:px-6">
        <Link to="/" className="font-mono text-base font-bold tracking-tight">
          <span className="text-muted-foreground">[</span>QB&nbsp;Pro
          <span className="text-muted-foreground">]</span>
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

        <div className="flex items-center gap-2">
          <Link
            to="/services"
            className="hidden rounded-md border border-hairline px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground md:inline-block"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-hairline px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background"
          >
            Contact
          </Link>
        </div>
      </div>
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
    <footer className="border-t border-hairline px-5 py-14 md:px-10">
      <div className="mx-auto grid max-w-[104rem] gap-10 md:grid-cols-[1fr_auto_auto]">
        <div className="space-y-1 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
          <p className="text-foreground">{COPYRIGHT}</p>
          <p>California LLC · File No. B20260388113</p>
          <p>4431 Silver Cedar Ln, Sacramento, CA 95834</p>
          <p>Registered agent on file</p>
          <p>info@qbprosupportservices.com</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
          {siteLinks.map((l) => (
            <Link key={l.to} to={l.to} className="crumb transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div>
          <p className="crumb text-foreground">// Legals</p>
          <nav className="mt-4 flex flex-col gap-2">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="crumb transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[104rem] text-foreground/[0.10]">
        <FillText text="QB Pro Support" animate={false} />
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
    <section className="px-5 pb-6 pt-24 md:px-10 md:pt-36">
      <div className="mx-auto max-w-[104rem]">
        <div className="flex flex-wrap justify-end gap-y-6">
          <MetaCell lines={["You are", "now", "viewing"]} />
          <MetaCell lines={["Scroll", "to", "explore"]} />
          <MetaCell lines={descriptor} />
          <MetaCell lines={COPYRIGHT_LINES} last />
        </div>
        <div className="mt-6 text-foreground md:mt-10">
          <FillText text={title} />
        </div>
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
