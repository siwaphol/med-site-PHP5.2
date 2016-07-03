
<?php 
      // print "<pre>";
      // print_r($setting_item);
      // print "</pre>";



  ?>
<div class="col-md-10 col-xs-12">
      <div class="row-md-6">
        <h4><?php echo $setting_item[0]['name']; ?></h4>
          <p style="font-size: 14px;"><?php echo $setting_item[0]['content']; ?>
          <a href="#">More >></a>
          </p>
      </div>
      
      <div class="row-md-6">
        <h4><?php echo $setting_item[1]['name']; ?></h4>
          <p style="font-size: 12px;">
            <?php echo $setting_item[1]['content']; ?>
          </p>
      </div>
      <br>
      <!-- news -->
      <div class="row headline">
      <h4>News & Announcement</h4>
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