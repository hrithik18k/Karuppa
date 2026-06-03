import type { Metadata } from "next";
import { FormsGallery } from "@/components/forms/FormsGallery";
import { EmberField } from "@/components/motion/EmberField";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { PillButton } from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: "The Forms",
  description:
    "Six named, attested forms of Karuppu Swamy — each in its own colour theme on near-black, so the gallery reads as one deity seen through a spectrum of fire.",
};

export default function FormsPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <EmberField className="absolute inset-0 opacity-70" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28 text-center">
          <Eyebrow num="02" className="justify-center">
            The Forms
          </Eyebrow>
          <SectionHeading
            tamil="வடிவங்கள்"
            accent
            className="mx-auto mt-6 max-w-3xl text-5xl md:text-7xl"
          >
            The 108 Forms
          </SectionHeading>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-sacred/75 md:text-2xl">
            One deity, seen through many fires. Each named form burns in its own
            colour on the same near-black — a spectrum of one Karuppu, not six
            different gods.
          </p>
          <p className="mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm text-sacred/50">
            <BeliefTag kind="belief" /> Tradition speaks of 108 forms. These six
            are the named, attested catalogue.
          </p>
        </div>
        <ScrollCue className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" />
      </section>

      {/* The six chapters */}
      <FormsGallery />

      {/* Closing */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <SectionHeading className="text-3xl md:text-5xl">
          Six is the floor, not the cap
        </SectionHeading>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-sacred/55">
          Beyond these six, tradition names many more — Sami Karuppu, Dee Baba,
          and regional forms without number. Each new baseline can add another
          colour to the spectrum.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PillButton href="/powers">His powers</PillButton>
          <PillButton href="/iconography">What he bears</PillButton>
        </div>
      </section>
    </>
  );
}
