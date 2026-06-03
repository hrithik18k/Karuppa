import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Iconography" };

export default function IconographyPage() {
  return (
    <PlaceholderPage
      num="04"
      eyebrow="Iconography"
      tamil="சின்னங்கள்"
      title="The Symbols He Bears"
      blurb="The aruval, the fiery eyes, the warrior side-bun, the chains and garlands, the horse and the hunting hound — every attribute a meaning."
    />
  );
}
