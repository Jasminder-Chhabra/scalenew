/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
 eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during Vercel builds
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  reactStrictMode: true,
}




export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);

