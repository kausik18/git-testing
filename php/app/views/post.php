<?php
/* Blog post page. Expects $post from the router. */
$path = '/blog/' . $post['slug'];
$trail = [
    ['name' => 'Home', 'path' => '/'],
    ['name' => 'Trail Journal', 'path' => '/blog'],
    ['name' => $post['headline'], 'path' => $path],
];

$page = [
    'title' => $post['title'],
    'description' => $post['description'],
    'path' => $path,
    'og_type' => 'article',
    'image' => $post['image'],
    'jsonld' => [
        [
            '@context' => 'https://schema.org',
            '@type' => 'BlogPosting',
            'headline' => $post['headline'],
            'description' => $post['description'],
            'image' => url('/images/' . $post['image'] . '.svg'),
            'datePublished' => $post['date'],
            'dateModified' => $post['date'],
            'author' => ['@type' => 'Person', 'name' => $post['author']],
            'publisher' => [
                '@type' => 'Organization',
                'name' => SITE_NAME,
                'url' => url('/'),
                'logo' => ['@type' => 'ImageObject', 'url' => url('/favicon.svg')],
            ],
            'mainEntityOfPage' => url($path),
        ],
        breadcrumb_ld($trail),
    ],
];

$others = array_filter($data['posts'], fn (array $item): bool => $item['slug'] !== $post['slug']);

require APP_DIR . '/partials/header.php';
require APP_DIR . '/partials/breadcrumbs.php';
?>
<article class="post">
<h1><?= e($post['headline']) ?></h1>
<p class="meta">By <?= e($post['author']) ?> &middot; <time datetime="<?= e($post['date']) ?>"><?= e($post['date_display']) ?></time></p>
<?= img($post['image'], $post['headline']) ?>

<?php $sections = $post['sections']; require APP_DIR . '/partials/sections.php'; ?>
</article>
<section>
<h2>Keep reading</h2>
<ul>
<?php foreach ($others as $other): ?>
<li><a href="/blog/<?= e($other['slug']) ?>"><?= e($other['headline']) ?></a></li>
<?php endforeach; ?>
</ul>
<p><a href="/blog">All Trail Journal articles</a></p>
</section>
<?php require APP_DIR . '/partials/footer.php'; ?>
