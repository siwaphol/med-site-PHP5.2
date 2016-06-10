<nav class="navbar navbar-default" style="background-color: #8e44ad;" >
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
              <ul class="nav navbar-nav navbar-right ">
                <ul class="nav navbar-nav" >
                    <li><a href="{{url('/')}}" style="color: #ffffff;">Home</a></li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="color: #ffffff;">Faculty & Staff<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="{{url('browse')}}">Staff</a></li>
                            <li><a href="#">Graduate Student</a></li>
                            <li><a href="#">Visiting Scholar & Postdocs</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="color: #ffffff;">Curriculum<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header"><h4>Undergraduate</h4></li>
                                <li><a href="{{url('curriculum')}}">Medicine</a></li>
                            <li class="dropdown-header"><h4>Graduate</h4></li>
                                <li><a href="{{url('curriculum')}}">Master of Science (M.Sc.)</a></li>
                                <li><a href="{{url('curriculum')}}">Doctor of Philosophy (Ph.D.)</a></li>
                                <li><a href="{{url('curriculum')}}">International Program</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="color: #ffffff;">Courses<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header"><h4>Undergraduate</h4></li>
                                <li><a href="{{url('courses')}}">Medicine</a></li>
                                <li><a href="{{url('courses')}}">Dentistry</a></li>
                                <li><a href="{{url('courses')}}">Pharmacy</a></li>
                                <li><a href="{{url('courses')}}">Nurse</a></li>
                            <li class="dropdown-header"><h4>Graduate</h4></li>
                        </ul>
                    </li>

                    <li><a href="{{url('research')}}" style="color: #ffffff;">Research</a></li>
                    <li><a href="{{url('contact')}}" style="color: #ffffff;">Contact Us</a></li>
                </ul>
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>