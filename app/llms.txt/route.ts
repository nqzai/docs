import { docsLlms } from '@/lib/source';
import { siteUrl } from '@/lib/shared';

export const revalidate = false;

export async function GET() {
  // Page links are site-relative ("/api"); read from bklink.uk/docs/llms.txt they must name the docs, so make them absolute.
  const text = (await docsLlms.index()).replace(/\]\(\/\)/g, `](${siteUrl})`).replace(/\]\(\//g, `](${siteUrl}/`).replace(/^# Docs$/m, '# bklink and mxverify documentation');
  return new Response(text);
}
