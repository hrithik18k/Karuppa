import type { CSSProperties } from "react";
import type { KaruppuForm } from "@/content/forms";
import { MotionSlot } from "@/components/media/MotionSlot";
import { cn } from "@/lib/cn";

type ActiveKey = KaruppuForm["id"] | "hero";

/**
 * The fixed background behind the whole landing — a zoomed, heavily blurred
 * fire-haze of each god's still (never a legible portrait), crossfading and
 * recolouring as the active door changes. Each layer is a MotionSlot, so the
 * day a god gets a `video` it plays here too, still blurred. The clear image
 * only ever appears inside the sanctum.
 */
export function LandingBackdrop({
  forms,
  active,
}: {
  forms: KaruppuForm[];
  active: ActiveKey;
}) {
  const layers: { key: ActiveKey; form: KaruppuForm }[] = [
    { key: "hero", form: forms[0] },
    ...forms.map((form) => ({ key: form.id as ActiveKey, form })),
  ];

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-void">
      {layers.map(({ key, form }, i) => (
        <div
          key={key}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
            active === key ? "opacity-100" : "opacity-0"
          )}
        >
          <MotionSlot
            src={form.image}
            video={form.video}
            blur
            kenBurns
            priority={i === 0}
            quality={30}
            className="absolute inset-0 h-full w-full"
            mediaClassName="brightness-[0.38] saturate-[0.62] contrast-[1.06]"
          >
            <div
              className="absolute inset-0"
              style={
                {
                  background:
                    "radial-gradient(62% 52% at 50% 40%, color-mix(in srgb, var(--lglow) 16%, transparent), transparent 66%)",
                  "--lglow": form.glow,
                } as CSSProperties
              }
            />
          </MotionSlot>
        </div>
      ))}

      {/* Veil — the god is swallowed by the dark; only a faint, desaturated ghost
          and a low ember core survive. Heavy enough that the page reads near-black
          (a *glimpse*, not a portrait), light enough that the fire still breathes. */}
      <div className="absolute inset-0 bg-void/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/75 via-void/35 to-void/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 50%, rgba(10,10,11,0.62), rgba(10,10,11,0.18) 55%, transparent 78%)",
        }}
      />
      {/* A single faint ember core so the void still has a heartbeat. */}
      <div
        className="aura absolute inset-0"
        style={{
          background:
            "radial-gradient(36% 30% at 50% 46%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}
