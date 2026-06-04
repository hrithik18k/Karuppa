import { FlameMandala, Aruval } from "@/components/icons";

/**
 * The hero emblem for the Powers chapter — a slow flame-mandala with a breathing
 * aura behind it and the aruval (his weapon of justice) struck through the centre.
 * Purely decorative, deterministic, reduced-motion safe (animations are the
 * globals' `slow-spin` / `aura`, both no-op under prefers-reduced-motion).
 */
export function PowerSigil({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <div className="relative grid place-items-center">
        <span
          className="aura absolute h-[78%] w-[78%] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--glow), transparent 62%)",
          }}
        />
        <FlameMandala
          rays={24}
          className="slow-spin h-full w-full text-accent opacity-[0.5]"
        />
        <FlameMandala
          rays={12}
          className="slow-spin absolute h-[58%] w-[58%] text-accent opacity-30 [animation-direction:reverse] [animation-duration:120s]"
        />
        <Aruval className="absolute h-[26%] w-[26%] text-accent/90 drop-shadow-[0_0_14px_var(--glow)]" />
      </div>
    </div>
  );
}
