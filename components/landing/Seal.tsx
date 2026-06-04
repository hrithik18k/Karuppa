import Link from "next/link";
import type { KaruppuForm } from "@/content/forms";
import { FlameMandala } from "@/components/icons";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * A god's door on the landing — a monochrome line-sigil, never a portrait and
 * never a colour. Gods are told only in NAME and MOTION (plan.md §5): his number
 * inside an ash mandala, his Tamil + English name, and an "Enter" to his sanctum
 * (`/forms/[id]`). Hover lifts brightness a touch — light, not hue.
 */
export function Seal({ form }: { form: KaruppuForm }) {
  return (
    <Link
      href={`/forms/${form.id}`}
      aria-label={`Enter ${form.name} — ${form.epithet}`}
      className="group relative flex flex-col items-center text-center outline-none"
    >
      <div className="relative grid place-items-center">
        <FlameMandala
          aria-hidden
          className="slow-spin h-44 w-44 text-sacred opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90 group-focus-visible:scale-110 group-focus-visible:opacity-90 md:h-56 md:w-56"
        />
        <span className="absolute font-display text-3xl font-semibold text-sacred md:text-4xl">
          {form.num}
        </span>
      </div>

      <span className="mt-7 font-tamil text-2xl text-sacred [text-shadow:0_1px_16px_rgba(0,0,0,0.85)] md:text-3xl">
        {form.tamil}
      </span>
      <span className="mt-1.5 font-display text-xl font-semibold tracking-wide text-sacred/85 [text-shadow:0_1px_16px_rgba(0,0,0,0.85)] md:text-2xl">
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

      <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-sacred/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/60 transition-colors duration-300 group-hover:border-sacred/50 group-hover:text-sacred group-focus-visible:border-sacred/50">
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
