"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { MoonIcon, SunIcon } from "./icons";

/**
 * Template ThemeToggle: 8px radius, inset 1px --line ring, hover fills --surface and inks the glyph (0.2s ease).
 * Shows the current theme's glyph (Sun in light, Moon in dark); the glyph swaps instantly.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";
  const label = dark ? site.theme.toLight : site.theme.toDark;

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={`group flex shrink-0 items-center justify-center rounded-[8px] text-body shadow-[inset_0_0_0_1px_var(--line)] transition-[background-color] duration-200 ease-in-out hover:bg-surface hover:text-ink ${className}`}
    >
      {mounted ? dark ? <MoonIcon /> : <SunIcon /> : <span className="size-4" />}
    </button>
  );
}
