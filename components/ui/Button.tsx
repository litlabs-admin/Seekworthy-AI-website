import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "compact";

const base =
  "group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[8px] t-ui whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "h-[42px] px-5 bg-accent text-on-accent",
  compact: "h-9 px-4 bg-accent text-on-accent",
  secondary: "hair hair-all hair-strong h-[42px] px-5 bg-button-bg text-ink",
};

const overlay: Record<Variant, string> = {
  primary: "bg-[var(--primary-hover)]",
  compact: "bg-[var(--primary-hover)]",
  secondary: "bg-fill-hover",
};

/** Template Button: hover fades an overlay in over 0.2s (no lift). Hash links stay plain anchors for smooth scroll. */
export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 ease-framer group-hover:opacity-100 ${overlay[variant]}`}
      />
      <span className="relative">{children}</span>
    </>
  );
  return href.startsWith("#") ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
