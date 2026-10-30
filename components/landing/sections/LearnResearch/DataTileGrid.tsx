import { NavItemIcon } from "@/components/landing/sections/Nav/icons";
import { scrollRevealEase } from "@/components/landing/hooks/useScrollReveal";
import { dataTiles, type DataTileData } from "./data";

function DataTile({ item, isVisible }: { item: DataTileData; isVisible: boolean }) {
  return (
    <div
      className={
        "relative flex flex-col gap-3 px-4 sm:px-5 py-5 sm:py-6 min-h-[150px] " +
        "border-vc-default transition-all duration-500 " +
        item.borderClassName +
        " " +
        (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")
      }
      style={{ transitionDelay: `${item.delayMs}ms`, transitionTimingFunction: scrollRevealEase }}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex rounded-md p-1.5 -ml-1.5 -mt-1.5">
          <NavItemIcon
            item={item}
            size={56}
            className={
              "w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] object-contain " +
              (item.iconExtraClassName ?? "")
            }
          />
        </span>
      </div>
      <div className="mt-auto">
        <div className="flex items-baseline gap-2">
          <h4 className="text-[13px] font-semibold text-vc-primary">{item.title}</h4>
        </div>
        <p className="text-[11px] text-vc-secondary truncate mt-0.5">{item.description}</p>
      </div>
    </div>
  );
}

export function DataTileGrid({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-vc-default">
      {dataTiles.map((item, i) => (
        <DataTile key={`${item.title}-${i}`} item={item} isVisible={isVisible} />
      ))}
    </div>
  );
}
