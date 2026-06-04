import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * The video-ready socket. Everywhere a flame / god-motion belongs, use a
 * MotionSlot: today it paints the still (optionally blurred + Ken-Burns); the
 * day a `video` path exists in the registry it plays that instead — no other
 * code changes. This is how the site becomes "only the motion of the gods."
 *
 * Landing usage = `blur` (never disclose the form); sanctum usage = clear.
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
  children,
}: {
  src: string;
  video?: string;
  alt?: string;
  priority?: boolean;
  blur?: boolean;
  kenBurns?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  /** Overlays — gradients, colour wash, vignette. */
  children?: React.ReactNode;
}) {
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
            blur && "blur-[40px]"
          )}
          style={blur && !kenBurns ? { transform: "scale(1.6)" } : undefined}
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
            blur && "blur-[40px]"
          )}
          style={blur && !kenBurns ? { transform: "scale(1.6)" } : undefined}
        />
      )}
      {children}
    </div>
  );
}
