<section class="center slider below-shadow">

  	<?php 
  		$index = 0;
	  foreach ($banner as $v) {
	?>
	  	<div>
	      <img style="width: 100%;height: 350px;" src="<?php echo base_url($v['image_path']); ?>">
	    </div>
  	<?php 
  		$index++;
  	} 
  	?>

<!--     <div>
      <img src="http://placehold.it/350x300?text=1">
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=2">
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=3">
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=4">
    </div>
    <div>
      <img src="http://placehold.it/350x300?text=5">
    </div> -->
  </section>