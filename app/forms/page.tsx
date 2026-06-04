import type { Metadata } from "next";
import { forms } from "@/content/forms";
import { Seal } from "@/components/landing/Seal";
import { EmberField } from "@/components/motion/EmberField";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { PillButton } from "@/components/ui/PillButton";
import { KolamStar } from "@/components/icons";

export const metadata: Metadata = {
  title: "The Forms",
  description:
    "An index of the fires — each guardian a glowing sigil, not a portrait. Enter a seal to witness the god in his sanctum.",
};

/**
 * The Forms index — a calm, dark grid of sigils (the navigable counterpart to
 * the immersive Threshold). No portraits: each god is his seal, linking to his
 * sanctum. Regenerates from the registry, so new fires appear on their own.
 */
export default function FormsIndexPage() {
  return (
    <>
      <section className="relative flex min-h-[56vh] items-center overflow-hidden">
        <EmberField className="absolute inset-0 opacity-70" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28 text-center">
          <Eyebrow num="02" className="justify-center">
            The Forms
          </Eyebrow>
          <SectionHeading
            as="h1"
            tamil="வடிவங்கள்"
            accent
            className="mx-auto mt-6 max-w-3xl text-5xl md:text-7xl"
          >
            The Fires
          </SectionHeading>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-sacred/75 md:text-2xl">
            One deity, many fires. Each is a sigil, not a portrait — step through
            a seal to witness the god.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map((form) => (
            <div key={form.id} className="flex justify-center">
              <Seal form={form} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <div className="relative mx-auto grid place-items-center">
          <KolamStar
            aria-hidden
            className="slow-spin h-28 w-28 text-sacred/20"
          />
          <span className="absolute font-display text-lg font-semibold text-sacred/40">
            108
          </span>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-sacred/50">
          <BeliefTag kind="belief" /> Tradition speaks of 108 forms. More fires
          will be kindled here.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href="/">Return to the Threshold</PillButton>
        </div>
      </section>
    </>
  );
}
