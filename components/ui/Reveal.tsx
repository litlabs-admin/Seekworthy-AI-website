"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const EASE_FRAMER = [0.44, 0, 0.56, 1] as const;

/**
 * Template in-view effect: opacity 0 → 1 and y → 0, once.
 * Defaults are the section-block preset (y 16, 0.6s, amount 0.5). Feed rows use y 10 / 0.5s.
 */
export function Reveal({
  children,
  className,
  y = 16,
  duration = 0.6,
  delay = 0,
  amount = 0.5,
  as = "div",
  role,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  amount?: number;
  as?: "div" | "li" | "tr" | "tbody";
  role?: string;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      role={role}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={reduce ? { duration: 0.15 } : { duration, delay, ease: EASE_FRAMER }}
    >
      {children}
    </Tag>
  );
}

/** Applies a fixed per-item delay sequence (template: feed rows 0.15s apart, work rows 0.12s apart). */
export function Stagger<T>({
  items,
  step,
  render,
  ...reveal
}: {
  items: readonly T[];
  step: number;
  render: (item: T, index: number) => ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  amount?: number;
  as?: "div" | "li" | "tr";
}) {
  return (
    <>
      {items.map((item, i) => (
        <Reveal key={i} {...reveal} delay={i * step}>
          {render(item, i)}
        </Reveal>
      ))}
    </>
  );
}
