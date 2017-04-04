<div class="border-and-shadow background-color-block">
	<div class="heading parbase section">
		<hgroup class="section-header standard heading-level-1">
			<h1 class="black"><?php print $title; ?></h1>
		</hgroup>
	</div>

	<div class="list-group">
		<?php foreach($courses as $course){ ?>
			<a href="<?php echo site_url("course_detail"); ?>/<?php echo $course['id'];?>" class="list-group-item"><?php echo $course['code']; ?></a>
		<?php } ?>
	</div>
</div>