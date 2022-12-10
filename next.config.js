/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
