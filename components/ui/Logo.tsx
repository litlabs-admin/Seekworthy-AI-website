import Image from "next/image";
import { site } from "@/content/site";

/** Mark (22px tall slot) + wordmark, gap 9, as in the template's Logo component. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-[9px] ${className}`} aria-label={`${site.brand} home`}>
      <Image src="/assets/brand/mark.png" alt="" width={277} height={258} className="h-[22px] w-[23.6px]" />
      <span className="t-wordmark text-ink whitespace-nowrap">{site.brand}</span>
    </a>
  );
}
