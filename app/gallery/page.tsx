import type { Metadata } from "next";
import { SectionPage } from "@/components/ui/SectionPage";
import { sections } from "@/content/sections";

const data = sections.gallery;

export const metadata: Metadata = { title: data.title, description: data.lead };

export default function GalleryPage() {
  return <SectionPage data={data} />;
}
