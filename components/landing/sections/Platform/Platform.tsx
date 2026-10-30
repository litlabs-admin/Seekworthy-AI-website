"use client";

import { useScrollReveal, scrollRevealEase } from "@/components/landing/hooks/useScrollReveal";
import { SectionHeader } from "@/components/landing/sections/SectionHeader/SectionHeader";
import { TrackMockup } from "./TrackMockup";
import { UnderstandMockup } from "./UnderstandMockup";
import { ImproveMockup } from "./ImproveMockup";
import { BuiltForStrip } from "./BuiltForStrip";

// Platform section. Three stacked bordered-panel rows ("Track" / "Understand"
// / "Improve") followed by the "Built for" strip, a sibling of the panel. Text
// columns stagger in two stages; each mockup reveals as one unit.
const EASE = scrollRevealEase;

function FeatureText({
  number,
  eyebrow,
  heading,
  body,
  isVisible,
}: {
  number: string;
  eyebrow: string;
  heading: string;
  body: string;
  isVisible: boolean;
}) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-5 sm:pt-8 lg:pt-10 flex flex-col bg-white">
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
        }}
      >
        <div
          className="text-[40px] sm:text-[56px] lg:text-[72px] font-semibold tracking-tighter tabular-nums select-none leading-none transition-colors duration-300 text-vc-tertiary group-hover:text-vc-accent"
          aria-hidden="true"
        >
          {number}
        </div>
      </div>
      <div
        className="mt-2 sm:mt-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 700ms ${EASE} 100ms, transform 700ms ${EASE} 100ms`,
        }}
      >
        <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-vc-accent mb-1 sm:mb-2">
          {eyebrow}
        </div>
        <h3 className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-vc-primary tracking-[-0.02em] leading-[1.15] mb-2 sm:mb-3">
          {heading}
        </h3>
        <p className="text-[12px] sm:text-[14px] text-vc-secondary leading-relaxed max-w-[380px]">
          {body}
        </p>
      </div>
    </div>
  );
}

export function Platform() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <>
      <SectionHeader number="02" label="Platform" subtitle="Features" />
      <section id="platform-section" ref={ref} className="bg-vc-surface relative">
        <div className="px-4 lg:px-8">
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
                maxWidth: 1120,
                margin: "0 auto",
              }}
            >
              <div className="border border-vc-default overflow-hidden bg-white">
                {/* Row 01 - Track (text left, mockup right) */}
                <div className="border-b border-vc-default">
                  <div className="group grid grid-cols-1 lg:grid-cols-[40%_60%]">
                    <div className="lg:border-r border-vc-default">
                      <FeatureText
                        number="01"
                        eyebrow="Track"
                        heading="Know every prompt that recommends you - and every one that names a rival"
                        body="Track who gets recommended across ChatGPT, Claude, Perplexity, Gemini, and more, on the questions your buyers actually ask. Your position, prompt by prompt."
                        isVisible={isVisible}
                      />
                    </div>
                    <div className="border-t lg:border-t-0 border-vc-default">
                      <TrackMockup isVisible={isVisible} />
                    </div>
                  </div>
                </div>

                {/* Row 02 - Understand (mockup left, text right; order flips via order-1/order-2) */}
                <div className="border-b border-vc-default">
                  <div className="group grid grid-cols-1 lg:grid-cols-[60%_40%]">
                    <div className="order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-vc-default">
                      <UnderstandMockup isVisible={isVisible} />
                    </div>
                    <div className="order-1 lg:order-2">
                      <FeatureText
                        number="02"
                        eyebrow="Understand"
                        heading="Understand why it recommends them and not you"
                        body="See which sources AI trusts when it makes a recommendation, which questions send buyers to a competitor, and exactly what's missing from your coverage."
                        isVisible={isVisible}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 03 - Improve (text left, mockup right; last row, no border-b) */}
                <div>
                  <div className="group grid grid-cols-1 lg:grid-cols-[40%_60%]">
                    <div className="lg:border-r border-vc-default">
                      <FeatureText
                        number="03"
                        eyebrow="Improve"
                        heading="Publish the evidence AI needs to recommend you"
                        body="Generate articles and FAQs that answer the questions buyers ask, scored against the same GEO signals AI engines reward, and publish straight to your channels."
                        isVisible={isVisible}
                      />
                    </div>
                    <div className="border-t lg:border-t-0 border-vc-default">
                      <ImproveMockup isVisible={isVisible} />
                    </div>
                  </div>
                </div>
              </div>

              <BuiltForStrip isVisible={isVisible} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
