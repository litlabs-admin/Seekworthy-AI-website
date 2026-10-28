import type { PillStatus } from "@/content/site";

const styles: Record<PillStatus, string> = {
  Cited: "bg-accent-tint text-accent-ink",
  Named: "bg-fill-hover text-ink",
  "Fix queued": "bg-fill-hover text-ink",
  Missing: "hair hair-all hair-strong text-muted",
};

/** Status pill: padding 4 10, radius 6, Small strong. */
export function Pill({ status }: { status: PillStatus }) {
  return (
    <span className={`relative inline-flex h-[26px] items-center rounded-[6px] px-[10px] t-small-strong whitespace-nowrap ${styles[status]}`}>
      {status}
    </span>
  );
}
