import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Libera o `next dev` na rede local (celular / outro PC).
  // Sem isso o Next 16 bloqueia /_next/* e o HMR com "Blocked cross-origin request".
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.0.8",
    "192.168.*.*",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
