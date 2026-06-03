import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "The Forms" };

export default function FormsPage() {
  return (
    <PlaceholderPage
      num="02"
      eyebrow="The Forms"
      tamil="வடிவங்கள்"
      title="The 108 Forms"
      blurb="Six named forms, each in its own colour theme on near-black — one deity seen through a spectrum of fire. The full gallery arrives in the next baseline."
    />
  );
}
