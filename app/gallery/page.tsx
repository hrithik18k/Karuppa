import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <PlaceholderPage
      num="09"
      eyebrow="Gallery"
      tamil="காட்சியகம்"
      title="Stills & Motion"
      blurb="A showcase of the consecrated stills now, and the scroll-scrubbed motion-graphic reveals once the Flow clips are generated and wired."
    />
  );
}
