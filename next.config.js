

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only enable basePath when deploying to GitHub Pages.
  // Vercel and other hosts should serve assets from the root.
  // Set NEXT_PUBLIC_DEPLOY_ENV=GH_PAGES when building for GitHub Pages.
  basePath: process.env.NEXT_PUBLIC_DEPLOY_ENV === 'GH_PAGES' ? '/AnasLahboub' : '',
}

module.exports = nextConfig;