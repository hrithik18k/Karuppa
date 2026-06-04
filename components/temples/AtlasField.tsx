import { cn } from "@/lib/cn";

/**
 * A faint celestial "atlas" backdrop for the Temples chapter — a hint of the
 * map-to-come without faking any data. Deterministic constellation: stars and
 * the lines between them are computed from fixed coordinates (no Math.random),
 * so server and client render byte-identical markup (hydration-stable). Purely
 * decorative; the only motion is the globals' reduced-motion-safe `slow-spin`.
 *
 * The points are abstract, not geographic — a sky of shrines, a kolam of light.
 */

// Fixed nodes in a 0–100 viewBox. Ordered roughly south→across-the-seas so the
// connecting path reads as a faint pilgrim route. Hand-placed, never generated.
const NODES: ReadonlyArray<readonly [number, number]> = [
  [22, 70], // the hills near Madurai — the source
  [34, 58],
  [48, 64],
  [40, 44],
  [58, 50],
  [69, 40],
  [62, 26],
  [80, 30],
  [88, 18],
];

export function AtlasField({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none", className)}>
      {/* Slowly turning kolam ring — the "map rose" that never resolves */}
      <svg
        viewBox="0 0 100 100"
        className="slow-spin absolute left-1/2 top-1/2 h-[120vh] w-[120vh] max-h-[1000px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 text-accent opacity-[0.05]"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="50" cy="50" r="48" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="34" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="20" strokeWidth="0.2" />
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="2"
            x2="50"
            y2="14"
            strokeWidth="0.3"
            transform={`rotate(${(i * 360) / 16} 50 50)`}
          />
        ))}
      </svg>

      {/* The constellation of shrines — fixed nodes + the route between them */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d={NODES.map(
            ([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`
          ).join(" ")}
          stroke="var(--glow)"
          strokeWidth="0.18"
          strokeDasharray="0.9 1.4"
          opacity="0.3"
        />
        {NODES.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={i === 0 ? 0.7 : 0.4} fill="var(--glow)" opacity="0.55" />
            <circle cx={x} cy={y} r={i === 0 ? 2.2 : 1.4} fill="var(--glow)" opacity="0.1" />
          </g>
        ))}
      </svg>
    </div>
  );
}
