import type { Metadata } from "next";
import { SectionPage } from "@/components/ui/SectionPage";
import { sections } from "@/content/sections";

const data = sections.festivals;

export const metadata: Metadata = { title: data.title, description: data.lead };

export default function FestivalsPage() {
  return <SectionPage data={data} />;
}
