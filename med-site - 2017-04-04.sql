-- phpMyAdmin SQL Dump
-- version 2.10.2
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Oct 31, 2016 at 01:32 PM
-- Server version: 5.0.45
-- PHP Version: 5.2.3

SET FOREIGN_KEY_CHECKS=0;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

ALTER TABLE `staffs`
ADD `education_extra` varchar(255) collate utf8_unicode_ci default NULL;

ALTER TABLE `staffs`
ADD `user_type` int(11) NOT NULL default '1';

INSERT INTO `users` (`id`, `username`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES 
(3, 'medmicro', 'medmicro', 'test@email.com', 'micro5332', NULL, '2016-09-18 18:12:26', NULL);

INSERT INTO `banner` (`id`, `name`, `image_path`) VALUES 
(10, 'banner9', 'uploads/banner/1366/banner8.jpg'),
(11, 'banner10', 'uploads/banner/1366/banner8.jpg'),
(12, 'banner11', 'uploads/banner/1366/banner8.jpg'),
(13, 'banner12', 'uploads/banner/1366/banner8.jpg'),
(14, 'banner13', 'uploads/banner/1366/banner8.jpg'),
(15, 'banner14', 'uploads/banner/1366/banner8.jpg'),
(16, 'banner15', 'uploads/banner/1366/banner8.jpg');

SET FOREIGN_KEY_CHECKS=1;
