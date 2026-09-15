import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items, startIndex = 1 }: { items: FaqItem[]; startIndex?: number }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="motion-card border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-6 py-7 text-left"
            >
              <span className="number-drift crumb mt-2 w-8 shrink-0" style={{ animationDelay: `${i * 0.25}s` }}>
                {String(i + startIndex).padStart(2, "0")}
              </span>
              <span className="flex-1 text-xl leading-snug md:text-2xl">{item.q}</span>
              <span className="mt-1 shrink-0 text-2xl font-light text-muted-foreground">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="max-w-3xl pb-8 pl-14 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export const coreFaqs: FaqItem[] = [
  {
    q: "What is QB Pro and what do you actually build?",
    a: "QB Pro is the public studio brand of QB PRO SUPPORT SERVICES LLC, a California limited liability company in Sacramento. We build production-ready web, mobile, and SaaS software for founders and operators — from a scoped MVP to auth, billing, admin, deploy, and a launch surface.",
  },
  {
    q: "How are you different from a software agency or a freelancer pile-up?",
    a: "Agencies build the spec. Freelancers leave you as the project manager. We are hired to own the product outcome: cut scope, choose architecture, ship something a future engineer can inherit.",
  },
  {
    q: "Who is this for?",
    a: "US-first founders and operators who need a product in production, not a demo. Non-technical buyers with a real problem and a budget. Teams that already have a Lovable, Bolt, or no-code prototype that cannot survive real users.",
  },
  {
    q: "Who is this not for?",
    a: "Anyone shopping a $2,000 app. Enterprise RFPs with a long committee. Staff-augmentation benches. Brand-only brochure sites.",
  },
  {
    q: "Can you start from our prototype?",
    a: "Yes. That is a common start. We keep what is right, rebuild what will break, and do not pretend a demo is an architecture.",
  },
  {
    q: "What does work typically cost and how long does it take?",
    a: "Scope sprint: typically $2,000–$3,000. Production MVP: typically $5,000–$7,000. Scale & maintain: typically $7,000–$9,000. Mobile, marketplaces, and regulated work change the number. You get a written proposal after the scope sprint.",
  },
  {
    q: "Who owns the IP?",
    a: "You do, under the services agreement, once invoices for that work are paid.",
  },
  {
    q: "Do you work outside the United States?",
    a: "Yes if the engagement is in English and billed in USD. The market we optimize for is the US.",
  },
  {
    q: "What stack do you use?",
    a: "Whatever is boring and correct. Often TypeScript, a modern React framework, Postgres, a managed cloud, Stripe when money moves.",
  },
  {
    q: "How do we start?",
    a: "Book a fit call. If it is a match, we run a paid scope sprint, then a fixed build.",
  },
];

export const workingFaqs: FaqItem[] = [
  {
    q: "How do we start?",
    a: "Fit call, then paid scope sprint, then fixed build.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes before a detailed working session. A web form is not an NDA.",
  },
  {
    q: "Do you do only marketing sites?",
    a: "Not as a standalone offer.",
  },
  {
    q: "Ongoing work after launch?",
    a: "Yes, as a separate retainer after handoff.",
  },
];
