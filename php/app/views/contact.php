<?php
$p = $data['pages']['contact'];
$biz = $data['business'];

$page = [
    'title' => $p['title'],
    'description' => $p['description'],
    'path' => '/contact',
];

require APP_DIR . '/partials/header.php';
?>
<h1><?= e($p['h1']) ?></h1>
<?php foreach ($p['intro'] as $paragraph): ?>
<p><?= e($paragraph) ?></p>
<?php endforeach; ?>
<div class="two-col">
<section>
<h2><?= e($p['form_heading']) ?></h2>
<p><?= e($p['form_note']) ?></p>
<form class="contact-form" action="/contact" method="get" data-demo-form>
<label for="name">Name</label>
<input id="name" name="name" type="text" autocomplete="name" required>
<label for="email">Email</label>
<input id="email" name="email" type="email" autocomplete="email" required>
<label for="order">Order number (optional)</label>
<input id="order" name="order" type="text">
<label for="message">Message</label>
<textarea id="message" name="message" rows="5" required></textarea>
<button class="button" type="submit">Send message</button>
<p class="form-status" role="status" aria-live="polite"></p>
</form>
</section>
<section>
<h2><?= e($p['hours_heading']) ?></h2>
<ul class="hours">
<?php foreach ($biz['hours'] as $h): ?>
<li><strong><?= e($h['days']) ?></strong>: <?= e($h['time']) ?></li>
<?php endforeach; ?>
</ul>
<h2><?= e($p['find_heading']) ?></h2>
<p><?= e($p['find_text']) ?></p>
<address><?= e($biz['street']) ?>, <?= e($biz['city']) ?>, <?= e($biz['region']) ?> <?= e($biz['postal_code']) ?><br>
Phone: <a href="tel:<?= e($biz['phone']) ?>"><?= e($biz['phone_display']) ?></a><br>
Email: <a href="mailto:<?= e($biz['email']) ?>"><?= e($biz['email']) ?></a></address>
</section>
</div>
<?php require APP_DIR . '/partials/footer.php'; ?>
