<div class="border-and-shadow background-color-block">
	<div class="heading parbase section">
		<hgroup class="section-header standard heading-level-1">
			<h1 class="black"><?php echo $news_item['title']; ?></h1>
		</hgroup>
	</div>
	<div class="col-md-12 text-center">
		<img id="news-image" src="<?php echo base_url($news_item['image_path']);?>" class="img-thumbnail" alt=""
             style="width: 100%;height: 100%;">
	</div>
	<div>
		<?php print $news_item['content']; ?>
	</div>
</div>
