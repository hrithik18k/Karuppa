import type { Metadata } from "next";
import { SectionPage } from "@/components/ui/SectionPage";
import { sections } from "@/content/sections";

const data = sections.worship;

export const metadata: Metadata = { title: data.title, description: data.lead };

export default function WorshipPage() {
  return <SectionPage data={data} />;
}
