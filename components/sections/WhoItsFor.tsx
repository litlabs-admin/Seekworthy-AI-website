import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SearchIcon } from "@/components/ui/icons";
import { LiveDot } from "@/components/ui/LiveDot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Crosshairs } from "@/components/ui/SectionRule";

/** Template "What clients say": AI prompt bar, answer with numbered chips, then 3 numbered cells. */
export function WhoItsFor() {
  const { audiences } = site;
  return (
    <Container aria-labelledby="audiences-title">
      <SectionHead id="audiences-title" headline={audiences.headline} intro={audiences.intro} />

      <Reveal amount={0.3} className="hair hair-t hair-b relative flex flex-wrap items-center gap-x-[14px] gap-y-[10px] bg-surface px-5 py-[18px] t:flex-nowrap t:px-8 t:py-[22px]">
        <Crosshairs />
        <SearchIcon width={20} height={20} strokeWidth={1.6} className="shrink-0 text-muted" />
        <p className="t-prompt min-w-0 flex-1 text-ink">{audiences.question}</p>
        <p className="flex items-center gap-1 t-small text-muted">
          <LiveDot />
          {audiences.count}
        </p>
      </Reveal>

      <div className="hair hair-b relative flex flex-col gap-4 px-5 pb-8 pt-7 t:px-8 t:pb-11 t:pt-10">
        <p className="t-prompt max-w-[900px] text-ink">{audiences.summary}</p>
        <ul className="flex flex-wrap gap-2">
          {audiences.items.map((item, i) => (
            <li key={item.name} className="flex items-center gap-2 rounded-[6px] bg-accent-tint py-[6px] pl-[6px] pr-3">
              <span className="flex size-[22px] items-center justify-center rounded-[4px] bg-accent t-small-strong text-on-accent">{i + 1}</span>
              <span className="t-small-strong text-accent-ink">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="grid-lines grid grid-cols-1 d:grid-cols-3">
        {audiences.items.map((item, i) => (
          <li key={item.name} className="flex flex-col px-5 pb-8 pt-7 t:px-8 t:pb-10 t:pt-8">
            <div className="flex flex-1 flex-col gap-[18px] pb-7 t:pb-9">
              <span className="flex size-[26px] items-center justify-center rounded-[5px] bg-accent t-small-strong text-on-accent">{i + 1}</span>
              <p className="t-lead-l text-ink">{item.text}</p>
            </div>
            <p className="t-ui text-ink">{item.name}</p>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="hair hair-t relative h-20 t:h-[100px] d:h-[120px]" />
    </Container>
  );
}
