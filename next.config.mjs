/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/H-GAquess',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
