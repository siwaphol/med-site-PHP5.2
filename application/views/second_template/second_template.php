<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="{{asset('css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    <link rel="stylesheet" href="{{asset('css/main_alt1.css')}}">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
    <!--[if IE 7]><link rel="stylesheet" href="/profiles/styles/font-awesome/scss/font-awesome-ie7.css;jsessionid=C9E48CF6E1DA529C75EE091193940826.tc-cap-som-08"><![endif]-->
    <!--[if lte IE 8]><script src="/profiles/scripts/vendor/respond/respond.min.js;jsessionid=C9E48CF6E1DA529C75EE091193940826.tc-cap-som-08"></script><![endif]-->
    <script src="{{asset('js/modernizr.min.js')}}"></script>
</head>
<body class="@yield('body_class')">
<div id="wrapper">
    <header class="navbar " id="headerContent">
        <div class="navbar-inner">
            <div class="container">
                <div class="row-fluid">
                    <span id="sidebarTrigger">
                        <a class="btn btn-navbar visible-phone pull-right">
                            <i class="icon-reorder"></i>
                        </a>
                    </span>
                    <a class="brand" href="<?php site_url("/"); ?>">
                    <span class="my-logo"><img src="<?php base_url("assets/images/main_logo.png"); ?>" style="height: 60px;"></span>
                    <span class="second-logo" style="margin-left: 20px;margin-top: 10px;">Profiles</span>
                    </a>
                    <div class="nav-sidebar hidden-phone">
                        <div id="searchHeaderContent">
                            <form class="navbar-search " method="get" action="/profiles/search">
                                <input class="search-query" type="text" name="q" placeholder="Search by name or topic..."
                                       autocomplete="off"/>
                                <button class="icon-search" type="submit" name="search" title="Search"></button>
                                <div class="btn-group ">
                                    <a class="btn btn-small btn-first-page" href="<?php base_url("/profile/create"); ?>">
                                        <span class="hidden-phone">Add Staff (temporary)</span>
                                        <span class="hidden-desktop hidden-tablet icon-double-angle-left"></span>
                                    </a>
                                    @yield('btn_group')
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div id="bodyContent">
        <div id="mainContent">
            @yield('content')
        </div>
    </div>

</div>
<script type="text/javascript" src="<?php base_url("assets/js/jquery.min.js"); ?>"></script>
<script type="text/javascript" src="<?php base_url("assets/js/bootstrap.min.js"); ?>"></script>
@yield('script')
</body>
</html>