/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/attn-signs-center',
  assetPrefix: '/attn-signs-center',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/attn-signs-center',
  },
};

module.exports = nextConfig;
