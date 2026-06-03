import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Worship" };

export default function WorshipPage() {
  return (
    <PlaceholderPage
      num="05"
      eyebrow="Worship"
      tamil="வழிபாடு"
      title="Rituals & the Oracle"
      blurb="Non-Vedic, hereditary priesthood; villu paattu and karakattam; offerings of camphor, milk and more; and the oracle who speaks in trance."
    />
  );
}
