"use client";

import { cn } from "@/lib/cn";

/**
 * Drifting ember particles — a CSS-only stand-in for the firelit Flow hero
 * (the video clips come in a later baseline). Values are derived deterministically
 * from the index so server and client render identically (no hydration mismatch),
 * and the whole field is decorative + reduced-motion safe.
 */
const COUNT = 30;

const embers = Array.from({ length: COUNT }, (_, i) => {
  // cheap deterministic pseudo-random in [0,1)
  const rand = (seed: number) => {
    const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  const size = 1 + rand(1) * 3;
  return {
    left: rand(2) * 100,
    size,
    delay: rand(3) * 14,
    duration: 11 + rand(4) * 13,
    drift: (rand(5) - 0.5) * 90,
    opacity: 0.25 + rand(6) * 0.5,
  };
});

export function EmberField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none overflow-hidden", className)}
    >
      {embers.map((e, i) => (
        <span
          key={i}
          className="absolute bottom-[-12px] rounded-full bg-glow"
          style={
            {
              left: `${e.left}%`,
              width: `${e.size}px`,
              height: `${e.size}px`,
              "--drift": `${e.drift}px`,
              "--ember-opacity": e.opacity,
              boxShadow: `0 0 ${e.size * 4}px ${e.size}px var(--glow)`,
              animation: `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
