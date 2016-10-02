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
    <h1> Publications <small> | Edit Publication</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/publication"); ?>"><i class="fa fa-bookmark"></i> Publications</a></li>
        <li class="active">Edit Publication</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <form action="<?php echo site_url("admin/staff_publication"); ?>/<?php echo $publication['staff_id']; ?>/<?php echo $publication['publication_id']; ?>" method="post">
        <!-- Staff Id -->
        <div class="control-group <?php echo (form_error('staff_id')?'has-error':''); ?>">
            <label class="control-label" for="staff_id">Staff Id</label>
            <div class="controls">
                <input type="text" name="staff_id" class="form-control" id="staff_id" placeholder="Staff Id" value="<?php echo $publication['staff_id']; ?>">
                <?php if(form_error('staff_id')){ ?>
                <span class="help-block"><?php echo form_error('staff_id'); ?></span>
                <?php } ?>
            </div>
        </div>
        <br>

        <!-- Publication Id -->
        <div class="control-group <?php echo (form_error('publication_id')?'has-error':''); ?>">
            <label class="control-label" for="publication_id">Publication Id</label>
            <div class="controls">
                <input type="text" name="publication_id" class="form-control" id="publication_id" placeholder="Publication Id" value="<?php echo $publication['publication_id']; ?>">
                <?php if(form_error('publication_id')){ ?>
                <span class="help-block"><?php echo form_error('publication_id'); ?></span>
                <?php } ?>
            </div>
        </div>
        <br>

        <input type="submit" value="Update" class="btn btn-success">
    </form>
    <script type="text/javascript">

    </script>