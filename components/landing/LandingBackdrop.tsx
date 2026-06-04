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
          >
            <div
              className="absolute inset-0"
              style={
                {
                  background:
                    "radial-gradient(80% 70% at 50% 42%, color-mix(in srgb, var(--lglow) 42%, transparent), transparent 72%)",
                  "--lglow": form.glow,
                } as CSSProperties
              }
            />
          </MotionSlot>
        </div>
      ))}

      {/* Veil — keep the blurred fire clearly present; only scrim enough for
          legible type. Heavy blur keeps the god abstract even at this opacity. */}
      <div className="absolute inset-0 bg-void/38" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/45 via-transparent to-void/90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(10,10,11,0.45), transparent 70%)",
        }}
      />
    </div>
  );
}
