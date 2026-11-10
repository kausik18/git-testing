<?php
$p = $data['pages']['faq'];

$mainEntity = [];
foreach ($p['items'] as $item) {
    $mainEntity[] = [
        '@type' => 'Question',
        'name' => $item['q'],
        'acceptedAnswer' => ['@type' => 'Answer', 'text' => $item['a']],
    ];
}

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => '/faq',
    'jsonld' => [
        [
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => $mainEntity,
        ],
    ],
];

require APP_DIR . '/partials/header.php';
?>
<?php /* INTENTIONAL SEO DEFECT: page heading is an <h2>, so this page has no <h1>. */ ?>
<h2 class="page-title"><?= e($p['heading']) ?></h2>
<p><?= e($p['intro']) ?></p>
<div class="faq">
<?php foreach ($p['items'] as $item): ?>
<section>
<h3><?= e($item['q']) ?></h3>
<p><?= e($item['a']) ?></p>
</section>
<?php endforeach; ?>
</div>
<p>Still have a question? <a href="/contact">Contact our team</a>.</p>
<?php require APP_DIR . '/partials/footer.php'; ?>
