// Zero-dependency static server for the production build (dist/citycare/browser)
// with history-API fallback so deep links like /services/teeth-cleaning work.
// Usage: npm run build && node serve-dist.mjs   (PORT env var overrides 3009)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), 'dist/citycare/browser');
const port = Number(process.env.PORT) || 3009;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

async function tryFile(path) {
  try {
    const s = await stat(path);
    return s.isFile() ? path : null;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url ?? '/', 'http://localhost');
    const decoded = decodeURIComponent(pathname);
    const target = normalize(join(root, decoded));
    if (target !== root && !target.startsWith(root + sep)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    let file = await tryFile(target);
    if (!file && !extname(decoded)) {
      // SPA fallback: unknown extension-less paths get index.html (status 200).
      file = join(root, 'index.html');
    }
    if (!file) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
      return;
    }

    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (err) {
    res.writeHead(500).end('Server error');
    console.error(err);
  }
}).listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
