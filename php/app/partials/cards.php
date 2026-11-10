<?php
/* Card markup helpers for product and blog listings. */

function product_card(array $product): string
{
    return '<article class="card">' . "\n"
        . img($product['image'], $product['name']) . "\n"
        . '<h3><a href="/products/' . e($product['slug']) . '">' . e($product['name']) . '</a></h3>' . "\n"
        . '<p>' . e($product['summary']) . '</p>' . "\n"
        . '<p class="price">$' . e($product['price']) . '</p>' . "\n"
        . '</article>';
}

function post_card(array $post): string
{
    return '<article class="card">' . "\n"
        . img($post['image'], $post['headline']) . "\n"
        . '<h3><a href="/blog/' . e($post['slug']) . '">' . e($post['headline']) . '</a></h3>' . "\n"
        . '<p class="meta"><time datetime="' . e($post['date']) . '">' . e($post['date_display']) . '</time> &middot; ' . e($post['author']) . '</p>' . "\n"
        . '<p>' . e($post['excerpt']) . '</p>' . "\n"
        . '</article>';
}
