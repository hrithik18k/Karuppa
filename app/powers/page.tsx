import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "The Powers" };

export default function PowersPage() {
  return (
    <PlaceholderPage
      num="03"
      eyebrow="The Powers"
      tamil="சக்திகள்"
      title="Powers & Abilities"
      blurb="Guardianship, justice and retribution, protection from black magic, the oracle’s voice, boons for the faithful, and martial valour."
    />
  );
}
