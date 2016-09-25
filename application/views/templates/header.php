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
	<link rel="stylesheet" href="<?php echo base_url("assets/lightslider/css/lightslider.min.css");?>">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/custom.css");?>">
	<style>
        .demo .item{
            margin-bottom: 60px;
        }
		.content-slider li{
		    background-color: #ed3020;
		    text-align: center;
		    color: #FFF;
		}
		.content-slider h3 {
		    margin: 0;
		    padding: 70px 0;
		}
		.demo{
			width: 1000px;
		}
	</style>

	<script src="<?php echo base_url("assets/js/jquery.min.js"); ?>"></script>
	<script src="<?php echo base_url("assets/js/bootstrap.min.js"); ?>"></script>
	<script src="<?php echo base_url("assets/js/hoe.js"); ?>"></script>

	<script src="<?php echo base_url("assets/lightslider/js/lightslider.min.js"); ?>"></script>

	<script>
		$(document).ready(function() {
			$("#content-slider").lightSlider({
                loop:true,
                keyPress:true,
                item: 3,
                responsive : [
		            {
		                breakpoint:800,
		                settings: {
		                    item:1
		                }
		            },
		            {
		                breakpoint:480,
		                settings: {
		                    item:1
		                }
		            }
		        ]
            });
		});
	</script>
</head>

<body>
	<?php echo includeView("partials/_navbar"); ?>

	<div row="main">
		<!--CMU LOGO-->
		<div row="banner" class="below-shadow">
			<a href="<?php echo site_url("/"); ?>"><img  src="<?php echo base_url("assets/images/main_logo.png"); ?>" class="img-responsive">
			</a>
		</div>
		<!---end logo-->

