import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { forms, formById } from "@/content/forms";
import { MotionSlot } from "@/components/media/MotionSlot";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { RitualDivider } from "@/components/ui/RitualDivider";

/**
 * A god's sanctum — his own statically-generated, code-split route (the
 * "microservice"). Generated from the registry, so a new form needs no new
 * file. Here the figure is finally revealed; the hero MotionSlot is already
 * wired for his motion video the day one is added to the registry.
 */
export function generateStaticParams() {
  return forms.map((f) => ({ form: f.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ form: string }>;
}): Promise<Metadata> {
  const { form } = await params;
  const f = formById(form);
  if (!f) return {};
  return {
    title: f.name,
    description: `${f.name} (${f.tamil}) — ${f.epithet}. ${f.description}`,
  };
}

export default async function SanctumPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;
  const f = formById(form);
  if (!f) notFound();

  const idx = forms.findIndex((x) => x.id === f.id);
  const prev = forms[(idx - 1 + forms.length) % forms.length];
  const next = forms[(idx + 1) % forms.length];

  return (
    <div data-form={f.id}>
      {/* Hero — the reveal. MotionSlot plays his video once the registry has one. */}
      <section className="relative flex min-h-dvh items-center overflow-hidden">
        <MotionSlot
          src={f.image}
          video={f.video}
          alt={`${f.name} — ${f.epithet}`}
          priority
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />
        </MotionSlot>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow num={f.num}>Kaval Deivam</Eyebrow>
            <h1 className="mt-5">
              <span className="block font-tamil text-5xl font-extrabold leading-none text-sacred drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] sm:text-7xl">
                {f.tamil}
              </span>
              <span className="mt-3 block font-display text-3xl font-semibold text-accent sm:text-5xl">
                {f.name}
              </span>
            </h1>
            <p className="mt-5 font-serif text-2xl italic text-sacred/85">
              {f.epithet}
              {f.verify && (
                <>
                  {" "}
                  <BeliefTag kind="verify" />
                </>
              )}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-sacred/50">
              {f.region}
            </p>
          </div>
        </div>
      </section>

      {/* Telling */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="font-serif text-xl leading-relaxed text-sacred/80 md:text-2xl md:leading-relaxed">
          {f.description}
        </p>

        <div className="mt-12 rounded-2xl border border-sacred/10 bg-stone/40 p-7">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            The reveal · coming in motion
          </p>
          <p className="mt-3 font-serif text-lg italic leading-snug text-sacred/75 md:text-xl">
            {f.act}
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/35">
            A video of this god&rsquo;s motion will play here.
          </p>
        </div>
      </section>

      <RitualDivider />

      {/* Move between fires */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/forms/${prev.id}`}
            className="group flex flex-col text-left"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/40">
              ← Previous
            </span>
            <span className="mt-1 font-display text-lg font-semibold text-sacred transition-colors group-hover:text-accent">
              {prev.name}
            </span>
          </Link>
          <Link
            href="/"
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/50 transition-colors hover:text-accent"
          >
            Home
          </Link>
          <Link
            href={`/forms/${next.id}`}
            className="group flex flex-col text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/40">
              Next →
            </span>
            <span className="mt-1 font-display text-lg font-semibold text-sacred transition-colors group-hover:text-accent">
              {next.name}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
