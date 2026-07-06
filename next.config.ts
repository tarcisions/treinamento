import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: [
    '*.ngrok-free.app',
    '*.ngrok.dev',
    '*.ngrok.io',
  ],
};

export default nextConfig;
