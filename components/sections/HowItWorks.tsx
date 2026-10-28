import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { SectionRule } from "@/components/ui/SectionRule";
import { TimelineBar } from "@/components/ui/TimelineBar";

/** Template "What the first three months look like": 4 step cells with a progress bar (tablet 3 + 1, phone stacked). */
export function HowItWorks() {
  const { howItWorks } = site;
  return (
    <Container id="how-it-works" aria-labelledby="how-title">
      <SectionHead id="how-title" headline={howItWorks.headline} intro={howItWorks.intro} />
      <SectionRule>
        <ol className="grid-lines grid grid-cols-1 t:grid-cols-3 d:grid-cols-4">
          {howItWorks.steps.map((step, i) => (
            <li key={step.label} className={`flex flex-col ${i === 3 ? "t:col-span-3 d:col-span-1" : ""}`}>
              <TimelineBar index={i} />
              <div className="flex flex-col gap-[10px] px-5 pb-11 pt-7 t:px-8 t:pb-[72px] t:pt-8 d:pb-[120px]">
                <p className="t-small text-accent-text">{step.label}</p>
                <h3 className="t-h3 text-ink">{step.title}</h3>
                <p className="t-body text-body">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionRule>
    </Container>
  );
}
