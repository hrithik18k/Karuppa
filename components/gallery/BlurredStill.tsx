import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { KaruppuForm } from "@/content/forms";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * A gallery teaser for one form — a heavily blurred, darkened still beneath a
 * void gradient, so no face is ever legible here. The clear still lives only on
 * the god's own page (/forms/[id]), and this card links there. A small "motion"
 * marker shows where the scroll-scrubbed clip will play once the form's reserved
 * video slot is filled. The form's own colours are pinned locally so each tile
 * burns in its own light regardless of the page's active theme.
 */
export function BlurredStill({ form }: { form: KaruppuForm }) {
  const themeVars = {
    "--accent": form.accent,
    "--glow": form.glow,
  } as CSSProperties;

  return (
    <Link
      href={`/forms/${form.id}`}
      style={themeVars}
      aria-label={`View ${form.name} — ${form.epithet}`}
      className="group relative block overflow-hidden rounded-2xl border border-sacred/10 outline-none transition-colors duration-500 hover:border-accent/40 focus-visible:border-accent/60"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-void">
        {/* The still — blurred and crushed toward black so the face never reads. */}
        <Image
          src={form.image}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          quality={35}
          className="scale-[1.35] object-cover blur-2xl brightness-[0.35] saturate-[0.7] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.5]"
        />

        {/* Veils — keep it near-black, with a faint ember core in the form's glow. */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/30" />
        <div
          aria-hidden
          className="aura absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 42%, color-mix(in srgb, var(--glow) 22%, transparent), transparent 70%)",
          }}
        />

        {/* Motion marker — the reserved clip lives here, later. */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-sacred/15 bg-void/40 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-sacred/55 backdrop-blur-sm">
          <span
            aria-hidden
            className="aura inline-block h-1.5 w-1.5 rounded-full bg-accent"
          />
          Motion soon
        </span>

        {/* Identity — Tamil + English, with the act this form is known for. */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/90">
            {form.num} · {form.region.split(" · ")[0]}
          </p>
          <p className="mt-2 font-tamil text-2xl text-sacred [text-shadow:0_1px_18px_rgba(0,0,0,0.9)]">
            {form.tamil}
          </p>
          <p className="mt-0.5 font-display text-lg font-semibold text-sacred [text-shadow:0_1px_18px_rgba(0,0,0,0.9)]">
            {form.name}
            {form.verify && (
              <>
                {" "}
                <BeliefTag kind="verify" />
              </>
            )}
          </p>
          <p className="mt-2 max-w-[34ch] text-xs leading-relaxed text-sacred/65">
            {form.act}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/55 transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">
            View
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
