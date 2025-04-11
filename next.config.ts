import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Use 'http' or 'https' as needed
        hostname: "fragrances.com.ng", // Your external image domain
        port: "", // Leave empty if not using a specific port
        pathname: "/**", // Allows all paths; adjust if necessary
      },
      {
        protocol: "https", // Use 'http' or 'https' as needed
        hostname: "res.cloudinary.com", // Your external image domain
        port: "", // Leave empty if not using a specific port
        pathname: "/**", // Allows all paths; adjust if necessary
      },
    ],
  },
  // Other configuration options can go here
};

export default nextConfig;
