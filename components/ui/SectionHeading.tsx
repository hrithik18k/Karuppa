import { type ElementType } from "react";
import { cn } from "@/lib/cn";

/**
 * Cinematic serif heading, paired with its Tamil line above (build-spec.md §4.2).
 * Monochrome (plan.md §2): `accent` just sets full-strength ash; default ash too —
 * hierarchy comes from size and weight, never hue.
 */
export function SectionHeading({
  tamil,
  children,
  as: Tag = "h2",
  accent = false,
  className,
}: {
  tamil?: string;
  children: React.ReactNode;
  as?: ElementType;
  accent?: boolean;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold leading-[1.04] tracking-normal",
        accent ? "brush-heading text-accent" : "text-sacred",
        className
      )}
    >
      {tamil && (
        <span className="mb-3 block font-tamil text-[0.5em] font-medium tracking-normal text-sacred/70">
          {tamil}
        </span>
      )}
      {children}
    </Tag>
  );
}
