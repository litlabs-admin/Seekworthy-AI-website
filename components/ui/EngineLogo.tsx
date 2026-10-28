/* eslint-disable @next/next/no-img-element -- tiny static SVG icons; next/image adds nothing here */
import type { Engine } from "@/content/site";

/**
 * Engine icon. Mono icons (ChatGPT) are a mask filled with --ink so they follow the theme;
 * the rest are the template's colored SVGs.
 */
export function EngineIcon({ engine, size }: { engine: Engine; size: number }) {
  const src = `/assets/engines/${engine.id}.svg`;
  if (engine.mono) {
    return (
      <span
        aria-hidden="true"
        className="block shrink-0 bg-ink"
        style={{
          width: size,
          height: size,
          mask: `url(${src}) center / contain no-repeat`,
          WebkitMask: `url(${src}) center / contain no-repeat`,
        }}
      />
    );
  }
  return <img src={src} alt="" width={size} height={size} className="block shrink-0" style={{ width: size, height: size }} />;
}

/** Icon + name, in the template's three sizes. */
export function EngineLogo({
  engine,
  size = "strong",
  className = "",
}: {
  engine: Engine;
  size?: "strong" | "default" | "small";
  className?: string;
}) {
  const conf = {
    strong: { icon: 20, gap: "gap-[10px]", text: "t-ui text-ink" },
    default: { icon: 18, gap: "gap-[10px]", text: "t-body text-body" },
    small: { icon: 16, gap: "gap-2", text: "t-small text-muted" },
  }[size];
  return (
    <span className={`inline-flex items-center ${conf.gap} ${className}`}>
      <EngineIcon engine={engine} size={conf.icon} />
      <span className={`${conf.text} whitespace-nowrap`}>{engine.name}</span>
    </span>
  );
}

export function EngineIcons({ engines, size, gap }: { engines: Engine[]; size: number; gap: number }) {
  return (
    <span className="inline-flex items-center" style={{ gap }} role="img" aria-label={engines.map((e) => e.name).join(", ")}>
      {engines.map((e) => (
        <EngineIcon key={e.id} engine={e} size={size} />
      ))}
    </span>
  );
}
