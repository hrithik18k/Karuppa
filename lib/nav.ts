/** Site information map (build-spec.md §2). Drives the header, ritual menu, and footer. */
export interface NavItem {
  num: string;
  href: string;
  label: string;
  tamil: string;
  /** One-line ritual subtitle shown in the full-screen menu. */
  subtitle: string;
}

export const navItems: NavItem[] = [
  { num: "01", href: "/guardian", label: "Guardian", tamil: "காவலன்", subtitle: "Who is Karuppu Swamy" },
  { num: "02", href: "/forms", label: "Forms", tamil: "வடிவங்கள்", subtitle: "The 108 forms, revealed" },
  { num: "03", href: "/powers", label: "Powers", tamil: "சக்திகள்", subtitle: "Abilities of the guardian" },
  { num: "04", href: "/iconography", label: "Iconography", tamil: "சின்னங்கள்", subtitle: "Sword, eyes, chains, hound" },
  { num: "05", href: "/worship", label: "Worship", tamil: "வழிபாடு", subtitle: "Rituals, oracle, offerings" },
  { num: "06", href: "/festivals", label: "Festivals", tamil: "திருவிழா", subtitle: "Flag, trance, procession" },
  { num: "07", href: "/temples", label: "Temples", tamil: "கோயில்கள்", subtitle: "Shrines across the land" },
  { num: "08", href: "/diaspora", label: "Diaspora", tamil: "புலம்பெயர்", subtitle: "Karuppu across the seas" },
  { num: "09", href: "/gallery", label: "Gallery", tamil: "காட்சியகம்", subtitle: "Stills and motion" },
  { num: "10", href: "/about", label: "About", tamil: "பற்றி", subtitle: "Sources & disclaimer" },
];
