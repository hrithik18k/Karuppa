import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * The open-questions list — every claim we still want to confirm against a
 * primary or temple source, named plainly so nothing hides. Drawn from the
 * verify markers across the site's content.
 */
const items = [
  {
    title: "Temple coordinates",
    body: "The exact locations and map points for the shrines, before any map explorer goes live.",
  },
  {
    title: "The 108 forms",
    body: "The traditional count of 108 forms — devotional, and not yet documented in full.",
  },
  {
    title: "The Sabarimala claim",
    body: "Whether Karuppu guards the premises at Sabarimala, as popular sources state.",
  },
  {
    title: "Festival spellings",
    body: "The correct transliteration of festival and ritual names, checked against Tamil sources.",
  },
  {
    title: "Companion animals",
    body: "The horse and the hunting dog (vettai naai) as attested companions of the guardian.",
  },
];

export function VerifyList() {
  return (
    <ol className="mt-12 space-y-px">
      {items.map((item, i) => (
        <ScrollReveal key={item.title} delay={i * 70}>
          <li className="relative grid gap-2 border-l border-sacred/15 py-6 pl-8 md:grid-cols-[1fr_auto] md:items-start md:gap-8">
            <span
              aria-hidden
              className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-sacred/30"
            />
            <div>
              <h3 className="font-display text-lg font-semibold text-sacred">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sacred/65">
                {item.body}
              </p>
            </div>
            <BeliefTag kind="verify" className="md:mt-1.5" />
          </li>
        </ScrollReveal>
      ))}
    </ol>
  );
}
