<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>FullyCMS | Dashboard</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.2 -->
    <link href="<?php echo base_url("assets/backend/bootstrap/css/bootstrap.min.css");?>" rel="stylesheet" type="text/css"/>
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <!-- Ionicons -->
    <link href="http://code.ionicframework.com/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet" type="text/css"/>
    <!-- Morris chart -->
    <link href="<?php echo base_url("assets/backend/plugins/morris/morris.css");?>" rel="stylesheet" type="text/css"/>
    <!-- jvectormap -->
    <link href="<?php echo base_url("assets/backend/plugins/jvectormap/jquery-jvectormap-1.2.2.css");?>" rel="stylesheet" type="text/css"/>
    <!-- Daterange picker -->
    <link href="<?php echo base_url("assets/backend/plugins/daterangepicker/daterangepicker-bs3.css");?>" rel="stylesheet" type="text/css"/>
    <!-- Theme style -->
    <link href="<?php echo base_url("assets/backend/css/AdminLTE.min.css");?>" rel="stylesheet" type="text/css"/>

    <link href="<?php echo base_url("assets/backend/css/style.css");?>" rel="stylesheet" type="text/css"/>
    <!-- jQuery 2.1.3 -->
    <script src="<?php echo base_url("assets/backend/plugins/jQuery/jQuery-2.1.3.min.js");?>"></script>
    <!-- Bootstrap 3.3.2 JS -->
    <script src="<?php echo base_url("assets/backend/bootstrap/js/bootstrap.min.js");?>" type="text/javascript"></script>
    <!-- FastClick -->
    <script src="<?php echo base_url("assets/backend/plugins/fastclick/fastclick.min.js");?>"></script>
    <!-- AdminLTE App -->
    <script src="<?php echo base_url("assets/backend/js/app.min.js");?>" type="text/javascript"></script>
    <!-- Sparkline -->
    <script src="<?php echo base_url("assets/backend/plugins/sparkline/jquery.sparkline.min.js");?>" type="text/javascript"></script>
    <!-- jvectormap -->
    <script src="<?php echo base_url("assets/backend/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js");?>" type="text/javascript"></script>
    <script src="<?php echo base_url("assets/backend/plugins/jvectormap/jquery-jvectormap-world-mill-en.js");?>" type="text/javascript"></script>
    <!-- daterangepicker -->
    <script src="<?php echo base_url("assets/backend/plugins/daterangepicker/daterangepicker.js");?>" type="text/javascript"></script>
    <!-- datepicker -->
    <script src="<?php echo base_url("assets/backend/plugins/datepicker/bootstrap-datepicker.js");?>" type="text/javascript"></script>
    <!-- iCheck -->
    <script src="<?php echo base_url("assets/backend/plugins/iCheck/icheck.min.js");?>" type="text/javascript"></script>
    <!-- SlimScroll 1.3.0 -->
    <script src="<?php echo base_url("assets/backend/plugins/slimScroll/jquery.slimscroll.min.js");?>" type="text/javascript"></script>
    <!-- ChartJS 1.0.1 -->
    <script src="<?php echo base_url("assets/backend/plugins/chartjs/Chart.min.js");?>" type="text/javascript"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <!-- AdminLTE for demo purposes -->
    <script src="<?php echo base_url("assets/backend/js/demo.js");?>" type="text/javascript"></script>

    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link href="<?php echo base_url("assets/backend/css/skins/_all-skins.min.css");?>" rel="stylesheet" type="text/css"/>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// --><!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script><![endif]-->
</head>
<body class="skin-blue">
<span id="forkongithub"><a target="_blank" href="https://github.com/sseffa/fullycms">Fork me on GitHub</a></span>
<div class="wrapper">
    <header class="main-header">
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"> <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">

                    <li class="dropdown messages-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <img alt="" src="img/flags/us.png">
                            <span class="username">Echo Username here</span>
                            <b class="caret"></b>
                        </a>
                    </li>

                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="" class="user-image" alt="User Image"/>
                            <span class="hidden-xs">user_first_name user_last_name</span> </a>
                        <ul class="dropdown-menu">
                            <!-- Menu Body -->
                            <li class="user-body">
                                <div class="col-xs-4 text-center">

                                </div>
                                <div class="col-xs-4 text-center">

                                </div>
                                <div class="col-xs-4 text-center">

                                </div>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="#profile" class="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                    <a href="#admin_logout" class="btn btn-default btn-flat">Sign out</a></div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <?php echo includeView("backend/menu"); ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">