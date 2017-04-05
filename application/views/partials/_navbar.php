<nav class="navbar navbar-default" style="background-color: #8e44ad;" id="custom-nav" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
              <ul class="nav navbar-right navbar-nav">
                <!-- <ul class="nav navbar-nav" > -->
                    <li><a href="<?php echo site_url("/"); ?>" >Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Faculty & Staff<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="<?php echo site_url("browse");?>">Staff</a></li>
                            <li><a href="<?php echo site_url("browse");?>">Graduate Student</a></li>
                            <li><a href="<?php echo site_url("browse");?>">Visiting Scholar & Postdocs</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Curriculum<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="<?php echo site_url("curriculum"); ?>">All Curriculums</a></li>
                            <li class="dropdown-header"><h4>Undergraduate</h4></li>
                                <li><a href="<?php echo site_url("curriculum");?>/1">Medicine</a></li>
                            <li class="dropdown-header"><h4>Graduate</h4></li>
                                <li><a href="<?php echo site_url("curriculum");?>/2">Master of Science (M.Sc.)</a></li>
                                <li><a href="<?php echo site_url("curriculum");?>/3">Doctor of Philosophy (Ph.D.)</a></li>
                                <li><a href="<?php echo site_url("curriculum");?>/4">International Program</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Courses<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="<?php echo site_url("course"); ?>">All Courses</a></li>
                            <li class="dropdown-header"><h4>Undergraduate</h4></li>
                                <li><a href="<?php echo site_url("course");?>/1">Medicine</a></li>
                                <li><a href="<?php echo site_url("course");?>/2">Dentistry</a></li>
                                <li><a href="<?php echo site_url("course");?>/3">Pharmacy</a></li>
                                <li><a href="<?php echo site_url("course");?>/4">Nurse</a></li>
                            <li class="dropdown-header"><h4>Graduate</h4></li>
                                <li><a href="<?php echo site_url("course");?>/5">Graduate</a></li>
                        </ul>
                    </li>

                    <li><a href="<?php echo site_url("research");?>" >Research</a></li>
                    <li><a href="<?php echo site_url("contact");?>" >Contact Us</a></li>
                    <li><a href="<?php echo site_url("admin");?>" >Admin</a></li>
                </ul>
            <!-- </ul> -->
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>