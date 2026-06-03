import Link from "next/link";
import { cn } from "@/lib/cn";

/** Outlined ritual pill link with the reference site's `↗` arrow. */
export function PillButton({
  href,
  children,
  variant = "outline",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-300",
    variant === "solid"
      ? "bg-accent/90 text-void hover:bg-accent"
      : "border border-sacred/25 text-sacred/90 hover:border-accent hover:text-accent",
    className
  );
  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
