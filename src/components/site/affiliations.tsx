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
    <section className="border-t border-hairline py-16">
      <p className="text-center text-sm text-muted-foreground">
        Engineers from and building with
      </p>
      <div className="mt-10 overflow-hidden">
        <div className="marquee-track items-center gap-14 px-7">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
