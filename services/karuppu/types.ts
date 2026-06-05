/**
 * The shared contract every Karuppu microservice implements.
 *
 * Each god is a self-contained module under services/karuppu/<id>/manifest.ts —
 * his own identity, media and "act" (the motion brief) — composed into the
 * roster by registry.ts. The app imports the roster, never an individual god, so
 * lighting a new fire is one new folder + one line in the registry.
 *
 * Media is monochrome by law (plan.md §2): `image` and `veil` are baked
 * greyscale; `video` (when it lands) is graded the same. No hue ships — a future
 * pass will say where the god may *glow* (in brightness, never colour).
 */
export type FormId =
  | "sangili"
  | "periya"
  | "chinna"
  | "mangadu"
  | "sangani"
  | "vettai";

export interface KaruppuForm {
  id: FormId;
  /** Two-digit order of descent on the Threshold. */
  num: string;
  /** English name. */
  name: string;
  /** Tamil name (rendered typographically, never generated). */
  tamil: string;
  /** Short distinguishing trait. */
  epithet: string;
  /** Where this form is most honoured. */
  region: string;
  /**
   * The clear REVEAL still — greyscale, optimised — shown only in the sanctum
   * (/forms/[id]). The payoff of the blur → motion gradient.
   */
  image: string;
  /**
   * The blurred-BACKDROP source — a tiny greyscale "glimpse" used behind the
   * Threshold, the chapters and the gallery. Only ever seen through heavy blur,
   * so it is deliberately small.
   */
  veil: string;
  /** A reverent one-paragraph description. */
  description: string;
  /** The divine act this form is known for — the brief for his motion clip. */
  act: string;
  /**
   * Reserved motion slot. Drop a path (e.g. "/video/sangili.webm") and every
   * MotionSlot for this god plays it — blurred on the Threshold, clear in the
   * sanctum — with no other code change.
   */
  video?: string;
  /** True where a claim is devotional/unverified and must be tagged on the site. */
  verify?: boolean;
}
