import type { ComponentPropsWithoutRef, ElementType } from "react";

type CellProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

/** A grid cell: --bg background with the standard 20/32 horizontal padding. Dividers come from the parent `grid-lines`. */
export function Cell<T extends ElementType = "div">({ as, className = "", ...rest }: CellProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={`relative bg-bg px-5 t:px-8 ${className}`} {...rest} />;
}
