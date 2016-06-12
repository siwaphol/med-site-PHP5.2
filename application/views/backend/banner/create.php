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
    <h1> Banner <small> | Edit Banner</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/course"); ?>"><i class="fa fa-bookmark"></i> Banner</a></li>
        <li class="active">Edit Banner</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <form action="<?php echo site_url("admin/banner/create"); ?>" method="post" enctype="multipart/form-data">

    <!-- File Name -->
    <div class="control-group <?php echo (form_error('name')?'has-error':''); ?>">
        <label class="control-label" for="name">File Name</label>
        <div class="controls">
            <input type="text" name="name" class="form-control" id="name" placeholder="File Name" value="<?php echo set_value('name');?>">
            <?php if(form_error('name')){ ?>
            <span class="help-block"><?php echo form_error('name'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

       <!-- Image -->
    <div class="fileinput fileinput-new control-group <?php echo (form_error('image_path')?'has-error':''); ?>" data-provides="fileinput">
        <label class="control-label" for="image_path">Banner Image</label>
        <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 500px; height: 400px;"></div>
        <div> <span class="btn btn-default btn-file"><span class="fileinput-new">Select image</span><span class="fileinput-exists">Change</span>
                <input type="file" name="image_path" class="form-control" id="image" placeholder="Image" value="">
                    <?php if(form_error('image_path')){ ?>
                    <span class="help-block"><?php echo form_error('image_path'); ?></span>
                    <?php } ?>
                    </span>
            <a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a></div>
    </div>
    <br>

        <input type="submit" value="Create" class="btn btn-success">
    </form>