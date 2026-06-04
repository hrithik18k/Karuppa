import type { SVGProps } from "react";

/**
 * Bespoke line-art glyphs for the attributes that have no entry in the shared
 * @/components/icons set — drawn in the same currentColor, 1.6-stroke house hand
 * so they sit beside Aruval / Vibhuti without a seam. Purely decorative; size via
 * className h-/w-.
 */

const stroke = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/** கண் — the wide, fiery, unsleeping eye. */
export function FieryEye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke(props)}>
      <path d="M2.5 12C5 7.5 8.4 5.3 12 5.3S19 7.5 21.5 12C19 16.5 15.6 18.7 12 18.7S5 16.5 2.5 12Z" />
      <circle cx="12" cy="12" r="3.1" />
      <circle cx="12" cy="12" r="1.2" fill="var(--color-fire)" stroke="none" />
      <path d="M12 2.6v1.4M6.2 4.1l.7 1.2M17.8 4.1l-.7 1.2" opacity="0.7" />
    </svg>
  );
}

/** குடுமி — the warrior side-bun, hair gathered in the Nayaka martial style. */
export function WarriorBun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke(props)}>
      <path d="M6.5 20c0-4.2 1.4-7.2 3.6-9" />
      <path d="M10.1 11c1.4-1.2 3-1.8 4.6-1.6" />
      <circle cx="16.4" cy="8.2" r="3.1" />
      <path d="M14.6 6.1c.9.7 1.4 1.7 1.5 2.9" opacity="0.8" />
      <path d="M6.5 20h4" />
    </svg>
  );
}

/** Heavy chains with a flower garland — power worn alongside devotion. */
export function ChainGarland(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke(props)}>
      <ellipse cx="8" cy="7.5" rx="1.7" ry="2.3" />
      <ellipse cx="11.4" cy="10.4" rx="1.7" ry="2.3" />
      <ellipse cx="14.8" cy="13.3" rx="1.7" ry="2.3" />
      <path d="M4.5 13c1.6 3 4.4 5.4 8 6.6 3.6 1.2 6.2.6 7-.4" opacity="0.85" />
      <circle cx="6.6" cy="14.6" r="1" fill="var(--color-fire)" stroke="none" />
      <circle cx="9.9" cy="16.4" r="1" fill="var(--color-fire)" stroke="none" />
      <circle cx="13.4" cy="17.6" r="1" fill="var(--color-fire)" stroke="none" />
      <circle cx="17" cy="17.6" r="1" fill="var(--color-fire)" stroke="none" />
    </svg>
  );
}

/** Horse & hound — the white steed and the lean hunting dog, vettai naai. */
export function HorseHound(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke(props)}>
      {/* Horse */}
      <path d="M3 7.5c1.6-.6 3-.4 4 .8l1.4 1.8 2.6.4" />
      <path d="M11 10.5c.4 1.8-.2 3.4-1.6 4.4" />
      <path d="M4 8.3 3.2 6.4M5.4 8.1l-.4-2" opacity="0.8" />
      <path d="M3.6 14.9 4.4 11M8 15.4l.6-3.4" />
      {/* Hound */}
      <path d="M13.5 16.5c0-2 1-3.3 2.8-3.7l3.2-.6c1-.2 1.6.5 1.3 1.3" />
      <path d="M20.8 13.5l.6-1.8c.3-.8-.6-1.3-1.2-.7l-1 1" />
      <path d="M13.5 16.5h6.6" />
      <path d="M14 16.5l.4 2.2M19.4 16.5l.4 2.2" />
    </svg>
  );
}
