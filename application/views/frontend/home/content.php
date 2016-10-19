<div class="row">
  <div class="border-and-shadow">
    <div class="heading parbase section">
      <hgroup class="section-header standard heading-level-1">
        <h1 class="black"><?php echo $setting_item[0]['name']; ?></h1>
      </hgroup>
    </div>
    <div>
      <?php echo $setting_item[0]['content']; ?>
    </div>
  </div>
  <br>
  <div class="border-and-shadow">
    <div class="heading parbase section">
      <hgroup class="section-header standard heading-level-1">
        <h1 class="black"><?php echo $setting_item[1]['name']; ?></h1>
      </hgroup>
    </div>
    <div>
      <?php echo $setting_item[1]['content']; ?>
    </div>
  </div>
</div>

<div class="row" style="margin-bottom: 20px;"></div>
<!-- news -->
<div class="row">
  <div class="border-and-shadow">
    <div class="heading parbase section">
      <hgroup class="section-header standard heading-level-1">
        <h1 class="black">News & Announcement</h1>
      </hgroup>
    </div>
    <div class="row">
        <?php foreach ($top4news as $aNews) { ?>
          <div class="col-md-6">
            <center>
              <a href="<?php echo site_url("news");?>/<?php echo $aNews['id']; ?>">
                <img src="<?php echo base_url($aNews['image_path']);?>" width="300" height="258">
                <br>
                <h4><?php echo $aNews['title'];?></h4>
              </a>
                <hr>
            </center>
          </div>
        <?php } ?>

        <?php if(count($top4news) < 4) { ?>
          <?php for ($i=0; $i < 4-count($top4news); $i++) { ?>
            <div class="col-md-6 col-xs-12">
                <center>
                    <img src="<?php echo base_url('assets/images/02.jpb');?>" width="300" height="258">
                    <br>
                    <h4>News Head</h4>
                    <hr>
                </center>
            </div>
          <?php } ?>
        <?php } ?>
    </div>
  </div>
</div>