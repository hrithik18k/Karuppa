import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Temples" };

export default function TemplesPage() {
  return (
    <PlaceholderPage
      num="07"
      eyebrow="Temples"
      tamil="கோயில்கள்"
      title="Shrines of the Guardian"
      blurb="From Azhagar Koil near Madurai — considered the original — to Mettukulam, Tiruverkadu and beyond. A map-driven explorer arrives with the data baseline."
    />
  );
}
