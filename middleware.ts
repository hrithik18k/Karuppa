import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  // Everything is behind the login except the auth flow itself and the
  // assets that must stay public: images, OG cards, icons, video, the PWA
  // manifest and the SEO files — otherwise social scrapers and installed
  // PWAs get redirected to /login instead of the artwork.
  matcher: [
    "/((?!api/auth|login|img|og|icons|video|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|opengraph-image|manifest.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
