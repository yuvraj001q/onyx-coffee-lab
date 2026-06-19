/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'storage.ghost.io' },
      { protocol: 'https', hostname: 'www.baristamagazine.com' },
    ],
  },
};

export default nextConfig;
