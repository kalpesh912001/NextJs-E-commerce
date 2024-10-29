import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me', 'fakestoreapi.com'],
  },
};

export default nextConfig;

