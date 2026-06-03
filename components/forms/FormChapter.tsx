"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { FormId, KaruppuForm } from "@/content/forms";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BeliefTag } from "@/components/ui/BeliefTag";
import { cn } from "@/lib/cn";

/**
 * One form = one full-height chapter (build-spec.md §3.3). When it scrolls to
 * centre it reports itself active, and the parent recolours the whole gallery to
 * this form's theme — the "page recolours around each Karuppu" effect (§6.3),
 * here driven by a static still instead of the (deferred) scroll-scrubbed clip.
 */
export function FormChapter({
  form,
  index,
  onActive,
}: {
  form: KaruppuForm;
  index: number;
  onActive: (id: FormId) => void;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActive(form.id);
      },
      { threshold: 0.55 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [form.id, onActive]);

  const reversed = index % 2 === 1;

  return (
    <section
      ref={ref}
      id={`form-${form.id}`}
      className="relative flex min-h-screen scroll-mt-24 items-center py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        {/* Still */}
        <div className={cn("relative", reversed && "md:order-2")}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-sacred/10">
            <Image
              src={form.image}
              alt={`${form.name} — ${form.epithet}`}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                boxShadow:
                  "inset 0 0 90px 0 color-mix(in srgb, var(--glow) 32%, transparent)",
              }}
            />
          </div>
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, var(--glow), transparent 65%)",
            }}
          />
        </div>

        {/* Text */}
        <div className={cn(reversed && "md:order-1")}>
          <Eyebrow num={form.num}>{form.theme}</Eyebrow>
          <h2 className="mt-5">
            <span className="block font-tamil text-3xl font-bold text-sacred sm:text-4xl">
              {form.tamil}
            </span>
            <span className="mt-2 block font-display text-4xl font-semibold text-accent sm:text-6xl">
              {form.name}
            </span>
          </h2>
          <p className="mt-4 font-serif text-xl italic text-sacred/75">
            {form.epithet}
            {form.verify && (
              <>
                {" "}
                <BeliefTag kind="verify" />
              </>
            )}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-sacred/45">
            {form.region}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sacred/70">
            {form.description}
          </p>

          {/* The reveal — a teaser for the motion baseline */}
          <div className="mt-8 max-w-xl rounded-xl border border-sacred/10 bg-stone/40 p-5">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              The reveal · coming in motion
            </p>
            <p className="mt-2 font-serif text-lg italic leading-snug text-sacred/70">
              {form.act}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
