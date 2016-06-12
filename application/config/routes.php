<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// $route['default_controller'] = "welcome";
$route['404_override'] = '';

$route['api/news'] = 'api/news';

// $route['admin/course/(:any)'] = 'admin/course/$1';

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
$route['admin/course/(:num)'] = 'admin/course_edit/$1';

$route['admin/course_group'] = 'admin/course_group';
$route['admin/course_group/create'] = 'admin/course_group_create';
$route['admin/course_group/edit'] = 'admin/course_group_edit';
$route['admin/course_group/store'] = 'admin/course_group_store';
$route['admin/course_group/(:num)'] = 'admin/course_group_edit/$1';

$route['admin/curriculum'] = 'admin/curriculum';
$route['admin/curriculum/create'] = 'admin/curriculum_create';
$route['admin/curriculum/store'] = 'admin/curriculum_store';
$route['admin/curriculum/(:num)'] = 'admin/curriculum_edit/$1';

$route['admin/banner'] = 'admin/banner';
$route['admin/banner/create'] = 'admin/banner_create';
$route['admin/banner/(:num)'] = 'admin/banner_edit/$1';

$route['admin/publication'] = 'admin/news';
$route['admin/publication/create'] = 'admin/news_create';
$route['admin/publication/store'] = 'admin/news_store';
$route['admin/publication/(:num)'] = 'admin/news_edit/$1';

$route['admin/(:any)'] = 'admin';

// Browse profile
$route['browse'] = 'profile/index';
$route['api/profile'] = 'api/profile';
$route['profile/(:any)'] = 'profile/show/$1';

$route['news/create'] = 'news/create';
$route['news/(:num)'] = 'news/show/$1';
$route['news'] = 'news';

$route['course'] = 'pages/course_index';
$route['course/(:num)'] = 'pages/course/$1';
$route['course_detail/(:num)'] = 'pages/course_detail/$1';

$route['curriculum'] = 'pages/curriculum_index';
$route['curriculum/(:num)'] = 'pages/curriculum/$1';
$route['curriculum_detail/(:num)'] = 'pages/curriculum_detail/$1';

$route['(:any)'] = 'pages/view/$1';
$route['default_controller'] = 'pages/view';

/* End of file routes.php */
/* Location: ./application/config/routes.php */