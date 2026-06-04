import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * One landfall on the voyage across the kala pani — a station in the journey
 * structure of the Diaspora chapter. Each carries the name the guardian took on
 * that shore, the lands he reached, and the telling. Rendered as a node on a
 * vertical sea-route: a lit waypoint on the left rule, the far shore on the right.
 *
 * Pure Server Component — the only motion is CSS on hover (the waypoint glow),
 * so it stays static, fast and hydration-stable in this chapter's indigo light.
 */
export interface Landfall {
  /** Sea-route ordinal, e.g. "01". */
  index: string;
  /** The waters crossed to reach this shore. */
  waters: string;
  /** The name the guardian is honoured by here. */
  name: string;
  tamil?: string;
  /** The lands of this landfall. */
  shores: string;
  note: string;
  verify?: boolean;
}

export function VoyageStop({
  landfall,
  last = false,
}: {
  landfall: Landfall;
  last?: boolean;
}) {
  const { index, waters, name, tamil, shores, note, verify } = landfall;

  return (
    <li className="group relative grid gap-3 pb-14 pl-10 md:grid-cols-[150px_1fr] md:gap-10 md:pl-14">
      {/* The sea-route rule — runs between waypoints, stops at the last shore */}
      {!last && (
        <span
          aria-hidden
          className="absolute bottom-0 left-[5px] top-7 w-px md:left-[7px]"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--glow) 45%, transparent), color-mix(in srgb, var(--glow) 8%, transparent))",
          }}
        />
      )}

      {/* The lit waypoint */}
      <span
        aria-hidden
        className="absolute left-0 top-[18px] grid h-3.5 w-3.5 place-items-center rounded-full bg-accent transition-transform duration-500 group-hover:scale-125 md:top-[20px]"
        style={{
          boxShadow: "0 0 16px 2px var(--glow)",
        }}
      >
        <span className="h-1 w-1 rounded-full bg-void/70" />
      </span>

      {/* The waters crossed */}
      <div className="md:pt-1">
        <p className="font-display text-3xl font-semibold leading-none text-sacred/15 transition-colors duration-500 group-hover:text-accent/60 md:text-4xl">
          {index}
        </p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-sacred/40">
          {waters}
        </p>
      </div>

      {/* The far shore */}
      <div>
        {tamil && (
          <p className="font-tamil text-base text-sacred/55">{tamil}</p>
        )}
        <h2 className="font-display text-xl font-semibold text-accent md:text-2xl">
          {name}
          {verify && (
            <>
              {" "}
              <BeliefTag kind="verify" />
            </>
          )}
        </h2>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-sacred/45">
          {shores}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-sacred/65">
          {note}
        </p>
      </div>
    </li>
  );
}
