import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      num="10"
      eyebrow="About"
      tamil="பற்றி"
      title="Sources & Disclaimer"
      blurb="Belief kept distinct from scholarship; oral-tradition sources credited; a living faith handled factually and with respect. Full notes arrive soon."
    />
  );
}
