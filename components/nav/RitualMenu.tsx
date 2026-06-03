"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/cn";

/** Full-screen "ritual menu" overlay — the primary navigation on every viewport. */
export function RitualMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  // Lock body scroll + close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="ritual-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 bg-void/97 backdrop-blur-sm transition-opacity duration-500",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col px-6 py-7">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="flex flex-col leading-none"
          >
            <span className="font-tamil text-sm text-sacred/70">கருப்பு சாமி</span>
            <span className="font-display text-lg font-semibold tracking-[0.2em] text-sacred">
              KARUPPA
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-sacred/70 transition-colors hover:text-accent"
          >
            Close <span aria-hidden className="text-lg leading-none">×</span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center">
          <ul className="divide-y divide-sacred/10">
            {navItems.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "group flex items-baseline gap-4 py-3 transition-colors md:gap-8 md:py-4",
                      active ? "text-accent" : "text-sacred hover:text-accent"
                    )}
                    style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                  >
                    <span className="w-8 font-mono text-xs text-sacred/40 group-hover:text-accent">
                      {item.num}
                    </span>
                    <span className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                      {item.label}
                    </span>
                    <span className="hidden font-tamil text-base text-sacred/45 sm:inline">
                      {item.tamil}
                    </span>
                    <span className="ml-auto hidden max-w-[40%] text-right font-mono text-[11px] uppercase tracking-[0.2em] text-sacred/35 md:block">
                      {item.subtitle}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sacred/35">
          Kaval Deivam — the Guardian of Justice
        </p>
      </div>
    </div>
  );
}
