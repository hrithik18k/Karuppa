import Image from "next/image";
import { EmberField } from "@/components/motion/EmberField";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";
import { ScrollCue } from "@/components/ui/ScrollCue";

/**
 * Home hero — "The Awakening" (build-spec.md §3.1).
 * Static cinematic still standing in for the looping Flow clip (MG-01) until the
 * motion baseline. The figure sits centre-right; the name is overlaid in code,
 * left, over the darkened negative space — mirroring the reference composition.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center overflow-hidden">
      {/* Background still + cinematic grade */}
      <div className="absolute inset-0">
        <Image
          src="/img/forms/sangili-karuppu.jpeg"
          alt="The guardian deity Karuppu Swamy, emerging from darkness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/70" />
        {/* ember glow pooling behind the figure */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 55% at 72% 60%, color-mix(in srgb, var(--glow) 22%, transparent), transparent 70%)",
          }}
        />
      </div>

      <EmberField className="absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          <Eyebrow num="00">The Awakening</Eyebrow>
          <h1 className="mt-8">
            <span className="block font-tamil text-5xl font-extrabold leading-none text-sacred drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)] sm:text-7xl md:text-8xl">
              கருப்பு சாமி
            </span>
            <span className="mt-4 block font-display text-2xl font-medium tracking-[0.3em] text-accent sm:text-3xl">
              KARUPPA
            </span>
          </h1>
          <p className="mt-7 max-w-md font-serif text-2xl italic leading-snug text-sacred/85 sm:text-3xl">
            Kaval Deivam — the Guardian of Justice.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sacred/55">
            A cinematic digital shrine where the guardian deity is revealed form by
            form, power by power — a ritual that unfolds as you descend.
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
