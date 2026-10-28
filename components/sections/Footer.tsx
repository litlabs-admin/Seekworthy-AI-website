import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

function FooterLink({ href, children }: { href: string; children: string }) {
  const cls = "t-body link-body w-fit";
  return href.startsWith("#") ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/**
 * Template footer: brand cell (416) + link columns (266 / 266 / 300; the 3rd is empty here to keep the grid),
 * giant wordmark fitted to width and clipped at the bottom, then the © / legal row.
 */
export function Footer() {
  const { footer } = site;
  return (
    <Container as="footer" rule={false}>
      <div className="hair hair-b relative grid grid-cols-1 d:grid-cols-[416px_minmax(0,1fr)]">
        <div className="hair d:hair-r relative flex flex-col gap-[14px] px-5 pb-8 pt-12 t:gap-5 t:px-8 t:pb-10 t:pt-12 d:py-14">
          <Logo className="w-fit" />
          <p className="t-body max-w-[320px] text-body">{footer.description}</p>
        </div>

        <div className="hair hair-t relative grid grid-cols-2 t:grid-cols-3 d:hair-none d:grid-cols-[266px_266px_minmax(0,1fr)]">
          {footer.columns.map((col, i) => (
            <nav
              key={col.heading}
              aria-label={col.heading}
              className={`relative flex flex-col gap-3 px-5 py-7 t:px-8 t:py-10 d:py-14 ${i === 0 ? "hair hair-r" : "hair t:hair-r"}`}
            >
              <p className="t-small text-muted">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div aria-hidden="true" className="hidden t:block" />
        </div>
      </div>

      <div aria-hidden="true" className="relative aspect-[1248/236] w-full overflow-hidden">
        <svg
          viewBox="0 0 1310 262"
          className="absolute left-[3.9%] top-[1.44%] w-[92.2%] t:left-[1.92%] t:w-[96.15%]"
          focusable="false"
        >
          <text x="0" y="226" fontSize="262" fontWeight="600" letterSpacing="-17.03" className="fill-watermark" style={{ fontFamily: "var(--font-inter-tight-600), Arial, sans-serif" }}>
            {site.watermark}
          </text>
        </svg>
      </div>

      <div className="hair hair-t relative flex flex-col gap-[6px] px-5 py-[18px] t:flex-row t:items-center t:justify-between t:px-8 t:py-5">
        <p className="t-small text-muted">{footer.copyright}</p>
        <p className="flex items-center gap-[6px] t-small">
          {footer.legal.map((l, i) => (
            <span key={l.href} className="flex items-center gap-[6px]">
              {i > 0 && <span className="text-muted">·</span>}
              <Link href={l.href} className="link-body">
                {l.label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </Container>
  );
}
