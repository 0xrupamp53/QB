import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How a QB Pro engagement runs" },
      {
        name: "description",
        content:
          "Fit call, scope sprint, build, ship and hand off. Predictable steps, written scope, weekly working software.",
      },
      { property: "og:title", content: "Process — How a QB Pro engagement runs" },
      {
        property: "og:description",
        content: "Predictable steps. Written scope. Weekly working software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

const CHAPTERS = [
  {
    n: "01 / Fit call",
    body: "Thirty minutes. We decide if this is a real engagement. If it is not, we say so.",
  },
  {
    n: "02 / Scope sprint",
    body: "Three to ten days. Problem, users, constraints, stack, timeline, fixed proposal. You leave with a written plan.",
  },
  {
    n: "03 / Build",
    body: "Weekly working software on a staging URL. You see product, not a status deck.",
  },
  {
    n: "04 / Ship and hand off",
    body: "Production launch, repo, docs, 30-day stabilization. The product is yours.",
  },
];

const RHYTHM = [
  "Kickoff in week one",
  "Staging URL from the first build week",
  "Weekly demo, 45 minutes",
  "One shared channel",
  "You own the product at handoff",
];

function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <PageChrome title="Process" descriptor={["How an", "engagement", "runs"]} />

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              How an engagement runs
            </h2>
            <p className="max-w-md self-end text-lg leading-relaxed text-muted-foreground">
              Predictable steps. Written scope. Weekly working software.
            </p>
          </div>
        </section>

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell px-6 md:px-12">
            {CHAPTERS.map((c) => (
              <div key={c.n} className="motion-card grid gap-6 border-b border-hairline py-14 md:grid-cols-2">
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl"><span className="text-signal">{c.n.slice(0, 2)}</span>{c.n.slice(2)}</h3>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell bg-accent px-6 py-20 md:px-12">
            <span className="section-label bg-card">Delivery rhythm</span>
            <ul className="mt-10 grid gap-px bg-hairline md:grid-cols-5">
              {RHYTHM.map((r) => (
                <li key={r} className="bg-card p-6 text-base leading-relaxed">
                  {r}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="action-pill mt-20 bg-signal text-signal-foreground"
            >
              Book a fit call →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
