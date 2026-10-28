import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonRow, Footnote, SectionHead } from "@/components/ui/SectionHead";
import { SectionRule } from "@/components/ui/SectionRule";

/** Template "Results from teams like yours": 3 image cards with a metric row; hover fades a --surface layer in (0.25s). */
export function Results() {
  const { results } = site;
  return (
    <Container id="results" aria-labelledby="results-title">
      <SectionHead id="results-title" headline={results.headline} intro={results.intro} />
      <SectionRule>
        <Reveal amount={0.3}>
          <ul className="grid-lines grid grid-cols-1 d:grid-cols-3">
            {results.cards.map((card) => (
              <li key={card.title} className="group relative flex flex-col">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-surface opacity-0 transition-opacity duration-[250ms] ease-framer group-hover:opacity-100"
                />
                <div className="hair hair-b relative h-[220px] bg-surface-2 t:h-60">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(min-width: 1200px) 416px, (min-width: 810px) 960px, 358px"
                    className="object-cover"
                  />
                </div>
                <div className="relative flex flex-col gap-[10px] px-5 pt-6 t:px-8 t:pt-7">
                  <p className="t-small text-muted">{card.category}</p>
                  <h3 className="t-h3 text-ink transition-colors duration-[250ms] ease-framer group-hover:text-accent-text">{card.title}</h3>
                  <p className="t-body text-body">{card.text}</p>
                </div>
                <div className="min-h-7 flex-1" />
                <div className="relative flex items-baseline gap-[10px] px-5 pb-8 pt-5 t:px-8 t:pb-9 t:pt-6">
                  <span className="t-metric text-accent-text">{card.metric.value}</span>
                  <span className="t-small pl-1 text-muted">{card.metric.caption}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionRule>
      <Footnote>{results.note}</Footnote>
      <ButtonRow>
        <Button href={results.button.href} variant="secondary">
          {results.button.label}
        </Button>
      </ButtonRow>
    </Container>
  );
}
