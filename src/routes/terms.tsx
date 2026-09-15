import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — QB PRO SUPPORT SERVICES LLC" },
      {
        name: "description",
        content:
          "Site terms for QB PRO SUPPORT SERVICES LLC: no client relationship from browsing, illustrative ranges, California law, and liability limits.",
      },
      { property: "og:title", content: "Terms of Use — QB Pro" },
      { property: "og:description", content: "Site terms for QB PRO SUPPORT SERVICES LLC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 border-b border-hairline py-8 md:grid-cols-[16rem_1fr]">
      <h2 className="crumb">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageChrome title="Terms" descriptor={["Last updated", "August 27,", "2026"]} />
        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell mx-auto max-w-6xl px-6 py-16 md:px-12">
            <Block title="Scope">
              <p>These are the site terms for QB PRO SUPPORT SERVICES LLC.</p>
            </Block>
            <Block title="No client relationship">
              <p>
                Visiting this site or sending a brief does not create a client relationship. Paid
                work starts only on a signed services agreement.
              </p>
            </Block>
            <Block title="Ranges">
              <p>Any ranges shown on this site are illustrations, not quotes.</p>
            </Block>
            <Block title="Intellectual property">
              <p>The design and copy of this site belong to the LLC.</p>
            </Block>
            <Block title="Confidentiality">
              <p>A web form is not an NDA.</p>
            </Block>
            <Block title="Governing law">
              <p>
                California law applies. Venue is the state or federal courts in Sacramento County,
                California, unless the law requires otherwise.
              </p>
            </Block>
            <Block title="Liability">
              <p>
                Liability for use of this site is capped at $100 except where California law forbids
                that limit. No indirect damages where the law allows that limitation.
              </p>
            </Block>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
