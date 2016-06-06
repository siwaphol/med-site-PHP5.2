<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('curdate'))
{
    function curdate()
    {
        date_default_timezone_set('Asia/Bangkok');
        return date('Y-m-d');
    }
}

if ( ! function_exists('now'))
{
    function now()
    {
        date_default_timezone_set('Asia/Bangkok');
        return date('Y-m-d H:i:s');
    }
}