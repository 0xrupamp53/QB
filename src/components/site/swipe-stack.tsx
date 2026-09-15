import { useCallback, useEffect, useRef, useState } from "react";

export type SwipeCard = { src: string; label: string; alt: string };

const THROW_THRESHOLD = 96; // px
const VELOCITY_THRESHOLD = 0.45; // px/ms
const FLY_MS = 420;
const SPRING = "transform 620ms cubic-bezier(0.16,1,0.3,1)";
const FLY_EASE = "cubic-bezier(0.32,0.72,0.35,1)";

function stackTransform(i: number) {
  return `translate3d(${i * 12}px, ${i * 14}px, 0) scale(${1 - i * 0.04})`;
}

/**
 * A stack of window-chrome preview cards. The front card is dragged with
 * direct DOM transforms driven by requestAnimationFrame (no React re-render
 * per pointer move), so the gesture tracks the cursor at full frame rate.
 */
export function SwipeStack({
  items,
  className = "",
}: {
  items: SwipeCard[];
  className?: string;
}) {
  const [order, setOrder] = useState(() => items.map((_, i) => i));
  const [grabbing, setGrabbing] = useState(false);

  const nodes = useRef<Map<number, HTMLDivElement | null>>(new Map());
  const frontRef = useRef<HTMLDivElement | null>(null);
  const startPt = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const lastPt = useRef({ x: 0, y: 0, t: 0 });
  const vel = useRef(0);
  const pid = useRef<number | null>(null);
  const dragging = useRef(false);
  const locked = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => () => {
    if (raf.current) cancelAnimationFrame(raf.current);
  }, []);

  const paint = useCallback(() => {
    raf.current = null;
    const el = frontRef.current;
    if (!el) return;
    const { x, y } = cur.current;
    const r = Math.max(-14, Math.min(14, x * 0.045));
    el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;

    // Cards behind ease forward as the front card leaves.
    const progress = Math.min(Math.abs(x) / (THROW_THRESHOLD * 2), 1);
    for (const [i, node] of nodes.current) {
      if (i === 0 || !node) continue;
      const t = Math.max(i - progress, 0);
      node.style.transform = stackTransform(t);
    }
  }, []);

  const schedule = useCallback(() => {
    if (raf.current == null) raf.current = requestAnimationFrame(paint);
  }, [paint]);

  const settleBehind = useCallback(() => {
    for (const [i, node] of nodes.current) {
      if (!node) continue;
      node.style.transition = SPRING;
      node.style.transform = stackTransform(i);
    }
  }, []);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (locked.current) return;
    const el = e.currentTarget;
    frontRef.current = el;
    pid.current = e.pointerId;
    el.setPointerCapture(e.pointerId);
    el.style.transition = "none";
    for (const [, node] of nodes.current) {
      if (node) node.style.transition = "none";
    }
    startPt.current = { x: e.clientX, y: e.clientY };
    lastPt.current = { x: e.clientX, y: e.clientY, t: performance.now() };
    cur.current = { x: 0, y: 0 };
    vel.current = 0;
    dragging.current = true;
    setGrabbing(true);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || pid.current !== e.pointerId) return;
    const now = performance.now();
    const dt = Math.max(now - lastPt.current.t, 1);
    vel.current =
      vel.current * 0.6 + ((e.clientX - lastPt.current.x) / dt) * 0.4;
    lastPt.current = { x: e.clientX, y: e.clientY, t: now };
    cur.current = {
      x: e.clientX - startPt.current.x,
      y: (e.clientY - startPt.current.y) * 0.6,
    };
    schedule();
  };

  const release = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || pid.current !== e.pointerId) return;
    dragging.current = false;
    setGrabbing(false);
    pid.current = null;
    if (raf.current) {
      cancelAnimationFrame(raf.current);
      raf.current = null;
    }

    const el = frontRef.current;
    if (!el) return;
    const { x, y } = cur.current;
    const thrown =
      Math.abs(x) > THROW_THRESHOLD || Math.abs(vel.current) > VELOCITY_THRESHOLD;

    if (!thrown) {
      el.style.transition = SPRING;
      el.style.transform = "translate3d(0px, 0px, 0) rotate(0deg)";
      settleBehind();
      return;
    }

    locked.current = true;
    const dir = x !== 0 ? Math.sign(x) : Math.sign(vel.current) || 1;
    const flyX = dir * (window.innerWidth * 0.9 + 320);
    el.style.transition = `transform ${FLY_MS}ms ${FLY_EASE}, opacity ${FLY_MS}ms linear`;
    el.style.transform = `translate3d(${flyX}px, ${y + 40}px, 0) rotate(${dir * 22}deg)`;
    el.style.opacity = "0";
    settleBehind();

    window.setTimeout(() => {
      el.style.transition = "none";
      el.style.transform = "translate3d(0px, 0px, 0) rotate(0deg)";
      el.style.opacity = "1";
      setOrder((o) => {
        if (o.length < 2) return o;
        const [front, ...rest] = o;
        return front === undefined ? o : [...rest, front];
      });
      cur.current = { x: 0, y: 0 };
      locked.current = false;
    }, FLY_MS);
  };

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ touchAction: "pan-y" }}
      onClick={(e) => e.stopPropagation()}
    >
      {order.map((idx, i) => {
        const item = items[idx];
        if (!item) return null;
        const isFront = i === 0;

        return (
          <div
            key={idx}
            ref={(n) => {
              nodes.current.set(i, n);
            }}
            className="absolute inset-0"
            style={{
              transform: stackTransform(i),
              transition: SPRING,
              zIndex: 100 - i,
              pointerEvents: isFront ? "auto" : "none",
              willChange: "transform",
            }}
          >
            <div
              className="h-full"
              {...(isFront
                ? {
                    onPointerDown: onDown,
                    onPointerMove: onMove,
                    onPointerUp: release,
                    onPointerCancel: release,
                  }
                : {})}
              style={{
                height: "100%",
                willChange: "transform",
                cursor: isFront ? (grabbing ? "grabbing" : "grab") : "default",
                transition: SPRING,
              }}
            >
              <div className="pointer-events-none flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-hairline bg-card shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-1.5 border-b border-hairline bg-card px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </span>
                </div>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full flex-1 object-cover object-top"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
