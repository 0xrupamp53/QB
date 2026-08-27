import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — QB Pro Support Services" },
      {
        name: "description",
        content:
          "The people behind QB Pro Support Services LLC: senior product engineers who design, build, and ship software end to end.",
      },
      { property: "og:title", content: "Team — QB Pro Support Services" },
      { property: "og:description", content: "The people building QB Pro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const VALUES = [
  {
    t: "Innovation First",
    d: "We adopt current engineering and AI practice to give clients a real edge, not a slide deck.",
  },
  {
    t: "Results Driven",
    d: "We optimise for measurable outcomes: shipped scope, uptime, conversion, and cost per workflow.",
  },
  {
    t: "Full Ownership",
    d: "From concept to deployment we take complete responsibility for delivering the system.",
  },
  {
    t: "Scalability",
    d: "We build systems that grow with the business, with clean handover and no lock-in.",
  },
];

function TeamPage() {
  return (
    <>
      <Header />
      <main className="paper-bands">
        <PageChrome title="Team" descriptor={["The people", "building", "QB Pro"]} />

        <section className="px-5 py-20 md:px-10">
          <div className="mx-auto max-w-[104rem]">
            <p className="crumb">// about</p>
            <h2 className="mt-8 max-w-4xl text-4xl leading-tight tracking-tight md:text-6xl">
              Building production software, end to end
            </h2>
            <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                QB Pro Support Services LLC is a California product studio. We design, build, and
                ship software for founders and operating companies — web, mobile, backend, data,
                and applied AI.
              </p>
              <p>
                We are not a staffing shop. Senior engineers work directly on your product, with no
                layers of project managers between the decision and the code.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-hairline px-5 py-20 md:px-10">
          <div className="mx-auto max-w-[104rem]">
            <p className="crumb">// principles</p>
            <h2 className="mt-8 text-4xl tracking-tight md:text-5xl">Our Values</h2>
            <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => (
                <div key={v.t} className="bg-background p-8">
                  <h3 className="text-2xl tracking-tight">{v.t}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-hairline px-5 py-20 md:px-10">
          <div className="mx-auto max-w-[104rem]">
            <p className="crumb">// team</p>
            <h2 className="mt-8 text-4xl tracking-tight md:text-5xl">The Team</h2>
            <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2">
              <div className="bg-background p-10">
                <h3 className="text-3xl tracking-tight">Founder's Office</h3>
                <p className="crumb mt-3">Founder & Managing Member</p>
                <ul className="mt-6 space-y-2 leading-relaxed text-muted-foreground">
                  <li>· Manager, QB Pro Support Services LLC</li>
                  <li>· Full-stack product engineering across web, mobile, and cloud</li>
                  <li>· Leads scoping, architecture, and delivery on every engagement</li>
                </ul>
                <a
                  className="crumb mt-8 inline-block hover:text-foreground"
                  href="mailto:info@qbprosupportservices.com"
                >
                  ›info@qbprosupportservices.com
                </a>
              </div>
              <div className="bg-background p-10">
                <h3 className="text-3xl tracking-tight">Engineering Pod</h3>
                <p className="crumb mt-3">Frontend · Backend · Mobile · Data</p>
                <ul className="mt-6 space-y-2 leading-relaxed text-muted-foreground">
                  <li>· React, Next.js, TypeScript, Tailwind for interfaces</li>
                  <li>· Node, Python, Postgres, Redis for services and data</li>
                  <li>· iOS, Android, and Flutter for mobile delivery</li>
                  <li>· AWS, Google Cloud, and edge runtimes for infrastructure</li>
                </ul>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-20 inline-block rounded-md border border-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background"
            >
              Talk to the founder →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
