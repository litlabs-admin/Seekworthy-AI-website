import { engines, site } from "@/content/site";
import { EngineLogo } from "@/components/ui/EngineLogo";
import { SectionRule } from "@/components/ui/SectionRule";

/** Cell spans on a 12-column grid, as in the template: tablet = label + 3 / 2 engines; phone = 2 columns. */
const engineSpan = (i: number) => (i < 3 ? "col-span-6 t:col-span-3" : "col-span-6 t:col-span-6");

/** Bottom row of the hero: "Track your visibility across" + engine cells (desktop 248px label + 5 × 1fr). */
export function EngineStrip() {
  return (
    <SectionRule>
      <ul className="grid-lines grid grid-cols-12 d:grid-cols-[248px_repeat(5,minmax(0,1fr))]">
        <li className="col-span-6 flex h-[60px] items-center px-5 t:col-span-3 t:h-16 t:px-8 d:col-span-1 d:h-[72px]">
          <span className="t-small text-muted">{site.hero.engineLabel}</span>
        </li>
        {engines.map((e, i) => (
          <li
            key={e.id}
            className={`${engineSpan(i)} flex h-[60px] items-center justify-start px-5 t:h-16 t:justify-center t:px-8 d:col-span-1 d:h-[72px] d:px-2`}
          >
            <EngineLogo engine={e} size="strong" />
          </li>
        ))}
      </ul>
    </SectionRule>
  );
}
