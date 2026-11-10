// Zero-dependency static file server for the Brightside Bakery site.
// Usage: node server.mjs   (PORT defaults to 3001)
//  - serves files from ./public
//  - clean URLs: /about/ -> public/about/index.html; /about -> 301 /about/
//  - unknown paths get public/404.html with a real 404 status
import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { join, normalize, extname, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT) || 3001;
const ROOT = join(dirname(fileURLToPath(import.meta.url)), 'public');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function statOrNull(file) {
  try {
    return statSync(file);
  } catch {
    return null;
  }
}

function send(req, res, status, file, extraHeaders = {}) {
  const stat = statSync(file);
  res.writeHead(status, {
    'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream',
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache',
    ...extraHeaders,
  });
  if (req.method === 'HEAD') return res.end();
  createReadStream(file).pipe(res);
}

function notFound(req, res) {
  send(req, res, 404, join(ROOT, '404.html'));
}

const server = createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD', 'Content-Type': 'text/plain' });
    return res.end('Method Not Allowed');
  }

  const url = new URL(req.url, 'http://localhost');
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Bad Request');
  }

  // Resolve inside ROOT only (blocks ../ traversal).
  const target = normalize(join(ROOT, pathname));
  if (target !== ROOT && !target.startsWith(ROOT + sep)) return notFound(req, res);

  const stat = statOrNull(target);
  if (stat && stat.isFile()) return send(req, res, target === join(ROOT, '404.html') ? 404 : 200, target);

  if (stat && stat.isDirectory()) {
    const index = join(target, 'index.html');
    if (!statOrNull(index)?.isFile()) return notFound(req, res);
    if (!url.pathname.endsWith('/')) {
      res.writeHead(301, { Location: url.pathname + '/' + url.search });
      return res.end();
    }
    return send(req, res, 200, index);
  }

  return notFound(req, res);
});

server.listen(PORT, () => {
  console.log(`Brightside Bakery running at http://localhost:${PORT}`);
});
