"use client";

import { useEffect, useRef } from "react";

/**
 * A soft ember of light that trails the cursor — the sanctum responding to
 * presence. Eased follow via rAF; disabled on touch devices and for reduced
 * motion, and purely decorative (pointer-events: none).
 */
export function CursorEmber() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const R = 230;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `translate3d(${cx - R}px, ${cy - R}px, 0)`;
      if (Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[35] h-[460px] w-[460px] opacity-0 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--glow) 16%, transparent), transparent 62%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
