/**
 * All site copy, verbatim from "Seekworthy Copy Doc.pdf".
 * Components only render this data; do not edit wording here without updating the copy doc.
 */

export type EngineId = "chatgpt" | "claude" | "perplexity" | "gemini" | "grok" | "deepseek";

export interface Engine {
  id: EngineId;
  name: string;
  /** Mono icons are rendered as an --ink mask so they follow the theme. */
  mono: boolean;
}

export interface Link {
  label: string;
  href: string;
}

export const engines: Engine[] = [
  { id: "chatgpt", name: "ChatGPT", mono: true },
  { id: "claude", name: "Claude", mono: false },
  { id: "perplexity", name: "Perplexity", mono: false },
  { id: "gemini", name: "Gemini", mono: false },
  { id: "grok", name: "Grok", mono: false },
  { id: "deepseek", name: "DeepSeek", mono: false },
];

export const routes = {
  signup: "/signup",
  login: "/login",
  demo: "/demo",
};

export const site = {
  brand: "SeekWorthy AI",
  watermark: "SeekWorthy",
  metaTitle: "SeekWorthy AI · AI visibility software for brands that want to be recommended",
  metaDescription:
    "See where AI recommends your brand, who it names instead and which sources it cites. Get a clear plan to improve your visibility, with tools to do the work yourself or support to get it done.",

  nav: {
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Results", href: "#results" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQs", href: "#faqs" },
    ] satisfies Link[],
    primary: { label: "Get started free", href: routes.signup } satisfies Link,
    secondary: { label: "Sign in", href: routes.login } satisfies Link,
  },

  hero: {
    headline: "AI visibility software for brands that want to be recommended",
    support:
      "See where AI recommends your brand, who it names instead and which sources it cites. Get a clear plan to improve your visibility, with tools to do the work yourself or support to get it done.",
    primary: { label: "Get started free", href: routes.signup } satisfies Link,
    secondary: { label: "See live results", href: "#results" } satisfies Link,
    engineLabel: "Track your visibility across",
    smallPrint: "Start free. No code. Weekly checks.",
  },

  feed: {
    title: "Recorded AI answers · VenturePR",
    detail: "Selected ChatGPT observations · 28 October 2026",
    columns: { engine: "Engine", prompt: "Buyer prompt", result: "Result", status: "Status" },
    rows: [
      {
        engine: "chatgpt",
        prompt: "Best PR agencies for Series A companies in 2026",
        result: "VenturePR was listed first in a best-fit shortlist.",
        status: "Cited",
      },
      {
        engine: "chatgpt",
        prompt: "Best PR Companies for Robotics Startups",
        result: "VenturePR was listed #2 for funded robotics startups.",
        status: "Cited",
      },
      {
        engine: "chatgpt",
        prompt: "Best PR Agencies for Fintech Startups",
        result: "VenturePR was listed #4 for fintech startup visibility.",
        status: "Cited",
      },
      {
        engine: "chatgpt",
        prompt: "Best PR agencies for women founders in US 2026",
        result: "VenturePR was listed #4 for women founders in technology.",
        status: "Cited",
      },
      {
        engine: "chatgpt",
        prompt: "Best PR Agencies for AI Startups",
        result: "VenturePR was featured as a strong fit for AI startups.",
        status: "Cited",
      },
    ] satisfies { engine: EngineId; prompt: string; result: string; status: PillStatus }[],
    note: "These are individual recorded answers. Recommendations can change by prompt, platform and test. They do not represent a fixed ranking across all AI answers.",
  },

  audience: {
    /** Copy doc §04 strip copy, split per design.md §3: "Built for" label + marquee items. */
    sentence: "Built for brand teams, agencies, startups and enterprise teams.",
    label: "Built for",
    items: ["Brand teams", "Agencies", "Startups", "Enterprise teams"],
  },

  proof: {
    metrics: [
      { value: 6, label: "AI engines to track" },
      { value: 3, label: "steps from visibility to action" },
      { value: 1, label: "workspace for your brand’s AI presence" },
    ],
    supporting: "Track the answers. Understand the gaps. Work on the changes that matter.",
  },

  platform: {
    headline: "Know where you stand. Know what to do next.",
    intro:
      "Your AI visibility should lead to a useful decision. SeekWorthy AI helps you find the gaps, understand the evidence and choose the next action.",
    cards: [
      {
        title: "Track your visibility",
        text: "See when AI engines mention, recommend or cite your brand. Follow the buyer questions that matter and compare your presence with competitors.",
      },
      {
        title: "Understand the gaps",
        text: "Review the sources behind the answers, spot inaccurate descriptions and identify where competitors have stronger coverage.",
      },
      {
        title: "Improve your chances",
        text: "Get prioritized actions and content support. Update the information buyers need, strengthen your public evidence and review what changes in later checks.",
      },
    ],
    button: { label: "See how it works", href: "#how-it-works" } satisfies Link,
  },

  howItWorks: {
    headline: "From your first scan to a clearer next step",
    intro:
      "Start with your brand and your buyers. Build a repeatable view of what AI says, then use the findings to guide the work.",
    steps: [
      {
        label: "01 · Set up",
        title: "Add your brand",
        text: "Enter your website, define your category and choose the questions your buyers ask. Add the competitors you want to compare.",
      },
      {
        label: "02 · Track",
        title: "See the answers",
        text: "Run your prompts across supported AI engines. Review brand mentions, recommendations, citations and competitor appearances.",
      },
      {
        label: "03 · Improve",
        title: "Work through the gaps",
        text: "Use the findings to prioritize content, brand information and site improvements. The assistant helps you prepare the work for review.",
      },
      {
        label: "04 · Review",
        title: "Check what changes",
        text: "Follow later scans and keep the evidence with each result. See where visibility improves and which prompts still need attention.",
      },
    ],
  },

  work: {
    headline: "See the work behind your next result",
    intro:
      "Keep the finding, the proposed change and the next check together. Your team can see what needs attention and why.",
    cards: [
      {
        stage: "Diagnose",
        title: "Find the questions you’re missing from",
        text: "Compare the answers where a competitor appears and your brand does not. Review the cited sources before choosing a response.",
        badge: "Review the evidence",
      },
      {
        stage: "Improve",
        title: "Prepare a clearer answer for buyers",
        text: "Draft a useful article, comparison or FAQ using your approved brand information. Review the claims and sources before publishing.",
        badge: "Approve the change",
      },
      {
        stage: "Verify",
        title: "Check the answer again",
        text: "Revisit the tracked prompts after the work is complete. Record what changed without assuming every new mention came from one action.",
        badge: "Keep the result",
      },
    ],
    button: { label: "View the workflow", href: "#how-it-works" } satisfies Link,
  },

  results: {
    headline: "See what recorded AI visibility looks like",
    intro:
      "Examples from VenturePR show how one brand can appear across different buyer questions. Each result is tied to a recorded answer.",
    cards: [
      {
        category: "Series A companies",
        title: "First in a Series A shortlist",
        text: "ChatGPT listed VenturePR first for a Series A agency prompt and described it as a fit for focused startup PR.",
        metric: { value: "First", caption: "listed · ChatGPT observation" },
        image: { src: "/assets/results/series-a.jpg", alt: "Sales research materials arranged around a cobalt notebook on a sunlit desk." },
      },
      {
        category: "Robotics startups",
        title: "Recommended for robotics startup visibility",
        text: "ChatGPT listed VenturePR #2 for robotics startups building investor and market visibility.",
        metric: { value: "#2", caption: "listed · ChatGPT observation" },
        image: { src: "/assets/results/robotics.jpg", alt: "Hands reconciling expense receipts beside a blue calculator in bright daylight." },
      },
      {
        category: "Fintech startups",
        title: "Included in a fintech agency shortlist",
        text: "ChatGPT listed VenturePR #4 for fintech startups seeking media exposure, founder positioning and funding-announcement support.",
        metric: { value: "#4", caption: "listed · ChatGPT observation" },
        image: { src: "/assets/results/fintech.jpg", alt: "Indexed compliance folders and a clear document tray on a sunlit studio shelf." },
      },
    ],
    button: { label: "Start tracking your brand", href: routes.signup } satisfies Link,
    note: "Observed answers are examples of visibility, not guarantees of future recommendations or proof of revenue impact.",
  },

  audiences: {
    headline: "Built around the questions your team needs answered",
    intro:
      "Whether you manage one brand or several, start with a clear view of what AI is saying and what deserves attention.",
    question: "Who is SeekWorthy AI built for?",
    count: "3 audiences",
    summary:
      "Brand teams need to understand their visibility. Agencies need a consistent way to manage several brands. Startups need to know which buyer questions to focus on first. SeekWorthy AI gives each team a place to track the answers and plan the work.",
    items: [
      {
        name: "Brand teams",
        text: "Know how your brand is described, which competitors appear alongside it and where important information is missing.",
      },
      {
        name: "Agencies",
        text: "Keep client brands organized, compare findings and give your team a clearer basis for content and visibility recommendations.",
      },
      {
        name: "Startups",
        text: "Focus on the questions your buyers actually ask. Build useful evidence around your product instead of chasing every possible prompt.",
      },
    ],
  },

  pricing: {
    headline: "Start free. Expand when you need more.",
    intro:
      "Get an initial view of your AI visibility, then choose the content capacity, brand coverage and support your team needs.",
    plans: [
      {
        name: "Free",
        description: "Your first look at where AI cites your brand.",
        price: "$0",
        cadence: "/ month",
        features: [
          "10 tracked prompts",
          "One scan every 7 days",
          "Citation runs across major AI engines",
          "Prompt and ranking data on your dashboard",
          "1 brand profile",
        ],
        button: { label: "Get started free", href: routes.signup },
        featured: false,
      },
      {
        name: "Pro",
        badge: "For growing brands",
        description: "Track your brand and prepare the content it needs.",
        price: "$100",
        cadence: "/ month",
        features: [
          "Visibility tracking across 6 AI engines",
          "Weekly citation checks",
          "25 AI-generated articles per month",
          "Competitor benchmarking and site health audits",
          "1 brand profile and 3 team seats",
        ],
        button: { label: "Talk to sales", href: routes.demo },
        featured: true,
      },
      {
        name: "Agency",
        description: "Manage AI visibility and content across client brands.",
        price: "$500",
        cadence: "/ month",
        features: [
          "Everything in Pro",
          "100 AI-generated articles per month",
          "10 brand profiles",
          "Unlimited team seats",
          "Priority support",
        ],
        button: { label: "Talk to sales", href: routes.demo },
        featured: false,
      },
    ] satisfies Plan[],
    enterprise: "Need managed content, outreach or custom integrations? Let’s scope an Enterprise plan around your team.",
    enterpriseButton: { label: "Book a demo", href: routes.demo } satisfies Link,
  },

  faq: {
    headline: "Questions before your first scan",
    intro: "A clear starting point for understanding AI visibility and choosing how to improve it.",
    items: [
      {
        q: "Is AI visibility the same as SEO?",
        a: "They overlap, but they measure different things. SEO helps people discover your pages in search. AI visibility looks at whether an AI answer names your brand, recommends it or cites your content. SeekWorthy AI helps you review those answers and the sources behind them.",
      },
      {
        q: "Which AI engines can I track?",
        a: "SeekWorthy AI supports ChatGPT, Claude, Perplexity, Gemini, Grok and DeepSeek. Compare how your brand appears across the tracked questions rather than relying on one answer from one platform.",
      },
      {
        q: "How soon will my visibility improve?",
        a: "There is no fixed timeline. It depends on your starting point, available evidence and the changes you make. Regular checks show how the tracked answers develop, so you can review progress and adjust the work.",
      },
      {
        q: "Can you guarantee that AI will recommend my brand?",
        a: "No. AI engines decide what to include, and answers can vary. SeekWorthy AI gives you visibility data, supporting evidence and practical actions to improve the information available about your brand.",
      },
      {
        q: "Does SeekWorthy AI help create content?",
        a: "Yes. Paid plans include AI-generated article capacity, and the platform helps you develop content around relevant buyer questions. Review the facts, sources and wording before publishing. Managed content and outreach are available through an agreed Enterprise scope.",
      },
      {
        q: "What do I need to get started?",
        a: "Start with your website, your product or service category and the questions you want to track. You can begin on the Free plan with 10 prompts and one brand profile, without entering a card.",
      },
    ],
  },

  cta: {
    headline: "Find out whether AI is recommending your brand.",
    support:
      "Start with your website and the questions your buyers ask. See where you appear, who gets named instead and what to work on next.",
    primary: { label: "Get started free", href: routes.signup } satisfies Link,
    secondary: { label: "Book a demo", href: routes.demo } satisfies Link,
    smallPrint: "Free plan available. No card required.",
  },

  footer: {
    description:
      "AI visibility tracking, competitor insights and practical next steps for getting your brand into the conversation.",
    columns: [
      {
        heading: "Sections",
        links: [
          { label: "How it works", href: "#how-it-works" },
          { label: "Results", href: "#results" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQs", href: "#faqs" },
        ],
      },
      {
        heading: "Account",
        links: [
          { label: "Get started free", href: routes.signup },
          { label: "Sign in", href: routes.login },
          { label: "Book a demo", href: routes.demo },
        ],
      },
    ] satisfies { heading: string; links: Link[] }[],
    copyright: "© 2026 SeekWorthy AI. All rights reserved.",
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ] satisfies Link[],
  },

  theme: {
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
  },
};

export type PillStatus = "Cited" | "Named" | "Fix queued" | "Missing";

export interface Plan {
  name: string;
  badge?: string;
  description: string;
  price: string;
  cadence: string;
  features: string[];
  button: Link;
  featured: boolean;
}
