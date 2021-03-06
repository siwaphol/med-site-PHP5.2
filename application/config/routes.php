<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// $route['default_controller'] = "welcome";
$route['404_override'] = '';

$route['api/news'] = 'api/news';

// $route['admin/course/(:any)'] = 'admin/course/$1';

// Migration
$route['migration'] = 'migrate/index';

// File Manager
$route['filemanager/show'] = 'admin/filemanager_show';

// Admin
$route['admin/check_login'] = 'admin/login_view';
$route['admin/login'] = 'admin/user_login';
$route['admin/logout'] = 'admin/logout';

$route['admin'] = 'admin';
$route['admin/news'] = 'admin/news';
$route['admin/news/create'] = 'admin/news_create';
$route['admin/news/store'] = 'admin/news_store';
$route['admin/news/delete/(:num)'] = 'admin/news_delete/$1';
$route['admin/news/(:num)'] = 'admin/news_edit/$1';

$route['admin/staff'] = 'admin/staff';
$route['admin/staff/create'] = 'admin/staff_create';
$route['admin/staff/store'] = 'admin/staff_store';
$route['admin/staff/(:num)'] = 'admin/staff_edit/$1';

$route['admin/officer'] = 'admin/officer';
$route['admin/officer/create'] = 'admin/officer_create';
$route['admin/officer/store'] = 'admin/officer_store';
$route['admin/officer/(:num)'] = 'admin/officer_edit/$1';

$route['admin/graduate'] = 'admin/graduate';
$route['admin/graduate/create'] = 'admin/graduate_create';
$route['admin/graduate/store'] = 'admin/graduate_store';
$route['admin/graduate/(:num)'] = 'admin/graduate_edit/$1';

$route['admin/course'] = 'admin/course';
$route['admin/course/create'] = 'admin/course_create';
$route['admin/course/store'] = 'admin/course_store';
$route['admin/course/delete/(:num)'] = 'admin/course_delete/$1';
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

$route['admin/setting'] = 'admin/setting';
// $route['admin/setting/create'] = 'admin/setting_create';
$route['admin/setting/(:num)'] = 'admin/setting_edit/$1';

$route['admin/banner'] = 'admin/banner';
$route['admin/banner/create'] = 'admin/banner_create';
$route['admin/banner/(:num)'] = 'admin/banner_edit/$1';

$route['admin/publication'] = 'admin/publication';
$route['admin/publication/create'] = 'admin/publication_create';
$route['admin/publication/create_import'] = 'admin/publication_import';
$route['admin/publication/(:num)'] = 'admin/publication_edit/$1';
$route['admin/publication/import'] = 'admin/publication_import_xml';
$route['admin/publication/search'] = "admin/publication_search";
$route['admin/publication/delete/(:num)'] = 'admin/publication_delete/$1';

$route['admin/staff_publications'] = 'admin/staff_publications';
$route['admin/staff_publication/create'] = 'admin/staff_publication_create';
$route['admin/staff_publication/(:num)/(:num)'] = 'admin/staff_publication_edit/$1/$2';


$route['admin/educations'] = 'admin/educations';
$route['admin/staff_educations/(:num)'] = 'admin/staff_educations/$1';
$route['admin/staff_educations/(:num)/create'] = 'admin/staff_educations_create/$1';
$route['admin/staff_educations/(:num)/(:num)'] = 'admin/staff_educations_edit/$1/$2';


$route['admin/(:any)'] = 'admin';

// Browse profile
$route['browse'] = 'profile/index';
$route['api/profile'] = 'api/profile';
$route['api/publication'] = 'api/publication';
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

$route['research'] = 'pages/research';

$route['contact'] = 'pages/contact';

$route['(:any)'] = 'pages/view/$1';
$route['default_controller'] = 'pages/view';

/* End of file routes.php */
/* Location: ./application/config/routes.php */