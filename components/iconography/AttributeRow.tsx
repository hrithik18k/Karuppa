import type { ReactElement, SVGProps } from "react";
import { BeliefTag } from "@/components/ui/BeliefTag";

/**
 * One attribute, read off the guardian like a line of a sentence written in fire
 * and iron. The glyph sits in a bordered "plate" that catches the forge-light on
 * hover; rows alternate the glyph left/right so the eye walks down the figure.
 * Server component — static, fast, hydration-free.
 */
export interface Attribute {
  index: string;
  tamil?: string;
  title: string;
  body: string;
  verify?: boolean;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

export function AttributeRow({
  attribute,
  flip = false,
}: {
  attribute: Attribute;
  flip?: boolean;
}) {
  const { index, tamil, title, body, verify, Icon } = attribute;

  const plate = (
    <div className="flex shrink-0 justify-center md:basis-44">
      <div className="group/plate relative grid h-28 w-28 place-items-center rounded-2xl border border-sacred/12 bg-stone/50 transition-colors duration-500 group-hover:border-accent/45 md:h-32 md:w-32">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, var(--glow), transparent 70%)",
          }}
        />
        <Icon
          aria-hidden
          className="relative h-12 w-12 text-sacred/45 transition-all duration-500 group-hover:scale-110 group-hover:text-accent md:h-14 md:w-14"
        />
        <span className="absolute right-2 top-1.5 font-mono text-[10px] tracking-[0.2em] text-sacred/30">
          {index}
        </span>
      </div>
    </div>
  );

  const text = (
    <div className={flip ? "md:text-right" : ""}>
      {tamil && (
        <p className="font-tamil text-lg text-sacred/60">{tamil}</p>
      )}
      <h3 className="mt-1 font-display text-2xl font-semibold text-accent md:text-3xl">
        {title}
        {verify && (
          <>
            {" "}
            <BeliefTag kind="verify" />
          </>
        )}
      </h3>
      <p
        className={[
          "mt-3 max-w-prose text-base leading-relaxed text-sacred/70",
          flip ? "md:ml-auto" : "",
        ].join(" ")}
      >
        {body}
      </p>
    </div>
  );

  return (
    <div className="group relative">
      <div
        className={[
          "flex flex-col items-center gap-7 md:items-center md:gap-10",
          flip ? "md:flex-row-reverse" : "md:flex-row",
        ].join(" ")}
      >
        {plate}
        <div className="flex-1">{text}</div>
      </div>
    </div>
  );
}
