<?php
/*
 * Shared <head> and site header.
 * Expects $page = [
 *   'title' => string, 'description' => ?string, 'path' => ?string (null = no canonical),
 *   'og_type' => string, 'image' => string (image key), 'robots' => ?string, 'jsonld' => array[]
 * ] and $data from render().
 */
$pageTitle = $page['title'];
$pageDescription = $page['description'] ?? null;
$pagePath = $page['path'] ?? null;
$ogType = $page['og_type'] ?? 'website';
$imageUrl = url('/images/' . ($page['image'] ?? 'og-default') . '.svg');
$robots = $page['robots'] ?? null;
$jsonLd = $page['jsonld'] ?? [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($pageTitle) ?></title>
<?php if ($pageDescription !== null): ?>
<meta name="description" content="<?= e($pageDescription) ?>">
<?php endif; ?>
<?php if ($robots !== null): ?>
<meta name="robots" content="<?= e($robots) ?>">
<?php endif; ?>
<?php if ($pagePath !== null): ?>
<link rel="canonical" href="<?= e(url($pagePath)) ?>">
<?php endif; ?>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/css/style.css">
<meta property="og:site_name" content="<?= e(SITE_NAME) ?>">
<meta property="og:type" content="<?= e($ogType) ?>">
<meta property="og:title" content="<?= e($pageTitle) ?>">
<meta property="og:description" content="<?= e($pageDescription) ?>">
<?php if ($pagePath !== null): ?>
<meta property="og:url" content="<?= e(url($pagePath)) ?>">
<?php endif; ?>
<meta property="og:image" content="<?= e($imageUrl) ?>">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?= e($pageTitle) ?>">
<meta name="twitter:description" content="<?= e($pageDescription) ?>">
<meta name="twitter:image" content="<?= e($imageUrl) ?>">
<?php foreach ($jsonLd as $ld): ?>
<?= json_ld($ld) ?>

<?php endforeach; ?>
<script src="/js/main.js" defer></script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
<div class="container header-inner">
<a class="brand" href="/">Summit <span>Hiking Gear</span></a>
<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
<nav id="site-nav" class="site-nav" aria-label="Main">
<ul>
<?php foreach ($data['nav'] as $item): ?>
<?php $isCurrent = $pagePath !== null && ($item['path'] === $pagePath || ($item['path'] !== '/' && str_starts_with($pagePath, $item['path'] . '/'))); ?>
<li><a href="<?= e($item['path']) ?>"<?= $isCurrent ? ' aria-current="page"' : '' ?>><?= e($item['label']) ?></a></li>
<?php endforeach; ?>
</ul>
</nav>
</div>
</header>
<main id="main" class="container">
