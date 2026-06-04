"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RitualMenu } from "@/components/nav/RitualMenu";
import { cn } from "@/lib/cn";

/** Fixed header: wordmark + "Enter" button that opens the full-screen ritual menu. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
          scrolled
            ? "border-b border-sacred/10 bg-void/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-tamil text-xs text-sacred/60 transition-colors group-hover:text-accent">
              கருப்பு சாமி
            </span>
            <span className="font-display text-base font-semibold tracking-[0.22em] text-sacred">
              KARUPPA
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="ritual-menu"
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-sacred/80 transition-colors hover:text-accent"
          >
            <span>Menu</span>
            <span aria-hidden className="flex flex-col gap-[3px]">
              <span className="block h-px w-5 bg-current transition-all group-hover:w-6" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-3 bg-current transition-all group-hover:w-6" />
            </span>
          </button>
        </div>
      </header>

      <RitualMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
