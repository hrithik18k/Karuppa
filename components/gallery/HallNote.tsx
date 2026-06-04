import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Aruval, Vel, Lamp } from "@/components/icons";

/**
 * The three plain truths of the hall — what is shown, what is coming, and how to
 * see a god. Page-specific to the gallery so it reads richer than the shared
 * card grid. Icons are decorative; the words carry the meaning.
 */
const notes = [
  {
    Icon: Lamp,
    label: "The stills",
    body: "Each form has a clear portrait — but it is revealed only on his own page. Here the stills stay dark and blurred, a glimpse of fire, never a face.",
  },
  {
    Icon: Vel,
    label: "The motion",
    body: "Each form has a divine act. In time, a scroll-scrubbed clip of that act will play here — every tile keeps a reserved slot for it, waiting on the motion baseline.",
  },
  {
    Icon: Aruval,
    label: "Enter a fire",
    body: "Until the motion arrives, open any fire below to see the god clearly on his own page.",
  },
];

export function HallNote() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {notes.map(({ Icon, label, body }, i) => (
        <ScrollReveal key={label} delay={i * 90}>
          <div className="flex h-full flex-col rounded-2xl border border-sacred/10 bg-stone/40 p-6 transition-colors duration-500 hover:border-accent/40">
            <Icon aria-hidden className="h-7 w-7 text-accent" />
            <h3 className="mt-4 font-display text-lg font-semibold text-sacred">
              {label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-sacred/65">{body}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
