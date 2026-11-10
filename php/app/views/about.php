<?php
$p = $data['pages']['about'];

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => '/about',
    'image' => 'store-front',
];

require APP_DIR . '/partials/header.php';
?>
<h1><?= e($p['h1']) ?></h1>
<?= img('store-front', 'The Summit Hiking Gear store front on Canyon Road in Boulder') ?>

<?php $sections = array_slice($p['sections'], 0, 2); require APP_DIR . '/partials/sections.php'; ?>
<?= img('gear-testing', 'Summit Hiking Gear staff testing backpacks on a mountain trail') ?>

<?php $sections = array_slice($p['sections'], 2); require APP_DIR . '/partials/sections.php'; ?>
<p><a class="button" href="/products">Browse our gear</a></p>
<?php require APP_DIR . '/partials/footer.php'; ?>
