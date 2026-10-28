import type { ReactNode } from "react";

/** One 11×11 "+" mark: two 1px bars in --faint (template Crosshair component). */
function Crosshair({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -top-[6px] z-[2] block size-[11px] ${side === "left" ? "-left-[6px]" : "-right-[6px]"}`}
    >
      <span className="absolute left-[5px] top-0 h-[11px] w-px bg-faint" />
      <span className="absolute left-0 top-[5px] h-px w-[11px] bg-faint" />
    </span>
  );
}

/** Crosshairs on both rails at the top edge of the positioned parent. */
export function Crosshairs() {
  return (
    <>
      <Crosshair side="left" />
      <Crosshair side="right" />
    </>
  );
}

/**
 * A full-width row inside the rails with a top hairline and crosshairs where it meets the rails.
 */
export function SectionRule({
  children,
  className = "",
  crosshairs = true,
}: {
  children: ReactNode;
  className?: string;
  crosshairs?: boolean;
}) {
  return (
    <div className={`hair hair-t relative w-full ${className}`}>
      {crosshairs && <Crosshairs />}
      {children}
    </div>
  );
}
