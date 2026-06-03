import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Festivals" };

export default function FestivalsPage() {
  return (
    <PlaceholderPage
      num="06"
      eyebrow="Festivals"
      tamil="திருவிழா"
      title="The Annual Rite"
      blurb="Flag hoisting opens it; the village draws inward for three days; the oracle enters trance and the procession moves through fire and drum."
    />
  );
}
