<?php
$p = $data['pages']['home'];
$biz = $data['business'];

$openingHours = [];
foreach ($biz['hours'] as $h) {
    $openingHours[] = $h['spec'];
}

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => '/',
    'jsonld' => [
        [
            '@context' => 'https://schema.org',
            '@type' => 'SportingGoodsStore',
            '@id' => url('/#store'),
            'name' => $biz['name'],
            'url' => url('/'),
            'logo' => url('/favicon.svg'),
            'image' => url('/images/hero-mountains.svg'),
            'description' => $p['description'],
            'telephone' => $biz['phone'],
            'email' => $biz['email'],
            'priceRange' => '$$',
            'foundingDate' => $biz['founded'],
            'openingHours' => $openingHours,
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => $biz['street'],
                'addressLocality' => $biz['city'],
                'addressRegion' => $biz['region'],
                'postalCode' => $biz['postal_code'],
                'addressCountry' => $biz['country'],
            ],
        ],
        [
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => $biz['name'],
            'url' => url('/'),
            'publisher' => ['@id' => url('/#store')],
        ],
    ],
];

require APP_DIR . '/partials/header.php';
?>
<section class="hero">
<div>
<h1><?= e($p['h1']) ?></h1>
<p class="lead"><?= e($p['intro']) ?></p>
<p class="actions"><a class="button" href="/products">Shop hiking gear</a> <a class="button secondary" href="/contact">Book a boot fitting</a></p>
</div>
<?= img('hero-mountains', 'Hikers on a ridge above the Flatirons near Boulder at sunrise', 'hero-img') ?>

</section>
<?php $sections = $p['sections']; require APP_DIR . '/partials/sections.php'; ?>
<section>
<h2><?= e($p['featured_heading']) ?></h2>
<div class="grid">
<?php foreach ($data['products'] as $product): ?>
<?= product_card($product) ?>

<?php endforeach; ?>
</div>
</section>
<section>
<h2><?= e($p['blog_heading']) ?></h2>
<div class="grid">
<?php foreach ($data['posts'] as $post): ?>
<?= post_card($post) ?>

<?php endforeach; ?>
</div>
</section>
<section>
<h2><?= e($p['visit_heading']) ?></h2>
<p><?= e($p['visit_text']) ?></p>
<ul class="hours">
<?php foreach ($biz['hours'] as $h): ?>
<li><strong><?= e($h['days']) ?></strong>: <?= e($h['time']) ?></li>
<?php endforeach; ?>
</ul>
</section>
<?php require APP_DIR . '/partials/footer.php'; ?>
