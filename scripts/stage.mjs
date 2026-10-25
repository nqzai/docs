// Stage the static export for Workers static assets at bklink.uk/docs. Next writes ./out with the base path in every
// link but not in the file layout, so the files move under ./dist/docs; /docs itself is dist/docs.html, and the
// _headers file (rules for the whole assets root) goes to ./dist.
import { cpSync, existsSync, mkdirSync, renameSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('out', 'dist/docs', { recursive: true });
renameSync('dist/docs/index.html', 'dist/docs.html');
if (existsSync('dist/docs/_headers')) renameSync('dist/docs/_headers', 'dist/_headers');
console.log('Staged ./out as ./dist/docs');
