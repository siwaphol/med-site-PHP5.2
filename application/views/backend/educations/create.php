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
</script>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1> Staff Education <small> | Add Education</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/staff_educations"); ?>"><i class="fa fa-bookmark"></i> Staff Educations</a></li>
        <li class="active">Add Education</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <form action="<?php echo site_url("admin/staff_educations"); ?>/<?php echo $staff_id; ?>/create" method="post" enctype="multipart/form-data">

    <!-- Year -->
    <div class="control-group <?php echo (form_error('year')?'has-error':''); ?>">
        <label class="control-label" for="year">Year</label>
        <div class="controls">
            <input type="text" name="year" class="form-control" id="year" placeholder="Year" value="<?php echo set_value('year');?>">
            <?php if(form_error('year')){ ?>
            <span class="help-block"><?php echo form_error('year'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Details -->
    <div class="control-group <?php echo (form_error('other_details')?'has-error':''); ?>">
        <label class="control-label" for="other_details">Details</label>
        <div class="controls">
            <input type="text" name="other_details" class="form-control" id="other_details" placeholder="Details" value="<?php echo set_value('other_details');?>">
            <?php if(form_error('other_details')){ ?>
            <span class="help-block"><?php echo form_error('other_details'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

        <input type="submit" value="Create" class="btn btn-success">
    </form>