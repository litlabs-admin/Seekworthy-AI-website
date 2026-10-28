import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Template "Changelog": left header cell (416px, right rule) + entry rows (stage · body · badge). */
export function WorkCards() {
  const { work } = site;
  return (
    <Container aria-labelledby="work-title">
      <div className="grid grid-cols-1 d:grid-cols-[416px_minmax(0,1fr)]">
        <Reveal
          amount={0.3}
          className="hair d:hair-r relative flex flex-col gap-4 px-5 pb-10 pt-20 t:px-8 t:pb-12 t:pt-[100px] d:py-[120px]"
        >
          <h2 id="work-title" className="t-h2 text-ink">
            {work.headline}
          </h2>
          <p className="t-lead text-body">{work.intro}</p>
          <div className="pt-4">
            <Button href={work.button.href} variant="secondary">
              {work.button.label}
            </Button>
          </div>
        </Reveal>

        <div className="hair hair-t relative d:hair-none d:py-[88px]">
          <ol className="grid-lines flex flex-col">
            {work.cards.map((card, i) => (
              <Reveal
                key={card.stage}
                as="li"
                delay={i * 0.12}
                className="flex flex-col gap-[10px] px-5 py-7 t:grid t:grid-cols-[64px_minmax(0,1fr)_auto] t:gap-7 t:p-8"
              >
                <p className="t-small text-muted t:pt-[3px]">{card.stage}</p>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="t-h4 text-ink">{card.title}</h3>
                  <p className="t-body text-body">{card.text}</p>
                </div>
                <p className="t-h4 whitespace-nowrap text-accent-text t:text-right">{card.badge}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  );
}
