"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useEffect, useRef, useState } from "react";

export interface AccordionEntry {
  q: string;
  a: string;
}

const OPEN_DELAY = 150; // ms the cursor rests before an item opens (avoids opening items it only passes over)
const CLOSE_DELAY = 200; // ms after the cursor leaves before the item closes

/**
 * FAQ accordion with hover-to-expand.
 * - Mouse (hover + fine pointer): opens on hover after 150ms, closes 200ms after leaving; clicks don't toggle.
 * - Touch: tap toggles.  - Keyboard: Enter/Space toggles (Radix WAI-ARIA pattern).
 * All items start closed. Height, answer and icon animate (see .faq-* rules in globals.css).
 */
export function HoverAccordion({ items, idPrefix }: { items: readonly AccordionEntry[]; idPrefix: string }) {
  const [open, setOpen] = useState<string[]>([]);
  const [hoverDevice, setHoverDevice] = useState(false);
  const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHoverDevice(mq.matches);
    update();
    mq.addEventListener("change", update);
    const pending = timers.current;
    return () => {
      mq.removeEventListener("change", update);
      pending.forEach(clearTimeout);
    };
  }, []);

  const schedule = (value: string, next: boolean) => {
    const t = timers.current.get(value);
    if (t) clearTimeout(t);
    timers.current.set(
      value,
      setTimeout(
        () => setOpen((cur) => (next ? (cur.includes(value) ? cur : [...cur, value]) : cur.filter((v) => v !== value))),
        next ? OPEN_DELAY : CLOSE_DELAY,
      ),
    );
  };

  return (
    <Accordion.Root type="multiple" value={open} onValueChange={setOpen} className="grid-lines flex flex-col">
      {items.map((item, i) => {
        const value = `${idPrefix}-${i}`;
        return (
          <Accordion.Item
            key={item.q}
            value={value}
            className="faq-item group relative px-5 py-6 t:px-8 t:py-7"
            onPointerEnter={(e) => hoverDevice && e.pointerType === "mouse" && schedule(value, true)}
            onPointerLeave={(e) => hoverDevice && e.pointerType === "mouse" && schedule(value, false)}
          >
            <span aria-hidden="true" className="faq-hover pointer-events-none absolute inset-0 bg-surface" />
            <Accordion.Header asChild>
              <h3 className="relative">
                <Accordion.Trigger
                  className="flex w-full items-center gap-6 text-left"
                  // Mouse clicks (detail > 0) don't toggle on hover devices; keyboard Enter/Space (detail 0) still does.
                  onClick={(e) => {
                    if (hoverDevice && e.detail > 0) e.preventDefault();
                  }}
                >
                  <span className="faq-question t-h4 flex-1 text-ink">{item.q}</span>
                  <span aria-hidden="true" className="relative size-[22px] shrink-0 text-muted">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="faq-icon">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" className="faq-icon-v" />
                    </svg>
                  </span>
                </Accordion.Trigger>
              </h3>
            </Accordion.Header>
            <Accordion.Content className="faq-content relative overflow-hidden">
              <p className="faq-answer t-body max-w-[640px] pt-3 text-body">{item.a}</p>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
