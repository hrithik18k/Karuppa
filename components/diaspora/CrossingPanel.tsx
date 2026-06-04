import Image from "next/image";
import { FlameMandala } from "@/components/icons";

/**
 * The Crossing — the dramatic centerpiece of the Diaspora chapter: the kala pani
 * itself, the "dark waters" the guardian was carried over. The Sangani Baba still
 * (the ocean-crossed form) is darkened hard into a near-black oceanic backdrop —
 * the god kept in shadow — with a slow mandala turning above like a sea-mark and
 * a breathing indigo aura. Pure Server Component; motion is the globals'
 * reduced-motion-safe `aura` / `slow-spin`, so it stays hydration-stable.
 */
export function CrossingPanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-stone/50">
      {/* The dark waters — the diaspora form's still, kept deep in shadow */}
      <Image
        src="/img/forms/sangani-baba.jpeg"
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 768px) 92vw, 70vw"
        quality={50}
        className="object-cover object-top brightness-[0.4]"
      />
      {/* Hard veil — pull the photo down into the void on every edge */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/70" />
      <div className="absolute inset-0 bg-void/40" />

      {/* Breathing indigo aura — the deep glow under the sea */}
      <div
        aria-hidden
        className="aura pointer-events-none absolute left-1/2 top-[60%] h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 50%, color-mix(in srgb, var(--glow) 30%, transparent), transparent 72%)",
        }}
      />
      {/* The sea-mark turning above the crossing */}
      <FlameMandala
        aria-hidden
        rays={24}
        className="slow-spin pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-[55%] text-accent opacity-[0.10]"
      />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-6 py-16 text-center sm:px-12 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-sacred/55">
          கருங்கடல் · The Crossing
        </p>
        <p className="mt-7 font-tamil text-2xl text-sacred/80 md:text-3xl">
          கல பானி
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-accent md:text-5xl">
          The Dark Waters
        </h2>

        <p className="mt-7 font-serif text-xl italic leading-relaxed text-sacred/85 md:text-2xl">
          To cross the kala pani was to lose caste and kin and the soil of the
          shrine. The labourers carried no temple — only the guardian, kept in
          memory, raised again on the far shore.
        </p>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-sacred/60">
          Bound for the plantations of distant empires, Tamil migrants took
          Karuppu over the sea. Where they landed, he landed — and there he took
          new names.
        </p>
      </div>
    </div>
  );
}
