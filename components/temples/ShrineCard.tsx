import { BeliefTag } from "@/components/ui/BeliefTag";
import { KolamStar } from "@/components/icons";
import { cn } from "@/lib/cn";

/**
 * A single entry in the shrine-registry — a stylized atlas card, not a map pin.
 * Each carries an index mark, the place, its region/state, and a one-line note.
 * The original shrine (`primary`) is given a wider, brighter, ashgold-edged
 * treatment so the registry reads as "the source, and those that took its soil."
 *
 * Pure Server Component: the only motion is the globals' reduced-motion-safe
 * `slow-spin` on the kolam mark, so it stays static, fast and hydration-stable.
 */
export interface Shrine {
  /** Registry index, e.g. "I" / "II" — a quiet ordinal, not a coordinate. */
  index: string;
  place: string;
  region: string;
  note: string;
  /** Tamil place-name, where carried by the content. */
  tamil?: string;
  verify?: boolean;
  /** The original shrine — rendered with primacy. */
  primary?: boolean;
}

export function ShrineCard({ shrine }: { shrine: Shrine }) {
  const { index, place, region, note, tamil, verify, primary } = shrine;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-stone/40 p-7 transition-colors duration-500 md:p-8",
        primary
          ? "border-ashgold/30 hover:border-ashgold/55"
          : "border-sacred/10 hover:border-accent/45"
      )}
    >
      {/* Heat bloom from the index corner, warming on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${
            primary ? "var(--color-ashgold)" : "var(--glow)"
          }, transparent 65%)`,
        }}
      />
      {/* Left ignition rule */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-px opacity-40 transition-opacity duration-500 group-hover:opacity-100",
          primary
            ? "bg-gradient-to-b from-transparent via-ashgold to-transparent"
            : "bg-gradient-to-b from-transparent via-accent to-transparent"
        )}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={cn(
            "font-display text-4xl font-semibold leading-none transition-colors duration-500 md:text-5xl",
            primary
              ? "text-ashgold/70"
              : "text-sacred/15 group-hover:text-accent/70"
          )}
        >
          {index}
        </span>
        <KolamStar
          aria-hidden
          className={cn(
            "slow-spin h-7 w-7 shrink-0 transition-colors duration-500 md:h-8 md:w-8",
            primary
              ? "text-ashgold/60"
              : "text-sacred/25 group-hover:text-accent/80"
          )}
        />
      </div>

      <div className="relative mt-6">
        {primary && (
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ashgold/80">
            The Source
          </p>
        )}
        {tamil && (
          <p className="font-tamil text-base text-sacred/55">{tamil}</p>
        )}
        <h2
          className={cn(
            "font-display font-semibold",
            primary
              ? "text-2xl text-ashgold md:text-3xl"
              : "text-xl text-accent md:text-2xl"
          )}
        >
          {place}
          {verify && (
            <>
              {" "}
              <BeliefTag kind="verify" />
            </>
          )}
        </h2>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-sacred/40">
          {region}
        </p>
        <p
          className={cn(
            "mt-4 leading-relaxed text-sacred/65",
            primary ? "text-base text-sacred/75" : "text-sm"
          )}
        >
          {note}
        </p>
      </div>
    </article>
  );
}
