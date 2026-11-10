<?php
/* Breadcrumb navigation. Expects $trail = [['name' => ..., 'path' => ...], ...]. */
$lastIndex = count($trail) - 1;
?>
<nav class="breadcrumb" aria-label="Breadcrumb">
<ol>
<?php foreach ($trail as $i => $crumb): ?>
<?php if ($i === $lastIndex): ?>
<li><span aria-current="page"><?= e($crumb['name']) ?></span></li>
<?php else: ?>
<li><a href="<?= e($crumb['path']) ?>"><?= e($crumb['name']) ?></a></li>
<?php endif; ?>
<?php endforeach; ?>
</ol>
</nav>
