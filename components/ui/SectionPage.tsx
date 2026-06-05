import Link from "next/link";
import { navItems } from "@/lib/nav";
import type { SectionContent } from "@/content/sections";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { PillButton } from "@/components/ui/PillButton";
import { RitualDivider } from "@/components/ui/RitualDivider";
import { FlameMandala } from "@/components/icons";

/**
 * The shared dark chapter — a minimal, consistent page you can surf: a hero, a
 * few cards of "some content", and a link onward. Detail is added later by
 * editing content/sections.ts; the layout never changes.
 */
export function SectionPage({ data }: { data: SectionContent }) {
  const i = navItems.findIndex((n) => n.href === `/${data.slug}`);
  const next = i >= 0 ? navItems[(i + 1) % navItems.length] : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[66vh] items-center overflow-hidden">
        <FlameMandala
          aria-hidden
          className="slow-spin pointer-events-none absolute -right-16 top-1/2 h-[62vh] max-h-[560px] w-[62vh] max-w-[560px] -translate-y-1/2 text-accent opacity-[0.06]"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28">
          <Eyebrow num={data.num}>{data.eyebrow}</Eyebrow>
          <SectionHeading
            as="h1"
            tamil={data.tamil}
            accent
            className="mt-6 text-5xl md:text-7xl"
          >
            {data.title}
          </SectionHeading>
          <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-sacred/75 md:text-2xl">
            {data.lead}
          </p>
        </div>
      </section>

      {/* Some content */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.points.map((p) => (
            <div
              key={p.title}
              className="h-full rounded-2xl border border-sacred/10 bg-stone/40 p-6 transition-colors hover:border-accent/40"
            >
              {p.tamil && (
                <p className="font-tamil text-base text-sacred/55">{p.tamil}</p>
              )}
              <h2 className="mt-1 font-display text-xl font-semibold text-accent">
                {p.title}
                {p.verify && (
                  <>
                    {" "}
                    <BeliefTag kind="verify" />
                  </>
                )}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sacred/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>
        {data.note && (
          <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/40">
            <BeliefTag kind="belief" /> {data.note}
          </p>
        )}
      </section>

      <RitualDivider className="my-16" />

      {/* Surf onward */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <PillButton href="/">Back to home</PillButton>
          {next && (
            <Link
              href={next.href}
              className="group flex flex-col items-end text-right"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/40">
                Next →
              </span>
              <span className="mt-1 font-display text-xl font-semibold text-sacred transition-colors group-hover:text-accent">
                {next.label}
              </span>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
