import { engines, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EngineIcons } from "@/components/ui/EngineLogo";
import { LinesIcon, ShareIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonRow, SectionHead } from "@/components/ui/SectionHead";
import { SectionRule } from "@/components/ui/SectionRule";

/** The template's three service marks: engine icons, "lines" and "share" (accent, stroke 1.8). */
function Mark({ index }: { index: number }) {
  if (index === 0) return <EngineIcons engines={engines} size={18} gap={8} />;
  const Icon = index === 1 ? LinesIcon : ShareIcon;
  return <Icon width={28} height={28} strokeWidth={1.8} className="text-accent-text d:size-[28px] max-d:size-6" />;
}

export function PlatformOverview() {
  const { platform } = site;
  return (
    <Container aria-labelledby="platform-title">
      <SectionHead id="platform-title" headline={platform.headline} intro={platform.intro} />
      <SectionRule>
        <Reveal amount={0.3}>
          <ul className="grid-lines grid grid-cols-1 d:grid-cols-3">
            {platform.cards.map((card, i) => (
              <li key={card.title} className="flex flex-col gap-[10px] px-5 py-8 t:gap-3 t:px-8 t:pb-12 t:pt-10">
                <div className="flex h-7 items-center">
                  <Mark index={i} />
                </div>
                <h3 className="t-h3 pt-3 text-ink">{card.title}</h3>
                <p className="t-body text-body">{card.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionRule>
      <ButtonRow>
        <Button href={platform.button.href} variant="secondary">
          {platform.button.label}
        </Button>
      </ButtonRow>
    </Container>
  );
}
