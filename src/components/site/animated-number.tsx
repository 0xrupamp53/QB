import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({
  value,
  suffix = "",
  duration = 1800,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    let timer = 0;
    let start = 0;

    const run = () => {
      start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
        else timer = window.setTimeout(() => {
          setDisplay(0);
          frame = requestAnimationFrame(run);
        }, 2600);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        run();
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [duration, value]);

  return <span ref={ref} className="tabular-nums">{display}{suffix}</span>;
}