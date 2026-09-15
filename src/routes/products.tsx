import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";
import { Reveal } from "@/components/site/reveal";
import { allCases } from "@/data/portfolio";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — QB Pro platforms in production" },
      {
        name: "description",
        content:
          "Platforms QB Pro has designed, built, and shipped: control towers, factory operating systems, lease intelligence, on-device AI, and more.",
      },
      { property: "og:title", content: "Products — QB Pro platforms in production" },
      {
        property: "og:description",
        content: "Platforms QB Pro has designed, built, and shipped to production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <Header />
      <main className="paper-bands">
        <PageChrome title="Products" descriptor={["Platforms", "shipped and", "running live"]} />

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell divide-y divide-hairline px-6 py-16 md:px-12">
            {allCases.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 6) * 70}>
                <div className="group relative grid gap-6 rounded-2xl px-4 py-8 transition-[background-color,padding] duration-500 ease-out hover:bg-accent hover:px-6 md:grid-cols-[5rem_1fr_1fr_8rem] md:items-center">
                  <span className="absolute inset-y-0 left-0 w-px scale-y-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  <span className="crumb transition-colors duration-500 group-hover:text-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80">
                    {item.blurb}
                  </p>
                  <span className="crumb md:text-right">· {item.status}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-20 inline-block rounded-md border border-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
          >
            Build something like this →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
