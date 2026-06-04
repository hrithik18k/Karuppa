import { cn } from "@/lib/cn";

/**
 * The kala pani — "the dark waters." A dark oceanic backdrop for the Diaspora
 * chapter: a faint horizon, and spirit-lights drifting up and across toward
 * distant shores (the guardian carried over the sea). Every value is computed
 * deterministically from the index and rounded to 2 dp, so server and client
 * emit byte-identical style strings — hydration-stable, no Math.random. Purely
 * decorative; the rise animation is the globals' `ember-rise` (reduced-motion
 * safe), recoloured to this chapter's indigo --glow.
 */
const COUNT = 26;

/** 2-dp round → short, hydration-stable numeric strings. */
const r2 = (n: number) => Math.round(n * 100) / 100;

const lights = Array.from({ length: COUNT }, (_, i) => {
  // cheap deterministic pseudo-random in [0,1), seeded off the index
  const rand = (seed: number) => {
    const x = Math.sin(i * 41.17 + seed * 27.13) * 9421.71;
    return x - Math.floor(x);
  };
  const size = r2(1.2 + rand(1) * 2.4);
  return {
    left: r2(rand(2) * 100),
    size,
    delay: r2(rand(3) * 16),
    duration: r2(16 + rand(4) * 16),
    // Stronger lateral drift than embers — the crossing of the sea.
    drift: r2((rand(5) - 0.3) * 160),
    opacity: r2(0.2 + rand(6) * 0.4),
    blur: r2(size * 5),
  };
});

export function KalaPaniField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none overflow-hidden", className)}
    >
      {/* Deep-water gradient — the void giving way to oceanic indigo and back */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 120%, color-mix(in srgb, var(--glow) 16%, transparent), transparent 60%)",
        }}
      />
      {/* The far horizon — a single thin line of light across the dark */}
      <div
        className="absolute left-0 right-0 top-[58%] h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--glow) 40%, transparent), transparent)",
          opacity: 0.5,
        }}
      />
      {/* Spirit-lights crossing the dark waters */}
      {lights.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-14px] rounded-full"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "var(--glow)",
              "--drift": `${p.drift}px`,
              "--ember-opacity": p.opacity,
              boxShadow: `0 0 ${p.blur}px ${p.size}px var(--glow)`,
              animation: `ember-rise ${p.duration}s linear ${p.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
