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

        $('#start_date').datepicker({
            format: "yyyy-mm-dd",
            todayBtn: "linked",
            orientation: "top auto"
        });

        $('#end_date').datepicker({
            format: "yyyy-mm-dd",
            todayBtn: "linked",
            orientation: "top auto"
        });

        if ($('#tag').length != 0) {
            var elt = $('#tag');
            elt.tagsinput();
        }
    });
</script>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1> curriculum <small> | Edit curriculum</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/curriculum"); ?>"><i class="fa fa-bookmark"></i> curriculum</a></li>
        <li class="active">Edit curriculum</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <form action="<?php echo site_url("admin/curriculum"); ?>/<?php echo $curriculum_item['id']; ?>" method="post" enctype="multipart/form-data">
    <!-- Group-->
    <div class="control-group <?php echo (form_error('group_name')?'has-error':''); ?>">
        <label class="control-label" for="group_name">Year</label>
        <div class="controls">
            <!-- <input type="text" name="period" class="form-control" id="period" placeholder="ปีการศึกษา" value="<?php //echo set_value('period'); ?>"> -->
            <select name="group_name" id="group_name" class="selectpicker form-control">
                <option value="">--Select--</option>
                <option value="Medicine" <?php if($curriculum_item['group_name'] == "Medicine") echo "Selected" ?> >Medicine</option>
                <option value="Master of Science (M.Sc.)" <?php if($curriculum_item['group_name'] == "Master of Science (M.Sc.)") echo "Selected" ?>  >Master of Science (M.Sc.)</option>
                <option value="Doctor of Philosophy (Ph.D.)" <?php if($curriculum_item['group_name'] == "Doctor of Philosophy (Ph.D.)") echo "Selected" ?>  >Doctor of Philosophy (Ph.D.)</option>
                <option value="International Program" <?php if($curriculum_item['group_name'] == "International Program") echo "Selected" ?>  >International Program</option>
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
            <input type="text" name="period" class="form-control" id="period" placeholder="ปีการศึกษา" value="<?php echo $curriculum_item['period']; ?>">
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
            <textarea name="content" id="content" cols="30" rows="10" placeholder="Content" class="form-control"><?php echo $curriculum_item['content']; ?></textarea>
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