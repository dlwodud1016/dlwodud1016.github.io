import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: "export",
    assetPrefix: isProd ? "https://dlwodud1016.github.io" : undefined,
};

export default nextConfig;
