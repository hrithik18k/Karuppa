import type { Metadata } from "next";
import { forms } from "@/content/forms";
import { LandingExperience } from "@/components/landing/LandingExperience";

export const metadata: Metadata = {
  description:
    "Descend through the fires of Karuppu Swamy — a dark, cinematic threshold where each guardian is a sigil, not a portrait. Enter a fire to witness the god.",
};

/**
 * The Threshold (landing). Pure void + blurred fire-haze; the gods appear only
 * as glowing sigils. The roster comes straight from the registry, so lighting a
 * new fire later is a one-line data change.
 */
export default function HomePage() {
  return <LandingExperience forms={forms} />;
}
