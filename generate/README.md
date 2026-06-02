# `generate/` — Flow / Veo + Imagen Prompt Pack

This folder holds the **final, copy-paste prompts** for generating every Karuppu Swamy asset in
**Google Flow** (Imagen for stills, Veo for video), aligned to the website's design system in
[`../docs/build-spec.md`](../docs/build-spec.md) and [`../docs/production-plan.md`](../docs/production-plan.md).

The signature look (refined from the reference images in [`../assets/`](../assets/)):
**one consistent dark bronze-black murti, isolated in a pure black void, shot in an extreme
forced-perspective low-angle (from the bare front-facing right foot up to the face), with a single
theme-coloured rim light per form.**

| File | What's in it |
|---|---|
| [`image-prompts.md`](image-prompts.md) | The 6 long-narrative **still** prompts (Image 0–5 → the 6 forms) |
| [`motion-prompts.md`](motion-prompts.md) | The 6 **scroll-scrubbed "divine power"** motion prompts (MG-F1..F6) |

---

## The 6 forms (theme + files)

| # | Form (reference) | Theme | Accent → Glow | Still file | Motion |
|---|---|---|---|---|---|
| 0 | **Sangili Karuppan** — chain-bound | Fire-Red / Ember *(site default)* | `#C1272D` → `#FF6B1A` | `sangili-karuppu.jpeg` | MG-F1 |
| 1 | **Periya Karuppu** — great elder | Molten Copper-Amber | `#FF7A1A` → `#A8400E` | `periya-karuppu.jpeg` | MG-F2 |
| 2 | **Chinna Karuppu** — young, spear + shield | Camphor Blue | `#2FA9E0` → `#9CE0FF` | `chinna-karuppu.jpeg` | MG-F3 |
| 3 | **Mangadu Karuppu** — garlanded, fierce | Neem Sacred Green | `#2E8B57` → `#6FE0A0` | `mangadu-karuppu.jpeg` | MG-F4 |
| 4 | **Sangani Baba** — whip + chained foot | Diaspora Indigo-Violet | `#6A3DA8` → `#A06CD5` | `sangani-baba.jpeg` | MG-F5 |
| 5 | **Vettai Karuppu** — night hunter | Moonlit Steel | `#88A0B4` → `#CBD9E4` | `vettai-karuppu.jpeg` | MG-F6 |

---

## Rules that apply to every prompt

1. **Consistency.** Add the master murti still (`IMG-00`) **and** the matching reference (`image_X.png`)
   as **Ingredients** in Flow so the *face and ornaments stay identical* across all six.
2. **Same idol, only the light changes.** Keep the dark bronze-black sculptural figure; the form's
   **theme colour lives in the rim light**, not the skin (except where a reference is explicitly blue-skinned).
3. **Pure black void.** No temple, no sky, no jungle, no second figure, no offerings — only the deity.
4. **Text is code, never generated.** All Tamil `கருப்பு சாமி` and UI type is overlaid typographically in
   the build (Catamaran / Hind Madurai + Cinzel / Cormorant). Leave the dark upper corners free for it.
5. **Aspect ratios.** Generate **4:5** (forms card) **and** a **16:9** (pinned chapter background) of each.
6. **Append this NEGATIVE to every prompt:**
   ```
   no on-screen text, no captions, no watermark, no logos, no second figure, no background scenery,
   no modern objects, no rifle, no gun, no gore, no blood, no distorted hands, no extra fingers,
   no melted features, no cartoon look, no bright daylight, no clutter.
   ```

---

## Pipeline (in Flow)

1. **Stills first (Imagen).** Generate `IMG-00`, then the 6 form stills from [`image-prompts.md`](image-prompts.md),
   each referencing `IMG-00` + its `image_X.png`.
2. **Motion (Veo).** For each form use **Frames to Video** with its still as the **start frame**
   (add `IMG-00` as an Ingredient), prompts in [`motion-prompts.md`](motion-prompts.md). Length ~8s.
3. **Export** at highest resolution (≥1080p); keep raw exports in a `_raw/` folder, never ship them directly.
4. **Optimise + wire** per `../docs/production-plan.md` §6 (frame-sequence on `<canvas>` for the
   scroll-scrub, MP4+WebM+poster for ambient loops, GSAP + Lenis for the scroll feel).
