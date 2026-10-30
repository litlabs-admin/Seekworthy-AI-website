// Data for the Learn/Research section. Short/simple values only - see
// chartData.ts for the large hand-built SVG chart path data.

export interface ResourceCardData {
  iconSrc: string;
  /** Per-card icon size classes (they differ per icon). */
  iconClassName: string;
  title: string;
  subtitle: string;
  /** transition-delay in ms applied to this card's own reveal. */
  delayMs: number;
  /** Only the first card carries the lg:hidden mobile "[05]" eyebrow. */
  showMobileEyebrow: boolean;
}

// Informational cards, deliberately not links: they name no route, so none
// can point at a page missing from app/(site).
export const resourceCards: ResourceCardData[] = [
  {
    iconSrc: "/landing/images/resources/documentation-blue.png",
    iconClassName: "w-10 sm:w-12 h-10 sm:h-12",
    title: "Glossary",
    subtitle: "GEO terms, defined",
    delayMs: 0,
    showMobileEyebrow: true,
  },
  {
    iconSrc: "/landing/images/resources/api-blue.png",
    iconClassName: "w-[52px] h-[52px]",
    title: "How It Works",
    subtitle: "Get tracked, understood, recommended",
    delayMs: 60,
    showMobileEyebrow: false,
  },
  {
    iconSrc: "/landing/images/resources/mcp-blue.png",
    iconClassName: "w-[38px] sm:w-[46px] h-[38px] sm:h-[46px]",
    title: "Proof",
    subtitle: "Which recommendations bring buyers",
    delayMs: 120,
    showMobileEyebrow: false,
  },
];

export interface DataTileData {
  iconSlug: string;
  /** Extra icon classes beyond the shared base (only ai-traffic has this). */
  iconExtraClassName?: string;
  title: string;
  description: string;
  /** Border-utility classes for this tile's position in the 2-col/4-col grid. */
  borderClassName: string;
  delayMs: number;
}

// Capability tiles only: no public dataset or live counts are implied.
export const dataTiles: DataTileData[] = [
  {
    iconSlug: "rankings",
    title: "Benchmarks",
    description: "How often you are recommended, against rivals",
    borderClassName: "lg:border-l-0 lg:border-t-0",
    delayMs: 150,
  },
  {
    iconSlug: "citations",
    title: "Citations",
    description: "Every source AI leans on to recommend",
    borderClassName: "border-l lg:border-l lg:border-t-0",
    delayMs: 205,
  },
  {
    iconSlug: "ai-traffic",
    iconExtraClassName: "opacity-[0.85]",
    title: "Share of answer",
    description: "How often the brand named is yours, by engine",
    borderClassName: "border-t lg:border-l lg:border-t-0",
    delayMs: 260,
  },
  {
    iconSlug: "query-fanout",
    title: "Prompt scoring",
    description: "Content scored against what earns a recommendation",
    borderClassName: "border-l border-t lg:border-l lg:border-t-0",
    delayMs: 315,
  },
];

export interface ChartYAxisLabel {
  label: string;
  top: number;
  delayMs: number;
}

// left:0; width:30px; transition: opacity 700ms ease <delay>ms.
export const chartYAxisLabels: ChartYAxisLabel[] = [
  { label: "30K", top: 145, delayMs: 200 },
  { label: "61K", top: 100, delayMs: 260 },
  { label: "91K", top: 55, delayMs: 320 },
  { label: "122K", top: 10, delayMs: 380 },
];

export interface ChartCallout {
  name: string;
  logoSrc: string;
  top: number;
}

// Callouts share one reveal delay. The `top` values are a decluttering ladder
// for the three clustered series (Perplexity/Claude/Gemini), not each series'
// exact end-of-line y; ChatGPT's top matches its end-dot.
export const chartCallouts: ChartCallout[] = [
  { name: "Perplexity", logoSrc: "/landing/images/ai-logos/perplexity.svg", top: 194 },
  { name: "Claude", logoSrc: "/landing/images/ai-logos/claude.png", top: 176 },
  { name: "Gemini", logoSrc: "/landing/images/ai-logos/gemini.svg", top: 158 },
  { name: "ChatGPT", logoSrc: "/landing/images/ai-logos/chatgpt.svg", top: 62.967 },
];
