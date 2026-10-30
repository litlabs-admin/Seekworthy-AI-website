import Image from "next/image";
import { site } from "@/content/site";

/** Mark + wordmark without the anchor in ui/Logo, since callers already wrap it in a link. */
export function BrandLogo(_: { imgClassName?: string; textClassName?: string }) {
  return (
    <span className="inline-flex items-center gap-[9px]">
      <Image src="/assets/brand/mark.png" alt="" width={277} height={258} className="h-[22px] w-[23.6px]" />
      <span className="t-wordmark whitespace-nowrap text-ink">{site.brand}</span>
    </span>
  );
}
