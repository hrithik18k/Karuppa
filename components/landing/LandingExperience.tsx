"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { FormId, KaruppuForm } from "@/content/forms";
import { LandingBackdrop } from "./LandingBackdrop";
import { Seal } from "./Seal";
import { EmberField } from "@/components/motion/EmberField";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PillButton } from "@/components/ui/PillButton";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { FlameMandala, KolamStar } from "@/components/icons";
import { cn } from "@/lib/cn";

type ActiveKey = FormId | "hero";

/** Smoothly scroll to an id, using Lenis when present. */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(el, { offset: 0 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

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
    <div data-form={active === "hero" ? undefined : active} className="relative">
      <LandingBackdrop forms={forms} active={active} />
      <EmberField className="pointer-events-none fixed inset-0 -z-10" />

      {/* Scroll progress */}
      <div className="fixed inset-x-0 top-0 z-30 h-px bg-sacred/10">
        <div
          ref={progressRef}
          className="h-full origin-left bg-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Side index */}
      <nav
        aria-label="The fires"
        className={cn(
          "fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 transition-opacity duration-500 lg:block",
          active === "hero" ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <ul className="flex flex-col gap-3.5">
          {forms.map((f) => {
            const on = f.id === active;
            return (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(`door-${f.id}`)}
                  aria-label={`Go to ${f.name}`}
                  aria-current={on ? "true" : undefined}
                  className="group flex items-center justify-end gap-3"
                  style={{ "--accent": f.accent, "--glow": f.glow } as CSSProperties}
                >
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.2em] transition-opacity",
                      on
                        ? "text-accent opacity-100"
                        : "text-sacred/45 opacity-0 group-hover:opacity-100"
                    )}
                  >
                    {f.name}
                  </span>
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full border transition-all duration-300",
                      on
                        ? "scale-125 border-accent bg-accent"
                        : "border-sacred/40 group-hover:border-accent"
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hero — no god revealed, only the fire and the name */}
      <section
        ref={heroRef}
        className="relative flex min-h-dvh items-center justify-center px-6 text-center"
      >
        <div className="max-w-3xl">
          <div className="flex items-center justify-center gap-3">
            <FlameMandala aria-hidden className="h-6 w-6 text-accent/80" />
            <Eyebrow num="00">The Threshold</Eyebrow>
          </div>
          <p
            className="ignite mt-6 font-mono text-xs uppercase tracking-[0.42em] text-accent"
            style={{ animationDelay: "0.1s" }}
          >
            The fire awakens
          </p>
          <h1 className="mt-4">
            <span className="ignite block">
              <span className="fire-text block font-tamil text-6xl font-extrabold leading-none drop-shadow-[0_2px_28px_rgba(0,0,0,0.9)] sm:text-8xl">
                கருப்பு சாமி
              </span>
            </span>
            <span
              className="ignite mt-4 block font-display text-2xl font-medium tracking-[0.34em] text-accent sm:text-3xl"
              style={{ animationDelay: "0.28s" }}
            >
              KARUPPA
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl font-serif text-2xl italic leading-snug text-sacred/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.9)] sm:text-3xl">
            Kaval Deivam — the Guardian of Justice.
          </p>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-sacred/65 [text-shadow:0_1px_14px_rgba(0,0,0,0.9)]">
            Descend through the fires. Each is a guardian; none shows his face
            until you enter his sanctum.
          </p>
          <div className="mt-9 flex justify-center">
            <PillButton href="#door-sangili" variant="solid">
              Begin the descent
            </PillButton>
          </div>
        </div>
        <ScrollCue className="absolute bottom-8 left-1/2 -translate-x-1/2" />
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
          <h2 className="mt-2 font-display text-3xl font-semibold text-sacred md:text-4xl">
            More fires await
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-sacred/55">
            Tradition speaks of a hundred and eight forms. These are the first to
            be kindled — more guardians will be lit here in time.
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
            A living faith, kept distinct from scholarship — so the telling stays
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
