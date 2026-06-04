import type { Metadata } from "next";
import { SectionPage } from "@/components/ui/SectionPage";
import { sections } from "@/content/sections";

const data = sections.diaspora;

export const metadata: Metadata = { title: data.title, description: data.lead };

export default function DiasporaPage() {
  return <SectionPage data={data} />;
}
