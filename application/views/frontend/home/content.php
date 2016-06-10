<div class="col-md-10 col-xs-12">
      <div class="row-md-6">
        <h4>Our Mission</h4>
          <p style="font-size: 14px;">The mission of the Department of Microbiology and Immunology is to conduct the best possible research and provide the most rigorous and inspiring training in the areas of microbiology, immunology, host-pathogen interaction and related fields. Through such activities, our goal is to improve human and animal health as well as to improve our ability to be responsible stewards of a fragile earth. Through this website, we hope to present an overview of our research and training activities and to inspire like-minded individuals to join us in our quest.
          <a href="#">More >></a>
          </p>
      </div>
      <hr>
      
      <div class="row-md-6">
        <h4>ABOUT US</h4>
          <p style="font-size: 12px;">The Department of Microbiology and Immunology is a community of over 200 individuals, all of whom share a common passion for research and learning. We have over 25 faculty among our ranks, ~50 graduate students, over 100 post-doctoral fellows, ~25 research, administrative and support staff and ~25 undergraduate and medical students working in labs. About 40% of our faculty have an M.D. and 70% a Ph.D. with most also holding joint appointments in other departments in the School.
              <br><br>
              The Department was founded almost 100 years ago and has gone by a number of names since that time, each reflecting a particular stage in the evolution of medicine and the life sciences. Our current name was granted by the University in 1987 when the Department made a major push to expand its focus into the complex interplay between microbe and host. This is a unifying theme that permeates the Department’s research and teaching and that only seems to be growing in relevance with each passing year.
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