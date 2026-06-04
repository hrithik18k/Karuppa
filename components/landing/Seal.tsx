import Link from "next/link";
import type { CSSProperties } from "react";
import type { KaruppuForm } from "@/content/forms";
import { FlameMandala } from "@/components/icons";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * A god's door on the landing — a glowing sigil, never a portrait. His number
 * inside a flame-mandala in *his* theme colour, his Tamil + English name, and an
 * "Enter" that redirects to his sanctum (`/forms/[id]`). The form's own colours
 * are pinned locally so each seal burns in its own light regardless of the
 * page's active theme.
 */
export function Seal({ form }: { form: KaruppuForm }) {
  const themeVars = {
    "--accent": form.accent,
    "--glow": form.glow,
  } as CSSProperties;

  return (
    <Link
      href={`/forms/${form.id}`}
      style={themeVars}
      aria-label={`Enter ${form.name} — ${form.epithet}`}
      className="group relative flex flex-col items-center text-center outline-none"
    >
      <div className="relative grid place-items-center">
        <div
          aria-hidden
          className="absolute h-[280px] w-[280px] rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-75 group-focus-visible:opacity-75"
          style={{
            background: "radial-gradient(circle, var(--glow), transparent 65%)",
          }}
        />
        <FlameMandala
          aria-hidden
          className="slow-spin h-44 w-44 text-accent opacity-80 transition-transform duration-700 group-hover:scale-110 group-focus-visible:scale-110 md:h-56 md:w-56"
        />
        <span className="absolute font-display text-3xl font-semibold text-accent md:text-4xl">
          {form.num}
        </span>
      </div>

      <span className="mt-7 font-tamil text-2xl text-sacred [text-shadow:0_1px_16px_rgba(0,0,0,0.85)] md:text-3xl">
        {form.tamil}
      </span>
      <span className="mt-1.5 font-display text-xl font-semibold tracking-wide text-accent [text-shadow:0_1px_16px_rgba(0,0,0,0.85)] md:text-2xl">
        {form.name}
      </span>
      <span className="mt-1.5 text-sm text-sacred/70 [text-shadow:0_1px_12px_rgba(0,0,0,0.85)]">
        {form.epithet}
        {form.verify && (
          <>
            {" "}
            <BeliefTag kind="verify" />
          </>
        )}
      </span>

      <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-sacred/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/60 transition-colors duration-300 group-hover:border-accent group-hover:text-accent group-focus-visible:border-accent">
        Enter the sanctum
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
