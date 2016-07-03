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
        //$("#title").slug();

        // $('#start_date').datepicker({
        //     format: "yyyy-mm-dd",
        //     todayBtn: "linked",
        //     orientation: "top auto"
        // });

        // $('#end_date').datepicker({
        //     format: "yyyy-mm-dd",
        //     todayBtn: "linked",
        //     orientation: "top auto"
        // });

        if ($('#tag').length != 0) {
            var elt = $('#tag');
            elt.tagsinput();
        }
    });
</script>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1> seting <small> | Edit seting</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/seting"); ?>"><i class="fa fa-bookmark"></i> seting</a></li>
        <li class="active">Edit seting</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <?php //echo validation_errors(); ?>

    <form action="<?php echo site_url("admin/setting"); ?>/<?php echo $setting_item['id']; ?>" method="post" enctype="multipart/form-data">
    <!-- Title -->
    <div class="control-group <?php echo (form_error('setting_name')?'has-error':''); ?>">
        <label class="control-label" for="setting_name">Title</label>
        <div class="controls">
            <input type="text" name="setting_name" class="form-control" id="setting_name" placeholder="tiltle" value="<?php echo $setting_item['name']; ?>">
            <?php if(form_error('setting_name')){ ?>
            <span class="help-block"><?php echo form_error('setting_name'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Content -->
    <div class="control-group <?php echo (form_error('content')?'has-error':''); ?>">
        <label class="control-label" for="content">Content</label>

        <div class="controls">
            <textarea name="content" id="content" cols="30" rows="10" placeholder="Content" class="form-control"><?php echo $setting_item['content']; ?></textarea>
        </div>
    </div>
    <br>

        <input type="submit" value="Update" class="btn btn-success">
    </form>
    <script type="text/javascript">
        window.onload = function () {
            CKEDITOR.replace('content', {
                "filebrowserBrowseUrl": "{!! url('filemanager/show') !!}",
            });
        };
    </script>