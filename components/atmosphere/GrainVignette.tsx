/**
 * Cinematic overlay — film grain + vignette only (plan.md §2: keep grain at a
 * whisper so the black never looks dead; no colour, no light-leak). Fixed,
 * non-interactive, layered above content. The grain is an inline SVG
 * fractal-noise tile that drifts (disabled for reduced motion).
 */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")";

export function GrainVignette() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 95% at 50% 0%, transparent 52%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {/* Film grain — a whisper, so the black reads as cinema, not a dead panel. */}
      <div
        className="grain absolute inset-[-25%] opacity-[0.045] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
      />
    </div>
  );
}
