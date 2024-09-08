/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      'steamcdn-a.akamaihd.net',
      'images.ctfassets.net',
      'm.media-amazon.com',
      'image.api.playstation.com',
      'static-cdn.jtvnw.net',
      'cdn1.epicgames.com',
    ].map(hostname => ({ hostname })),
  },
};

export default nextConfig;
