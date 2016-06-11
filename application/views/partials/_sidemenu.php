<h4 style="font-size: 18px;">MICROBIOLOGY
</h4>
<div class="nav-side-menu">
        <div class="menu-list">
  
            <ul id="menu-content" class="menu-content collapse out">
                <li>
                  <a href="<?php echo site_url("/"); ?>">Home</a>
                </li>

                <li  data-toggle="collapse" data-target="#faculty_Staff" class="collapsed">
                Faculty & Staff<span class="arrow"></span>
                </li>
                <ul class="sub-menu collapse" id="faculty_Staff">
                    <li><a href="#">Faculty</a></li>
                    <li><a href="<?php echo site_url('browse');?>">Staff</a></li>
                    <li><a href="<?php echo site_url('browse');?>">Graduate Student</a></li>
                    <li><a href="<?php echo site_url('browse');?>">Visiting Scholar & Postdocs</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#curriculum" class="collapsed">
                Curriculum<span class="arrow"></span>
                </li>
                <ul class="sub-menu collapse" id="curriculum">
                    <li  data-toggle="collapse" data-target="#curriculum_undergraduate" class="collapsed">
                    Undergraduate<span class="arrow"></span>
                    </li>
                    <ul class="sub-menu collapse" id="curriculum_undergraduate">
                        <li><a href="{{url('curriculum')}}">Medilicine</a></li>
                    </ul>
                    <li  data-toggle="collapse" data-target="#curriculum_graduate" class="collapsed">
                    Graduate<span class="arrow"></span>
                    </li>
                    <ul class="sub-menu collapse" id="curriculum_graduate">
                        <li><a href="<?php echo site_url('curriculum');?>">Master of Science (M.Sc.)</a></li>
                        <li><a href="<?php echo site_url('curriculum');?>">Doctor of Philosophy (Ph.D.)</a></li>
                        <li><a href="<?php echo site_url('curriculum');?>">International Program</a></li>
                    </ul>
                </ul>

                <li  data-toggle="collapse" data-target="#courses" class="collapsed">
                Courses<span class="arrow"></span>
                </li>
                <ul class="sub-menu collapse" id="courses">
                    <li  data-toggle="collapse" data-target="#courses_undergraduate" class="collapsed">
                    Undergraduate<span class="arrow"></span>
                    </li>
                    <ul class="sub-menu collapse" id="courses_undergraduate">
                        <li><a href="<?php echo site_url('courses');?>">Medilicine</a></li>
                        <li><a href="<?php echo site_url('courses');?>">Dentistry</a></li>
                        <li><a href="<?php echo site_url('courses');?>">Pharmacy</a></li>
                        <li><a href="<?php echo site_url('courses');?>">Nurse</a></li>
                    </ul>

                    <li><a href="<?php echo site_url('courses');?>">Graduate</a></li>
                </ul>

                <li>
                  <a href="<?php echo site_url('research');?>">Research</a>
                </li>

                <li>
                  <a href="<?php echo site_url('contact');?>">Contact Us</a>
                </li>
            </ul>
     </div>
</div>