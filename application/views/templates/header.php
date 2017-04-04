<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo $title ?></title>
	 <link href='//fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,200italic,300italic,400italic,700italic|Fjord+One' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php echo base_url("assets/css/bootstrap.min.css");?>">
<!--	<link rel="stylesheet" href="--><?php //echo base_url("assets/css/animate.min.css");?><!--">-->
	<link rel="stylesheet" href="<?php echo base_url("assets/css/font-awesome.min.css");?>">
	<link rel="stylesheet" href="<?php echo base_url("assets/slick/slick.css");?>">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/slick/slick-theme.css");?>"/>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/custom.css");?>">

	<style>
		.slick-prev {
			z-index: 1;
			left: 10px;
		}

		.slick-next {
			right: 25px;
		}

		.slick-prev:before, .slick-next:before {
		    font-size: 40px;
		    color: #131111;
		}

        .background-color-block {
            background: linear-gradient(180deg, #58e0e0 45px, #ffffff 20px);
        }
        .background-color-block-2 {
            background: linear-gradient(180deg, #58e06d 45px, #ffffff 20px);
        }
        .background-color-block-3 {
            background: linear-gradient(180deg, rgba(142, 68, 173, 0.52) 45px, #ffffff 20px);
        }
        .background-color-block-4 {
            background: linear-gradient(180deg, rgba(173, 68, 68, 0.63) 45px, #ffffff 20px);
        }
	</style>

	<script src="<?php echo base_url("assets/js/jquery.min.js"); ?>"></script>
	<script src="<?php echo base_url("assets/js/bootstrap.min.js"); ?>"></script>
	<script src="<?php echo base_url("assets/js/hoe.js"); ?>"></script>
	<script type="text/javascript" src="<?php echo base_url("assets/slick/slick.min.js"); ?>"></script>

	<script>
		$(document).ready(function(){
	      $(".center").slick({
	      	autoplay: true,
	        dots: true,
	        infinite: true,
	        centerMode: true,
	        slidesToShow: 1,
	        centerPadding: '300px',
	        responsive: [
	        	{
	        		breakpoint: 790,
	        		settings: {
	        			autoplay: true,
	        			arrows: false,
	        			centerMode: true,
	        			centerPadding: '100px',
	        			slidesToShow: 1
	        		}
	        	},
	        	{
	        		breakpoint: 480,
	        		settings: {
	        			autoplay: false,
	        			arrows: false,
	        			centerMode: true,
	        			centerPadding: '-20px',
	        			slidesToShow: 1,
	        			slidesToScroll: 1
	        		}
	        	}
	        ]
	      });
		});
	</script>
</head>

<body>
	<?php echo includeView("partials/_navbar"); ?>

	<div row="main" class="container">
		<!--CMU LOGO-->
		<div row="banner" class="below-shadow">
			<a href="<?php echo site_url("/"); ?>"><img  src="<?php echo base_url("assets/images/main_logo.png"); ?>" class="img-responsive">
			</a>
		</div>
		<!---end logo-->

