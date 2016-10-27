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
    <h1> Course <small> | Edit Course</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/course"); ?>"><i class="fa fa-bookmark"></i> Course</a></li>
        <li class="active">Edit Course</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <?php //echo validation_errors(); ?>

    <form action=""<?php echo site_url("admin/course"); ?>/<?php echo $course_item['id']; ?>"" method="post" enctype="multipart/form-data">
    <!-- Title -->
    <div class="control-group <?php echo (form_error('course_code')?'has-error':''); ?>">
        <label class="control-label" for="course_code">Course Code</label>
        <div class="controls">
            <input type="text" name="course_code" class="form-control" id="course_code" placeholder="รหัสวิชา" value="<?php echo $course_item['code']; ?>">
            <?php if(form_error('course_code')){ ?>
            <span class="help-block"><?php echo form_error('course_code'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    <!-- Name Thai -->
    <div class="control-group <?php echo (form_error('name_th')?'has-error':''); ?>">
        <label class="control-label" for="name_th">Thai Name</label>
        <div class="controls">
            <input type="text" name="name_th" class="form-control" id="name_th" placeholder="Thai Name" value="<?php echo $course_item['name_th']; ?>">
            <?php if(form_error('name_th')){ ?>
            <span class="help-block"><?php echo form_error('name_th'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    <!-- Name English -->
    <div class="control-group <?php echo (form_error('name_en')?'has-error':''); ?>">
        <label class="control-label" for="name_en">English Name</label>
        <div class="controls">
            <input type="text" name="name_en" class="form-control" id="name_en" placeholder="English Name" value="<?php echo $course_item['name_en']; ?>">
            <?php if(form_error('name_en')){ ?>
            <span class="help-block"><?php echo form_error('name_en'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Content -->
    <div class="control-group <?php echo (form_error('content')?'has-error':''); ?>">
        <label class="control-label" for="content">Content</label>

        <div class="controls">
            <textarea name="content" id="content" cols="30" rows="10" placeholder="Content" class="form-control"><?php echo $course_item['other_details']; ?></textarea>
        </div>
    </div>
    <br>

        <input type="submit" value="Update" class="btn btn-success">
    </form>
    <script type="text/javascript">
        window.onload = function () {
            CKEDITOR.replace('content', {
                "filebrowserBrowseUrl": "<?php echo base_url('assets/filemanager/index.html');?>",
            });
        };
    </script>