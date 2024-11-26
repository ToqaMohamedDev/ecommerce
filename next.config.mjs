/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
      },
    images: {
        domains: ['serverecomerce.vercel.app'],
      },
};

export default nextConfig;
