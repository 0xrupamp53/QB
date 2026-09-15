const ROW = [
  "AWS",
  "Google Cloud",
  "Microsoft Azure",
  "OpenAI",
  "Anthropic",
  "NVIDIA",
  "Vercel",
  "Stripe",
  "Supabase",
  "PostgreSQL",
  "React",
  "Flutter",
  "Kubernetes",
  "Apple",
  "Android",
];

export function Affiliations() {
  const items = [...ROW, ...ROW];
  return (
    <section className="px-3 py-3 md:px-6 md:py-6">
      <div className="content-shell ambient-panel overflow-hidden bg-accent py-8">
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Technology we build with</p>
      <div className="mt-7 overflow-hidden">
        <div className="marquee-track items-center gap-14 px-7">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
