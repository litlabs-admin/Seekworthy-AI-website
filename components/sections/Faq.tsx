"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MinusIcon, PlusIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

/** Template FAQ: left header cell + accordion items (28/32 padding). First item open; items toggle independently. */
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
          <Accordion.Root type="multiple" defaultValue={["faq-0"]} className="grid-lines flex flex-col">
            {faq.items.map((item, i) => (
              <Accordion.Item key={item.q} value={`faq-${i}`} className="group px-5 py-6 t:px-8 t:py-7">
                <Accordion.Header asChild>
                  <h3>
                    <Accordion.Trigger className="flex w-full items-center gap-6 text-left">
                      <span className="t-h4 flex-1 text-ink">{item.q}</span>
                      <span className="relative size-[22px] shrink-0 text-muted">
                        <PlusIcon width={22} height={22} strokeWidth={1.6} className="absolute inset-0 group-data-[state=open]:hidden" />
                        <MinusIcon width={22} height={22} strokeWidth={1.6} className="absolute inset-0 hidden group-data-[state=open]:block" />
                      </span>
                    </Accordion.Trigger>
                  </h3>
                </Accordion.Header>
                <Accordion.Content className="faq-content overflow-hidden">
                  <p className="t-body max-w-[640px] pt-3 text-body">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </Container>
  );
}
