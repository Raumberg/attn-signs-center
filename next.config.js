/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/attn-signs-center',
  assetPrefix: '/attn-signs-center',
};

module.exports = nextConfig;
