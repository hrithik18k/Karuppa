# Karuppa

> A cinematic digital shrine for **Karuppu Swamy** — the guardian deity (*kaval deivam*) of Dravidian folk religion — revealed form by form, power by power, through scroll-triggered motion graphics.

This repository is currently in the **planning / pre-build stage**. It holds the design specification, the motion-graphics production plan, and the reference imagery. No application code has been written yet.

---

## What this is

An "Anniyan-inspired" devotional website concept: a dark, reverent, cinematic experience built around a single consistent murti (temple idol) of Karuppu Swamy. The site is designed as a scroll-driven sanctum where each section unfolds like a ritual — borrowing the mood and gravitas of the film, never its violence.

The centrepiece is the **Forms gallery**: six named, attested forms of Karuppu, each in its own colour theme on near-black, so the gallery reads as one deity across a spectrum of light rather than six different gods.

| # | Form | Theme | Image |
|---|------|-------|-------|
| 01 | Sangili Karuppan | Fire-Red / Ember *(site default)* | `assets/sangili-karuppu.jpeg` |
| 02 | Periya Karuppu | Molten Copper-Amber | `assets/periya-karuppu.jpeg` |
| 03 | Chinna Karuppu | Camphor Blue | `assets/chinna-karuppu.jpeg` |
| 04 | Mangadu Karuppu | Neem Sacred Green | `assets/mangadu-karuppu.jpeg` |
| 05 | Sangani Baba | Diaspora Indigo-Violet | `assets/sangani-baba.jpeg` |
| 06 | Vettai Karuppu | Moonlit Steel | `assets/vettai-karuppu.jpeg` |

---

## Repository structure

```
Karuppa/
├── README.md                  # this file
├── docs/
│   ├── build-spec.md          # full website build specification (content, architecture, design system, stack)
│   └── production-plan.md     # Google Flow / Veo + Imagen prompt pack and web-wiring plan
└── assets/                    # reference imagery for the 6 deity forms
    ├── sangili-karuppu.jpeg
    ├── periya-karuppu.jpeg
    ├── chinna-karuppu.jpeg
    ├── mangadu-karuppu.jpeg
    ├── sangani-baba.jpeg
    └── vettai-karuppu.jpeg
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

## Documentation

- **[Build Spec](docs/build-spec.md)** — content reference, site architecture, page-by-page blueprint, visual design system, technical stack, and roadmap.
- **[Production Plan](docs/production-plan.md)** — copy-paste Imagen/Veo prompts for every asset, the master style block, and the GSAP + Lenis scroll-wiring plan.

---

## A note on tone and sources

Karuppu Swamy is a **living deity in active worship**. The docs deliberately separate verifiable folk-religion scholarship from devotional belief:

- **`[BELIEF]`** marks a tradition or devotional claim — to be presented as such, not as fact.
- **`[VERIFY]`** marks anything to confirm against primary or temple sources before publishing.

The intended treatment is reverent and factual throughout. See the caveats sections of both docs before generating any assets or shipping content.
