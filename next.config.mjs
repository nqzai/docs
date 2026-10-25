import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'node:url';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // A static site: every page is built to plain files and served from Cloudflare Workers static assets.
  output: 'export',
  trailingSlash: false,
  reactStrictMode: true,
  images: { unoptimized: true },
  turbopack: { root: fileURLToPath(new URL('.', import.meta.url)) },
};

export default withMDX(config);
