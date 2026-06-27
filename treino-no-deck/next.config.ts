import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '*.ngrok-free.app',
    '*.ngrok.dev',
    '*.ngrok.io',
  ],
};

export default nextConfig;
