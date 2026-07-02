import type { CSSProperties } from "react";
import Link from "next/link";
import type { KaruppuForm } from "@/content/forms";
import { FlameMandala } from "@/components/icons";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * A god's door on the landing — a line-sigil, never a portrait. Gods are told
 * in NAME and MOTION (plan.md §5), and since §14 each door already carries the
 * seam of the room behind it: the wrapper re-points `--accent`/`--glow` to the
 * god's own colour, so his mandala, name and "Enter" glow with HIS light — the
 * first glimpse of six different rooms, right on the Threshold.
 */
export function Seal({ form }: { form: KaruppuForm }) {
  return (
    <Link
      href={`/forms/${form.id}`}
      aria-label={`Enter ${form.name} — ${form.epithet}`}
      data-god={form.id}
      style={
        {
          "--accent": form.theme.accent,
          "--glow": form.theme.glow,
        } as CSSProperties
      }
      className="group relative flex flex-col items-center text-center outline-none"
    >
      <div className="relative grid place-items-center">
        <FlameMandala
          aria-hidden
          className="slow-spin h-44 w-44 text-accent opacity-55 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90 group-focus-visible:scale-110 group-focus-visible:opacity-90 md:h-56 md:w-56"
        />
        <span className="absolute font-display text-3xl font-semibold text-sacred md:text-4xl">
          {form.num}
        </span>
      </div>

      <span className="mt-7 font-tamil text-2xl text-sacred [text-shadow:0_1px_16px_rgba(0,0,0,0.85)] md:text-3xl">
        {form.tamil}
      </span>
      <span className="brush-heading mt-1.5 font-display text-xl font-semibold text-accent [text-shadow:0_1px_16px_rgba(0,0,0,0.85)] md:text-2xl">
        {form.name}
      </span>
      <span className="mt-1.5 text-sm text-sacred/60 [text-shadow:0_1px_12px_rgba(0,0,0,0.85)]">
        {form.epithet}
        {form.verify && (
          <>
            {" "}
            <BeliefTag kind="verify" />
          </>
        )}
      </span>

      <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/65 transition-colors duration-300 group-hover:border-accent group-hover:text-accent group-focus-visible:border-accent">
        Enter
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}
