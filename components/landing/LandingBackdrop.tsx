import type { KaruppuForm } from "@/content/forms";
import { MotionSlot } from "@/components/media/MotionSlot";
import { cn } from "@/lib/cn";

type ActiveKey = KaruppuForm["id"] | "hero";

/**
 * The fixed background behind the whole landing — a zoomed, heavily blurred,
 * desaturated still of each god (never a legible portrait), crossfading as the
 * active door changes. Each layer is a MotionSlot, so the day a god gets a
 * `video` it plays here too — still blurred. The clear image only ever appears
 * inside the sanctum (plan.md §1: blur → motion).
 *
 * Since §14 each layer also breathes the faintest wash of its god's colour —
 * as a door centres, the whole room leans toward the light of the sanctum
 * behind it. The hero keeps the shrine's own blood. The wash is a radial at
 * single-digit alpha: tinted AIR, never a coloured page.
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
      {layers.map(({ key, form }, i) => {
        // The hero belongs to the shrine (blood); each door, to its god.
        const wash = key === "hero" ? "#ff1814" : form.theme.accent;
        return (
          <div
            key={key}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
              active === key ? "opacity-100" : "opacity-0"
            )}
          >
            <MotionSlot
              src={form.veil}
              video={form.video}
              blur="threshold"
              kenBurns
              priority={i === 0}
              paused={active !== key}
              quality={30}
              className="absolute inset-0 h-full w-full"
              mediaClassName="brightness-[0.34] grayscale contrast-[1.05]"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(62% 52% at 50% 44%, color-mix(in srgb, ${wash} 9%, transparent), transparent 74%)`,
              }}
            />
          </div>
        );
      })}

      {/* Veil — the god is swallowed by the dark; only a faint, desaturated ghost
          survives. Heavy enough that the page reads near-black (a *glimpse*, not a
          portrait), with no hue of any kind. */}
      <div className="absolute inset-0 bg-void/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/75 via-void/35 to-void/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 50%, rgba(5,5,5,0.62), rgba(5,5,5,0.18) 55%, transparent 78%)",
        }}
      />
    </div>
  );
}
