<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="" class="img-circle" alt="User Image" />

            </div>
            <div class="pull-left info">
                <p>user_first_name user_last_name</p>

                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search..."/>
              <span class="input-group-btn">
                <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
            </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <li class=""><a href="<?php echo site_url("admin/banner");?>"> <i class="fa fa-dashboard"></i> <span>Banner</span>
                </a></li>
            <li class=""><a href="#admin/menu"> <i class="fa fa-bars"></i> <span>Menu</span> </a>
            </li>
            <li class="treeview"><a href="#"> <i class="fa fa-th"></i> <span>News</span>
                    <i class="fa fa-angle-left pull-right"></i> </a>
                <ul class="treeview-menu">
                    <li><a href="<?php echo site_url("admin/news"); ?>"><i class="fa fa-calendar"></i> All News</a>
                    </li>
                    <li><a href="<?php echo site_url("admin/news/create"); ?>"><i class="fa fa-plus-square"></i> Add News</a>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a href="#"> <i class="fa fa-bookmark"></i> <span>Courses</span>
                    <i class="fa fa-angle-left pull-right"></i> </a>
                <ul class="treeview-menu">
                    <li><a href="<?php echo site_url("admin/course"); ?>"><i class="fa fa-folder"></i> All Courses</a>
                    </li>
                    <li><a href="<?php echo site_url("admin/course/create"); ?>"><i class="fa fa-plus-square"></i> Add Course</a>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a href="#"> <i class="fa fa-bookmark"></i> <span>Courses List</span>
                    <i class="fa fa-angle-left pull-right"></i> </a>
                <ul class="treeview-menu">
                    <li><a href="<?php echo site_url("admin/course_group"); ?>"><i class="fa fa-folder"></i> All Courses List</a>
                    </li>
                    <li><a href="<?php echo site_url("admin/course_group/create"); ?>"><i class="fa fa-plus-square"></i> Add Course List</a>
                    </li>
                </ul>
            </li>
            <li class="treeview"><a href="#"> <i class="fa fa-picture-o"></i> <span>Curriculum</span>
                    <i class="fa fa-angle-left pull-right"></i> </a>
                <ul class="treeview-menu">
                    <li>
                        <a href="<?php echo site_url("admin/curriculum"); ?>"><i class="fa fa-camera"></i> All Curriculum</a>
                    </li>
                    <li>
                        <a href="<?php echo site_url("admin/curriculum/create"); ?>"><i class="fa fa-play-circle-o"></i> Add Curriculum</a>
                    </li>

                </ul>
            </li>
            <li class="treeview"><a href="#"> <i class="fa fa-user"></i> <span>Staff</span>
                    <i class="fa fa-angle-left pull-right"></i> </a>
                <ul class="treeview-menu">
                    <li><a href="<?php echo site_url("admin/staff"); ?>"><i class="fa fa-user"></i> All Staff</a>
                    </li>
                    <li><a href="<?php echo site_url("admin/staff/create"); ?>"><i class="fa fa-group"></i> Add Staff</a>
                    </li>
                    <li><a href="<?php echo site_url("admin/educations"); ?>"><i class="fa fa-graduation-cap"></i> Edit Staff Educations</a></li>
                    <li><a href="<?php echo site_url("admin/staff_publications"); ?>"><i class="fa fa-graduation-cap"></i> Manage Staff Publications</a></li>
                </ul>
            </li>
            <li class="treeview"><a href="#"> <i class="fa fa-user"></i> <span>Publications</span>
                    <i class="fa fa-angle-left pull-right"></i> </a>
                <ul class="treeview-menu">
                    <li><a href="<?php echo site_url("admin/publication"); ?>"><i class="fa fa-user"></i> All Publications</a>
                    </li>
                    <li><a href="<?php echo site_url("admin/publication/create"); ?>"><i class="fa fa-group"></i> Add Publication</a>
                    </li>
                </ul>
            </li>
            <li class="">
                <a href="<?php echo site_url("admin/setting"); ?>"> <i class="fa fa-gear"></i> <span>Settings</span> </a>
            </li>
            <li class="">
                <a href="admin/logout"> <i class="fa fa-sign-out"></i> <span>Logout</span> </a>
            </li>
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>