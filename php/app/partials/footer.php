<?php
/* Shared site footer. Expects $data from render(). */
$biz = $data['business'];
$footerLinks = array_merge($data['nav'], [['path' => '/privacy', 'label' => 'Privacy Policy']]);
?>
</main>
<footer class="site-footer">
<div class="container footer-grid">
<div>
<p class="footer-title"><?= e($biz['name']) ?></p>
<address><?= e($biz['street']) ?><br><?= e($biz['city']) ?>, <?= e($biz['region']) ?> <?= e($biz['postal_code']) ?><br><a href="tel:<?= e($biz['phone']) ?>"><?= e($biz['phone_display']) ?></a></address>
</div>
<div>
<p class="footer-title">Store hours</p>
<ul class="plain">
<?php foreach ($biz['hours'] as $h): ?>
<li><?= e($h['days']) ?>: <?= e($h['time']) ?></li>
<?php endforeach; ?>
</ul>
</div>
<nav aria-label="Footer">
<p class="footer-title">Explore</p>
<ul class="plain">
<?php foreach ($footerLinks as $item): ?>
<li><a href="<?= e($item['path']) ?>"><?= e($item['label']) ?></a></li>
<?php endforeach; ?>
</ul>
</nav>
</div>
<p class="container copyright">&copy; <?= date('Y') ?> <?= e($biz['legal_name']) ?>. All rights reserved.</p>
</footer>
</body>
</html>
