// Rewrites the absolute base URL (canonical, og:url, og:image, JSON-LD, sitemap, robots)
// in every generated file under public/.
// Usage: node scripts/set-site-url.mjs https://www.example.com
//        SITE_URL=https://www.example.com node scripts/set-site-url.mjs
// The current base URL is detected from the Sitemap line in public/robots.txt.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const next = (process.argv[2] || process.env.SITE_URL || '').replace(/\/+$/, '');

if (!/^https?:\/\/[^\s/]+/.test(next)) {
  console.error('Usage: node scripts/set-site-url.mjs <https://your-domain.example>');
  process.exit(1);
}

const robots = readFileSync(join(PUBLIC, 'robots.txt'), 'utf8');
const match = robots.match(/^Sitemap:\s*(\S+)\/sitemap\.xml\s*$/m);
if (!match) {
  console.error('Could not detect the current SITE_URL from public/robots.txt');
  process.exit(1);
}
const current = match[1];
if (current === next) {
  console.log(`SITE_URL is already ${next}`);
  process.exit(0);
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (['.html', '.xml', '.txt'].includes(extname(entry.name))) yield full;
  }
}

let changed = 0;
for (const file of walk(PUBLIC)) {
  const text = readFileSync(file, 'utf8');
  const updated = text.split(current).join(next);
  if (updated !== text) {
    writeFileSync(file, updated);
    changed++;
  }
}
console.log(`Replaced ${current} with ${next} in ${changed} file(s).`);
