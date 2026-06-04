import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * The honesty key — explains the two markers used across the site, side by side,
 * each with a real example from the content. Plain and calm: this is the page
 * that earns the visitor's trust, so no ornament.
 */
const keys = [
  {
    kind: "belief" as const,
    heading: "Devotional tradition",
    body: "Marks a claim that belongs to living faith — held and passed down by those who keep his worship. We present it as belief, not as established fact.",
    exampleLabel: "For example",
    example: "Tradition speaks of 108 forms of Karuppu.",
  },
  {
    kind: "verify" as const,
    heading: "Still to confirm",
    body: "Marks a claim we have not yet checked against a primary or temple source. It stays flagged until we can confirm it, so you always know what is settled and what is not.",
    exampleLabel: "For example",
    example:
      "That Karuppu guards the premises at Sabarimala — cited in popular sources, not yet confirmed.",
  },
];

export function MarkerKey() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {keys.map((k, i) => (
        <ScrollReveal key={k.kind} delay={i * 90}>
          <div className="flex h-full flex-col rounded-2xl border border-sacred/10 bg-stone/40 p-6 md:p-7">
            <BeliefTag kind={k.kind} />
            <h3 className="mt-4 font-display text-xl font-semibold text-sacred">
              {k.heading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sacred/65">
              {k.body}
            </p>
            <div className="mt-5 rounded-xl border border-sacred/10 bg-void/40 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sacred/40">
                {k.exampleLabel}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-sacred/75">
                <BeliefTag kind={k.kind} className="mt-0.5 shrink-0" />
                <span>{k.example}</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
