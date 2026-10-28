"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const SPEED = 30; // px per second (template tickerEffectVelocity: 30)

/**
 * Seamless left-drifting ticker. Gap 72px, edge mask 0 → 6.6% … 93.5% → 100%, stops on hover.
 * The track is duplicated enough times to cover the viewport; animation distance = one set width.
 */
export function Marquee({ children, className = "" }: { children: ReactNode; className?: string }) {
  const setRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const el = setRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.getBoundingClientRect().width + 72; // set width incl. the gap that follows it
      setShift(w);
      const host = el.parentElement?.parentElement?.getBoundingClientRect().width ?? 0;
      setCopies(Math.max(2, Math.ceil(host / w) + 1));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={`marquee relative flex h-9 w-full items-center overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, #0000 0%, #000 6.6%, #000 93.5%, #0000 100%)",
        WebkitMaskImage: "linear-gradient(90deg, #0000 0%, #000 6.6%, #000 93.5%, #0000 100%)",
      }}
    >
      <div
        className="marquee-track flex shrink-0 items-center gap-[72px]"
        style={
          shift
            ? ({ "--marquee-shift": `-${shift}px`, animationDuration: `${shift / SPEED}s` } as React.CSSProperties)
            : undefined
        }
      >
        {Array.from({ length: copies }, (_, i) => (
          <div key={i} ref={i === 0 ? setRef : undefined} className="flex shrink-0 items-center gap-[72px]" aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
