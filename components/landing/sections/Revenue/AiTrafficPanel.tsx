import { TrendingUpIcon } from "@/components/landing/icons";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

// Decorative placeholder heights: two rough day cycles trending up toward
// "Now". Not real data. A literal array keeps server and client identical.
const BAR_HEIGHTS_PERCENT = [
  38, 28, 18, 15, 14, 16, 22, 32, 45, 58, 66, 72, 78, 82, 88, 85, 79, 74, 68, 60, 52, 46, 40, 34,
  40, 30, 22, 18, 17, 20, 28, 42, 58, 72, 80, 88, 94, 98, 100, 97, 92, 85, 80, 83, 90, 95, 99, 97,
];

// The first 40 bars are tinted; only the most recent 8 of 48 go full accent.
const SOLID_FROM_INDEX = 40;

// Recent Pages rows.
const RECENT_PAGES = [
  { alt: "ChatGPT", src: "/landing/images/ai-logos/chatgpt.svg", path: "/pricing", time: "2m" },
  {
    alt: "Perplexity",
    src: "/landing/images/ai-logos/perplexity.svg",
    path: "/blog/ai-seo",
    time: "8m",
  },
  { alt: "Claude", src: "/landing/images/ai-logos/claude.png", path: "/features", time: "14m" },
  { alt: "ChatGPT", src: "/landing/images/ai-logos/chatgpt.svg", path: "/demo", time: "21m" },
  { alt: "Gemini", src: "/landing/images/ai-logos/gemini.svg", path: "/guides", time: "28m" },
  {
    alt: "Perplexity",
    src: "/landing/images/ai-logos/perplexity.svg",
    path: "/about",
    time: "34m",
  },
];

// AI Traffic · Last 48h panel, the left half of the two-panel mockup. Bars
// and rows reveal together on one `isVisible`.
export function AiTrafficPanel({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
      <div
        className={`flex items-center justify-between mb-4 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-vc-accent" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-vc-text-muted">
            AI Traffic
          </span>
        </div>
        <span className="text-[10px] text-vc-text-muted">Last 48h</span>
      </div>

      <div
        className={`mb-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-baseline gap-2">
          <span
            className="text-[28px] font-semibold tracking-tight text-vc-primary tabular-nums leading-none transition-colors duration-300"
            style={{ filter: "brightness(1)" }}
          >
            2,847
          </span>
          <span className="text-[12px] text-vc-text-muted">sessions</span>
          <span className="flex items-center gap-0.5 text-[11px] font-medium text-vc-success tabular-nums transition-all duration-300">
            <TrendingUpIcon />
            +27%
          </span>
        </div>
      </div>

      <div
        className={`mb-5 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative">
          <div className="flex items-end gap-px h-[48px]">
            {BAR_HEIGHTS_PERCENT.map((heightPercent, i) => (
              <div key={i} className="flex-1 h-full relative cursor-pointer min-w-0">
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={
                    i < SOLID_FROM_INDEX
                      ? {
                          height: `${heightPercent}%`,
                          backgroundColor: "var(--accent)",
                          opacity: 0.22,
                        }
                      : {
                          height: `${heightPercent}%`,
                          backgroundImage:
                            "linear-gradient(180deg, var(--hb-accent-bright) 0%, var(--accent) 100%)",
                          boxShadow: "0 0 6px color-mix(in srgb, var(--accent) 35%, transparent)",
                        }
                  }
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[9px] text-vc-text-muted font-mono tabular-nums">48h ago</span>
            <span className="text-[9px] text-vc-secondary font-mono">Now</span>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-vc-text-muted">
            Recent Pages
          </span>
        </div>
        <div className="space-y-0 -mx-2 overflow-hidden">
          {RECENT_PAGES.map((page, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 py-1.5 px-2 rounded hover:bg-vc-muted hover:shadow-[var(--hb-shadow-raised)] hover:-translate-y-px group cursor-default transition-all duration-300"
            >
              <img
                src={page.src}
                alt={page.alt}
                width={14}
                height={14}
                className="w-3.5 h-3.5 object-contain shrink-0 opacity-70"
              />
              <span className="flex-1 text-[11px] text-vc-secondary font-mono truncate group-hover:text-vc-primary transition-colors">
                {page.path}
              </span>
              <span className="text-[10px] tabular-nums text-vc-text-muted shrink-0 transition-all duration-300">
                {page.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
