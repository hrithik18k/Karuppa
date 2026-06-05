import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * The site-wide "glimpse" (plan.md §1 — photo-blur, one of only three
 * instruments). A fixed, zoomed, heavily-blurred, GREYSCALE, near-black still
 * drifting behind a page (Ken Burns). Presence without disclosure: you sense a
 * form, you never resolve it.
 *
 * Strictly monochrome — the source is baked greyscale and crushed toward the
 * void, so no hue can ship. A future "where to glow" pass will add light here as
 * brightness/bloom only (never colour); until then this stays pure darkness.
 */
export function VeiledBackdrop({
  veil,
  priority = false,
  intensity = "chapter",
  className,
}: {
  veil: string;
  priority?: boolean;
  /** How far the form sinks into the dark. */
  intensity?: "chapter" | "deep";
  className?: string;
}) {
  const brightness = intensity === "deep" ? "brightness-[0.26]" : "brightness-[0.34]";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void",
        className
      )}
    >
      <Image
        src={veil}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        quality={35}
        className={cn(
          "kenburns object-cover blur-[48px] grayscale contrast-[1.05]",
          brightness
        )}
      />
      {/* Veil stack — keep it near-black so it reads as a glimpse, not a portrait. */}
      <div className="absolute inset-0 bg-void/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/35 to-void/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(72% 60% at 50% 42%, rgba(5,5,5,0.55), rgba(5,5,5,0.18) 55%, transparent 80%)",
        }}
      />
    </div>
  );
}
