

<script type="text/javascript" src="<?php echo base_url('assets/ckeditor/ckeditor.js'); ?>"></script>
<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/assets/bootstrap/css/bootstrap-tagsinput.css'); ?>"/>
<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/jasny-bootstrap/css/jasny-bootstrap.min.css'); ?>"/>
<script type="text/javascript" src="<?php echo base_url('assets/assets/bootstrap/js/bootstrap-tagsinput.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/assets/js/jquery.slug.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/jasny-bootstrap/js/jasny-bootstrap.min.js'); ?>"></script>
<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/bootstrap_datepicker/css/datepicker.css'); ?>"/>
<script type="text/javascript" src="<?php echo base_url('assets/bootstrap_datepicker/js/bootstrap-datepicker.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/bootstrap_datepicker/js/locales/bootstrap-datepicker.tr.js'); ?>"></script>
<script type="text/javascript">
	$(document).ready(function () {

	});
</script>

<!-- Content Header (Page header) -->
<section class="content-header">
	<h1> Publications <small> | Add Publication</small> </h1>
	<ol class="breadcrumb">
		<li><a href="<?php echo site_url("admin/publication"); ?>"><i class="fa fa-bookmark"></i> Publications</a></li>
		<li class="active">Add Publication</li>
	</ol>
</section>
<br>
<br>
<div class="container">

	<form method="post" action="<?php echo site_url("admin/publication/import"); ?>" enctype="multipart/form-data">	
		<div class="row">
			<div class="col-md-12">
				<input type="file" name="doc"/>
			</div>
		</div>
		<div class="row">
			<div class="col-md-2">
				<label for="">Select Staff</label>
			</div>
			<div class="col-md-8">
				<select name="staff_id">
					<?php foreach($staff as $row) { ?>
					<option value="<?php echo $row['id']; ?>"><?php echo $row['first_name_en']." ".$row['last_name_en']; ?></option>
					<?php } ?>
				</select>
			</div>
		</div>

		<input type="submit" value="Upload File"/>
	</form>