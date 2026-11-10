<?php
$p = $data['pages']['privacy'];

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => '/privacy',
    // INTENTIONAL SEO DEFECT: noindex, but /privacy is still listed in sitemap.xml.
    'robots' => $p['robots'],
];

require APP_DIR . '/partials/header.php';
?>
<h1><?= e($p['h1']) ?></h1>
<p class="meta">Last updated: <time datetime="<?= e($p['updated']) ?>"><?= e($p['updated_display']) ?></time></p>
<?php $sections = $p['sections']; require APP_DIR . '/partials/sections.php'; ?>
<?php require APP_DIR . '/partials/footer.php'; ?>
