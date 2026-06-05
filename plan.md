# Karuppa — Build Plan

> **Direction:** A near-black monochrome digital shrine for Karuppu Swamy where only **three instruments** are allowed to express anything — **text, video motion, and photo-blur**. Everything else (accent colors, gold, fire gradients, colored particles, cursor glow, per-form theming) is **removed, not muted**. The discipline is subtraction.

This plan refines an existing Next.js 15 / React 19 / Tailwind v4 build — it is not a from-scratch rebuild. All 11 routes, the content model, the `MotionSlot` video socket, and the atmosphere components already exist. The work is mostly cutting color and wiring the film type.

---

## 1. The core idea

**Karuppa is a black room.** You don't decorate it. You let exactly three instruments speak, and you forbid everything else:

| Instrument | What it carries | Where it lives |
|---|---|---|
| **Text** | All meaning, hierarchy, reverence | The *Karuppu* wordmark + Tamil/English names + sparse prose |
| **Video motion** | The god himself — only ever as *motion*, never a static portrait | `MotionSlot` sockets |
| **Photo blur** | Presence without disclosure — a form you sense but can't resolve | Blurred stills behind the threshold/veils |

The signature narrative gradient is **blur → motion**: on the landing and gallery the god is blurred (presence); on his own route the video plays clear (revelation).

---

## 2. The monochrome law (strip vs. keep)

Color currently lives in `app/globals.css` and `content/forms.ts`.

### Remove
- The whole palette except void + ash: `--color-fire`, `--ember`, `--ashgold`, `--blood`, `--karuppu`, `--stone` as visible colors.
- All six `[data-form="…"]` accent themes (`globals.css`) and the `accent` / `glow` fields in `content/forms.ts`. Gods stop having colors — they have **names and motion**.
- `.fire-text` gradient, `.aura` breathing glow, the color in the ember-rise particle.
- `components/atmosphere/CursorEmber.tsx` (no cursor glow) and the colored `components/motion/EmberField.tsx`.
- `::selection { background: fire }` → ash-on-black.

### Reduce to a 4-token greyscale
```css
--void:  #050505;                    /* near-black, not pure #000 (prevents banding on video/photo) */
--ash:   #e7e3da;                    /* the only "light" — text */
--dim:   rgba(231,227,218,0.55);     /* secondary text */
--faint: rgba(231,227,218,0.14);     /* hairlines, borders, 1px progress line */
```
No hue anywhere in the UI chrome.

### Keep, but near-invisible ("very subtle" layer)
- Film grain (`GrainVignette`) at very low opacity — keeps the black from looking dead. Reads as cinema, not decoration.
- One hairline scroll-progress line, ash at ~14%.
- All reduced-motion fallbacks (already present).

### Elevate (the three instruments)
- `MotionSlot` stays the centerpiece — plays a still today, a video the moment a path is dropped in.
- Standardize a **blur scale** so blur itself signals proximity: threshold = 48px, veil-lift = 24px, near-reveal = 8px.

---

## 3. The *Karuppu* movie font

There is **no official, distributable "Karuppu" font** — the film title is a custom hand-lettered logotype. Three real paths:

- **Path A — recreate the wordmark as SVG (recommended).** Hand-trace the *Karuppu / கருப்பு* lettering once → `public/brand/karuppa-wordmark.svg`, used **only** as masthead logo + hero title (never body text). Most faithful, scales perfectly, no font licensing. Treat as reverent homage; keep to the wordmark, imply no official affiliation.
- **Path B — closest free fonts, then distress.** Headings only: Tamil display `Anek Tamil` (heavy) or `Kavivanar` (brush/folk); Latin display a heavy condensed cut (`Anton` / carved slab). Apply a light SVG `feTurbulence` / `feDisplacementMap` "carved edge" filter. Keep a clean Tamil face for body legibility.
- **Path C — license / commission.** Buy a matching display face or commission a custom wordmark. Highest fidelity, has a cost.

**Recommendation:** A for the title, B for headings, existing Tamil body font for reading.

> **This is the one decision that gates the build.** Everything else is unblocked.

---

## 4. Information architecture (keep routes, reframe minimal)

The 11 routes survive — they shed color and ornament. Each page = **one motion/blur moment + sparse text + a quiet exit.**

```
/            The Threshold — blurred presence, the wordmark, "enter"
/guardian    Who Karuppu is — text-led, one blurred still
/forms       The forms — sigils/names only; motion on the god's own route
/forms/[id]  A single god — his clip plays CLEAR here (the payoff)
/powers      Six powers — text + one motion sigil each
/iconography The symbols — text hotspots, no colored diagram
/worship     Rituals / offerings — factual text
/festivals   The 3-day flow — text sequence + one clip
/temples     Temple list — typographic atlas (drop the colored map)
/diaspora    The crossing — names across the world, text-led
/gallery     The motion archive — blurred grid, clears on play
/about       Sources + belief/fact disclaimer (ethics anchor — keep)
```

---

## 5. Signature interactions, monochrome

- **Threshold (`/`):** near-black, deeply blurred `MotionSlot` backdrop, the *Karuppu* wordmark igniting in **brightness/blur only — no color** (rewrite `.ignite` to drop the fire tint). Scroll descends past each form as a *name in the dark*, not a colored seal.
- **Per-god route (`/forms/[id]`):** the one place the clip resolves to full clarity and the photo stops being blurred. The only "bright" moment — the emotional payoff.
- **Forms gallery → sigils:** gods lose color, so the differentiator is a **monochrome line-glyph** (`components/iconography/glyphs.tsx` / `PowerSigil`) + the Tamil name. Hover lifts blur a touch; click enters and motion plays.
- **Transitions:** keep `SanctumVeil`, recolor to a pure black wipe (no blood-red).

---

## 6. Tech stack (already correct — minimal change)

Next.js 15 App Router + React 19 + Tailwind v4 + Lenis. No rebuild.

- **Video:** as god clips arrive, host on a streaming provider (Mux / Cloudinary, or Vercel Blob for a few) instead of self-hosting big MP4s — `MotionSlot` already takes a `video` URL, so this is config, not code. Ship `H.264 MP4 + WebM`, muted/autoplay/`playsinline`, poster = blurred still, lazy below the fold.
- **Drop** the planned Mapbox/Leaflet map for `/temples` — a colored interactive map fights the monochrome law. Replace with a typographic temple list/atlas.
- Keep Lenis smooth scroll + the reduced-motion baseline.

---

## 7. Data model cleanup

In `content/forms.ts`: remove `accent`, `glow`, `theme`; keep `id, num, name, tamil, epithet, region, image, description, act, video?, verify?`. The `act` field (the divine motion) becomes the **brief for each god's video clip** — already written for all six. That is the shot list.

---

## 8. Video-motion production pipeline

Motion is one of only three instruments, so the clips matter. Per god (six `act` descriptions ready):

1. Generate a **loopable, near-black, monochrome** clip (Veo/Flow or any generator) — *no color grade*, just light and smoke on black, matching each `act`.
2. Export → compress (MP4 + WebM) → poster = the blurred frame.
3. Drop the path into the form's `video` field. `MotionSlot` does the rest: blurred on the landing, clear on the route.

Until clips exist, the blurred **photo** stands in — satisfying the "photo blur should be visible" requirement, so the site is complete and on-theme *before* any video is made.

---

## 9. Accessibility, performance, ethics

- **Contrast:** ash `#e7e3da` on `#050505` is well past AA. Verify dim/faint tiers on real text.
- **Reduced motion:** every clip needs a static blurred-poster fallback (system already honors `prefers-reduced-motion`).
- **Performance:** lazy-load video, `next/image` for stills, LCP < 2.5s; the blurred hero still is the LCP, not a video.
- **Ethics:** a living faith. Keep the `/about` belief-vs-fact disclaimer, keep `verify` flags on Sangani / Vettai claims, handle offerings factually. Minimalism reinforces reverence — no sensationalism.

---

## 10. Phased roadmap (mapped to actual files)

| Phase | Work | Touches | Status |
|---|---|---|---|
| **0 — Font decision** | Pick Path A/B/C; if A, trace the wordmark SVG | *blocks nothing else* | ⏳ deferred — interim keeps Cinzel/Catamaran; ignite carries the "ignition" |
| **1 — Monochrome refactor** | Gut palette to 4 tokens; delete per-form themes, fire-text, aura, CursorEmber, colored EmberField | `app/globals.css`, `content/forms.ts`, `lib/fonts.ts` | ✅ done |
| **2 — Type system** | Wire wordmark + display font; rebuild `.ignite` as brightness/blur only | `lib/fonts.ts`, `app/layout.tsx`, landing components | ✅ `.ignite` rebuilt (no hue); wordmark = ash ignite. SVG wordmark = Phase 0 |
| **3 — Blur language** | Standardize blur scale (threshold/veil/near) across `MotionSlot` usages | `components/media/MotionSlot.tsx`, landing + gallery | ✅ done — `BlurLevel` scale 48/24/8px |
| **4 — Pages pass** | Strip color from all 11 routes; swap `/temples` map for typographic atlas | `app/**/page.tsx`, temple components | ✅ done — all hue removed; temples already typographic |
| **5 — Sigils** | Monochrome line-glyph per form to replace color identity | `glyphs.tsx`, `PowerSigil`, forms gallery | ✅ done — ash mandala sigil + name |
| **6 — Video** | Generate 6 monochrome `act` clips, host, drop into `video` fields | `content/forms.ts` + provider | ⏳ pending assets — sockets ready (`video?` field + `MotionSlot`) |
| **7 — Polish / deploy** | Grain at whisper opacity, Lighthouse, a11y, OG images, Vercel deploy | global | ◐ partial — grain dropped to 0.045, light-leak removed; build green. Lighthouse/OG/deploy TODO |

Phases 1–5 need **zero new assets** — pure refinement of what exists, so the new direction is visible immediately. Video (6) layers in over time without touching component code.

---

**Status (this session):** Phases 1–5 complete; the whole site is monochrome ash-on-`#050505`. `npm run build` + `tsc --noEmit` both green; verified in-browser (landing, god-door sigil, `/forms/[id]` reveal, gallery blur scale, worship). The palette is collapsed to four greyscale tokens (`--void/--ash/--dim/--faint`); the legacy `--color-*` and `--accent/--glow` names survive only as ash aliases so existing utility classes compile without hue. Per-form `accent/glow/theme` are gone from `content/forms.ts` and every page; `CursorEmber`/`EmberField` deleted; `KalaPaniField` spirit-lights kept as ash motion.

**Next steps:** (0) commission/trace the SVG wordmark for the masthead + hero; (6) generate the six monochrome `act` clips and drop paths into the `video?` fields; (7) Lighthouse pass, OG images, Vercel deploy.

---

## Session update — 2026-06-05 (assets, microservices, glass nav)

- **Per-god microservices.** Each form is now a self-contained module under `services/karuppu/<id>/manifest.ts`, composed by `registry.ts`; `content/forms.ts` is a thin back-compat re-export. See `services/karuppu/README.md`.
- **Black-and-white asset pipeline.** `generate/optimize-images.mjs` (sharp) bakes greyscale web derivatives from the colour originals in `assets/img-V1` → `public/img/forms/<id>.webp` (clear reveal, ~75–125 KB) + `public/img/veil/<id>.webp` (tiny blurred backdrop, ~17–30 KB). The heavy 2.5–3.3 MB jpegs were dropped from `/public` (≈17 MB → ≈0.75 MB). Colour originals stay in `/assets` for the future glow pass.
- **Site-wide "glimpse."** New `components/atmosphere/VeiledBackdrop.tsx` — a fixed, zoomed, blurred, greyscale, near-black Ken-Burns photo glimpse — sits behind every photographic chapter (powers, iconography, worship, festivals, guardian, gallery, about) and each sanctum; the landing + gallery tiles now read the tiny `veil` sources. `temples` / `diaspora` keep their bespoke `AtlasField` / `KalaPaniField`.
- **Navigation.** The full-screen toggle menu (`SiteHeader` / `RitualMenu`) and the right-side fires index are removed; replaced by a floating glassmorphic top-centre slidebar (`components/nav/GlassNav.tsx`) — frosted ash over the void, horizontally scrollable, strictly monochrome.
- **Glow deferred.** Everything stays B&W; a future plan will say *where* to glow (brightness/bloom only, never hue). `VeiledBackdrop` and `GlassNav` leave the seam.

`tsc --noEmit` + `next build` green; all 20 routes prerender.
