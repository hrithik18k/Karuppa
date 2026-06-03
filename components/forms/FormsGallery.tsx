"use client";

import { useEffect, useRef, useState } from "react";
import { forms, type FormId } from "@/content/forms";
import { FormChapter } from "./FormChapter";
import { cn } from "@/lib/cn";

/**
 * The Forms gallery — six chapters, one deity across a spectrum of light.
 * Holds the active form and stamps `data-form` on the wrapper so every
 * accent beneath recolours live (production-plan.md §6.3). A sticky side
 * index tracks progress and only shows while the gallery is in view.
 */
export function FormsGallery() {
  const [active, setActive] = useState<FormId>(forms[0].id);
  const [inView, setInView] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "-12% 0px -12% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      data-form={active}
      className="relative transition-colors duration-500"
    >
      {/* Sticky form index */}
      <nav
        aria-label="Forms index"
        className={cn(
          "fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 transition-opacity duration-500 lg:block",
          inView ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-col gap-3.5">
          {forms.map((f) => {
            const on = f.id === active;
            return (
              <li key={f.id}>
                <a
                  href={`#form-${f.id}`}
                  className="group flex items-center justify-end gap-3"
                  aria-current={on ? "true" : undefined}
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
                        : "border-sacred/40 bg-transparent group-hover:border-accent"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {forms.map((form, i) => (
        <FormChapter key={form.id} form={form} index={i} onActive={setActive} />
      ))}
    </div>
  );
}
