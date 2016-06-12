<div class="row">
  <!-- Carousel -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <center>
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      <li data-target="#carousel-example-generic" data-slide-to="3"></li>
      <li data-target="#carousel-example-generic" data-slide-to="4"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <?php foreach ($banner as $v) { ?>
        <?php if ($v === reset($banner)){ ?>
          <div class="item active">
        <?php }else{ ?>
          <div class="item">
        <?php } ?>
          <img src="<?php echo base_url($v['image_path']); ?>" style="width:1296px; height:324px;">
        </div>
      <?php } ?>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </center>
  </div>
  <!-- end Carousel -->
</div>