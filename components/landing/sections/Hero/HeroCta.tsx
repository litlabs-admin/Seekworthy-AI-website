import Link from "next/link";

import { ArrowRightIcon } from "@/components/landing/icons";

// The single standalone hero CTA. It navigates to /signup.
export function HeroCta() {
  return (
    <div className="flex justify-center">
      {/* The page's single conversion CTA - the BLUE tier of the two-tier
          button system (the nav CTA is the subtle accent wash). Flat solid
          fill, no gradient, no shadow. */}
      <Link
        href="/signup"
        className="shrink-0 h-11 px-6 rounded bg-vc-accent text-white text-ui font-medium hover:bg-vc-accent-hover transition-colors duration-150 inline-flex items-center gap-1.5"
      >
        <span>Get started</span>
        <ArrowRightIcon size={14} />
      </Link>
    </div>
  );
}
