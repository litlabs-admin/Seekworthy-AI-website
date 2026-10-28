import { Reveal } from "./Reveal";

/** Template "Section heading" block: padding 80/20/48 → 100/32/56 → 120/32/60, max-width 720, fades up once in view. */
export function SectionHead({ id, headline, intro }: { id?: string; headline: string; intro: string }) {
  return (
    <Reveal className="flex w-full max-w-[720px] flex-col gap-[14px] px-5 pb-12 pt-20 t:gap-4 t:px-8 t:pb-14 t:pt-[100px] d:pb-[60px] d:pt-[120px]">
      <h2 id={id} className="t-h2 text-ink">
        {headline}
      </h2>
      <p className="t-lead text-body">{intro}</p>
    </Reveal>
  );
}

/** Row under a grid that holds a section button: padding 28/20/80 → 32/32/100 → 32/32/120, top hairline. */
export function ButtonRow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`hair hair-t relative w-full px-5 pb-20 pt-7 t:px-8 t:pb-[100px] t:pt-8 d:pb-[120px] ${className}`}>{children}</div>
  );
}

/** Small footnote row: Small / --text-muted, soft top rule. */
export function Footnote({ children }: { children: React.ReactNode }) {
  return (
    <div className="hair hair-t hair-soft relative w-full px-5 py-4 t:px-8 t:py-[14px]">
      <p className="t-small text-muted">{children}</p>
    </div>
  );
}
