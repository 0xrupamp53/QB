import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";
import { FaqAccordion, coreFaqs, workingFaqs } from "@/components/site/faq-accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — QB Pro product studio" },
      {
        name: "description",
        content:
          "Answers about QB Pro: what we build, who it is for, cost and timeline ranges, IP ownership, stack, NDAs, and how engagements start.",
      },
      { property: "og:title", content: "FAQs — QB Pro product studio" },
      { property: "og:description", content: "Short and true answers about working with QB Pro." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageChrome title="FAQs" descriptor={["Questions", "and", "answers"]} />

        <section className="px-5 py-24 md:px-10">
          <div className="mx-auto max-w-[100rem]">
            <p className="crumb">// category</p>
            <h2 className="mt-8 text-4xl tracking-tight md:text-5xl">About QB Pro</h2>
            <div className="mt-12">
              <FaqAccordion items={coreFaqs} />
            </div>

            <h2 className="mt-24 text-4xl tracking-tight md:text-5xl">Working together</h2>
            <div className="mt-12">
              <FaqAccordion items={workingFaqs} startIndex={11} />
            </div>

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
