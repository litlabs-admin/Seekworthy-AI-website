import "./styles.css";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Footer } from "@/components/sections/Footer";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { EngineStrip } from "./sections/Hero/EngineStrip";
import { Hero } from "./sections/Hero/Hero";
import { HeroBento } from "./sections/HeroBento/HeroBento";
import { LearnResearch } from "./sections/LearnResearch/LearnResearch";
import { Nav } from "./sections/Nav/Nav";
import { Platform } from "./sections/Platform/Platform";
import { Revenue } from "./sections/Revenue/Revenue";
import { WhyNow } from "./sections/WhyNow/WhyNow";

/** The homepage. All styling is scoped under .vc-home; see styles.css. */
const Rails = () => (
  <>
    <div
      className="pointer-events-none fixed bottom-0 top-0 z-10 hidden border-r border-vc-default lg:block"
      style={{ left: "calc(50% - 560px)" }}
    />
    <div
      className="pointer-events-none fixed bottom-0 top-0 z-10 hidden border-l border-vc-default lg:block"
      style={{ right: "calc(50% - 560px)" }}
    />
  </>
);

/**
 * The homepage. Ported sections need the .vc-home token scope; the site's own
 * sections sit outside it because .vc-home rebinds tokens such as --color-muted.
 */
export default function Landing() {
  return (
    <div className="landing-type">
      <div className="vc-home sticky top-0 z-50">
        <Nav />
      </div>
      <main>
        <div className="vc-home relative bg-vc-surface">
          <Rails />
          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="mx-auto h-full w-full"
                style={{
                  maxWidth: 1120,
                  backgroundImage: "url(/landing/images/hero-bg-2.avif)",
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <Hero />
            <EngineStrip />
            <HeroBento />
          </div>
          <WhyNow />
          <Platform />
        </div>
        <PlatformOverview />
        <div className="vc-home relative bg-vc-surface">
          <Rails />
          <Revenue />
          <LearnResearch />
        </div>
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
