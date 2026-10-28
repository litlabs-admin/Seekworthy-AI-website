import { engines, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EngineIcons } from "@/components/ui/EngineLogo";
import { Reveal } from "@/components/ui/Reveal";

/** Template "Final CTA": --surface band, engine icons (24, gap 10), H2, support, buttons, small print. */
export function ClosingCta() {
  const { cta } = site;
  return (
    <Container aria-labelledby="cta-title" railsClassName="bg-surface">
      <Reveal
        amount={0.3}
        className="flex flex-col items-start px-5 py-20 t:items-center t:px-8 t:py-[100px] t:text-center d:py-[120px]"
      >
        <div className="pb-8">
          <EngineIcons engines={engines} size={24} gap={10} />
        </div>
        <h2 id="cta-title" className="t-h2 max-w-[640px] text-balance text-ink">
          {cta.headline}
        </h2>
        <p className="t-lead max-w-[560px] pt-4 text-body">{cta.support}</p>
        <div className="flex flex-col items-start gap-[10px] pt-8 t:flex-row t:items-center">
          <Button href={cta.primary.href}>{cta.primary.label}</Button>
          <Button href={cta.secondary.href} variant="secondary">
            {cta.secondary.label}
          </Button>
        </div>
        <p className="t-small pt-5 text-muted">{cta.smallPrint}</p>
      </Reveal>
    </Container>
  );
}
