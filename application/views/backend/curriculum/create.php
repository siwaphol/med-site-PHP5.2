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
    <h1> Curriculum <small> | Add Curriculum</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/curriculum"); ?>"><i class="fa fa-bookmark"></i> Curriculum</a></li>
        <li class="active">Add Curriculum</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <?php //echo validation_errors(); ?>

    <form action="<?php echo site_url("admin/curriculum/create"); ?>" method="post" enctype="multipart/form-data">
    <!-- Group-->
    <div class="control-group <?php echo (form_error('group_name')?'has-error':''); ?>">
        <label class="control-label" for="group_name">Group Name</label>
        <div class="controls">
            <!-- <input type="text" name="period" class="form-control" id="period" placeholder="ปีการศึกษา" value="<?php //echo set_value('period'); ?>"> -->
            <select name="group_name" id="group_name" class="selectpicker form-control">
                <option value="">--Select--</option>
                <option value="Medicine">Medicine</option>
                <option value="Master of Science (M.Sc.)">Master of Science (M.Sc.)</option>
                <option value="Doctor of Philosophy (Ph.D.)">Doctor of Philosophy (Ph.D.)</option>
                <option value="International Program">International Program</option>
            </select>

            <?php if(form_error('group_name')){ ?>
            <span class="help-block"><?php echo form_error('group_name'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    <!-- Period-->
    <div class="control-group <?php echo (form_error('period')?'has-error':''); ?>">
        <label class="control-label" for="period">Year</label>
        <div class="controls">
            <input type="text" name="period" class="form-control" id="period" placeholder="ปีการศึกษา" value="<?php echo set_value('period'); ?>">
            <?php if(form_error('period')){ ?>
            <span class="help-block"><?php echo form_error('period'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    <!-- Content -->
    <div class="control-group <?php echo (form_error('content')?'has-error':''); ?>">
        <label class="control-label" for="content">Content</label>

        <div class="controls">
            <textarea name="content" id="content" cols="30" rows="10" placeholder="Content" class="form-control"></textarea>
        </div>
    </div>
    <br>

        <input type="submit" value="Create" class="btn btn-success">
    </form>
    <script type="text/javascript">
        window.onload = function () {
            CKEDITOR.replace('content', {
                "filebrowserBrowseUrl": "{!! url('filemanager/show') !!}",
            });
        };
    </script>