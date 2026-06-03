import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { SiteFooter } from "@/components/nav/SiteFooter";
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
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-dvh bg-void font-sans text-sacred antialiased">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
