"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { engines, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { EngineIcons } from "@/components/ui/EngineLogo";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const SPRING = { type: "spring", duration: 0.4, bounce: 0.2 } as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [vh, setVh] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1200px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  /** Close the sheet first (which unlocks page scroll), then jump to the section. */
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
        history.replaceState(null, "", hash);
      }),
    );
  };

  return (
    <header className="hair hair-b sticky top-0 z-30 flex w-full flex-col items-center bg-bg px-4 t:px-8 d:px-10">
      <motion.div
        className="hair hair-x relative flex w-full max-w-[1248px] flex-col overflow-hidden"
        initial={false}
        animate={{ height: open && vh ? vh : "auto" }}
        transition={reduce ? { duration: 0 } : SPRING}
      >
        <div className="relative flex h-16 w-full shrink-0 items-center justify-between px-4 t:px-8 d:h-[68px]">
          <Logo />

          <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 d:block">
            <ul className="flex items-center gap-8">
              {site.nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="t-body link-body whitespace-nowrap">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 d:gap-3">
            <ThemeToggle className="size-9 d:size-[34px]" />
            <Link href={site.nav.secondary.href} className="t-body link-body hidden whitespace-nowrap d:block">
              {site.nav.secondary.label}
            </Link>
            <span className="hidden d:block">
              <Button href={site.nav.primary.href} variant="compact">
                {site.nav.primary.label}
              </Button>
            </span>
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-[8px] text-ink shadow-[inset_0_0_0_1px_var(--line)] transition-[background-color] duration-200 hover:bg-surface d:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <CloseIcon width={24} height={24} strokeWidth={1.6} /> : <MenuIcon width={24} height={24} strokeWidth={1.6} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="site-menu"
              key="menu"
              className="hair hair-t relative flex min-h-0 flex-1 flex-col d:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.2, ease: [0.44, 0, 0.56, 1] }}
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {[...site.nav.links, site.nav.secondary].map((l) =>
                  l.href.startsWith("#") ? (
                    <a key={l.href} href={l.href} onClick={(e) => goTo(e, l.href)} className="hair hair-b relative block p-5 t-metric text-ink transition-colors duration-200 ease-framer hover:text-accent-text">
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.href} href={l.href} onClick={close} className="hair hair-b relative block p-5 t-metric text-ink transition-colors duration-200 ease-framer hover:text-accent-text">
                      {l.label}
                    </Link>
                  ),
                )}
              </nav>
              <div className="flex-1" />
              <div className="flex flex-col gap-5 p-5 pb-8">
                <EngineIcons engines={engines} size={20} gap={10} />
                <Button href={site.nav.primary.href} className="self-start">
                  {site.nav.primary.label}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
