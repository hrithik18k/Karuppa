import { KolamStar } from "@/components/icons";
import { cn } from "@/lib/cn";

/** A kolam-marked section divider — a small rite between chapters. */
export function RitualDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("mx-auto flex max-w-7xl items-center gap-5 px-6", className)}
    >
      <span className="hairline h-px flex-1" />
      <KolamStar className="slow-spin h-7 w-7 text-accent/70" />
      <span className="hairline h-px flex-1" />
    </div>
  );
}
