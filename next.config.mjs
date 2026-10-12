import { dirname } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root (a lockfile exists higher up in the user folder).
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
};

export default nextConfig;
