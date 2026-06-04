import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Vibhuti, Aruval } from "@/components/icons";

/**
 * Offerings — handled factually and with respect, exactly as the source does.
 * Two registers, side by side: the gentle daily offerings, and the fiercer
 * offerings kept in some traditions (alcohol, cigars, animal sacrifice). No new
 * verifiable claims — the framing is atmospheric only.
 */

const gentle = ["Milk", "Ghee", "Camphor", "Cloves"];
const fierce = ["Arrack & toddy", "Lit cigars", "Animal sacrifice"];

export function OfferingsLedger() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ScrollReveal>
        <div className="flex h-full flex-col rounded-2xl border border-sacred/10 bg-stone/40 p-7">
          <div className="flex items-center gap-3 text-ashgold">
            <Vibhuti className="h-6 w-6" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
              The gentle offerings
            </span>
          </div>
          <p className="mt-4 font-serif text-lg italic leading-snug text-sacred/80 md:text-xl">
            What the household brings — placed before him in light and smoke.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {gentle.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ashgold/30 px-3.5 py-1.5 text-sm text-sacred/75"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-sacred/55">
            Pure, bright and fragrant — the everyday devotion of milk poured,
            ghee burned, camphor and cloves lit at his feet.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div className="flex h-full flex-col rounded-2xl border border-accent/25 bg-stone/40 p-7">
          <div className="flex items-center gap-3 text-accent">
            <Aruval className="h-6 w-6" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
              The fierce offerings
            </span>
          </div>
          <p className="mt-4 font-serif text-lg italic leading-snug text-sacred/80 md:text-xl">
            What some lineages bring to a warrior-god — kept where the tradition
            keeps it.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {fierce.map((item) => (
              <li
                key={item}
                className="rounded-full border border-accent/30 px-3.5 py-1.5 text-sm text-sacred/75"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-sacred/55">
            In some traditions he is offered alcohol, cigars and animal
            sacrifice — the offerings of a fierce guardian, recorded here as they
            are kept: factually, and with respect.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
