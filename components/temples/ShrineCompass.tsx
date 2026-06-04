import { FlameMandala, KolamStar } from "@/components/icons";

/**
 * The hero emblem for the Temples chapter — a ceremonial "map rose": a kolam
 * star turning one way inside a flame-mandala turning the other, with a breathing
 * aura behind and a single fire at the centre (the original shrine, from which
 * the others take their soil). Purely decorative + reduced-motion safe (only the
 * globals' `slow-spin` / `aura`, both no-op under prefers-reduced-motion).
 */
export function ShrineCompass({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <div className="relative grid place-items-center">
        <span
          className="aura absolute h-[72%] w-[72%] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--glow), transparent 62%)",
          }}
        />
        <FlameMandala
          rays={24}
          className="slow-spin h-full w-full text-accent opacity-[0.45]"
        />
        <KolamStar className="slow-spin absolute h-[62%] w-[62%] text-accent/70 [animation-direction:reverse] [animation-duration:120s]" />
        <span
          className="absolute h-[14%] w-[14%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--glow), color-mix(in srgb, var(--glow) 30%, transparent) 55%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
