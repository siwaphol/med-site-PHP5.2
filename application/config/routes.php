<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// $route['default_controller'] = "welcome";
$route['404_override'] = '';

$route['api/news'] = 'api/news';

$route['admin/course/(:any)'] = 'admin/course/$1';

// Admin
$route['admin'] = 'admin';
$route['admin/news'] = 'admin/news';
$route['admin/news/create'] = 'admin/news_create';
$route['admin/news/store'] = 'admin/news_store';
$route['admin/news/(:num)'] = 'admin/news_edit/$1';

$route['admin/staff'] = 'admin/staff';
$route['admin/staff/create'] = 'admin/staff_create';
$route['admin/staff/store'] = 'admin/staff_store';
$route['admin/staff/(:num)'] = 'admin/staff_edit/$1';

$route['admin/course'] = 'admin/course';
$route['admin/course/create'] = 'admin/course_create';
$route['admin/course/store'] = 'admin/course_store';

$route['admin/(:any)'] = 'admin';

// Browse profile
$route['browse'] = 'profile/index';
$route['api/profile'] = 'api/profile';
$route['profile/(:any)'] = 'profile/show/$1';

$route['news/create'] = 'news/create';
$route['news/(:any)'] = 'news/view/$1';
$route['news'] = 'news';

$route['course/(:any)'] = 'pages/course/$1';
$route['(:any)'] = 'pages/view/$1';
$route['default_controller'] = 'pages/view';

/* End of file routes.php */
/* Location: ./application/config/routes.php */