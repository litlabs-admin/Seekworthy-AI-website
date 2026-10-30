"use client";

import { useEffect, useState } from "react";
import { scrollRevealEase } from "@/components/landing/hooks/useScrollReveal";
import { TopChrome } from "./TopChrome";
import { VisibilityChartPanel } from "./VisibilityChartPanel";
import { RankingsList } from "./RankingsList";
import { CrawlersPanel } from "./CrawlersPanel";
import { ConversationsPanel } from "./ConversationsPanel";
import { ActionsPanel } from "./ActionsPanel";

// The mock product dashboard card directly under the hero headline. It is
// always in the initial viewport, so it uses a single fade on mount (matching
// Hero) rather than useScrollReveal, and every row and bar renders settled.
export function HeroBento() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative z-20 overflow-visible">
      <div className="mx-auto max-w-[1120px] px-4 pt-6 sm:pt-8 lg:px-8 lg:pt-10">
        <div className="mx-auto" style={{ maxWidth: 1280 }}>
          <div
            className="hero-bento-shell relative bg-vc-surface rounded-t-md overflow-hidden ring-1 ring-black/[0.07]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0px)" : "translateY(8px)",
              transition: `opacity 600ms ${scrollRevealEase}, transform 600ms ${scrollRevealEase}`,
              boxShadow:
                "rgba(15, 23, 42, 0.22) 0px -8px 28px -24px, rgba(15, 23, 42, 0.14) 0px 24px 60px -20px, rgba(15, 23, 42, 0.08) 0px 8px 24px -12px",
            }}
          >
            <TopChrome />

            {/* Row 1 */}
            <div className="grid grid-cols-12 border-b border-vc-hairline lg:min-h-[296px]">
              <VisibilityChartPanel />
              <RankingsList />
            </div>

            {/* Row 2 - desktop grid */}
            <div className="hidden md:grid md:grid-cols-12 md:min-h-[280px]">
              <div className="col-span-4 border-r border-vc-hairline">
                <CrawlersPanel />
              </div>
              <div className="col-span-4 border-r border-vc-hairline">
                <ConversationsPanel />
              </div>
              <div className="col-span-4">
                <ActionsPanel />
              </div>
            </div>

            {/* Row 2 - mobile snap-scroll carousel (same 3 panels) */}
            <div className="md:hidden relative">
              <div className="hero-bento-row2-scroll flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth">
                <div className="snap-start shrink-0 w-[84vw] border-r border-vc-hairline">
                  <CrawlersPanel />
                </div>
                <div className="snap-start shrink-0 w-[84vw] border-r border-vc-hairline">
                  <ConversationsPanel />
                </div>
                <div className="snap-start shrink-0 w-[84vw]">
                  <ActionsPanel />
                </div>
                <div className="shrink-0 w-4" aria-hidden="true" />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 bottom-0 w-10"
                style={{
                  background:
                    "linear-gradient(to left, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
