<?php
$p = $data['pages']['products'];

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => '/products',
];

require APP_DIR . '/partials/header.php';
?>
<h1><?= e($p['h1']) ?></h1>
<?php foreach ($p['intro'] as $paragraph): ?>
<p><?= e($paragraph) ?></p>
<?php endforeach; ?>
<section>
<h2><?= e($p['list_heading']) ?></h2>
<div class="grid">
<?php foreach ($data['products'] as $product): ?>
<?= product_card($product) ?>

<?php endforeach; ?>
</div>
</section>
<?php require APP_DIR . '/partials/footer.php'; ?>
