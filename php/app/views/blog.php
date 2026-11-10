<?php
$p = $data['pages']['blog'];

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => '/blog',
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
<?php foreach ($data['posts'] as $post): ?>
<?= post_card($post) ?>

<?php endforeach; ?>
</div>
</section>
<?php require APP_DIR . '/partials/footer.php'; ?>
