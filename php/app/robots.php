<?php

declare(strict_types=1);

/* Dynamic robots.txt, served at /robots.txt by the router. */

header('Content-Type: text/plain; charset=utf-8');

echo "User-agent: *\n";
echo "Allow: /\n";
echo "\n";
echo 'Sitemap: ' . url('/sitemap.xml') . "\n";
