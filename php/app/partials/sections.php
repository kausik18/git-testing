<?php
/* Content sections. Expects $sections = [['h2' => ..., 'paragraphs' => [...], 'subsections' => [...]], ...]. */
?>
<?php foreach ($sections as $section): ?>
<section>
<h2><?= e($section['h2']) ?></h2>
<?php foreach ($section['paragraphs'] ?? [] as $paragraph): ?>
<p><?= e($paragraph) ?></p>
<?php endforeach; ?>
<?php foreach ($section['subsections'] ?? [] as $sub): ?>
<h3><?= e($sub['h3']) ?></h3>
<p><?= e($sub['text']) ?></p>
<?php endforeach; ?>
</section>
<?php endforeach; ?>
