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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell px-6 py-20 md:px-12 md:py-28">
            <span className="section-label">About QB Pro</span>
            <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">Questions before we start.</h2>
            <div className="mt-12">
              <FaqAccordion items={coreFaqs} />
            </div>

            <h2 className="mt-24 text-4xl font-bold tracking-tight md:text-5xl">Working together</h2>
            <div className="mt-12">
              <FaqAccordion items={workingFaqs} startIndex={11} />
            </div>

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
