<section class="center slider below-shadow">
  <!-- <div class="carousel-image"><img id="first-image"></div>
  <div class="carousel-image"><img id="second-image"></div>
  <div class="carousel-image"><img id="third-image"></div>
  <div class="carousel-image"><img id="fourth-image"></div>
  <div class="carousel-image"><img id="fifth-image"></div>
  <div class="carousel-image"><img id="sixth-image"></div>
  <div class="carousel-image"><img id="seventh-image"></div>
  <div class="carousel-image"><img id="eighth-image"></div> -->
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
  </section>