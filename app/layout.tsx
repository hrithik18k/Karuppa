import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { GlassNav } from "@/components/nav/GlassNav";
import { SiteFooter } from "@/components/nav/SiteFooter";
import { GrainVignette } from "@/components/atmosphere/GrainVignette";
import { AmbientSound } from "@/components/atmosphere/AmbientSound";
import { SmoothScroll } from "@/components/landing/SmoothScroll";
import { SanctumVeil } from "@/components/transitions/SanctumVeil";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karuppa.vercel.app"),
  title: {
    default: "Karuppa — Kaval Deivam, the Guardian of Justice",
    template: "%s · Karuppa",
  },
  description:
    "A cinematic digital shrine for Karuppu Swamy, the guardian deity (kaval deivam) of Dravidian folk religion — revealed form by form, power by power.",
  keywords: [
    "Karuppu Swamy",
    "Karuppasamy",
    "Sangili Karuppan",
    "kaval deivam",
    "Tamil folk deity",
    "guardian deity",
  ],
  openGraph: {
    title: "Karuppa — Kaval Deivam, the Guardian of Justice",
    description:
      "A cinematic digital shrine for the guardian deity Karuppu Swamy — revealed form by form, power by power.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="min-h-dvh bg-void font-sans text-sacred antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <SanctumVeil />
        <GlassNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <GrainVignette />
        <AmbientSound />
      </body>
    </html>
  );
}
