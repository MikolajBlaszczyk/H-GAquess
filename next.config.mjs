/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/H-GAquess',
  assetPrefix: '/H-GAquess/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
