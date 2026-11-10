<?php

declare(strict_types=1);

/*
 * Site configuration and small helpers shared by every view.
 * SITE_URL comes from the environment and defaults to the dev server address.
 */

$siteUrl = getenv('SITE_URL');
define('SITE_URL', rtrim(($siteUrl !== false && $siteUrl !== '') ? $siteUrl : 'http://localhost:3002', '/'));
define('APP_DIR', __DIR__);
define('SITE_NAME', 'Summit Hiking Gear');

/** Escape a value for HTML text or attribute output. */
function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5, 'UTF-8');
}

/** Absolute URL for a site path such as "/about". */
function url(string $path): string
{
    return SITE_URL . $path;
}

/** Render a JSON-LD script tag. */
function json_ld(array $data): string
{
    $json = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG);

    return '<script type="application/ld+json">' . $json . '</script>';
}

/** All site content, loaded once from data.php. */
function site_data(): array
{
    static $data = null;
    if ($data === null) {
        $data = require APP_DIR . '/data.php';
    }

    return $data;
}

/** Find an item by slug in a list of associative arrays. */
function find_by_slug(array $items, string $slug): ?array
{
    foreach ($items as $item) {
        if ($item['slug'] === $slug) {
            return $item;
        }
    }

    return null;
}

/** Markup for an <img> with alt, width and height from the image registry in data.php. */
function img(string $key, string $alt, string $class = ''): string
{
    $image = site_data()['images'][$key];
    $classAttr = $class !== '' ? ' class="' . e($class) . '"' : '';

    return sprintf(
        '<img src="/images/%s.svg" alt="%s" width="%d" height="%d"%s>',
        e($key),
        e($alt),
        $image['w'],
        $image['h'],
        $classAttr
    );
}

/** BreadcrumbList JSON-LD for a trail of ['name' => ..., 'path' => ...] items. */
function breadcrumb_ld(array $trail): array
{
    $items = [];
    foreach ($trail as $i => $crumb) {
        $items[] = [
            '@type' => 'ListItem',
            'position' => $i + 1,
            'name' => $crumb['name'],
            'item' => url($crumb['path']),
        ];
    }

    return [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => $items,
    ];
}

/** Render a view file with the given variables in scope. */
function render(string $view, array $vars = []): void
{
    extract($vars, EXTR_SKIP);
    $data = site_data();
    require APP_DIR . '/views/' . $view . '.php';
}
