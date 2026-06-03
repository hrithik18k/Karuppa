import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "The Guardian" };

export default function GuardianPage() {
  return (
    <PlaceholderPage
      num="01"
      eyebrow="The Guardian"
      tamil="காவலன்"
      title="Who is Karuppu Swamy"
      blurb="Karuppu — “the black god.” A guardian deity born of the Nayaka age, who became a village protector and then a deity worshipped across the world."
    />
  );
}
