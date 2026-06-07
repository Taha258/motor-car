/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export ke liye
  images: {
    unoptimized: true, // Static export mein images ke liye zaroori
  },
};

export default nextConfig;