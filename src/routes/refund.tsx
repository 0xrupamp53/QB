import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — QB PRO SUPPORT SERVICES LLC" },
      {
        name: "description",
        content:
          "Refund policy for QB PRO SUPPORT SERVICES LLC: how scope sprints, fixed builds, deposits, and cancellations are handled.",
      },
      { property: "og:title", content: "Refund Policy — QB Pro" },
      { property: "og:description", content: "Refund policy for QB PRO SUPPORT SERVICES LLC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RefundPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 border-b border-hairline py-8 md:grid-cols-[16rem_1fr]">
      <h2 className="crumb">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function RefundPage() {
  return (
    <>
      <Header />
      <main>
        <PageChrome title="Refunds" descriptor={["Last updated", "August 27,", "2026"]} />
        <section className="px-3 py-6 md:px-6 md:py-10">
          <div className="content-shell mx-auto max-w-6xl px-6 py-16 md:px-12">
            <Block title="Scope">
              <p>
                This policy covers paid engagements with QB PRO SUPPORT SERVICES LLC. The signed
                services agreement for your engagement governs where it differs from this page.
              </p>
            </Block>
            <Block title="Scope sprints">
              <p>
                A scope sprint is billed up front. If you cancel before the sprint starts, we refund
                the fee in full. Once the sprint has started, the fee is non-refundable because the
                time is reserved.
              </p>
            </Block>
            <Block title="Fixed builds">
              <p>
                Build payments follow the milestones in your proposal. Work already delivered is not
                refundable. For milestones not yet started, you may cancel with written notice and
                we refund any prepaid amount for those milestones within 14 days.
              </p>
            </Block>
            <Block title="Deposits">
              <p>
                Scheduling deposits are refundable until work is scheduled on the calendar. Once a
                start date is locked, the deposit is applied to the first invoice and is
                non-refundable.
              </p>
            </Block>
            <Block title="How to request">
              <p>
                Email info@qbprosupportservices.com with your invoice number. Approved refunds go
                back to the original payment method within 14 days.
              </p>
            </Block>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
