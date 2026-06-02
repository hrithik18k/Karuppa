# Karuppu Swamy — Production Plan & Google Flow Prompt Pack
### Companion to `build-spec.md` — turns the spec into shootable, copy-paste prompts

> **Honesty flags carried over from the spec.**
> - **[BELIEF]** = devotional tradition, present as such on the site. **[VERIFY]** = confirm before publishing.
> - **"Google Flow"** = Google's AI filmmaking app (`labs.google/flow`), built on **Veo** (video) with **Imagen** for stills. It outputs **video clips and image stills**, *not* code-level web animation. Pipeline is always: **generate in Flow → export → optimise → embed**. Scroll triggers / particles / crossfades are still done in code (GSAP + Lenis), exactly like the reference site.
> - **Flow's exact limits change.** Treat clip length, resolution, aspect-ratio and "Ingredients" counts below as *what to expect*; confirm in the app on the day you build.

---

## 0. What we're copying from `yok3sh.vercel.app`

I reviewed the live reference. Its entire engine is **AI-generated cinematic stills of one consistent subject + gold-on-black editorial type + scroll-pinned crossfading chapters.** We reuse that engine and only change the subject.

| yok3sh ingredient | Karuppu translation |
|---|---|
| One consistent dramatic **portrait of a person**, re-shot per chapter | One consistent **Karuppu murti / guardian figure** — re-shot as **6 forms, each in its own colour theme** (§3.1), the signature of the Forms page |
| Gold (`~#D4A24E`) on near-black, warm amber glow, heavy chiaroscuro | **Fire-red (`#C1272D`) + ember-orange (`#FF6B1A`) on near-black** — Karuppu's fiery eyes, kumkum & fire (no gold) |
| Numbered eyebrow `01 · CREDENTIAL` (tracked mono) | `01 · GUARDIAN`, `02 · FORM`, `03 · POWER` … |
| Big high-contrast **serif** heading in gold | Same serif treatment but in **fire-red** (or the active form's accent), paired with **Tamil** display type |
| **Italic serif** body, right-aligned column | Same — devotional descriptions |
| Pinned hero, background image **crossfades** as you scroll (GSAP pin + Lenis) | Pinned deity reveal; form/power plates crossfade |
| `SCROLL TO EXPLORE` vertical text, `↗` arrows, outlined pill buttons | Keep the same UI furniture |
| **Restraint** — one strong image per chapter, no clutter | Same — avoids the "dated Anniyan site" trap |

**Design takeaway:** yok3sh proves the *one-disciplined-accent-on-near-black* formula. We keep that restraint but swap its gold for **Karuppu's own fire**: `--fire-red #C1272D` as the **primary accent** (headings, eyebrows, links, ritual marks), `--ember-orange #FF6B1A` for **glow / particles / hover**, `--blood-deep #5C0A0A` for shadows, and `--sacred-white #EDE6D8` for **body text** — red fails AA contrast at body sizes, so *never* set long text in red. One accent, used with discipline; that's what makes the look premium, not the specific hue.

---

## 1. The single most important idea: a consistent "character"

yok3sh works because it's visibly the *same person* in every shot. For Karuppu you need the **same figure** across the hero, every Form card, and the Powers page — otherwise it looks like a stock-image collage.

**How to get consistency in Flow:**
1. Generate **one master still** of the figure with **Imagen** (prompt `IMG-00` below). Iterate until you love it.
2. In Flow, add that still as an **"Ingredient"** (reference image). Flow's *Ingredients to Video* keeps the subject consistent across new shots.
3. For each new scene, either re-use the Ingredient (video) or use **Frames to Video** with a still as the start frame.

### Depiction policy (respect + what the generators will actually allow)
Karuppu Swamy is a **living deity in active worship**. Generating a photoreal "living man as a god" is both culturally risky and likely to trip content filters. **Recommended subject = a consecrated-style murti / vigraham** — a fierce stone-and-bronze temple idol that *comes alive* (eyes ignite, embers drift), not a photoreal human. This is:
- more **reverent** (it reads as devotional iconography, not a deepfake of a person),
- more **on-brand** (sculptural = the "digital sanctum" idea),
- more **reliable** in Veo/Imagen (statues, silhouettes and idols pass filters that "realistic deity" prompts often refuse).

Every prompt below is written for that **murti / silhouette / sculptural** treatment.

---

## 2. The Master Style Block (paste at the END of every prompt)

This is your "color grade" — the equivalent of yok3sh's consistent look. Keep it identical across all assets so the site feels like one film.

```
STYLE: cinematic devotional, near-black background (#0A0A0B), firelight key from an ember-orange flame
(#FF6B1A), deep fire-red accents (#C1272D) on the eyes/kumkum/ritual marks, blood-deep shadows (#5C0A0A).
High-contrast chiaroscuro, deep shadows, volumetric smoke and floating grey ash, drifting red-orange
embers and sparks. Photoreal-mythic, sculptural (dark bronze/stone idol), reverent and fierce — never
gory. Shallow depth of field, anamorphic feel, fine film grain, gentle vignette. 16:9.

> **Per-form override:** the block above is the **site default (Fire-Red + Ember)**. For the 6 Forms in §3.1,
> replace *only the colour words* — "ember-orange flame / fire-red accents / red-orange embers" — with that
> form's theme colour (see the table). Everything else (idol, chiaroscuro, smoke, grain, framing) stays identical
> so the gallery still reads as one film.
NEGATIVE: no on-screen text, no captions, no watermark, no logos, no modern objects, no gore, no blood,
no weapons pointed at camera, no distorted hands, no extra limbs, no cartoon look, no bright daylight.
```

> **Why "no on-screen text":** Veo/Imagen render lettering unreliably — and never trust them with Tamil. Add **"கருப்பு சாமி"** and all UI text **typographically in code** (Catamaran / Hind Madurai for Tamil, Cinzel/Cormorant for English), layered over the clip — exactly how yok3sh overlays its type on the photos.

---

## 3. IMAGE prompts (Imagen, via Flow) — generate stills first

Stills are cheaper, faster, and become **Ingredients / start-frames** for the videos. Generate these before any video.

> Format: paste the prompt, then append the **Master Style Block** from §2. Suggested output 16:9 unless noted; for cards use the crop you need.

### IMG-00 — Master deity reference *(generate this first; it anchors everything)*
**Use:** the recurring "character"; Ingredient for MG-01/02/04; hero poster. **File:** `img/master-karuppu.png`
```
A fierce guardian deity depicted as a consecrated South-Indian temple idol (murti): dark bronze-black
muscular form, thick curled moustache, wide intense eyes with a faint inner fire, long hair tied in a
warrior side-bun, sacred ash (thiruneeru) and a red kumkum mark on the forehead, heavy garlands and
chains, holding a curved aruval (sickle-sword) lowered at his side. Three-quarter heroic portrait,
emerging from darkness, single warm key light from upper left, ember particles drifting. Statue-like,
mythic, dignified.
```

### IMG-01..06 — ★ The 6 Karuppu Versions *(the centrepiece: 6 forms, 6 colour themes)*
**Use:** `/forms` cards + Ingredients. **Goal:** show six *named, attested* forms of Karuppu, each in its **own colour theme on near-black**, so the gallery reads as a spectrum of one deity — not six different gods.

**Two rules keep it cohesive:**
1. **Same idol, same face** — start every form from **IMG-00** as the Ingredient/reference. Only the *colour of the light* and the form's distinguishing trait change.
2. **One accent per theme, ash-white body text always** (`#EDE6D8`) for legibility. **Sangili's Fire-Red is also the site-wide default**; the other five recolour the page accent only while their card is in view (§6.3).

| # | Form (trait) | Theme & devotional rationale | Accent → Glow | `[LIGHT CUE]` for the prompt | File |
|---|---|---|---|---|---|
| 01 | **Sangili Karuppan** — bound in heavy iron chains, fiercest protector | **Fire-Red / Ember** — kumkum, fierce eyes, fire. *Site default.* | `#C1272D` → `#FF6B1A` | a fierce ember-orange firelight, deep fire-red glints on the chains and eyes | `form-sangili.png` |
| 02 | **Periya Karuppu** — elder/great; larger, fuller beard, ornate garlands, commanding | **Molten Copper-Amber** — ancient brass oil-lamp glow, grandeur (warm, *not* gold) | `#FF7A1A` → `#A8400E` | a deep molten copper-amber lamplight, smouldering bronze highlights | `form-periya.png` |
| 03 | **Chinna Karuppu** — younger; leaner, alert, agile, lighter adornment | **Camphor Blue** — camphor burns blue-white; youthful, cool, swift | `#2FA9E0` → `#9CE0FF` | a cool camphor blue-white flame light, icy rim glow against black | `form-chinna.png` |
| 04 | **Mangadu Karuppu** — grove/temple guardian, sword raised in vigilance | **Neem Sacred Green** — neem leaves, the wilderness/grove (*kāṭu*) boundary he guards | `#2E8B57` → `#6FE0A0` | a deep sacred-green grove light, faint emerald rim, soft leaf-shadow texture | `form-mangadu.png` |
| 05 | **Sangani Baba** — Indo-Caribbean diaspora form, folk-shrine offerings | **Diaspora Indigo-Violet** — ocean-crossed, mystic night shrine | `#6A3DA8` → `#A06CD5` | a mystic indigo-violet shrine light, deep ultramarine shadows | `form-sangani.png` |
| 06 | **Vettai Karuppu** — the divine *hunter*; lean and fierce, with the hunting dog (*vettai naai*) and a bow/spear, guardian of the night-hunt (linked to *Mayaana Vettai*) **[VERIFY]** | **Moonlit Steel** — the spectral night-hunt / cremation-ground ash; cold and predatory | `#88A0B4` → `#CBD9E4` | a cold moonlit steel-blue light, pale silver rim, low ground mist | `form-vettai.png` |

**Per-form image prompt** (fill `[FORM]` from column 2's trait, `[LIGHT CUE]` from column 5):
```
[FORM]. Consecrated temple-idol treatment, dark bronze-black sculptural figure emerging from black, lit by
[LIGHT CUE], ash and particle drift, heavy chiaroscuro shadow. Centered heroic portrait with negative space
on one side for text.
```
> Append the Master Style Block **but swap its colour words** for this form's theme (the §2 "per-form override"). Generate a `4:5` crop too for mobile cards. Keep the idol/face from IMG-00 — **only the colour of the light changes** between forms.

> **These stills are the *start frames* for motion.** Every form gets a **scroll-scrubbed power clip (MG-F1..F6, §4.0)** generated *from* its still — the deity performs a divine act as you scroll. The still doubles as the reduced-motion poster (§6.5). So: generate the still → use it as the *Frames to Video* start frame for the power clip.

> **Want more than 6?** Tradition speaks of **108 forms [BELIEF]** — add sub-variants (Sami Karuppu, Dee Baba, Muneeswarar-adjacent, regional names) with their own themes using the same recipe. **Six is the floor, not the cap.**

### IMG-06 — Iconography hero (interactive diagram base)
**Use:** `/iconography` hotspot diagram. **File:** `img/iconography-base.png`
```
Full-length front view of the guardian-deity idol, perfectly centered and symmetrical, clearly showing
each attribute as a distinct element: the curved aruval sword, the fiery eyes, the side hair-bun, the
chest chains, the ash-and-kumkum forehead, garlands. Even rim lighting so every symbol is readable,
dark background, slight glow around each attribute. Designed as a diagram base with space around the figure.
```

### IMG-07 — Companions plate **[VERIFY — sources differ]**
**Use:** iconography / guardian. **File:** `img/companions.png`
```
A spectral white horse and a lean hunting dog standing in darkness beside faint embers, mythic and noble,
guardian companions of a folk deity, no rider, atmospheric smoke, single warm light.
```

### IMG-08 — Texture / atmosphere plates *(for parallax layers & section backgrounds, like yok3sh's glow plates)*
**Use:** layered backgrounds. **Files:** `img/tex-embers.png`, `img/tex-ash.png`, `img/tex-smoke.png`, `img/tex-sparks.png`
```
[ONE OF: floating orange embers / drifting grey ash flakes / slow volumetric smoke / fine fire-red
spark motes] over a pure near-black background, centered soft glow, high contrast, seamless and
sparse, suitable as an overlay texture.
```

### IMG-09 — Temple/diaspora map ambience
**Use:** `/temples` & `/diaspora` backdrops. **File:** `img/map-ambience.png`
```
An aged dark parchment / stone-etched map texture in black with ember-red detailing, faint glowing
nodes, sacred and cartographic, no readable text, fire-red ember glow at the markers.
```

### IMG-10 — OG / social share image (1200×630)
**Use:** SEO/share card. **File:** `img/og.png`
```
The guardian-deity idol in heroic three-quarter portrait on the right, deep negative space on the left
for a headline, near-black with fire-red and ember accents, ember particles, cinematic poster
composition. 1.91:1.
```

---

## 4. VIDEO prompts (Veo, via Flow) — the motion graphics

Two families of clips: **§4.0 — the 6 Forms as scroll-scrubbed "divine power" reveals** (the main event you asked for), and **§4.1 — the ambient/hero clips** (MG-01..08). For each I give: **workflow**, the **full prompt** (subject → action → camera → lighting → audio), **negative**, **length**, and **where it lives**.

> **Veo prompt anatomy used below:** `Subject + Action + Setting + Camera (shot, lens, movement) + Lighting + Mood + Audio + Style`. Veo generates **native audio** — give it ambience cues, but on the web you'll usually **mute** and play `playsinline`. For *looping* heroes keep motion slow (start/end on a similar dark frame); for *scroll-scrubbed* clips the scroll controls the speed, so the source motion can be bold.

---

### 4.0 ★ The 6 Forms — scroll-scrubbed "divine power" reveals (MG-F1..F6)

**This is the centrepiece.** Each Karuppu form is a **pinned full-height chapter**; as you scroll, the scroll position becomes the clip's **playhead** (Apple-style scroll animation) so the deity performs a *powerful divine act* exactly as fast as you scroll. At the end of each chapter the page **crossfades + recolours** to the next form's theme (wiring in §6.5). All six are reverent and **never gory** — power shown as light, force and protection, not violence.

**Workflow for all six:** *Frames to Video* with the matching form still (IMG-01..06) as the **start frame**, or *Ingredients to Video* with IMG-00 + the form still for face consistency. **Length 8s** (extend in Scene Builder if you want a longer scrub). Append the Master Style Block with each form's theme colour (§2 per-form override). Negative = Master negatives + `no gore, no blood, no real injury, no modern objects`.

| ID | Form / theme | The powerful act (full prompt — keep the murti, swap the light to the theme colour) |
|---|---|---|
| **MG-F1** | **Sangili Karuppan** · Fire-Red/Ember | `The chained guardian idol surges with divine power; the heavy iron chains binding his chest and arms strain, then SNAP and burst outward in a shockwave of embers and sparks. As the chains shatter, an expanding ring of protective fire erupts from him and seals the surrounding darkness away. His eyes blaze fire-red, smoke billows. Slow build into a powerful release, anamorphic, firelit. AUDIO: chains groaning then snapping, a deep resonant boom, rising devotional drone.` |
| **MG-F2** | **Periya Karuppu** · Molten Copper-Amber | `The great elder guardian raises his curved aruval high overhead and strikes it down into the earth; a molten copper-amber shockwave ripples outward and a ring of fire blooms, the ground cracking into glowing veins of light as dust and embers erupt skyward. Grand, ground-shaking, slow-motion impact, low heroic camera. AUDIO: a thunderous impact, deep earth rumble, low brass-like drone.` |
| **MG-F3** | **Chinna Karuppu** · Camphor-Blue | `The young, agile guardian moves at impossible divine speed — dashing through the darkness and leaving cool camphor blue-white light trails and after-images, delivering a lightning-fast flurry of aruval strikes that cut glowing blue arcs across the black, then snapping back to a single still heroic pose. Fluid motion-blur trails, icy rim light. AUDIO: swift air whooshes, sharp metallic shings, an airy resonant hum.` |
| **MG-F4** | **Mangadu Karuppu** · Neem Sacred-Green | `The grove-guardian deity raises an open hand and summons the wilderness: glowing green roots and vines erupt from the ground, and a spectral white horse and a lean hunting dog materialise from emerald light at his side as a protective dome of sacred-green energy rises around them. Mystical organic motion, leaf and ember drift, low awe-struck camera. AUDIO: rushing growth, a deep earthy resonance, a distant noble animal call.` |
| **MG-F5** | **Sangani Baba** · Diaspora Indigo-Violet | `The diaspora guardian opens a vast swirling indigo-violet portal of light above a dark ocean; streams of mystic energy and spirit-lights pour through and travel across the water toward distant glowing shores, his form radiating violet power as the sea shimmers. Slow, majestic, volumetric mist over water, wide cinematic camera. AUDIO: a deep oceanic hum, mystical chimes, a low distant chant.` |
| **MG-F6** | **Vettai Karuppu** · Moonlit Steel | `The divine hunter strides through a moonlit wilderness at night with his spectral hunting dog at his heels, tracking a fleeing shadow of evil through the mist; in one powerful motion he draws a bow of cold light (or hurls a glowing spear) that streaks across the dark and pins the shadow as the hound lunges. Swift and predatory, cold moonlit steel-blue light, low ground mist, pale silver rim. AUDIO: a low growl then a bark, a bowstring release and whoosh, a sharp impact, wind and a distant hunting horn.` |

> **Why these acts:** each matches the form's identity — Sangili *breaks his own chains* to seal evil; Periya the elder *shakes the earth*; Chinna the young one is *blinding speed*; Mangadu *commands the wild grove*; Sangani *reaches across the seas* to the diaspora; Vettai *runs down evil in the night-hunt* with his hound. Powerful, divine, on-theme.

---

### 4.1 Ambient & hero clips

### MG-01 — Home hero "The Awakening" *(the money shot)*
- **Where:** `/` hero, looping background video. **Length:** 8–12s, loopable. **Workflow:** *Ingredients to Video* using **IMG-00**.
```
A consecrated guardian-deity idol awakens in total darkness. Embers and ash drift upward; a single curved
aruval sword slowly catches firelight; the deity's eyes ignite with a faint inner glow as the form
resolves out of shadow. Extremely slow, reverent push-in (slow dolly), anamorphic shallow focus, smoke
curling through a warm key light. The frame begins near-black and ends near-black so it loops.
AUDIO: low devotional drone, distant temple bell, soft crackle of fire, faint wind — no voices.
```
- **Negative:** Master Style negatives + `no fast motion, no camera shake, no people in modern clothing`.
- **Note:** Leave the **center-right** open and dark — that's where the code overlays the Tamil "**கருப்பு சாமி**" + tagline *"Kaval Deivam — The Guardian of Justice."* (mirrors yok3sh's left-aligned name over a right-side subject).

### MG-02 — Guardian silhouette turn
- **Where:** `/guardian` hero. **Length:** 5–6s. **Workflow:** *Ingredients to Video* (IMG-00).
```
Backlit silhouette of the guardian deity slowly turning to face the camera; at the turn, the eyes ignite
ember-orange and ash lifts around the shoulders. Locked-off camera, very slow movement, rim light only,
deep black background. AUDIO: rising low drone, single bell strike on the eye-ignite.
```

### MG-03 — *(merged → MG-F1)*
The old "chains wrap" idea is upgraded into **MG-F1 (§4.0)** where Sangili doesn't just wear the chains — he **breaks** them. Use MG-F1 on `/forms`.

### MG-04 — The Powers sigils
- **Where:** `/powers` hero / section reveal. **Length:** 6–8s. **Workflow:** *Text to Video* (or Frames from a sigil still).
```
Six glowing sacred sigils carved in stone ignite one after another in a dark sanctum — guardianship,
justice, protection, oracle, boon, valour — each lighting with ember-orange fire then settling to a deep
fire-red ember. Slow lateral drift across the sigils, volumetric smoke, drifting sparks. AUDIO: six soft fire-whooshes
in sequence, low drone bed.
```
- **Note:** Generate the **six sigils as separate stills** too (Imagen) so the code can place clickable hotspots over the video — the interactivity is code, the ignition is the clip.

### MG-05 — Festival / Theemithi ambience **[VERIFY ceremony]**
- **Where:** `/festivals`. **Length:** 6s. **Workflow:** *Text to Video*.
```
A bed of glowing embers and a slow ritual fire at night, sacred flames and rising sparks, distant
silhouettes of a folk procession with oil lamps, reverent and atmospheric — no faces, no gore. Slow
drifting aerial-ish move over the fire. AUDIO: crackling fire, distant drums (parai), faint crowd hum.
```

### MG-06 — Diaspora map ignition
- **Where:** `/diaspora`. **Length:** 5s. **Workflow:** *Frames to Video* — start frame = **IMG-09**.
```
A dark stone world map in shadow with ember-red detailing; glowing ember nodes ignite one by one across India, Sri Lanka,
Malaysia, the Caribbean and beyond, connected by faint fire-red threads of light. Slow zoom out revealing
the full network. AUDIO: soft chimes per ignition, low ambient drone.
```

### MG-07 *(addition)* — Transition slash / wipe
- **Where:** reusable scene transition between chapters (the "ritual unfolding" cut). **Length:** 1–2s. **Workflow:** *Text to Video*.
```
A single curved aruval blade slashes diagonally across pure black, leaving a brief trail of sparks and
ember light that flares and fades to black. Fast but smooth, high contrast, sparks only. AUDIO: a sharp
metallic shing and ember crackle.
```
- **Use in code** as a quick overlay between sections (or as a CSS-driven wipe triggered on scroll).

### MG-08 *(addition)* — Worship / lamp ambience loop
- **Where:** `/worship` background. **Length:** 6–8s, loopable. **Workflow:** *Text to Video*.
```
Rows of oil lamps and camphor flames flickering in a dark shrine, smoke and warm ember firelight, marigold garlands
at the edges, extremely slow drift, meditative. Loopable, begins and ends on a similar frame.
AUDIO: gentle flame crackle, faint temple ambience.
```

---

## 5. Flow production workflow (step-by-step in the app)

1. **Create a project** in Flow for the site; name it `karuppu-web`.
2. **Stills first (Imagen):** generate `IMG-00` → iterate to a hero-worthy frame → then generate the Form/iconography stills, *referencing IMG-00* for face consistency.
3. **Add IMG-00 (and form stills) as Ingredients.**
4. **Generate video:**
   - ★ **The 6 Form power clips (MG-F1..F6)** → **Frames to Video** with IMG-01..06 as the start frame (add IMG-00 as an Ingredient for face consistency). These are the scroll-scrubbed reveals.
   - Character shots (MG-01/02) → **Ingredients to Video**.
   - Still-anchored shots (MG-06) → **Frames to Video** (your still = first frame).
   - Atmosphere shots (MG-04/05/07/08) → **Text to Video**.
5. **Length:** Veo clips are short (≈8s) — for longer/looping heroes, use **Scene Builder / "Extend"** to lengthen, and choose start/end on similar dark frames so the loop is invisible.
6. **Export** each clip at the **highest resolution** offered (≥1080p). Keep the raw exports in a `/_raw` folder — never ship these directly.
7. **Re-roll, don't over-prompt:** if a clip drifts (wrong limbs, text artefacts, too bright), regenerate with the **negative** tightened rather than adding more positive detail.

> **Confirm at build time:** Flow access tier (Google AI Pro/Ultra), current max resolution & clip length, whether **audio export** is separable (you'll usually strip it for web), and **usage/licensing rights** for a public site. Put the answer in `/about` credits.

---

## 6. Post-production & web wiring (this part is code, like yok3sh)

### 6.1 Optimise every clip
- Transcode each MP4 → **H.264 MP4** + **VP9/AV1 WebM**. Target hero loops **< 2–3 MB**.
  ```bash
  # MP4 (H.264) — muted, web-optimised
  ffmpeg -i MG-01_raw.mp4 -an -movflags +faststart -vcodec libx264 -crf 23 -preset slow public/video/mg-01.mp4
  # WebM (VP9) fallback
  ffmpeg -i MG-01_raw.mp4 -an -c:v libvpx-vp9 -crf 32 -b:v 0 public/video/mg-01.webm
  # Poster frame (first dark frame) for instant paint + reduced-motion fallback
  ffmpeg -i MG-01_raw.mp4 -vframes 1 public/video/mg-01-poster.jpg
  ```
- Host big video on **Cloudinary/Mux**, not the repo (per spec §6.1).

### 6.2 Embed pattern (matches the spec's `MotionVideo` component)
```tsx
<video autoPlay muted loop playsInline poster="/video/mg-01-poster.jpg" preload="metadata">
  <source src="/video/mg-01.webm" type="video/webm" />
  <source src="/video/mg-01.mp4"  type="video/mp4" />
</video>
```
- **Reduced motion:** if `prefers-reduced-motion: reduce`, render the **poster still** instead of the video. Ship a poster for every clip.

### 6.3 Reproduce the yok3sh scroll feel (GSAP + Lenis)
- **Lenis** for smooth scroll; **GSAP ScrollTrigger** to **pin** each chapter and **crossfade** the background plate while the text column fades/slides — this is exactly the pinned, image-swapping behaviour observed on the reference.
- Keep the **type system**: tracked-out mono eyebrow → fire-red serif heading (+ Tamil) → ash-white italic serif body. Reuse `↗` link arrows, outlined pill buttons, and a vertical `SCROLL TO REVEAL` cue.
- **Restraint rule (from spec §4.3):** one hero motion moment per page; everything else subtle.
- **Per-form theming (the 6 versions):** drive the accent from a single CSS variable and swap it per Form as its card scrolls into view, so the whole page recolours around each Karuppu. Keep transitions short (≈400ms) so it feels like a ritual shift, not a flash. Always return to the Fire-Red default outside the Forms page.
  ```css
  :root { --accent: #C1272D; --glow: #FF6B1A; }            /* site default = Sangili */
  [data-form="periya"]  { --accent:#FF7A1A; --glow:#A8400E; }
  [data-form="chinna"]  { --accent:#2FA9E0; --glow:#9CE0FF; }
  [data-form="mangadu"] { --accent:#2E8B57; --glow:#6FE0A0; }
  [data-form="sangani"] { --accent:#6A3DA8; --glow:#A06CD5; }
  [data-form="vettai"]  { --accent:#88A0B4; --glow:#CBD9E4; }
  /* headings/eyebrows/links use var(--accent); body text stays --sacred-white #EDE6D8 */
  ```
  ```js
  // GSAP ScrollTrigger: set the active form theme on enter, restore default on leave back
  ScrollTrigger.create({ trigger: card, start: "top center", end: "bottom center",
    onToggle: ({ isActive }) => root.dataset.form = isActive ? form.id : "" });
  ```

### 6.4 Where each asset lands
| Route | Video | Stills |
|---|---|---|
| `/` Home | MG-01 (hero loop), MG-07 (transitions) | IMG-00, IMG-08 textures |
| `/guardian` | MG-02 | IMG-00, IMG-07 |
| `/forms` | **MG-F1..F6 (scroll-scrubbed power reveals, §4.0 + §6.5)** | IMG-01..06 (start frames) |
| `/powers` | MG-04 | 6 sigil stills |
| `/iconography` | — | IMG-06 (hotspot base) |
| `/worship` | MG-08 | IMG-08 |
| `/festivals` | MG-05 | IMG-08 |
| `/temples` | — | IMG-09 |
| `/diaspora` | MG-06 | IMG-09 |
| `/gallery` | all MG clips | all stills |
| `/about` | — | credits + IMG-10 (OG) |

### 6.5 Scroll-scrubbed power reveals — *the "scroll animation video"* (★ how the 6 Forms work)
The effect you saw on `yok3sh` (and on Apple product pages): **scroll position = video playhead.** Each Form (MG-F1..F6) is a **pinned full-height section**; scrolling forward plays the divine act, scrolling back rewinds it, and at the section end the page **crossfades + recolours** to the next form (reusing the `--accent` swap from §6.3). Pick one of two techniques per asset:

**A) Image-sequence on `<canvas>` — most reliable (recommended)**
Apple's method. Buttery on every browser, no seek stutter.
```bash
# decompose the Veo clip to frames (8s ≈ 240 @ 30fps); downscale + compress for web
ffmpeg -i mgf1_raw.mp4 -vf "fps=30,scale=1280:-1" -q:v 6 public/forms/sangili/%04d.jpg
```
```js
// GSAP: map scroll progress across the pinned section → frame index → draw to canvas
const frames = [...]; // preloaded Image objects
gsap.to({ f: 0 }, {
  f: frames.length - 1, ease: "none", snap: "f",
  scrollTrigger: { trigger: "#sangili", start: "top top", end: "+=180%", scrub: true, pin: true,
    onEnter: () => root.dataset.form = "sangili" },   // recolours the page accent (§6.3)
  onUpdate() { const i = Math.round(this.targets()[0].f); ctx.drawImage(frames[i], 0, 0, w, h); }
});
```
- **Pros:** no stutter, frame-accurate. **Cons:** more bytes → downscale (~1280w), JPEG q≈6, and **lazy-load: only mount the active + next form's frames**, unmount the rest.

**B) Scrub the MP4's `currentTime` — lighter, occasional stutter**
```bash
# encode all-keyframe so seeking is smooth (bigger file, but seekable)
ffmpeg -i mgf1_raw.mp4 -an -x264-params "keyint=1:min-keyint=1" -crf 20 public/forms/mgf1.mp4
```
```js
ScrollTrigger.create({ trigger: "#sangili", start: "top top", end: "+=180%", scrub: true, pin: true,
  onUpdate: self => { vid.currentTime = self.progress * vid.duration; },
  onEnter: () => root.dataset.form = "sangili" });
```
- **Pros:** smallest payload. **Cons:** seeking can jank on some mobile browsers; all-keyframe inflates size. Test on a real phone.

**Cross-cutting:**
- **Reduced motion (`prefers-reduced-motion`):** skip scrubbing — show the form's **poster still** + a one-line caption of the act. Never pin/scrub for these users.
- **Mobile/perf:** keep each form's frame set or clip **< ~3–5 MB**; consider **Mux** for adaptive scrubbing if it gets heavy; pin only on ≥tablet, fall back to a simple autoplay-once loop on small screens.
- **Smooth scroll:** Lenis underneath makes the scrub feel premium (matches the reference).

---

## 7. Asset checklist

**Images (Imagen):**
- [ ] IMG-00 master deity reference *(do first)*
- [ ] The 6 Versions (each in its theme): IMG-01 Sangili (red) · IMG-02 Periya (copper-amber) · IMG-03 Chinna (camphor-blue) · IMG-04 Mangadu (neem-green) · IMG-05 Sangani (indigo-violet) · IMG-06 Vettai (moonlit steel)
- [ ] IMG-06 iconography base · IMG-07 companions **[VERIFY]**
- [ ] IMG-08 texture set (embers/ash/smoke/sparks) · IMG-09 map ambience · IMG-10 OG
- [ ] 6 power sigils (for MG-04 hotspots)

**Videos (Veo):**
- [ ] ★ **The 6 scroll-scrubbed power reveals** — MG-F1 Sangili (breaks chains) · MG-F2 Periya (earth shockwave) · MG-F3 Chinna (divine speed) · MG-F4 Mangadu (summons the wild) · MG-F5 Sangani (crosses the seas) · MG-F6 Vettai (night-hunt). *Export each → frame sequence (§6.5-A) **or** all-keyframe MP4 (§6.5-B) + a poster still each.*
- [ ] Ambient/hero (`.mp4` + `.webm` + `-poster.jpg`): MG-01 hero · MG-02 guardian · MG-04 sigils · MG-05 festival **[VERIFY]** · MG-06 diaspora · MG-07 slash · MG-08 worship

---

## 8. Caveats (read before generating)

- **Cultural respect (spec §8):** this is a living faith. The murti/sculptural treatment keeps it reverent; **avoid the film's violent framing** — borrow gravitas, not gore. Keep `[BELIEF]` vs fact labelling on the site.
- **Generator filters:** "realistic living deity / specific named god" prompts can be refused. The **sculptural-idol + silhouette + symbol** framing in these prompts is the reliable path. If a prompt is blocked, drop "deity," keep "consecrated guardian idol / statue."
- **Text & Tamil:** never let Veo/Imagen render the script. All `கருப்பு சாமி` and UI text is **code typography**.
- **Licensing:** confirm Flow/Veo output rights for a **public** site and credit on `/about`.
- **Verify before launch (spec §9):** temple coordinates, the "108 forms," Sabarimala claim, festival spellings, companion animals.

---

### TL;DR
1. Generate **IMG-00** first → use it as a Flow **Ingredient** for consistency (this is the whole trick behind yok3sh's coherence).
2. Generate the **6 form stills (IMG-01..06)**, then from each, the **scroll-scrubbed power clip (MG-F1..F6)** where that Karuppu performs a divine act; then the ambient clips. Always append the **Master Style Block** (theme-coloured per form) + **negatives**.
3. For the 6 forms: export → **frame sequence** (§6.5-A, recommended) or all-keyframe MP4 (§6.5-B) + a poster still each. For ambient clips: compress to **mp4 + webm + poster**.
4. Rebuild yok3sh's **single-accent-on-near-black, pinned, crossfading-chapter** feel in **GSAP + Lenis** — Fire-Red default, **6 per-form themes (§3.1)** that recolour the page — and wire each Form as a **scroll-scrubbed power reveal (§6.5)**. Overlay Tamil/English type in code.
