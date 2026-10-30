// Sample data for the Hero Bento mock dashboard. Every brand, product and
// AI logo files are the
// local copies in public/landing/images/ai-logos/.

export interface RankingRow {
  rank: number;
  name: string;
  domain: string;
  score: string;
  delta: string;
  deltaPositive: boolean;
  /** The viewer's own sample brand: tinted row, bold rank + score. */
  highlighted: boolean;
  /** Rows #4-8: desaturated letter tile, text-secondary name. */
  dimmed: boolean;
  /** Rows #7-8: `hidden lg:flex` (only shown at lg+). */
  hiddenBelowLg: boolean;
}

export const RANKINGS: RankingRow[] = [
  {
    rank: 1,
    name: "Inkhouse",
    domain: "inkhouse.com",
    score: "82",
    delta: "+0.0",
    deltaPositive: true,
    highlighted: false,
    dimmed: false,
    hiddenBelowLg: false,
  },
  {
    rank: 2,
    name: "VenturePR",
    domain: "venturepr.com",
    score: "83",
    delta: "+3.3",
    deltaPositive: true,
    highlighted: true,
    dimmed: false,
    hiddenBelowLg: false,
  },
  {
    rank: 3,
    name: "Bospar",
    domain: "bospar.com",
    score: "69",
    delta: "+6.8",
    deltaPositive: true,
    highlighted: false,
    dimmed: false,
    hiddenBelowLg: false,
  },
  {
    rank: 4,
    name: "Treble",
    domain: "treblepr.com",
    score: "61",
    delta: "-0.3",
    deltaPositive: false,
    highlighted: false,
    dimmed: true,
    hiddenBelowLg: false,
  },
  {
    rank: 5,
    name: "Walker Sands",
    domain: "walkersands.com",
    score: "59",
    delta: "+1.6",
    deltaPositive: true,
    highlighted: false,
    dimmed: true,
    hiddenBelowLg: false,
  },
  {
    rank: 6,
    name: "SHIFT Communications",
    domain: "shiftcomm.com",
    score: "52",
    delta: "+0.2",
    deltaPositive: true,
    highlighted: false,
    dimmed: true,
    hiddenBelowLg: false,
  },
  {
    rank: 7,
    name: "Hotwire",
    domain: "hotwireglobal.com",
    score: "51",
    delta: "+1.2",
    deltaPositive: true,
    highlighted: false,
    dimmed: true,
    hiddenBelowLg: true,
  },
  {
    rank: 8,
    name: "Zen Media",
    domain: "zenmedia.com",
    score: "47",
    delta: "-1.3",
    deltaPositive: false,
    highlighted: false,
    dimmed: true,
    hiddenBelowLg: true,
  },
];

export interface CrawlerRow {
  name: string;
  logoSrc: string;
  count: number;
  widthPct: number;
  color: string;
  /** Grok row only: shown in the mobile carousel, hidden in the desktop grid. */
  mdHidden: boolean;
}

// Bar colours step down tints of the accent rather than using each engine's
// brand colour: the row already shows the logo and name, so the bar only
// needs to encode magnitude.
export const CRAWLER_ROWS: CrawlerRow[] = [
  {
    name: "ChatGPT",
    logoSrc: "/landing/images/ai-logos/chatgpt.svg",
    count: 2274,
    widthPct: 48.3727,
    color: "rgba(48, 80, 240, 0.55)",
    mdHidden: false,
  },
  {
    name: "Claude",
    logoSrc: "/landing/images/ai-logos/claude.png",
    count: 1129,
    widthPct: 24.0162,
    color: "rgba(110, 133, 245, 0.55)",
    mdHidden: false,
  },
  {
    name: "Perplexity",
    logoSrc: "/landing/images/ai-logos/perplexity.svg",
    count: 578,
    widthPct: 12.2953,
    color: "rgba(152, 168, 248, 0.55)",
    mdHidden: false,
  },
  {
    name: "Gemini",
    logoSrc: "/landing/images/ai-logos/gemini.svg",
    count: 423,
    widthPct: 8.99809,
    color: "rgba(183, 194, 250, 0.55)",
    mdHidden: false,
  },
  {
    name: "Grok",
    logoSrc: "/landing/images/ai-logos/grok.svg",
    count: 297,
    widthPct: 6.3178,
    color: "rgba(214, 220, 252, 0.55)",
    mdHidden: true,
  },
];

export interface ConversationRow {
  logoSrc: string;
  query: string;
  resultPath: string;
  timeAgo: string;
  opacity: number;
}

export const CONVERSATION_ROWS: ConversationRow[] = [
  {
    logoSrc: "/landing/images/ai-logos/chatgpt.svg",
    query: "best pr agencies for series a companies",
    resultPath: "/series-a-pr",
    timeAgo: "20s ago",
    opacity: 1,
  },
  {
    logoSrc: "/landing/images/ai-logos/perplexity.svg",
    query: "venturepr vs inkhouse for startups",
    resultPath: "/venturepr-vs-inkhouse",
    timeAgo: "38s ago",
    opacity: 0.87,
  },
  {
    logoSrc: "/landing/images/ai-logos/claude.png",
    query: "is venturepr good for robotics startups",
    resultPath: "/robotics-pr",
    timeAgo: "56s ago",
    opacity: 0.74,
  },
  {
    logoSrc: "/landing/images/ai-logos/gemini.svg",
    query: "best pr agencies for fintech startups 2026",
    resultPath: "/fintech-pr",
    timeAgo: "1m ago",
    opacity: 0.61,
  },
];

export interface ActionRow {
  delta: string;
  title: string;
  /** Only the first action is shown expanded. */
  expanded?: {
    date: string;
    tag: string;
    body: string;
    ctaLabel: string;
  };
}

export const ACTION_ROWS: ActionRow[] = [
  {
    delta: "+5.8",
    title: 'Reframe services page for "AI startup PR" cluster',
    expanded: {
      date: "Jul 19th",
      tag: "Quick win",
      body: "VenturePR ranks on Series A prompts, but AI startup language routes to Treble and Walker Sands. Tighten the services page around that phrase.",
      ctaLabel: "Run action",
    },
  },
  { delta: "+4.2", title: "Add JSON-LD service schema to /services" },
  { delta: "+6.1", title: "Pitch your client results study to startup press" },
  { delta: "+3.7", title: "Counter Walker Sands' agency comparison page" },
];
