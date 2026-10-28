import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Crosshairs } from "./SectionRule";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  /** Classes for the full-bleed outer band (section). */
  className?: string;
  /** Classes for the 1248px railed column. */
  railsClassName?: string;
  /** Crosshairs on the top corners of the rails (where the previous section's hairline meets them). */
  crosshairs?: boolean;
  /** Draw the full-bleed bottom hairline (every section has one). */
  rule?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

/**
 * A full-bleed section band with side padding 16/32/40 and a full-bleed bottom hairline,
 * wrapping a centered 1248px column with 1px rails left and right.
 */
export function Container<T extends ElementType = "section">({
  as,
  children,
  className = "",
  railsClassName = "",
  crosshairs = true,
  rule = true,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "section") as ElementType;
  return (
    <Tag
      className={`hair ${rule ? "hair-b" : ""} relative flex w-full flex-col items-center px-4 t:px-8 d:px-10 ${className}`}
      {...rest}
    >
      <div className={`hair hair-x relative flex w-full max-w-[1248px] flex-col ${railsClassName}`}>
        {crosshairs && <Crosshairs />}
        {children}
      </div>
    </Tag>
  );
}
