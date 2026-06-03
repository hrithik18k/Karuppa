import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillButton } from "@/components/ui/PillButton";
import { EmberField } from "@/components/motion/EmberField";

/**
 * A consecrated "coming soon" chapter. Used for routes whose full content lands
 * in a later structural baseline — keeps the navigation whole and the build green.
 */
export function PlaceholderPage({
  num,
  eyebrow,
  tamil,
  title,
  blurb,
}: {
  num: string;
  eyebrow: string;
  tamil: string;
  title: string;
  blurb: string;
}) {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden">
      <EmberField className="absolute inset-0 opacity-60" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28 md:py-36">
        <Eyebrow num={num}>{eyebrow}</Eyebrow>
        <SectionHeading
          tamil={tamil}
          accent
          className="mt-6 text-5xl md:text-7xl"
        >
          {title}
        </SectionHeading>
        <p className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-sacred/70 md:text-2xl">
          {blurb}
        </p>
        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.3em] text-sacred/40">
          This chapter is being consecrated — full content arrives in the next baseline.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <PillButton href="/">Return to the sanctum</PillButton>
          <PillButton href="/forms">See the Forms</PillButton>
        </div>
      </div>
    </section>
  );
}
