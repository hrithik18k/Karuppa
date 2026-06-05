import type { Metadata } from "next";
import Link from "next/link";
import { sections } from "@/content/sections";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { PillButton } from "@/components/ui/PillButton";
import { RitualDivider } from "@/components/ui/RitualDivider";
import { KalaPaniField } from "@/components/diaspora/KalaPaniField";
import { CrossingPanel } from "@/components/diaspora/CrossingPanel";
import { VoyageStop, type Landfall } from "@/components/diaspora/VoyageStop";

const data = sections.diaspora;

export const metadata: Metadata = { title: data.title, description: data.lead };

/**
 * Diaspora — "Karuppu Across the Seas." A bespoke, dark oceanic chapter themed on
 * the kala pani (the dark waters): Tamil migrants carrying the guardian to far
 * shores, where he took new names. Structured as a voyage — departure, the
 * crossing, then the landfalls as a sea-route. Monochrome (plan.md §2): no hue,
 * the dark waters told only in ash text, blur, and depth. All facts flow from
 * sections.diaspora; the Indo-Caribbean VERIFY is preserved (matching the Sangani
 * Baba record in content/forms.ts).
 */

// The landfalls — the sea-route across the dark waters, far shore by far shore.
const landfalls: Landfall[] = [
  {
    index: "01",
    waters: "The Bay of Bengal",
    name: "Sangili Karuppan",
    tamil: "சங்கிலி கருப்பன்",
    shores: "Malaysia · Singapore",
    note: "Bound in chains, carried over the water by Tamil labourers to the plantations and ports — among the most beloved of all the diaspora forms, his shrines kept to this day.",
  },
  {
    index: "02",
    waters: "The Palk Strait",
    name: "The Island Guardian",
    shores: "Sri Lanka",
    note: "The nearest crossing of all — worshipped alongside the island's own Tamil folk deities, the guardian at home among kin across a narrow sea.",
  },
  {
    index: "03",
    waters: "The Middle Passage of indenture",
    name: "Sanganie Baba & Dee Baba",
    shores: "Trinidad · Guyana · Suriname · Guadeloupe · Martinique",
    note: "Across the longest waters to the Indo-Caribbean, where the guardian is honoured in folk shrines under new names — Sanganie Baba, and Dee Baba, the watcher of the boundary.",
    verify: true,
  },
  {
    index: "04",
    waters: "The wider oceans",
    name: "Across the Oceans",
    shores: "Mauritius · Réunion · Fiji · Seychelles · South Africa",
    note: "Wherever the indenture ships made landfall, the guardian followed — kept in island and coastal shrines from the Indian Ocean to the far Pacific.",
  },
];

export default function DiasporaPage() {
  return (
    <div>
      {/* Hero — the dark waters */}
      <section className="relative flex min-h-[74vh] items-center overflow-hidden">
        <KalaPaniField className="absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28">
          <ScrollReveal>
            <Eyebrow num={data.num}>{data.eyebrow}</Eyebrow>
            <SectionHeading
              as="h1"
              tamil={data.tamil}
              accent
              className="mt-6 text-5xl md:text-7xl"
            >
              Karuppu Across the Seas
            </SectionHeading>
            <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-sacred/80 md:text-2xl">
              Carried across the kala pani — the dark waters — by Tamil migrants,
              the guardian took new names on far shores.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sacred/60">
              He did not stay on the land of his shrine. Where his people went, he
              went — over the sea, into the plantations and ports, and was raised
              again wherever they made a home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Crossing — the kala pani centerpiece */}
      <section className="mx-auto max-w-5xl px-6 pb-4">
        <ScrollReveal>
          <CrossingPanel />
        </ScrollReveal>
      </section>

      {/* The Voyage — the sea-route of landfalls */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-28">
        <ScrollReveal>
          <Eyebrow num="·">The Voyage</Eyebrow>
          <SectionHeading className="mt-5 max-w-2xl text-3xl md:text-5xl">
            The shores where he took new names
          </SectionHeading>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-sacred/50">
            Four crossings, four landfalls — the guardian followed his people over
            every ocean, named anew on each far shore.
          </p>
        </ScrollReveal>

        <ol className="mt-14">
          {landfalls.map((landfall, i) => (
            <ScrollReveal key={landfall.shores} delay={i * 90}>
              <VoyageStop
                landfall={landfall}
                last={i === landfalls.length - 1}
              />
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/40">
            <BeliefTag kind="belief" /> The diaspora is living and wide — these are
            its principal shores, not its limits.
          </p>
        </ScrollReveal>
      </section>

      <RitualDivider className="my-4" />

      {/* Surf onward — Return + Next (Gallery) */}
      <section className="mx-auto max-w-5xl px-6 py-20 pb-28">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <PillButton href="/">Back to home</PillButton>
          <Link
            href="/gallery"
            className="group flex flex-col items-end text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/40">
              Next →
            </span>
            <span className="mt-1 font-display text-xl font-semibold text-sacred transition-colors group-hover:text-accent">
              Gallery
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
