// Bakes SITE_URL into the files that hard-code it: the Angular environment constant,
// public/robots.txt and public/sitemap.xml. Runs automatically before `npm run build`.
// Usage: SITE_URL=https://example.com node scripts/set-site-url.mjs
//        (defaults to http://localhost:3009, so a plain local build leaves the files unchanged)
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const next = (process.argv[2] || process.env.SITE_URL || 'http://localhost:3009').replace(/\/+$/, '');
if (!/^https?:\/\/[^/]+$/.test(next)) {
  console.error(`SITE_URL must be an origin like https://example.com, got "${next}"`);
  process.exit(1);
}

const envFile = root + 'src/environments/environment.ts';
const env = readFileSync(envFile, 'utf8');
const current = (env.match(/siteUrl: '([^']+)'/) || [])[1]?.replace(/\/+$/, '');
if (!current) {
  console.error('Could not find siteUrl in src/environments/environment.ts');
  process.exit(1);
}
if (current === next) {
  console.log(`SITE_URL is already ${next}`);
  process.exit(0);
}

for (const file of ['src/environments/environment.ts', 'public/robots.txt', 'public/sitemap.xml']) {
  const path = root + file;
  writeFileSync(path, readFileSync(path, 'utf8').split(current).join(next));
}
console.log(`SITE_URL changed from ${current} to ${next}`);
