import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — QB PRO SUPPORT SERVICES LLC" },
      {
        name: "description",
        content:
          "How QB PRO SUPPORT SERVICES LLC collects, uses, retains, and shares information submitted through qbpro.studio.",
      },
      { property: "og:title", content: "Privacy Policy — QB Pro" },
      { property: "og:description", content: "What we collect, why, and how to reach us." },
    ],
  }),
  component: PrivacyPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 border-b border-hairline py-8 md:grid-cols-[16rem_1fr]">
      <h2 className="crumb">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageChrome title="Privacy" descriptor={["Last updated", "August 27,", "2026"]} />
        <section className="px-5 py-20 md:px-10">
          <div className="mx-auto max-w-5xl">
            <Block title="Operator">
              <p>
                QB PRO SUPPORT SERVICES LLC, 4431 Silver Cedar Ln, Sacramento, CA 95834.
                info@qbprosupportservices.com. File No. B20260388113.
              </p>
            </Block>
            <Block title="What we collect">
              <p>From the contact form: name, email, company, need, budget, and brief.</p>
              <p>
                Automatically: IP address, browser, pages viewed, referrer, approximate location from
                IP, and essential cookies.
              </p>
              <p>
                Do not send Social Security numbers, card numbers, or passwords through the form.
              </p>
            </Block>
            <Block title="How we use it">
              <p>To reply to you, to run and secure the site, and for legal and accounting needs.</p>
            </Block>
            <Block title="Selling and sharing">
              <p>
                We do not sell personal information and do not share it for cross-context behavioral
                advertising.
              </p>
            </Block>
            <Block title="Who we share with">
              <p>
                Only our hosting, database, and email providers under contract; our advisers;
                authorities when required by law; or a buyer if the company is sold.
              </p>
            </Block>
            <Block title="Retention">
              <p>
                Typically up to 24 months if no engagement follows. Longer if we enter a contract.
              </p>
            </Block>
            <Block title="Your requests">
              <p>Email info@qbprosupportservices.com for access, correction, or deletion.</p>
            </Block>
            <Block title="CalOPPA">
              <p>
                This is a commercial site that may collect personally identifiable information from
                California residents. This Privacy Policy is linked from every page.
              </p>
            </Block>
            <Block title="Your privacy choices">
              <p>
                A CCPA “Do Not Sell or Share” link is not active because we do not sell or share
                personal information. If that changes, the link goes up first.
              </p>
            </Block>
            <Block title="Children">
              <p>We do not target anyone under 16.</p>
            </Block>
            <Block title="Processing location">
              <p>Information is processed in the United States.</p>
            </Block>
            <Block title="Updates">
              <p>Changes are posted on this page.</p>
            </Block>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
