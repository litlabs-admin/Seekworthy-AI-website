/** 16×16 live indicator: 8px dot with a 4px tint ring, plus a looping pulse (CSS, see globals.css). */
export function LiveDot() {
  return (
    <span aria-hidden="true" className="relative block size-4 shrink-0">
      <span className="live-pulse absolute left-1 top-1 size-2 rounded-full bg-accent-text" />
      <span className="absolute left-1 top-1 size-2 rounded-full bg-accent-text shadow-[0_0_0_4px_var(--accent-tint)]" />
    </span>
  );
}
