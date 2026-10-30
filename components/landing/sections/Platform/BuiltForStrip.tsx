// "Built for" footer strip: a sibling of the bordered panel with its own
// entrance transition. Items are plain text, a statement of who the product is
// for, not links.
const items = ["Brand teams", "Marketing agencies", "Startups", "Enterprise"];

export function BuiltForStrip({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className="border-b border-vc-default bg-vc-surface px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 transition-all duration-500"
      style={{ opacity: isVisible ? 1 : 0, transitionDelay: "400ms" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-6">
        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.08em] text-vc-text-muted whitespace-nowrap">
          Built for
        </span>
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {items.map((label, i) => (
            <span key={label} className="flex items-center gap-3 sm:gap-5">
              <span className="text-[12px] sm:text-[13px] font-medium text-vc-secondary">
                {label}
              </span>
              {i < items.length - 1 && <span className="w-1 h-1 rounded-full bg-vc-default" />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
