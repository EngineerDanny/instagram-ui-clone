/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.instagram.com",
      "api.themoviedb.org",
      "source.unsplash.com",
      "picsum.photos",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
