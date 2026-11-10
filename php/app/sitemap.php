<?php

declare(strict_types=1);

/*
 * Dynamic sitemap, served at /sitemap.xml by the router.
 * INTENTIONAL SEO DEFECT: /privacy is listed here even though the page is noindex.
 */

$data = site_data();
$lastmod = '2026-11-01';

$entries = [
    ['/', $lastmod],
    ['/about', $lastmod],
    ['/products', $lastmod],
];
foreach ($data['products'] as $product) {
    $entries[] = ['/products/' . $product['slug'], $lastmod];
}
$entries[] = ['/blog', $lastmod];
foreach ($data['posts'] as $post) {
    $entries[] = ['/blog/' . $post['slug'], $post['date']];
}
$entries[] = ['/contact', $lastmod];
$entries[] = ['/faq', $lastmod];
$entries[] = ['/privacy', $lastmod];

header('Content-Type: application/xml; charset=utf-8');

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach ($entries as [$path, $date]) {
    echo '  <url><loc>' . htmlspecialchars(url($path), ENT_XML1 | ENT_QUOTES, 'UTF-8') . '</loc>'
        . '<lastmod>' . $date . '</lastmod></url>' . "\n";
}
echo '</urlset>' . "\n";
