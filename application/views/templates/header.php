<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo $title ?></title>
	<link rel="stylesheet" href="<?php echo base_url("assets/css/bootstrap.min.css");?>">
	<link rel="stylesheet" href="<?php echo base_url("assets/css/animate.min.css");?>">
	<link rel="stylesheet" href="<?php echo base_url("assets/css/font-awesome.min.css");?>">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/custom.css");?>">

	<script src="<?php echo base_url("assets/js/jquery.min.js"); ?>"></script>
	<script src="<?php echo base_url("assets/js/bootstrap.min.js"); ?>"></script>
	<script src="<?php echo base_url("assets/js/hoe.js"); ?>"></script>
</head>

<body>

	<?php echo includeView("partials/_navbar"); ?>

	<div class="container-fluid">
		<!--CMU LOGO-->
		<div class="row">
			<a href="<?php echo site_url("/"); ?>"><img  src="<?php echo base_url("assets/images/main_logo.png"); ?>" class="img-responsive">
			</a>
		</div>
		<!---end logo-->

