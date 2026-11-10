<?php

declare(strict_types=1);

require_once APP_DIR . '/partials/cards.php';

/*
 * Maps a request path to a view. Called from public/index.php.
 */
function dispatch(string $path): void
{
    // Canonical URLs have no trailing slash: /about/ -> 301 /about
    if ($path !== '/' && str_ends_with($path, '/')) {
        $target = rtrim($path, '/');
        header('Location: ' . ($target === '' ? '/' : $target), true, 301);
        return;
    }

    $data = site_data();

    $staticRoutes = [
        '/' => 'home',
        '/about' => 'about',
        '/products' => 'products',
        '/blog' => 'blog',
        '/contact' => 'contact',
        '/faq' => 'faq',
        '/privacy' => 'privacy',
    ];

    if (isset($staticRoutes[$path])) {
        render($staticRoutes[$path]);
        return;
    }

    if ($path === '/sitemap.xml') {
        require APP_DIR . '/sitemap.php';
        return;
    }

    if ($path === '/robots.txt') {
        require APP_DIR . '/robots.php';
        return;
    }

    if (preg_match('#^/products/([a-z0-9-]+)$#', $path, $m) === 1) {
        $product = find_by_slug($data['products'], $m[1]);
        if ($product !== null) {
            render('product', ['product' => $product]);
            return;
        }
    }

    if (preg_match('#^/blog/([a-z0-9-]+)$#', $path, $m) === 1) {
        $post = find_by_slug($data['posts'], $m[1]);
        if ($post !== null) {
            render('post', ['post' => $post]);
            return;
        }
    }

    not_found();
}

function not_found(): void
{
    http_response_code(404);
    render('404');
}
