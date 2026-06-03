import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Diaspora" };

export default function DiasporaPage() {
  return (
    <PlaceholderPage
      num="08"
      eyebrow="Diaspora"
      tamil="புலம்பெயர்"
      title="Karuppu Across the Seas"
      blurb="Malaysia, Singapore, Sri Lanka, Mauritius, Réunion, Fiji and the Indo-Caribbean — where he is known as Sangili Karuppan, Sangani Baba, Dee Baba."
    />
  );
}
