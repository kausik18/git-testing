<?php

declare(strict_types=1);

/*
 * Vercel entry point (vercel-php runtime). Vercel serves the static files in public/ from its
 * CDN and routes every other request here (see vercel.json). Same as public/index.php, minus
 * the php -S static-file passthrough.
 */

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if (!is_string($path) || $path === '') {
    $path = '/';
}
$path = rawurldecode($path);

require dirname(__DIR__) . '/app/config.php';
require dirname(__DIR__) . '/app/router.php';

dispatch($path);
