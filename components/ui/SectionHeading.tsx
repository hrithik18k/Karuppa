import { type ElementType } from "react";
import { cn } from "@/lib/cn";

/**
 * Cinematic serif heading, paired with its Tamil line above (build-spec.md §4.2).
 * `accent` colours it in the active form's fire instead of ash-white.
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
        "font-display font-semibold leading-[1.04] tracking-tight",
        accent ? "text-accent" : "text-sacred",
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
