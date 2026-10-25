import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'bklink docs';
/** Where the site is served: bklink.uk/docs (next.config.mjs basePath). */
export const basePath = '/docs';
export const origin = 'https://bklink.uk';
export const siteUrl = `${origin}${basePath}`;
export const docsRoute = '/';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx';

export const gitConfig = {
  user: 'nqzai',
  repo: 'docs',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

// Fetched or linked as plain URLs (not through next/link), so they carry the base path themselves.
export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: basePath + getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: basePath + getImageUrl(segments, page.locale) };
}
