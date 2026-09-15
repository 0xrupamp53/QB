import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, MoveRight } from "lucide-react";
import { Footer, Header } from "@/components/site/chrome";
import { Affiliations } from "@/components/site/affiliations";
import { FaqAccordion, coreFaqs } from "@/components/site/faq-accordion";
import { Reveal } from "@/components/site/reveal";
import { AnimatedNumber } from "@/components/site/animated-number";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QB Pro — Production Software Studio" },
      {
        name: "description",
        content:
          "QB Pro Support Services designs and builds web, mobile, backend, cloud, and AI systems that ship to production.",
      },
      { property: "og:title", content: "QB Pro — Production Software Studio" },
      {
        property: "og:description",
        content:
          "Web, mobile, backend, and AI systems shipped to production. Not vendors — an in-house tech team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const SERVICES = [
  ["Web products", "SaaS, portals, commerce, internal tools, and high-performance marketing experiences."],
  ["Mobile apps", "Native and cross-platform iOS and Android products with offline sync and push."],
  ["Backend & data", "APIs, databases, integrations, reporting, queues, and reliable cloud infrastructure."],
  ["AI & automation", "Assistants, document extraction, internal knowledge search, and workflow automation."],
] as const;

const PROCESS = ["Fit call", "Scope sprint", "Weekly builds", "Launch & handoff"] as const;

function Home() {
  return (
    <>
      <Header />
      <main id="top" className="paper-bands">
        <section className="px-3 pb-3 pt-5 md:px-6 md:pb-6 md:pt-8">
          <div className="content-shell hero-ambient relative flex min-h-[calc(100vh-7rem)] flex-col items-center justify-start overflow-hidden px-6 pb-24 pt-[12vh] text-center md:pt-[14vh]">
            <span className="section-label fade-up">Product studio</span>
            <h1 className="fade-up mt-6 max-w-6xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[6.6rem]">We turn ambitious ideas into <span className="text-signal">production software.</span></h1>
            <p className="fade-up mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">Web, mobile, backend, cloud, and AI systems — designed, built, and launched by one accountable product team.</p>
            <div className="fade-up mt-10 flex flex-wrap justify-center gap-3"><Link to="/contact" className="action-pill pulse-soft bg-signal text-signal-foreground">Start a project <ArrowUpRight className="h-4 w-4" /></Link><Link to="/services" className="action-pill border border-hairline bg-card">Explore services <MoveRight className="h-4 w-4" /></Link></div>
            <a href="#services" aria-label="Scroll to services" className="absolute bottom-8 right-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">Scroll down <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline"><ArrowDown className="h-4 w-4" /></span></a>
            <div className="absolute inset-x-0 bottom-0 h-8 rounded-[50%_50%_0_0] bg-accent md:h-14" />
          </div>
        </section>

        <Affiliations />

        <section id="services" className="px-3 py-6 md:px-6 md:py-10"><div className="content-shell px-6 py-20 md:px-12 md:py-28"><Reveal><div className="mx-auto max-w-4xl text-center"><span className="section-label">What we do</span><h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">Everything required to take a digital product from idea to reliable launch.</h2></div></Reveal><div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-2">{SERVICES.map(([title, body], i) => <Reveal key={title} delay={i * 80}><Link to="/services" className="motion-card group flex h-full min-h-64 flex-col justify-between rounded-[1.5rem] bg-secondary p-7 transition-colors hover:bg-accent md:p-9"><span className="number-drift font-mono text-xs text-muted-foreground" style={{ animationDelay: `${i * 0.6}s` }}>0{i + 1}</span><div><h3 className="text-3xl font-semibold tracking-tight">{title}</h3><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{body}</p></div><ArrowUpRight className="mt-8 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></Reveal>)}</div></div></section>

        <section className="px-3 py-6 md:px-6 md:py-10"><div className="content-shell ambient-panel bg-accent px-6 py-24 text-center md:px-12 md:py-32"><Reveal><span className="section-label bg-card">Built for real operations</span><h2 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-7xl">Software that reduces manual work, connects teams, and gives leaders control.</h2><div className="mt-14 grid gap-8 md:grid-cols-3"><div className="metric-rise"><strong className="block text-6xl text-signal md:text-8xl"><AnimatedNumber value={20} suffix="+" /></strong><span className="mt-2 block text-sm text-muted-foreground">products and platforms</span></div><div className="metric-rise"><strong className="block text-6xl text-signal md:text-8xl"><AnimatedNumber value={5} /></strong><span className="mt-2 block text-sm text-muted-foreground">industries served</span></div><div className="metric-rise"><strong className="block text-6xl text-signal md:text-8xl"><AnimatedNumber value={1} /></strong><span className="mt-2 block text-sm text-muted-foreground">team from scope to launch</span></div></div></Reveal></div></section>

        <section className="px-3 py-6 md:px-6 md:py-10"><div className="content-shell px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-6xl"><Reveal><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="section-label">How we work</span><h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">A clear path from first conversation to production.</h2></div><Link to="/process" className="action-pill border border-hairline">See the process <ArrowUpRight className="h-4 w-4" /></Link></div></Reveal><div className="mt-16 grid gap-4 md:grid-cols-4">{PROCESS.map((step, i) => <Reveal key={step} delay={i * 80}><div className="motion-card rounded-[1.5rem] border border-hairline p-7"><span className="number-drift block text-5xl font-bold text-signal" style={{ animationDelay: `${i * 0.7}s` }}>0{i + 1}</span><h3 className="mt-16 text-xl font-semibold">{step}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i === 0 ? "We test fit, goals, constraints, and urgency." : i === 1 ? "You receive a written scope, timeline, and fixed proposal." : i === 2 ? "See working software every week, not status decks." : "We deploy, document, stabilize, and hand over ownership."}</p></div></Reveal>)}</div></div></div></section>

        <section className="px-3 py-6 md:px-6 md:py-10"><div className="content-shell bg-foreground px-6 py-20 text-primary-foreground md:px-12 md:py-28"><div className="mx-auto max-w-6xl"><Reveal><div className="text-center"><span className="section-label bg-primary-foreground/10">Clear investment</span><h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">Choose the right starting point.</h2></div></Reveal><div className="mt-16 grid gap-4 lg:grid-cols-3">{[["Launch", "$2,000 – $3,000", "Focused sites, automations, and small tools.", "1–2 weeks"],["Product", "$5,000 – $7,000", "Production MVPs and web apps with real users.", "3–5 weeks"],["Platform", "$7,000 – $9,000", "Multi-surface platforms with mobile and AI.", "6–10 weeks"]].map(([name, price, body, time], i) => <Reveal key={name} delay={i * 100}><Link to="/services" className={`group flex min-h-80 flex-col justify-between rounded-[1.5rem] border p-8 ${i === 1 ? "border-signal bg-signal text-signal-foreground" : "border-primary-foreground/20"}`}><div><span className="font-mono text-xs uppercase">{name} · {time}</span><p className="mt-8 text-4xl font-bold tracking-tight">{price}</p><p className="mt-5 leading-relaxed opacity-70">{body}</p></div><span className="flex items-center gap-2 font-mono text-xs uppercase">View package <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></Link></Reveal>)}</div></div></div></section>

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell px-6 py-20 md:px-12 md:py-28">
            <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>{"{ FAQ }"}</span>
              <span className="hidden md:inline">{"{ QB Pro }"}</span>
              <span>Support</span>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <h2 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="max-w-md self-end text-lg leading-relaxed text-muted-foreground">
                Got questions? We have answers. If you do not find what you are looking for, feel
                free to reach out.
              </p>
            </div>
            <Reveal className="mt-20">
              <FaqAccordion items={coreFaqs} />
            </Reveal>
            <div className="mt-12 flex flex-wrap justify-between gap-8">
              <span className="crumb">// end of section</span>
              <Link to="/faq" className="crumb hover:text-foreground">
                View All →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
