import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — QB Pro" },
      {
        name: "description",
        content:
          "QB Pro services: web, mobile, backend, frontend, database, iOS, Android, cloud, and AI engineering. Transparent packages from $2,000 to $9,000.",
      },
      { property: "og:title", content: "Services & Pricing — QB Pro" },
      {
        property: "og:description",
        content: "Web, mobile, backend, database, and AI engineering. Packages from $2,000 – $3,000.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const DISCIPLINES = [
  {
    t: "Frontend Engineering",
    d: "React, Next.js, TypeScript, Tailwind, design systems, accessibility, performance budgets.",
  },
  {
    t: "Backend Engineering",
    d: "Node, Python, REST and GraphQL APIs, queues, background jobs, integrations, webhooks.",
  },
  {
    t: "Database & Data",
    d: "PostgreSQL, MySQL, MongoDB, Redis, schema design, migrations, analytics pipelines, reporting.",
  },
  {
    t: "Mobile — iOS & Android",
    d: "Native Swift and Kotlin, React Native and Flutter, offline-first sync, push, store releases.",
  },
  {
    t: "Web Applications & SaaS",
    d: "Multi-tenant products, auth and roles, billing, admin consoles, dashboards, customer portals.",
  },
  {
    t: "Cloud & DevOps",
    d: "AWS, Google Cloud, Vercel, Docker, CI/CD, observability, cost control, zero-downtime deploys.",
  },
  {
    t: "AI & Automation",
    d: "Assistants, document extraction, RAG over internal knowledge, workflow automation, evals.",
  },
  {
    t: "Product & UX Design",
    d: "Discovery, flows, wireframes, high-fidelity UI, prototypes, and a design system you keep.",
  },
  {
    t: "QA & Support",
    d: "Automated tests, release checks, monitoring, incident response, and monthly maintenance.",
  },
];

const TIERS = [
  {
    name: "Launch",
    price: "$2,000 – $3,000",
    time: "1–2 weeks",
    for: "Landing sites, focused automations, and small tools.",
    items: [
      "Marketing site or single-purpose app",
      "Up to 6 screens, responsive",
      "CMS or simple database",
      "Analytics, SEO, and deployment",
      "2 weeks of post-launch fixes",
    ],
  },
  {
    name: "Product",
    price: "$5,000 – $7,000",
    time: "3–5 weeks",
    for: "MVPs and production web apps with real users.",
    items: [
      "Full web app or SaaS MVP",
      "Auth, roles, and payments",
      "Database design and admin console",
      "API and third-party integrations",
      "Cloud deployment plus CI/CD",
      "30 days of support",
    ],
    featured: true,
  },
  {
    name: "Platform",
    price: "$7,000 – $9,000",
    time: "6–10 weeks",
    for: "Multi-surface platforms with mobile and AI.",
    items: [
      "Web plus iOS and Android delivery",
      "Complex data model and reporting",
      "AI features: assistants, extraction, automation",
      "Load-tested infrastructure and monitoring",
      "Full documentation and handover",
      "60 days of support",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <Header />
      <main className="paper-bands">
        <PageChrome title="Services" descriptor={["What we build", "and what", "it costs"]} />

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell px-6 py-20 md:px-12 md:py-28">
            <span className="section-label">Capabilities</span>
            <h2 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">One team across the complete product stack.</h2>
            <div className="mt-12 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
              {DISCIPLINES.map((s, i) => (
                <Reveal key={s.t} delay={(i % 3) * 80}>
                  <div className="motion-card group h-full bg-card p-8 transition-colors duration-500 hover:bg-accent">
                    <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {s.t}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell bg-foreground px-6 py-20 text-primary-foreground md:px-12 md:py-28">
            <span className="section-label bg-primary-foreground/10">Pricing</span>
            <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">Transparent packages</h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Fixed-scope pricing agreed before we start. Larger platforms are quoted after a
              scoping call.
            </p>

            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {TIERS.map((t, ti) => (
                <Reveal key={t.name} delay={ti * 110} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-[1.5rem] border p-10 transition-transform duration-500 ease-out hover:-translate-y-1 ${
                    t.featured ? "border-signal bg-signal text-signal-foreground" : "border-primary-foreground/20"
                  }`}
                >
                  <p
                    className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                       t.featured ? "text-signal-foreground/70" : "text-primary-foreground/60"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p className="mt-8 text-5xl tracking-tight">{t.price}</p>
                  <p
                    className={`mt-3 font-mono text-[11px] uppercase tracking-[0.18em] ${
                       t.featured ? "text-signal-foreground/70" : "text-primary-foreground/60"
                    }`}
                  >
                    {t.time}
                  </p>
                  <p className={`mt-6 ${t.featured ? "text-signal-foreground/80" : "text-primary-foreground/70"}`}>
                    {t.for}
                  </p>
                  <ul
                    className={`mt-8 flex-1 space-y-3 ${
                      t.featured ? "text-signal-foreground/90" : "text-primary-foreground/70"
                    }`}
                  >
                    {t.items.map((i) => (
                      <li key={i}>· {i}</li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-10 inline-block rounded-md border px-6 py-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                      t.featured
                        ? "border-signal-foreground hover:bg-signal-foreground hover:text-signal"
                        : "border-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                    }`}
                  >
                    Start with {t.name} →
                  </Link>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
