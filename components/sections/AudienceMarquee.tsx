import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

/** Small 20px glyphs that stand in for the template's client logos (stroke, --logo color). */
const glyphs = [
  // Brand teams: tag
  <path key="a" d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Zm5-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />,
  // Agencies: layers
  <path key="b" d="M12 3 2 8l10 5 10-5-10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />,
  // Startups: spark
  <path key="c" d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l3.5 3.5m7 7L19 19M19 5l-3.5 3.5m-7 7L5 19" />,
  // Enterprise teams: building
  <path key="d" d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16m0-10h2a2 2 0 0 1 2 2v8M2 21h20M8 7h4M8 11h4M8 15h4" />,
];

/** Template "Trusted by" strip: lead cell (248px) + ticker cell. Audience names are set in the logo color. */
export function AudienceMarquee() {
  const { audience } = site;
  return (
    <Container crosshairs={false} aria-label={audience.sentence}>
      <div className="flex flex-col t:h-[100px] t:flex-row">
        <div className="relative flex shrink-0 items-center px-5 pt-7 t:hair t:hair-r t:w-[248px] t:px-8 t:pt-0">
          <p className="t-small text-muted">{audience.label}</p>
        </div>
        <div className="flex min-w-0 flex-1 items-center pb-8 pt-5 t:px-6 t:py-0">
          <Marquee>
            {audience.items.map((item, i) => (
              <span key={item} className="flex items-center gap-[10px] text-logo">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {glyphs[i % glyphs.length]}
                </svg>
                <span className="whitespace-nowrap text-[22px] font-semibold leading-none tracking-[-0.04em]">{item}</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </Container>
  );
}
