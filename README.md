# Karuppa

> A cinematic digital shrine for **Karuppu Swamy** — the guardian deity (*kaval deivam*) of Dravidian folk religion — revealed form by form, power by power, through scroll-triggered motion graphics.
> 

The build is now **underway**. The Next.js application foundation is in place — the "Dark Sanctum" design system, the type system, a full-screen ritual navigation, and a cinematic scroll-driven home page — built from the reference stills. **Motion graphics (the Flow/Veo clips) are deliberately deferred**; the site currently uses the still imagery with CSS-based motion (drifting embers, reveal-on-scroll) as a stand-in. The repository also holds the design specification, the motion-graphics production plan, and the reference imagery.

---

## What this is 

An "Anniyan-inspired" devotional website concept: a dark, reverent, cinematic experience built around a single consistent murti (temple idol) of Karuppu Swamy. The site is designed as a scroll-driven sanctum where each section unfolds like a ritual — borrowing the mood and gravitas of the film, never its violence.

The centrepiece is the **Forms gallery**: six named, attested forms of Karuppu, each in its own colour theme on near-black, so the gallery reads as one deity across a spectrum of light rather than six different gods.

| # | Form | Theme | Image |
|---|------|-------|-------|
| 01 | Sangili Karuppan | Fire-Red / Ember *(site default)* | `assets/img-V1/sangili-karuppu.jpeg` |
| 02 | Periya Karuppu | Molten Copper-Amber | `assets/img-V1/periya-karuppu.jpeg` |
| 03 | Chinna Karuppu | Camphor Blue | `assets/img-V1/chinna-karuppu.jpeg` |
| 04 | Mangadu Karuppu | Neem Sacred Green | `assets/img-V1/mangadu-karuppu.jpeg` |
| 05 | Sangani Baba | Diaspora Indigo-Violet | `assets/img-V1/sangani-baba.jpeg` |
| 06 | Vettai Karuppu | Moonlit Steel | `assets/img-V1/vettai-karuppu.jpeg` |

> Served to the app from `public/img/forms/` (copied from `assets/img-V1/`).

---

## Repository structure

```
Karuppa/
├── app/                       # Next.js App Router — layout, home, and the 11 routes
│   ├── layout.tsx             # global shell: fonts, header, footer, metadata
│   ├── page.tsx               # Home — "The Awakening"
│   ├── globals.css            # design tokens + Tailwind + per-form theming
│   └── <section>/page.tsx     # guardian, forms, powers, … about
├── components/                # ui/ · motion/ · nav/ · home/
├── content/                   # local content layer (the 6 forms, etc.)
├── lib/                       # fonts, nav map, helpers
├── public/img/forms/          # the 6 form stills, served to the app
├── docs/
│   ├── build-spec.md          # full website build specification
│   └── production-plan.md     # Google Flow / Veo + Imagen prompt pack and wiring plan
├── generate/                  # copy-paste Flow prompt pack
└── assets/                    # source reference imagery (img-V1, img-v2)
```

---

## Planned stack

As specified in [`docs/build-spec.md`](docs/build-spec.md):

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS variables (the "dark sanctum" palette)
- **Motion:** GSAP (ScrollTrigger), Lenis (smooth scroll), Framer Motion, Lottie
- **Maps:** Mapbox GL / Leaflet (temples + diaspora)
- **CMS:** Sanity / Strapi / Payload (the dynamic content layer)
- **Media:** Cloudinary / Mux for video hosting and transcoding
- **Deploy:** Vercel + CDN

---

## Running locally

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run typecheck
```

> **Implemented so far (Baseline 1):** Next.js + TypeScript + Tailwind v4, the dark-sanctum tokens and fonts, the ritual navigation shell, and the home page. The other ten routes are live but stubbed pending the content and motion baselines. CMS, maps, and the Flow video pipeline from the spec are not wired yet.

---

## Documentation

- **[Build Spec](docs/build-spec.md)** — content reference, site architecture, page-by-page blueprint, visual design system, technical stack, and roadmap.
- **[Production Plan](docs/production-plan.md)** — copy-paste Imagen/Veo prompts for every asset, the master style block, and the GSAP + Lenis scroll-wiring plan.

---

## A note on tone and sources

Karuppu Swamy is a **living deity in active worship**. The docs deliberately separate verifiable folk-religion scholarship from devotional belief:

- **`[BELIEF]`** marks a tradition or devotional claim — to be presented as such, not as fact.
- **`[VERIFY]`** marks anything to confirm against primary or temple sources before publishing.

The intended treatment is reverent and factual throughout. See the caveats sections of both docs before generating any assets or shipping content.
