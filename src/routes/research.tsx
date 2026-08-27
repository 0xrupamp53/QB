import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Header, PageChrome } from "@/components/site/chrome";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "R&D — QB Pro engineering lab" },
      {
        name: "description",
        content:
          "Research and engineering as one discipline at QB Pro: applied intelligence, on-device models, robotics, and embedded perception.",
      },
      { property: "og:title", content: "R&D — QB Pro engineering lab" },
      {
        property: "og:description",
        content: "Research and engineering as one discipline at QB Pro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

const LABS = [
  {
    kicker: "AI Lab",
    title: "AI Lab",
    body: "Foundation models, fine-tunes, and applied research in machine intelligence.",
    crumb: "qbpro / ai-lab",
    image: "https://ik.imagekit.io/poscnrrht/agentguard-architecture.png",
  },
  {
    kicker: "Robotics Lab",
    title: "Robotics Lab",
    body: "Embedded systems, perception, and control for autonomous machines.",
    crumb: "qbpro / robotics",
    image: "https://ik.imagekit.io/poscnrrht/Gemini_Generated_Image_mkqcunmkqcunmkqc.png",
  },
];

function ResearchPage() {
  return (
    <>
      <Header />
      <main className="paper-bands">
        <PageChrome
          title="Research"
          descriptor={["Research &", "engineering", "as one discipline"]}
        />

        <section className="grid gap-5 px-5 pb-32 pt-14 md:grid-cols-2 md:px-10">
          {LABS.map((l) => (
            <div
              key={l.title}
              className="paper-dots lift overflow-hidden rounded-xl border border-hairline p-8 hover:border-foreground/30 md:p-12"
            >
              <span className="rounded-md border border-hairline bg-background/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {l.kicker}
              </span>
              <h2 className="mt-12 text-5xl tracking-tight md:text-6xl">{l.title}</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                {l.body}
              </p>
              <p className="crumb mt-10">{l.crumb}</p>
              <div className="mt-8 overflow-hidden rounded-lg border border-hairline bg-background">
                <img
                  src={l.image}
                  alt={`${l.title} research at QB Pro`}
                  loading="lazy"
                  className="h-80 w-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </section>

        <section className="px-5 pb-32 md:px-10">
          <Link
            to="/contact"
            className="mx-auto block max-w-[104rem] font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            Work with the lab →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
