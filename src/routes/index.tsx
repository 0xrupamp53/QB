import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { COPYRIGHT_LINES, Footer, Header, MetaCell } from "@/components/site/chrome";
import { FillText } from "@/components/site/wordmark";
import { Affiliations } from "@/components/site/affiliations";
import { FaqAccordion, coreFaqs } from "@/components/site/faq-accordion";
import { chapters } from "@/data/portfolio";
import { Reveal } from "@/components/site/reveal";
import { SwipeStack, type SwipeCard } from "@/components/site/swipe-stack";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QB Pro — Product Studio & Engineering Lab" },
      {
        name: "description",
        content:
          "QB Pro Support Services is a product studio and engineering lab. Web, mobile, backend, and AI systems shipped to production in weeks, not quarters.",
      },
      { property: "og:title", content: "QB Pro — Product Studio & Engineering Lab" },
      {
        property: "og:description",
        content:
          "Web, mobile, backend, and AI systems shipped to production. Not vendors — an in-house tech team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const STATES = [
  { key: "A", h1: "A California product studio & engineering lab" },
  { key: "B", h1: "A group of young, AI-native engineers and builders" },
  { key: "C", h1: "We help growing companies ship real software" },
  { key: "D", h1: "Not as vendors, but like an in-house tech team" },
] as const;

function Intro({ onDismiss, onLeaveStart }: { onDismiss: () => void; onLeaveStart: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      setLeaving(true);
      onLeaveStart();
      // let the overlay glide away, then hand the page over
      window.setTimeout(onDismiss, 900);
    };
    const t = setTimeout(() => {
      window.addEventListener("wheel", go, { once: true, passive: true });
      window.addEventListener("touchmove", go, { once: true, passive: true });
      window.addEventListener("keydown", go, { once: true });
      window.addEventListener("click", go, { once: true });
    }, 900);
    return () => {
      clearTimeout(t);
      window.removeEventListener("wheel", go);
      window.removeEventListener("touchmove", go);
      window.removeEventListener("keydown", go);
      window.removeEventListener("click", go);
    };
  }, [onDismiss, onLeaveStart]);

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col justify-end overflow-hidden bg-background px-5 pb-6 md:px-10"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "translateY(-6vh)" : "translateY(0)",
        transition:
          "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      <div className="mx-auto mb-auto flex w-full max-w-[104rem] flex-wrap justify-end gap-y-6 pt-32">
        <MetaCell lines={["You are", "now", "entering"]} />
        <MetaCell lines={["Scroll", "to", "explore"]} />
        <MetaCell lines={["Product studio &", "engineering lab"]} />
        <MetaCell lines={COPYRIGHT_LINES} last />
      </div>
      <div className="mx-auto w-full max-w-[104rem] text-foreground">
        <FillText text="QB Pro Support" />
      </div>
    </div>
  );
}


function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(Math.max(-rect.top / total, 0), 0.999);
      setMode(Math.floor(p * STATES.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-auto absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-4 md:left-6">
          {STATES.map((s, i) => (
            <span
              key={s.key}
              className={`font-mono text-xs transition-colors ${
                i === mode ? "text-foreground" : "text-muted-foreground/50"
              }`}
            >
              {i === mode ? `[${s.key}]` : s.key}
            </span>
          ))}
        </div>

        <h2
          key={mode}
          className="fade-up mx-auto max-w-5xl px-10 text-center text-[8vw] font-medium leading-[1.12] tracking-tight md:text-[3.6rem]"
        >
          {STATES[mode]!.h1}
        </h2>

        <div className="absolute inset-x-0 bottom-24 flex justify-between px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:px-10">
          <span>Software Studio</span>
          <span>Engineering Lab</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [intro, setIntro] = useState(true);
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    document.body.style.overflow = intro && locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [intro, locked]);

  const showcase = chapters
    .flatMap((c) => c.items)
    .slice(0, 3)
    .map((c) => c.image);

  return (
    <>
      <Header />
      {intro ? (
        <Intro onDismiss={() => setIntro(false)} onLeaveStart={() => setLocked(false)} />
      ) : null}
      <main className="paper-bands">
        {/* Hero wordmark, edge to edge */}
        <section className="px-5 pb-16 pt-10 md:px-10">
          <div className="mx-auto flex w-full max-w-[104rem] flex-wrap justify-end gap-y-6 pb-10">
            <MetaCell lines={["You are", "now", "entering"]} />
            <MetaCell lines={["Scroll", "to", "explore"]} />
            <MetaCell lines={["Product studio &", "engineering lab"]} />
            <MetaCell lines={COPYRIGHT_LINES} last />
          </div>
          <div className="mx-auto w-full max-w-[104rem] text-foreground">
            <FillText text="QB Pro Support" animate={false} />
          </div>
        </section>

        <Affiliations />

        <Manifesto />

        {/* Destination cards */}
        <section className="grid gap-5 px-5 pb-24 md:grid-cols-2 md:px-10">
          <Reveal>
          <DestinationCard
            kicker="Client Portfolio"
            title="Portfolio"
            body="Discover the products and platforms we have built across Logistics, Manufacturing, Defense, Real Estate, and SaaS."
            crumb="qbpro / clients"
            to="/portfolio"
            images={showcase}
          />
          </Reveal>
          <Reveal delay={120}>
          <DestinationCard
            kicker="Engineering Lab"
            title="R&D"
            body="Explore our engineering research, experiments, and open tooling built at the frontier of applied intelligence."
            crumb="qbpro / research"
            to="/research"
            images={[
              "https://ik.imagekit.io/poscnrrht/agentguard-architecture.png",
              "https://ik.imagekit.io/poscnrrht/Gemini_Generated_Image_mkqcunmkqcunmkqc.png",
            ]}
          />
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="border-t border-hairline px-5 py-24 md:px-10">
          <div className="mx-auto max-w-[104rem]">
            <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>{"{ FAQ }"}</span>
              <span className="hidden md:inline">{"{ QB Pro }"}</span>
              <span>Support</span>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <h2 className="text-[13vw] leading-[0.92] tracking-tight md:text-[5rem]">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="max-w-md self-end text-lg leading-relaxed text-muted-foreground">
                Got questions? We have answers. If you do not find what you are looking for, feel
                free to reach out.
              </p>
            </div>
            <Reveal className="mt-20">
              <FaqAccordion items={coreFaqs} />
            </Reveal>
            <div className="mt-12 flex flex-wrap justify-between gap-8">
              <span className="crumb">// end of section</span>
              <Link to="/faq" className="crumb hover:text-foreground">
                View All →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DestinationCard({
  kicker,
  title,
  body,
  crumb,
  to,
  images,
}: {
  kicker: string;
  title: string;
  body: string;
  crumb: string;
  to: "/portfolio" | "/research";
  images: string[];
}) {
  return (
    <Link
      to={to}
      className="paper-dots lift group block h-full overflow-hidden rounded-xl border border-hairline p-8 hover:border-foreground/30 md:p-12"
    >
      <div className="flex items-start justify-between">
        <span className="rounded-md border border-hairline bg-background/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {kicker}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-background transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
      <h2 className="mt-12 text-5xl tracking-tight md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{body}</p>
      <p className="crumb mt-10">{crumb}</p>
      <SwipeStack
        className="mt-8 h-72 md:h-96"
        items={images.map((src, i) => ({
          src,
          label: crumb,
          alt: `${title} preview ${i + 1}`,
        })) as SwipeCard[]}
      />
    </Link>
  );
}
