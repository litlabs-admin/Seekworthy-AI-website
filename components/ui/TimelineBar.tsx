"use client";

import { motion, useReducedMotion } from "motion/react";

const FILL_OPACITY = [1, 0.72, 0.48, 0.28];
const DELAY = [0.1, 0.55, 1, 1.45];

/**
 * 4px bar on top of a timeline step. A --bg cover parked at left:420px starts at x −420 (hiding the fill)
 * and slides to x 0, revealing the accent fill left → right (0.8s, ease [.25,.1,.25,1]).
 */
export function TimelineBar({ index }: { index: number }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="relative h-1 w-full overflow-hidden">
      <div className="absolute inset-0 bg-accent" style={{ opacity: FILL_OPACITY[index] ?? 1 }} />
      {!reduce && (
        <motion.div
          className="absolute left-[420px] top-0 h-1 w-full bg-bg"
          initial={{ x: -420 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: DELAY[index] ?? 0, ease: [0.25, 0.1, 0.25, 1] }}
        />
      )}
    </div>
  );
}
