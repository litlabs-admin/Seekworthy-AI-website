import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EngineStrip } from "./EngineStrip";

export function Hero() {
  const { hero } = site;
  return (
    <Container id="top" aria-labelledby="hero-title">
      <div className="flex w-full flex-col items-start gap-5 px-5 pb-16 pt-[72px] t:items-center t:px-8 t:pb-[72px] t:pt-[100px] t:text-center d:pb-20 d:pt-[120px]">
        <h1 id="hero-title" className="t-display w-full max-w-[820px] text-ink">
          {hero.headline}
        </h1>
        <p className="t-lead-l w-full max-w-[580px] text-body">{hero.support}</p>
        <div className="flex flex-col items-start gap-[10px] pt-3 t:flex-row t:items-center">
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
          <Button href={hero.secondary.href} variant="secondary">
            {hero.secondary.label}
          </Button>
        </div>
        <p className="t-small text-muted">{hero.smallPrint}</p>
      </div>

      <EngineStrip />
    </Container>
  );
}
