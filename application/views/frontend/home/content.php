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
      <hr>
      
      <div class="row-md-6">
        <h4><?php echo $setting_item[1]['name']; ?></h4>
          <p style="font-size: 12px;">
            <?php echo $setting_item[1]['content']; ?>
          </p>
      </div>
      <br>
      <!-- news -->
      <hr>
      <div class="row">
      <h4>NEWS</h4><a href="{{url('news')}}">Add</a>
          <div class="row">
              @foreach($top4news as $aNews)
                  <div class="col-md-6">
                      <center>
                          <img src="{{url("upload_images/{$aNews->image}")}}" width="300" height="258">
                          <br>
                          <h4>{{$aNews->headline}}</h4>
                          <p style="font-size: 13px;">{{$aNews->message}}</p>
                          <hr>
                      </center>
                  </div>
              @endforeach

              @if(count($top4news) < 4)
                  @for($i=0; $i < 4 - count($top4news); $i++)
                      <div class="col-md-6 col-xs-12">
                          <center>
                              <img src="{{asset("images/02.jpg")}}" width="300" height="258">
                              <br>
                              <h4>News Head</h4>
                              <p style="font-size: 13px;">description</p>
                              <hr>
                          </center>
                      </div>
                  @endfor
              @endif
          </div>
      </div>
</div>