import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Blur scale (plan.md §2) — blur itself signals proximity, so it is named, not
 * arbitrary. `true` is an alias for the deepest, "threshold" blur.
 *   threshold (48px) — landing / deep veil: presence, never a portrait
 *   veil      (24px) — lifted a touch: a form you almost resolve
 *   near       (8px) — on the brink of revelation
 */
export type BlurLevel = boolean | "threshold" | "veil" | "near";

const BLUR_CLASS: Record<"threshold" | "veil" | "near", string> = {
  threshold: "blur-[48px]",
  veil: "blur-[24px]",
  near: "blur-[8px]",
};

function blurClass(blur: BlurLevel): string | undefined {
  if (!blur) return undefined;
  if (blur === true) return BLUR_CLASS.threshold;
  return BLUR_CLASS[blur];
}

/**
 * The video-ready socket. Everywhere a god-motion belongs, use a MotionSlot:
 * today it paints the still (optionally blurred + Ken-Burns); the day a `video`
 * path exists in the registry it plays that instead — no other code changes.
 * This is how the site becomes "only the motion of the gods."
 *
 * Landing/gallery usage = blurred (never disclose the form); the sanctum, clear.
 */
export function MotionSlot({
  src,
  video,
  alt = "",
  priority = false,
  blur = false,
  kenBurns = false,
  quality,
  sizes = "100vw",
  className,
  mediaClassName,
  children,
}: {
  src: string;
  video?: string;
  alt?: string;
  priority?: boolean;
  /** Named blur level (or `true` = threshold). Composes with Tailwind filters. */
  blur?: BlurLevel;
  kenBurns?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  /** Extra classes on the media element itself (e.g. brightness/grayscale to
   *  crush a backdrop toward black). Applied to both <Image> and <video>. */
  mediaClassName?: string;
  /** Overlays — gradients, vignette. */
  children?: React.ReactNode;
}) {
  const blurC = blurClass(blur);
  // Zoom slightly so the soft, blurred edges never reveal the frame border.
  const zoom = blur && !kenBurns ? { transform: "scale(1.6)" } : undefined;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={src}
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            kenBurns && "kenburns",
            blurC,
            mediaClassName
          )}
          style={zoom}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={quality ?? (blur ? 35 : 75)}
          className={cn(
            "object-cover",
            kenBurns && "kenburns",
            blurC,
            mediaClassName
          )}
          style={zoom}
        />
      )}
      {children}
    </div>
  );
}
