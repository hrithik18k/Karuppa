import type { ReactElement, SVGProps } from "react";

/**
 * A single power, rendered with force: a large ordinal numeral standing in the
 * dark, the hand-drawn devotional glyph it answers to, the Tamil term, and the
 * telling. The whole tile lights at its left edge on hover — the fire catching.
 * Server component (no interactivity beyond CSS), so it stays static + fast.
 */
export interface Power {
  num: string;
  tamil: string;
  title: string;
  body: string;
  /** A line-art icon from @/components/icons. */
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

export function PowerCard({ power }: { power: Power }) {
  const { num, tamil, title, body, Icon } = power;
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-sacred/10 bg-stone/40 p-7 transition-colors duration-500 hover:border-accent/45 md:p-8">
      {/* Left ignition bar */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Faint heat bloom that warms on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle, var(--glow), transparent 65%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-display text-5xl font-semibold leading-none text-sacred/15 transition-colors duration-500 group-hover:text-accent/70 md:text-6xl">
          {num}
        </span>
        <Icon
          aria-hidden
          className="h-9 w-9 shrink-0 text-sacred/35 transition-all duration-500 group-hover:scale-110 group-hover:text-accent md:h-10 md:w-10"
        />
      </div>

      <p className="relative mt-6 font-tamil text-lg text-sacred/65">{tamil}</p>
      <h2 className="relative mt-1 font-display text-xl font-semibold text-accent md:text-2xl">
        {title}
      </h2>
      <p className="relative mt-3 text-sm leading-relaxed text-sacred/65">
        {body}
      </p>
    </article>
  );
}
