import { site } from "@/content/site";

const engines = [
  { name: "ChatGPT", src: "/landing/images/ai-logos/chatgpt.svg" },
  { name: "Claude", src: "/landing/images/ai-logos/claude.svg" },
  { name: "Perplexity", src: "/landing/images/ai-logos/perplexity.svg" },
  { name: "Gemini", src: "/landing/images/ai-logos/gemini.svg" },
  { name: "Grok", src: "/landing/images/ai-logos/grok.svg" },
  { name: "DeepSeek", src: "/landing/images/ai-logos/deepseek.svg" },
];

/** Hairline strip between the hero and the dashboard, one cell per tracked engine. */
export function EngineStrip() {
  return (
    <section aria-label={site.hero.engineLabel} className="relative mx-auto max-w-[1120px] bg-vc-surface">
      <ul className="grid grid-cols-2 divide-x divide-y divide-vc-default border-y border-vc-default sm:grid-cols-3 lg:grid-cols-[180px_repeat(6,minmax(0,1fr))] lg:divide-y-0">
        <li className="col-span-2 flex h-14 items-center justify-center px-4 text-caption text-vc-secondary sm:col-span-3 lg:col-span-1">
          {site.hero.engineLabel}
        </li>
        {engines.map((e) => (
          <li key={e.name} className="flex h-14 items-center justify-center gap-2 px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={e.src} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
            <span className="text-body font-medium text-vc-primary">{e.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
