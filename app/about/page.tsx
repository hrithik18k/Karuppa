import type { Metadata } from "next";
import { SectionPage } from "@/components/ui/SectionPage";
import { sections } from "@/content/sections";

const data = sections.about;

export const metadata: Metadata = { title: data.title, description: data.lead };

export default function AboutPage() {
  return <SectionPage data={data} />;
}
