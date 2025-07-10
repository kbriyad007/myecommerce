/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['a.storyblok.com'], // ✅ allow Storyblok images
  },
};
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
export default nextConfig;
