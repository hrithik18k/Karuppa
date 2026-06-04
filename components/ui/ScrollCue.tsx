import { cn } from "@/lib/cn";

/** Vertical "scroll to reveal" cue with an animated descending bar (reference UI furniture). */
export function ScrollCue({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)} aria-hidden>
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-sacred/45 [writing-mode:vertical-rl]">
        Scroll to reveal
      </span>
      <span
        className="h-12 w-px origin-top bg-gradient-to-b from-accent to-transparent"
        style={{ animation: "scroll-cue 2.4s ease-in-out infinite" }}
      />
    </div>
  );
}
