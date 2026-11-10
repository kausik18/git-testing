<?php
/* Custom 404 page. The router sends http_response_code(404) before rendering this view. */
$p = $data['pages']['not_found'];

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => null,
    'robots' => 'noindex, follow',
];

$links = array_merge($data['nav'], [['path' => '/privacy', 'label' => 'Privacy Policy']]);

require APP_DIR . '/partials/header.php';
?>
<h1><?= e($p['h1']) ?></h1>
<p><?= e($p['text']) ?></p>
<ul>
<?php foreach ($links as $link): ?>
<li><a href="<?= e($link['path']) ?>"><?= e($link['label']) ?></a></li>
<?php endforeach; ?>
</ul>
<?php require APP_DIR . '/partials/footer.php'; ?>
