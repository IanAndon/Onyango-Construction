/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
        search: "",
      },
    ],
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
