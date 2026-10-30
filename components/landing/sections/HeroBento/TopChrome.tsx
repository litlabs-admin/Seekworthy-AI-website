import { faviconUrl } from "@/components/landing/faviconUrl";
import { ChevronDownIcon } from "./icons";

// Header bar: a brand switcher button (logo + name + chevron) on the
// left, the live score + delta + rank badge on the right. The switcher is
// static: this is a mock dashboard with a fictional sample brand.
export function TopChrome() {
  return (
    <div
      className="relative flex items-center justify-between h-12 px-5 border-b border-vc-hairline"
      style={{
        background:
          "linear-gradient(180deg, rgba(238,241,254,0.55) 0%, rgba(255,255,255,0) 68%), #ffffff",
      }}
    >
      <button
        type="button"
        className="flex items-center gap-2 -ml-1.5 px-1.5 py-1 rounded-[6px] hover:bg-vc-row-hover transition-colors duration-150 cursor-pointer"
      >
        <span
          className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] bg-white ring-1 ring-[rgba(22,22,46,0.08)]"
          style={{ boxShadow: "var(--hb-shadow-raised)" }}
        >
          <img src={faviconUrl("venturepr.com", 32)} alt="" className="h-[15px] w-[15px] rounded-[3px] object-contain" />
        </span>
        <span className="text-[13px] font-semibold text-vc-primary tracking-tight">VenturePR</span>
        <ChevronDownIcon size={12} className="text-vc-tertiary" />
      </button>

      <div className="flex items-center gap-2.5 leading-none">
        <div className="flex items-baseline gap-2">
          <span className="text-[20px] font-semibold text-vc-primary tabular-nums tracking-[-0.03em]">
            83
          </span>
          <span className="hb-pill hb-pill-up">+3.3</span>
        </div>
        <span className="hb-pill hb-pill-neutral">
          <span className="font-semibold text-vc-primary">#2</span>
          <span className="ml-[3px] text-vc-label">of 9</span>
        </span>
      </div>
    </div>
  );
}
