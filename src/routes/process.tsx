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

        <section className="px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-[100rem] gap-10 md:grid-cols-2">
            <h2 className="text-[9vw] leading-[1.05] tracking-tight md:text-[3.4rem]">
              How an engagement runs
            </h2>
            <p className="max-w-md self-end text-lg leading-relaxed text-muted-foreground">
              Predictable steps. Written scope. Weekly working software.
            </p>
          </div>
        </section>

        <section className="border-t border-hairline px-5 md:px-10">
          <div className="mx-auto max-w-[100rem]">
            {CHAPTERS.map((c) => (
              <div key={c.n} className="grid gap-6 border-b border-hairline py-14 md:grid-cols-2">
                <h3 className="text-3xl tracking-tight md:text-4xl">{c.n}</h3>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-24 md:px-10">
          <div className="mx-auto max-w-[100rem]">
            <p className="crumb">// rhythm</p>
            <ul className="mt-10 grid gap-px bg-hairline md:grid-cols-5">
              {RHYTHM.map((r) => (
                <li key={r} className="bg-background p-6 text-base leading-relaxed">
                  {r}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-20 inline-block border border-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
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
