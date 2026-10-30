// Reassurance-row engine logos - the six measured providers (owner decision
// 2026-09-24: Google AI Overviews and Meta AI removed from the roster
// everywhere, including marketing copy that implied coverage of them).
const logos = [
  { alt: "ChatGPT", src: "/landing/images/ai-logos/chatgpt.svg" },
  { alt: "Perplexity", src: "/landing/images/ai-logos/perplexity.svg" },
  { alt: "Claude", src: "/landing/images/ai-logos/claude.svg" },
  { alt: "Gemini", src: "/landing/images/ai-logos/gemini.svg" },
  { alt: "Grok", src: "/landing/images/ai-logos/grok.svg" },
  { alt: "DeepSeek", src: "/landing/images/ai-logos/deepseek.svg" },
];

export function AiLogoRow() {
  return (
    <div className="flex items-center gap-2.5">
      {logos.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          title={logo.alt}
          width={14}
          height={14}
          loading="lazy"
          className="h-3.5 w-3.5 object-contain"
        />
      ))}
    </div>
  );
}
