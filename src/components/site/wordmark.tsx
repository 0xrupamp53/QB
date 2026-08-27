/**
 * Edge-to-edge display wordmark, matching the reference hero: real grotesk
 * letterforms (no stretching), sized so each line spans the full viewport width,
 * revealed letter-by-letter sliding up from behind its own mask.
 *
 * Pass a multi-word string to `lines` split across rows for maximum cap height.
 */
export function FillText({
  text,
  lines,
  className = "",
  weight = 700,
  animate = true,
  tight = false,
}: {
  text: string;
  lines?: string[];
  className?: string;
  weight?: number;
  animate?: boolean;
  /** Reduce the leading between stacked lines. */
  tight?: boolean;
}) {
  const rows = lines && lines.length ? lines : [text];
  let index = 0;

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ lineHeight: tight ? 0.8 : 0.86 }}
      aria-label={text}
      role="img"
    >
      {rows.map((row, r) => {
        const chars = row.split("");
        // average glyph advance ≈ 0.545em for Space Grotesk bold
        const fontSize = `calc((100vw - 4.5rem) / ${(Math.max(chars.length, 1) * 0.545).toFixed(3)})`;
        return (
          <div
            key={r}
            className="flex w-full items-end justify-start whitespace-nowrap"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: weight,
              fontSize,
              letterSpacing: "-0.035em",
            }}
          >
            {chars.map((c, i) => {
              const delay = index++ * 80;
              return (
                <span key={`${r}-${i}`} className="inline-block overflow-hidden" aria-hidden="true">
                  <span
                    className={`inline-block ${animate ? "char-rise" : ""}`}
                    style={animate ? { animationDelay: `${delay}ms` } : undefined}
                  >
                    {c === " " ? "\u00A0" : c}
                  </span>
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
