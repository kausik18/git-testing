<?php
/* Product detail page. Expects $product from the router. */
$path = '/products/' . $product['slug'];
$trail = [
    ['name' => 'Home', 'path' => '/'],
    ['name' => 'Shop', 'path' => '/products'],
    ['name' => $product['name'], 'path' => $path],
];

$page = [
    'title' => $product['title'],
    'description' => $product['description'],
    'path' => $path,
    'image' => $product['image'],
    'jsonld' => [
        [
            '@context' => 'https://schema.org',
            '@type' => 'Product',
            'name' => $product['name'],
            'description' => $product['description'],
            'image' => url('/images/' . $product['image'] . '.svg'),
            'sku' => $product['sku'],
            'brand' => ['@type' => 'Brand', 'name' => SITE_NAME],
            'offers' => [
                '@type' => 'Offer',
                'url' => url($path),
                'price' => $product['price'],
                'priceCurrency' => 'USD',
                'availability' => 'https://schema.org/InStock',
                'itemCondition' => 'https://schema.org/NewCondition',
            ],
        ],
        breadcrumb_ld($trail),
    ],
];

$others = array_filter($data['products'], fn (array $item): bool => $item['slug'] !== $product['slug']);

require APP_DIR . '/partials/header.php';
require APP_DIR . '/partials/breadcrumbs.php';
?>
<article class="product">
<div class="product-top">
<?= img($product['image'], $product['name'] . ' product photo') ?>

<div>
<h1><?= e($product['name']) ?></h1>
<p class="lead"><?= e($product['summary']) ?></p>
<p class="price">$<?= e($product['price']) ?></p>
<ul class="specs">
<?php foreach ($product['specs'] as $spec): ?>
<li><?= e($spec) ?></li>
<?php endforeach; ?>
</ul>
<p><button class="button" type="button" data-demo-cart>Add to basket</button></p>
<p class="form-status" role="status" aria-live="polite"></p>
</div>
</div>
<?php $sections = $product['sections']; require APP_DIR . '/partials/sections.php'; ?>
</article>
<section>
<h2>You might also like</h2>
<ul>
<?php foreach ($others as $other): ?>
<li><a href="/products/<?= e($other['slug']) ?>"><?= e($other['name']) ?></a></li>
<?php endforeach; ?>
</ul>
<p><a href="/products">Back to all gear</a></p>
</section>
<?php require APP_DIR . '/partials/footer.php'; ?>
