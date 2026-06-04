import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * The annual rite, unfolding as a sequence — flag at first light, through the
 * days within the village, to the trance and the fire at night. A vertical rail
 * with glowing nodes; each stage reveals on scroll. The page owns the content
 * (so VERIFY markers and vetted facts stay canonical); this only renders it.
 */

export interface RiteStage {
  /** Phase-of-day label, e.g. "Dawn · Day One". */
  phase: string;
  tamil?: string;
  title: string;
  body: string;
  verify?: boolean;
  /** Line-art glyph for the node. */
  icon: ReactNode;
}

export function RiteTimeline({ stages }: { stages: RiteStage[] }) {
  return (
    <ol className="relative ml-1 space-y-0">
      {/* The rail: a dim spine that warms toward the fire at its foot */}
      <span
        aria-hidden
        className="absolute bottom-3 left-[15px] top-3 w-px"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 25%, transparent), color-mix(in srgb, var(--glow) 60%, transparent))",
        }}
      />

      {stages.map((stage, i) => (
        <ScrollReveal key={stage.title} delay={i * 100}>
          <li className="relative grid grid-cols-[32px_1fr] gap-x-5 pb-14 last:pb-0">
            {/* Node */}
            <span className="relative z-10 mt-0.5 grid h-8 w-8 place-items-center rounded-full border border-accent/40 bg-void text-accent">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full opacity-60"
                style={{
                  boxShadow:
                    "0 0 16px 1px color-mix(in srgb, var(--glow) 60%, transparent)",
                }}
              />
              <span className="relative">{stage.icon}</span>
            </span>

            <div className="pt-0.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/45">
                {stage.phase}
              </p>
              {stage.tamil && (
                <p className="mt-2 font-tamil text-base text-sacred/60">
                  {stage.tamil}
                </p>
              )}
              <h3 className="mt-1 font-display text-2xl font-semibold text-sacred md:text-3xl">
                {stage.title}
                {stage.verify && (
                  <>
                    {" "}
                    <BeliefTag kind="verify" />
                  </>
                )}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-sacred/65">
                {stage.body}
              </p>
            </div>
          </li>
        </ScrollReveal>
      ))}
    </ol>
  );
}
