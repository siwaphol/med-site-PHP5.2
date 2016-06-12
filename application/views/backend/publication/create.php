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

    <form action="<?php echo site_url("admin/publication/create"); ?>" method="post">
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

    <!-- Journal -->
    <div class="control-group <?php echo (form_error('journal')?'has-error':''); ?>">
        <label class="control-label" for="journal">Journal</label>
        <div class="controls">
            <input type="text" name="journal" class="form-control" id="journal" placeholder="Journal" value="<?php echo set_value('journal'); ?>">
            <?php if(form_error('journal')){ ?>
            <span class="help-block"><?php echo form_error('journal'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Year -->
    <div class="control-group <?php echo (form_error('year')?'has-error':''); ?>">
        <label class="control-label" for="year">Year</label>
        <div class="controls">
            <input type="text" name="year" class="form-control" id="year" placeholder="Year" value="<?php echo set_value('year'); ?>">
            <?php if(form_error('year')){ ?>
            <span class="help-block"><?php echo form_error('year'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Volume -->
    <div class="control-group <?php echo (form_error('volume')?'has-error':''); ?>">
        <label class="control-label" for="volume">Volume</label>
        <div class="controls">
            <input type="text" name="volume" class="form-control" id="volume" placeholder="Volume" value="<?php echo set_value('volume'); ?>">
            <?php if(form_error('volume')){ ?>
            <span class="help-block"><?php echo form_error('volume'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Pages -->
    <div class="control-group <?php echo (form_error('pages')?'has-error':''); ?>">
        <label class="control-label" for="pages">Pages</label>
        <div class="controls">
            <input type="text" name="pages" class="form-control" id="pages" placeholder="Pages" value="<?php echo set_value('pages'); ?>">
            <?php if(form_error('pages')){ ?>
            <span class="help-block"><?php echo form_error('pages'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Arthors -->
    <div class="control-group <?php echo (form_error('arthors')?'has-error':''); ?>">
        <label class="control-label" for="arthors">Arthors</label>

        <div class="controls">
            <textarea name="arthors" id="arthors" cols="30" rows="10" placeholder="Arthors" class="form-control"></textarea>
            <?php if(form_error('arthors')){ ?>
                <span class="help-block"><?php echo form_error('arthors'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Abstract -->
    <div class="control-group <?php echo (form_error('abstract')?'has-error':''); ?>">
        <label class="control-label" for="abstract">Abstract</label>

        <div class="controls">
            <textarea name="abstract" id="abstract" cols="30" rows="10" placeholder="Abstract" class="form-control"></textarea>
            <?php if(form_error('abstract')){ ?>
                <span class="help-block"><?php echo form_error('abstract'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Pubmed link -->
    <div class="control-group <?php echo (form_error('pubmed_link')?'has-error':''); ?>">
        <label class="control-label" for="pubmed_link">Pubmed Link</label>
        <div class="controls">
            <input type="text" name="pubmed_link" class="form-control" id="pubmed_link" placeholder="put pubmed link here" value="<?php echo set_value('pubmed_link'); ?>">
            <?php if(form_error('pubmed_link')){ ?>
            <span class="help-block"><?php echo form_error('pubmed_link'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

        <input type="submit" value="Create" class="btn btn-success">
    </form>
    <script type="text/javascript">

    </script>