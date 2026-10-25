# bklink docs

Documentation for [bklink](https://bklink.uk) (backlink audits), [mxverify](https://mxverify.uk) (backlink values) and the BV API. Published at **[bklink.uk/docs](https://bklink.uk/docs)**.

Built with [Fumadocs](https://fumadocs.dev) on Next.js as a fully static site under the base path `/docs`, served from Cloudflare Workers static assets. The docs Worker answers `bklink.uk/docs` and `bklink.uk/docs/*`; the bklink app answers the rest of bklink.uk.

## Writing

Pages are MDX in `content/docs/`, one folder per product (`bklink/`, `mxverify/`, `api/`). Each folder's `meta.json` sets the order of its pages.

Where a figure or rule is published on bklink.uk or mxverify.uk (prices, the BV model), link to that page as the authority rather than restating numbers that change.

## Running locally

```bash
npm install
npm run dev
```

## Building and deploying

```bash
npm run build          # static export to ./out, staged under ./dist/docs
npx wrangler deploy    # needs CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID in the environment
```

Nothing secret belongs in this repository: no keys, tokens or `.env` files. Deploy credentials come from the environment only.

## Corrections

Open an issue or a pull request, or write to [support@bklink.uk](mailto:support@bklink.uk).
