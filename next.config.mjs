/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local stills live in /public/img — modern formats for the optimiser.
    formats: ["image/avif", "image/webp"],
    // Allowed quality levels (required from Next 16). Low q for blurred backdrops.
    qualities: [30, 35, 50, 75],
  },
};

export default nextConfig;
