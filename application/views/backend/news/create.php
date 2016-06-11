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
        $("#title").slug();

        $('#datetime').datepicker({
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
    <h1> News <small> | Add News</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/news"); ?>"><i class="fa fa-bookmark"></i> News</a></li>
        <li class="active">Add News</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <?php echo validation_errors(); ?>

    <form action="<?php echo site_url("admin/news/create"); ?>" method="post" enctype="multipart/form-data">
    <!-- Title -->
    <div class="control-group <?php echo (form_error('title')?'has-error':''); ?>">
        <label class="control-label" for="title">Title</label>
        <div class="controls">
            <input type="text" name="title" class="form-control" id="title" placeholder="Title" value="<?php echo set_value('title'); ?>">
            <?php if(form_error('title')){ ?>
            <span class="help-block"><?php echo form_error('title'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    <!-- Datetime -->
    <div class="control-group <?php echo (form_error('datetime')?'has-error':''); ?>">
        <label class="control-label" for="title">Datetime</label>

        <div class="controls">
            <input type="text" name="datetime" class="form-control" id="datetime" value="">
            <?php if(form_error('datetime')){ ?>
                <span class="help-block"><?php echo form_error('datetime'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    <!-- Content -->
    <div class="control-group {!! $errors->has('content') ? 'has-error' : '' !!}">
        <label class="control-label" for="title">Content</label>

        <div class="controls">
            <textarea name="content" id="content" cols="30" rows="10" placeholder="Content" class="form-control"> old content value here</textarea>
            @if ($errors->first('content')) <span class="help-block">{!! $errors->first('content') !!}</span> @endif
        </div>
    </div>
    <br>
    <!-- Image -->
    <div class="fileinput fileinput-new control-group {!! $errors->has('image') ? 'has-error' : '' !!}" data-provides="fileinput">
        <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 50px;"></div>
        <div> <span class="btn btn-default btn-file"><span class="fileinput-new">Select image</span><span class="fileinput-exists">Change</span>
                <input type="file" name="image" class="form-control" id="image" placeholder="Image" value="">
                    @if ($errors->first('image')) <span class="help-block">{!! $errors->first('image') !!}</span> @endif </span>
            <a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a></div>
    </div>
    <br>
    <!-- Published -->
    <div class="control-group {!! $errors->has('is_published') ? 'has-error' : '' !!}">
        <div class="controls">
            <label class="">{!! Form::checkbox('is_published', 'is_published') !!} Publish ?</label>
            @if ($errors->first('is_published'))
            <span class="help-block">{!! $errors->first('is_published') !!}</span> @endif </div>
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