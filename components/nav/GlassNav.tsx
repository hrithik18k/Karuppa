"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { KaruppuWordmark } from "@/components/brand/KaruppuWordmark";

/**
 * The primary navigation — a floating glassmorphic slidebar pinned to the
 * mid-upper of the viewport. Replaces the old full-screen toggle menu: the nav
 * is always present, never opened. The link row is a true "slidebar" — it
 * scrolls horizontally on narrow viewports, so all ten chapters stay reachable
 * without a hamburger.
 *
 * Strictly monochrome: the "glass" is a frosted ASH translucency over the void
 * (white at low alpha + backdrop-blur), never a hue. A future pass may let the
 * active chapter *glow* — for now it only brightens.
 */
export function GlassNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:top-5 print:hidden">
      <nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto flex max-w-[min(95vw,70rem)] items-center gap-1.5",
          // Glassmorphism — frosted ash over the dark, no colour.
          "rounded-full border border-sacred/15 bg-sacred/[0.06] px-2 py-2",
          "shadow-[0_18px_50px_-18px_rgba(0,0,0,0.9)] ring-1 ring-inset ring-sacred/[0.06]",
          "backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-sacred/[0.05]"
        )}
      >
        {/* Brand — anchors the bar, returns to the Threshold. */}
        <Link
          href="/"
          aria-label="Karuppa — home"
          className="group flex shrink-0 items-center rounded-full px-3 py-1.5 transition-colors hover:bg-sacred/[0.07]"
        >
          <KaruppuWordmark className="h-7 w-24 object-contain drop-shadow-[0_0_14px_rgba(255,24,20,0.2)]" />
        </Link>

        <span aria-hidden className="h-5 w-px shrink-0 bg-sacred/15" />

        {/* The slidebar — horizontally scrollable list of chapters. */}
        <ul className="no-scrollbar flex items-center gap-0.5 overflow-x-auto scroll-smooth">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  title={item.subtitle}
                  className={cn(
                    "block rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300",
                    active
                      ? "bg-accent/14 text-accent"
                      : "text-sacred/55 hover:bg-sacred/[0.06] hover:text-sacred"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
