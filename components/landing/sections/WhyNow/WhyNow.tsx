"use client";

import { SectionHeader } from "@/components/landing/sections/SectionHeader/SectionHeader";
import { useScrollReveal } from "@/components/landing/hooks/useScrollReveal";
import { QueryRow, type MarqueeQuery } from "./QueryRow";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

// Three representative buyer queries, one per AI assistant. Kept short so the
// text stays legible at 14px in a three-up row.
const featuredQueries: MarqueeQuery[] = [
  {
    alt: "ChatGPT",
    src: "/landing/images/ai-logos/chatgpt.svg",
    query: "What CRM would work well for a 10-person sales team?",
  },
  {
    alt: "Claude",
    src: "/landing/images/ai-logos/claude.png",
    query: "Best carry-on luggage that fits in overhead bins?",
  },
  {
    alt: "Perplexity",
    src: "/landing/images/ai-logos/perplexity.svg",
    query: "Any good glasses brands with virtual try-on?",
  },
];

export function WhyNow() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <>
      <SectionHeader number="01" label="Why now" subtitle="The shift" />
      <section id="why-now-section" ref={ref} className="bg-vc-surface relative">
        <div className="px-4 lg:px-8">
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <div
              className="border border-vc-default overflow-hidden"
              style={{ maxWidth: 1120, margin: "0 auto" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-vc-surface">
                {/* Stat panel. Corner-bracket ornament frames just the number,
                    drawn in white to sit on the gradient. */}
                <div
                  className={`lg:col-span-4 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center lg:border-r border-vc-default border-b lg:border-b-0 relative overflow-hidden transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    background: "linear-gradient(180deg, #3050F0 0%, rgb(131, 150, 246) 100%)",
                    transitionTimingFunction: EASE,
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none mkt-noise" />
                  <div
                    className="relative"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(8px)",
                      transition: `600ms ${EASE}`,
                    }}
                  >
                    <div className="relative inline-block px-3 py-1.5">
                      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/70 pointer-events-none" />
                      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/70 pointer-events-none" />
                      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/70 pointer-events-none" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/70 pointer-events-none" />
                      <div className="text-[44px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight text-white tabular-nums leading-none">
                        72%
                      </div>
                    </div>
                    <div className="mt-2 text-[10px] text-white/70 uppercase tracking-wider font-medium">
                      Capital One Shopping, 2026
                    </div>
                  </div>
                </div>

                {/* Headline */}
                <div
                  className={`lg:col-span-8 p-4 sm:p-6 lg:p-8 flex flex-col justify-center transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "100ms", transitionTimingFunction: EASE }}
                >
                  <h2 className="text-[17px] sm:text-[22px] lg:text-[26px] font-semibold text-vc-primary tracking-[-0.02em] leading-[1.25] mb-2">
                    AI writes the shortlist now
                  </h2>
                  <p className="text-[12px] sm:text-[13px] text-vc-secondary leading-relaxed max-w-lg">
                    Once buyers try AI, it&apos;s their go-to for research. It answers with a
                    handful of brands and no second page. Either it recommends you, or you never
                    enter the conversation.
                  </p>
                </div>
              </div>

              {/* Query row - nested inside the same bordered panel. */}
              <div className="bg-vc-surface border-t border-vc-default">
                <QueryRow queries={featuredQueries} isVisible={isVisible} delayMs={200} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
