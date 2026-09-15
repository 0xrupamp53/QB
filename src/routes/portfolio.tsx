import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Footer, Header, PageChrome } from "@/components/site/chrome";
import { Reveal } from "@/components/site/reveal";
import { chapters, type CaseStudy } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — QB Pro case studies" },
      {
        name: "description",
        content:
          "Case studies and live product deep-dives from QB Pro across logistics, manufacturing, defense, real estate, and SaaS.",
      },
      { property: "og:title", content: "Portfolio — QB Pro case studies" },
      {
        property: "og:description",
        content: "Case studies and live product deep-dives from QB Pro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS = ["Show All", "Software", "Hardware"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Show All");

  const visible = chapters
    .map((c) => ({
      ...c,
      items: c.items.filter((i) => filter === "Show All" || i.bucket === filter),
    }))
    .filter((c) => c.items.length > 0);

  return (
    <>
      <Header />
      <main className="paper-bands">
        <PageChrome title="Portfolio" descriptor={["Case studies &", "live product", "deep-dives"]} />

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell min-w-0 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28">
            <div className="flex flex-wrap gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                    className={`rounded-full border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                    filter === f
                      ? "border-foreground bg-foreground text-background"
                      : "border-hairline text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {visible.map((chapter) => (
              <div key={chapter.id} className="mt-20">
                <h2 className="border-b border-hairline pb-5 text-3xl tracking-tight md:text-4xl">
                  {chapter.id} / {chapter.label}
                </h2>
                <div className="grid min-w-0 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {chapter.items.map((item, i) => (
                    <Reveal key={item.slug} delay={(i % 3) * 90}>
                      <Card item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}

            <Link
              to="/contact"
              className="mt-24 inline-block rounded-md border border-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
            >
              Book a discovery call →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Card({ item }: { item: CaseStudy }) {
  return (
    <article className="group h-full min-w-0 overflow-hidden rounded-[1.5rem] bg-secondary">
      <div className="aspect-[16/10] overflow-hidden bg-card">
        <img
          src={item.image}
          alt={`${item.title} — product built by QB Pro`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="min-w-0 p-5 sm:p-8">
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <p className="crumb min-w-0 break-words">
            {"{ "}
            {item.tags.join(" / ")}
            {" }"}
          </p>
          <p className="crumb whitespace-nowrap">· {item.status}</p>
        </div>
        <h3 className="mt-7 break-words text-3xl tracking-tight">{item.title}</h3>
        <p className="crumb mt-4 break-words">Client: {item.client}</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">{item.blurb}</p>
      </div>
    </article>
  );
}
