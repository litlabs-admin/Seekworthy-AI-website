import { AnswerFeed } from "@/components/sections/AnswerFeed";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Nav } from "@/components/sections/Nav";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { Pricing } from "@/components/sections/Pricing";
import { ProofPoints } from "@/components/sections/ProofPoints";
import { Results } from "@/components/sections/Results";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { WorkCards } from "@/components/sections/WorkCards";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AnswerFeed />
        <ProofPoints />
        <PlatformOverview />
        <HowItWorks />
        <WorkCards />
        <Results />
        <WhoItsFor />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
