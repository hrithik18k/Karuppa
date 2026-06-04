import { KeyArtCrest } from "@/components/icons";

/**
 * The reading-crest for the Iconography chapter — the film's key-art wheel of
 * sickles and spears, set in a breathing forge-glow. Stands as the "figure" the
 * surrounding attributes annotate. Decorative + reduced-motion safe (globals'
 * `aura` / `slow-spin` both no-op under prefers-reduced-motion).
 */
export function IconCrest({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <div className="relative grid place-items-center">
        <span
          className="aura absolute h-[72%] w-[72%] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--glow), transparent 60%)",
          }}
        />
        {/* faint forged ring, counter-rotating */}
        <span
          className="slow-spin absolute h-[94%] w-[94%] rounded-full border border-accent/15 [animation-direction:reverse] [animation-duration:140s]"
        />
        <KeyArtCrest className="slow-spin h-full w-full text-accent opacity-80 [animation-duration:160s]" />
      </div>
    </div>
  );
}
