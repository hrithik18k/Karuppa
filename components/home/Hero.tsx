import Image from "next/image";
import { EmberField } from "@/components/motion/EmberField";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { KeyArtCrest, FlameMandala } from "@/components/icons";

/**
 * Home hero — "The Awakening" (build-spec.md §3.1), in the spirit of the 2026
 * film's "before the fire awakens." Static Sangili still (site default) given
 * life through a breathing aura, a slow key-art crest, drifting embers, and a
 * title that ignites in living fire. The motion clip (MG-01) lands later.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center overflow-hidden">
      {/* Background still + cinematic grade */}
      <div className="absolute inset-0">
        <Image
          src="/img/forms/sangili-karuppu.jpeg"
          alt="Sangili Karuppan — the guardian deity, bound in chains, emerging from darkness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/70" />
      </div>

      {/* Breathing aura behind the figure */}
      <div
        aria-hidden
        className="aura absolute right-[16%] top-1/2 h-[62vh] w-[62vh] -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--glow) 30%, transparent), transparent 65%)",
        }}
      />

      {/* Slowly turning key-art crest (sickles, spears, central fire) */}
      <KeyArtCrest
        aria-hidden
        className="slow-spin pointer-events-none absolute right-[6%] top-1/2 h-[78vh] max-h-[720px] w-[78vh] max-w-[720px] -translate-y-1/2 text-accent opacity-[0.08]"
      />

      <EmberField className="absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <FlameMandala aria-hidden className="h-6 w-6 text-accent/80" />
            <Eyebrow num="00">The Awakening</Eyebrow>
          </div>

          <p
            className="ignite mt-6 font-mono text-xs uppercase tracking-[0.42em] text-accent"
            style={{ animationDelay: "0.1s" }}
          >
            The fire awakens
          </p>

          <h1 className="mt-3">
            <span className="ignite block">
              <span className="fire-text block font-tamil text-5xl font-extrabold leading-none drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] sm:text-7xl md:text-8xl">
                கருப்பு சாமி
              </span>
            </span>
            <span
              className="ignite mt-4 block font-display text-2xl font-medium tracking-[0.3em] text-accent sm:text-3xl"
              style={{ animationDelay: "0.28s" }}
            >
              KARUPPA
            </span>
          </h1>

          <p className="mt-7 max-w-md font-serif text-2xl italic leading-snug text-sacred/85 sm:text-3xl">
            Kaval Deivam — the Guardian of Justice.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sacred/55">
            A cinematic digital shrine where the guardian deity is revealed form
            by form, power by power — a ritual that unfolds as you descend.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PillButton href="/forms" variant="solid">
              Enter the Forms
            </PillButton>
            <PillButton href="/guardian">Who is Karuppu</PillButton>
          </div>
        </div>
      </div>

      <ScrollCue className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" />
    </section>
  );
}
