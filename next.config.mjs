/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local stills live in /public/img — modern formats for the optimiser.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
