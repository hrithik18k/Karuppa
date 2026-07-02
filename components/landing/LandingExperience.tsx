"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FormId, KaruppuForm } from "@/content/forms";
import { LandingBackdrop } from "./LandingBackdrop";
import { Seal } from "./Seal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";
import { FlameMandala, KolamStar } from "@/components/icons";
import { KaruppuWordmark } from "@/components/brand/KaruppuWordmark";

type ActiveKey = FormId | "hero";

/** Reports itself active to the parent when it occupies the viewport centre. */
function useActiveOnView(key: ActiveKey, onActive: (k: ActiveKey) => void) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActive(key);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [key, onActive]);
  return ref;
}

function DoorSection({
  form,
  onActive,
}: {
  form: KaruppuForm;
  onActive: (k: ActiveKey) => void;
}) {
  const ref = useActiveOnView(form.id, onActive);
  return (
    <section
      ref={ref}
      id={`door-${form.id}`}
      className="relative flex min-h-screen scroll-mt-0 items-center justify-center px-6 py-24"
    >
      <ScrollReveal>
        <Seal form={form} />
      </ScrollReveal>
    </section>
  );
}

export function LandingExperience({ forms }: { forms: KaruppuForm[] }) {
  const [active, setActive] = useState<ActiveKey>("hero");
  const onActive = useCallback((k: ActiveKey) => setActive(k), []);
  const heroRef = useActiveOnView("hero", onActive);

  // Thin fire line that fills as you descend.
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative">
      <LandingBackdrop forms={forms} active={active} />

      {/* Scroll progress — a single ash hairline (plan.md §2). */}
      <div className="fixed inset-x-0 top-0 z-30 h-px bg-sacred/[0.07]">
        <div
          ref={progressRef}
          className="h-full origin-left bg-sacred/40"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Hero — no god revealed, only the fire and the name */}
      <section
        ref={heroRef}
        className="relative flex min-h-[92dvh] items-center justify-center overflow-hidden px-4 pb-14 pt-28 text-center sm:px-6"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[42rem] w-px -translate-x-1/2 -translate-y-1/2 rotate-[31deg] bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="flex items-center justify-center gap-3">
            <FlameMandala aria-hidden className="h-6 w-6 text-accent/85" />
            <Eyebrow num="00">Kaval Deivam</Eyebrow>
          </div>
          <p
            className="ignite mt-6 font-mono text-xs uppercase tracking-[0.34em] text-sacred/55"
            style={{ animationDelay: "0.1s" }}
          >
            Karuppu Swamy
          </p>
          {/* The stack is capped by viewport HEIGHT too (dvh) so the whole
              composition — marks, vow, doors — holds inside one fold on short
              laptop screens as well as tall phones. */}
          <h1 className="mt-2 flex flex-col items-center" aria-label="Karuppu">
            <span className="wordmark-rise block w-full">
              <KaruppuWordmark
                variant="tamil"
                priority
                className="mx-auto w-[min(76vw,43rem,38dvh)] drop-shadow-[0_0_30px_rgba(255,24,20,0.22)]"
              />
            </span>
            <span
              className="wordmark-rise -mt-[min(4rem,9dvh)] block w-full sm:-mt-[min(6rem,10dvh)] md:-mt-[min(8rem,12dvh)]"
              style={{ animationDelay: "0.18s" }}
            >
              <KaruppuWordmark
                priority
                className="mx-auto w-[min(92vw,64rem,58dvh)] drop-shadow-[0_0_34px_rgba(255,24,20,0.24)]"
              />
            </span>
            {/* The wordmark ignites in brightness + blur only — no colour. */}
            <span className="sr-only">
              <span className="block font-tamil text-6xl font-extrabold leading-none text-sacred drop-shadow-[0_2px_28px_rgba(0,0,0,0.9)] sm:text-8xl">
                கருப்பு சாமி
              </span>
            </span>
            <span
              className="sr-only"
              style={{ animationDelay: "0.28s" }}
            >
              KARUPPA
            </span>
          </h1>
          <p className="mx-auto -mt-[min(2rem,4dvh)] max-w-xl font-serif text-2xl italic leading-snug text-sacred/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.9)] sm:-mt-[min(3rem,5dvh)] sm:text-3xl md:-mt-[min(4rem,6dvh)]">
            Kaval Deivam. Guardian of justice.
          </p>
          <p className="sr-only">
            Kaval Deivam — the Guardian of Justice.
          </p>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-sacred/65 [text-shadow:0_1px_14px_rgba(0,0,0,0.9)]">
            A dark devotional shrine for Karuppu Swamy, told form by form with
            reverence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PillButton href="/forms" variant="solid">
              Enter forms
            </PillButton>
            <PillButton href="/guardian">Know Karuppu</PillButton>
          </div>
        </div>
      </section>

      {/* The doors — one self-contained god per fire */}
      {forms.map((form) => (
        <DoorSection key={form.id} form={form} onActive={onActive} />
      ))}

      {/* The roster is not fixed — more fires await */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-6 text-center">
        <ScrollReveal>
          <div className="relative mx-auto grid place-items-center">
            <KolamStar
              aria-hidden
              className="slow-spin h-40 w-40 text-sacred/20 md:h-52 md:w-52"
            />
            <span className="absolute font-display text-2xl font-semibold text-sacred/40">
              108
            </span>
          </div>
          <p className="mt-8 font-tamil text-xl text-sacred/60">இன்னும் பல</p>
          <h2 className="brush-heading mt-2 font-display text-3xl font-semibold text-accent md:text-4xl">
            More fires await
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-sacred/55">
            Tradition speaks of a hundred and eight forms. These are the first —
            more guardians will be added here in time.
          </p>
        </ScrollReveal>
      </section>

      {/* Quiet close */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-6 pb-24 text-center">
        <ScrollReveal>
          <Eyebrow num="✦" className="justify-center">
            Told with reverence
          </Eyebrow>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic leading-relaxed text-sacred/70 md:text-2xl">
            A living faith, kept distinct from scholarship — so the account stays
            both faithful and true.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <PillButton href="/guardian">Who is Karuppu</PillButton>
            <PillButton href="/about">Sources &amp; disclaimer</PillButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
