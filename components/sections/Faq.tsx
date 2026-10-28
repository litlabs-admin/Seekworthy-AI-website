import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { HoverAccordion } from "@/components/ui/HoverAccordion";
import { Reveal } from "@/components/ui/Reveal";

/** Template FAQ: left header cell + hover-to-expand accordion (all items start closed). */
export function Faq() {
  const { faq } = site;
  return (
    <Container id="faqs" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 d:grid-cols-[416px_minmax(0,1fr)]">
        <Reveal
          amount={0.3}
          className="hair d:hair-r relative flex flex-col gap-4 px-5 pb-10 pt-20 t:px-8 t:pb-12 t:pt-[100px] d:py-[120px]"
        >
          <h2 id="faq-title" className="t-h2 text-ink">
            {faq.headline}
          </h2>
          <p className="t-lead text-body">{faq.intro}</p>
        </Reveal>

        <div className="hair hair-t relative pb-10 t:pb-[60px] d:hair-none d:py-[88px]">
          <HoverAccordion items={faq.items} idPrefix="faq" />
        </div>
      </div>
    </Container>
  );
}
