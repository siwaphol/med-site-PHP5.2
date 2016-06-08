<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('includeView'))
{
    function includeView($view, $data=null)
    {
        $CI = get_instance();
        return $CI->load->view($view,$data);
    }
}