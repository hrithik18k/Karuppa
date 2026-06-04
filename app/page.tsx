import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillButton } from "@/components/ui/PillButton";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { RitualDivider } from "@/components/ui/RitualDivider";
import { forms } from "@/content/forms";

const teasers = [
  {
    num: "01",
    href: "/guardian",
    label: "The Guardian",
    tamil: "காவலன்",
    blurb: "Karuppu — “the black god.” Village protector, enforcer of dharma.",
    image: "/img/forms/periya-karuppu.jpeg",
  },
  {
    num: "02",
    href: "/forms",
    label: "The Forms",
    tamil: "வடிவங்கள்",
    blurb: "Six named forms, six colours of one fire. Tradition speaks of 108.",
    image: "/img/forms/chinna-karuppu.jpeg",
  },
  {
    num: "03",
    href: "/powers",
    label: "The Powers",
    tamil: "சக்திகள்",
    blurb: "Guardianship, justice, the oracle’s voice, boons for the faithful.",
    image: "/img/forms/mangadu-karuppu.jpeg",
  },
  {
    num: "07",
    href: "/temples",
    label: "The Temples",
    tamil: "கோயில்கள்",
    blurb: "From Azhagar Koil to shrines across the seas — a guardian everywhere.",
    image: "/img/forms/vettai-karuppu.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Invocation */}
      <section className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <ScrollReveal>
          <Eyebrow num="00" className="justify-center">
            The Invocation
          </Eyebrow>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl italic leading-relaxed text-sacred/85 md:text-4xl md:leading-relaxed">
            Where the village ends and the wilderness begins, a dark figure keeps
            watch. <span className="text-accent">Karuppu</span> — the black god,
            the guardian, the one whom crooks cannot escape.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-sacred/55">
            Karuppu Swamy is a <em>kaval deivam</em> — a guardian deity of
            Dravidian folk religion, worshipped across Tamil Nadu, Sri Lanka and a
            diaspora that spans the world. This is his shrine, told as a film.
          </p>
        </ScrollReveal>
      </section>

      <RitualDivider />

      {/* Teaser strips */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <Eyebrow num="✦">Enter by any door</Eyebrow>
          <SectionHeading className="mt-5 max-w-2xl text-4xl md:text-6xl">
            A sanctum in chapters
          </SectionHeading>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teasers.map((t, i) => (
            <ScrollReveal key={t.href} delay={i * 80}>
              <Link
                href={t.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl border border-sacred/10 bg-stone"
              >
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {t.num}
                  </span>
                  <span className="mt-2 font-tamil text-sm text-sacred/60">
                    {t.tamil}
                  </span>
                  <span className="font-display text-2xl font-semibold text-sacred">
                    {t.label}
                  </span>
                  <span className="mt-2 text-sm leading-snug text-sacred/55">
                    {t.blurb}
                  </span>
                  <span
                    aria-hidden
                    className="mt-3 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    Enter ↗
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Forms preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <Eyebrow num="02">The Forms</Eyebrow>
            <SectionHeading
              tamil="வடிவங்கள்"
              accent
              className="mt-5 text-4xl md:text-6xl"
            >
              One deity, a spectrum of light
            </SectionHeading>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sacred/60">
              Each named form burns in its own colour on the same near-black — so
              the gallery reads as one Karuppu seen through many fires, not many
              gods. <BeliefTag kind="belief" /> Tradition counts 108.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <PillButton href="/forms">All six forms</PillButton>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {forms.map((form, i) => (
            <ScrollReveal key={form.id} delay={i * 60}>
              <Link
                href="/forms"
                data-form={form.id}
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg border border-sacred/10"
              >
                <Image
                  src={form.image}
                  alt={`${form.name} — ${form.epithet}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                <div
                  className="absolute inset-x-0 bottom-0 h-1 opacity-70"
                  style={{ background: "var(--accent)" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <span className="font-mono text-[10px] text-accent">
                    {form.num}
                  </span>
                  <span className="font-display text-sm font-semibold leading-tight text-sacred">
                    {form.name}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <ScrollReveal>
          <SectionHeading className="text-3xl md:text-5xl">
            Told with reverence, sourced with honesty
          </SectionHeading>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-sacred/55">
            Karuppu Swamy is a living deity in active worship. Throughout this
            shrine, devotional belief is kept distinct from scholarship — so the
            telling stays both faithful and true.
          </p>
          <div className="mt-10 flex justify-center">
            <PillButton href="/about">Sources & disclaimer</PillButton>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
