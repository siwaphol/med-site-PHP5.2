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
    <h1> Course <small> | Add Course Group</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/course"); ?>"><i class="fa fa-bookmark"></i> Course Group</a></li>
        <li class="active">Add Course Group</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <?php //echo validation_errors(); 
           // print "<pre>";
           //  print_r($course_group_items);
           //  print "</pre>";

    ?>

    <form action="<?php echo site_url("admin/course_group/create"); ?>" method="post" enctype="multipart/form-data">
    <!-- Course Group Id -->
    <div class="control-group <?php echo (form_error('course_code')?'has-error':''); ?>">
        <label class="control-label" for="course_code">Course Group</label>
        <div class="controls">
            <select name="group" id="group" class="selectpicker form-control">
                <option value="">--Select--</option>
                <option value="1">Medicine</option>
                <option value="2">Dentistry</option>
                <option value="3">Pharmacy</option>
                <option value="4">Nurse</option>
            </select>

            <?php if(form_error('group')){ ?>
            <span class="help-block"><?php echo form_error('group'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    <!-- Course Id -->
    <div class="control-group <?php echo (form_error('course_code')?'has-error':''); ?>">
        <label class="control-label" for="course_code">Course Code</label>
        <select name="course_code" id="course_code" class="selectpicker form-control">
            <option value="">--Select--</option>
            <?php //if() 

            if(!empty($course_group_items)){
                foreach ($course_group_items as $key => $value) {
                    ?>
                    <option value="<?php echo $value['id']; ?>"><?php echo $value['code']; ?></option>
                    <?php
                }
            }
            ?>

  
        </select>
        <?php if(form_error('course_code')){ ?>
            <span class="help-block"><?php echo form_error('course_code'); ?></span>
        <?php } ?>
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