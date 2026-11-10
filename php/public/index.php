<?php

declare(strict_types=1);

/*
 * Front controller. Every request that is not a real static file ends up here.
 *
 * Dev server:  php -S localhost:3002 -t public public/index.php
 * Apache:      see public/.htaccess
 */

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if (!is_string($path) || $path === '') {
    $path = '/';
}
$path = rawurldecode($path);

// With the built-in server, let it serve existing static files (CSS, JS, images, favicon).
if (PHP_SAPI === 'cli-server' && $path !== '/') {
    $file = realpath(__DIR__ . $path);
    if (
        $file !== false
        && is_file($file)
        && str_starts_with($file, __DIR__ . DIRECTORY_SEPARATOR)
        && strtolower(pathinfo($file, PATHINFO_EXTENSION)) !== 'php'
        && !str_starts_with(basename($file), '.')
    ) {
        return false;
    }
}

require dirname(__DIR__) . '/app/config.php';
require dirname(__DIR__) . '/app/router.php';

dispatch($path);
