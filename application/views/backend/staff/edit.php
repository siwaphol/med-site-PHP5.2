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
    <h1> Staff <small> | Edit Staff</small> </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url("admin/staff"); ?>"><i class="fa fa-bookmark"></i> Staff</a></li>
        <li class="active">Edit Staff</li>
    </ol>
</section>
<br>
<br>
<div class="container">

    <form action="<?php echo site_url("admin/staff"); ?>/<?php echo $staff_item['id'];?>" method="post" enctype="multipart/form-data">
    <!-- Gender -->
    <div class="control-group <?php echo (form_error('gender')?'has-error':''); ?>">
        <label class="control-label" for="gender">Gender</label>
        <div class="controls">
            <input type="text" name="gender" class="form-control" id="gender" placeholder="Gender" value="<?php echo set_value('gender')?set_value('gender'):$staff_item['gender']; ?>">
            <?php if(form_error('gender')){ ?>
            <span class="help-block"><?php echo form_error('gender'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Thai Job Title -->
    <div class="control-group <?php echo (form_error('job_title_th')?'has-error':''); ?>">
        <label class="control-label" for="title">Thai Job Title</label>
        <div class="controls">
            <input type="text" name="job_title_th" class="form-control" id="job_title_th" placeholder="Thai Job Title" value="<?php echo set_value('job_title_th')?set_value('job_title_th'):$staff_item['job_title_th']; ?>">
            <?php if(form_error('job_title_th')){ ?>
            <span class="help-block"><?php echo form_error('job_title_th'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- English Job Title -->
    <div class="control-group <?php echo (form_error('job_title_en')?'has-error':''); ?>">
        <label class="control-label" for="job_title_en">English Job Title</label>
        <div class="controls">
            <input type="text" name="job_title_en" class="form-control" id="job_title_en" placeholder="English Job Title" value="<?php echo set_value('job_title_en')?set_value('job_title_en'):$staff_item['job_title_en']; ?>">
            <?php if(form_error('job_title_en')){ ?>
            <span class="help-block"><?php echo form_error('job_title_en'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Thai Prefix -->
    <div class="control-group <?php echo (form_error('prefix_th')?'has-error':''); ?>">
        <label class="control-label" for="prefix_th">Thai Prefix</label>
        <div class="controls">
            <input type="text" name="prefix_th" class="form-control" id="prefix_th" placeholder="Thai Prefix" value="<?php echo set_value('prefix_th')?set_value('prefix_th'):$staff_item['prefix_th']; ?>">
            <?php if(form_error('prefix_th')){ ?>
            <span class="help-block"><?php echo form_error('prefix_th'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- English Prefix -->
    <div class="control-group <?php echo (form_error('prefix_en')?'has-error':''); ?>">
        <label class="control-label" for="prefix_en">English Prefix</label>
        <div class="controls">
            <input type="text" name="prefix_en" class="form-control" id="prefix_en" placeholder="English Prefix" value="<?php echo set_value('prefix_en')?set_value('prefix_en'):$staff_item['prefix_en']; ?>">
            <?php if(form_error('prefix_en')){ ?>
            <span class="help-block"><?php echo form_error('prefix_en'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Thai First Name -->
    <div class="control-group <?php echo (form_error('first_name_th')?'has-error':''); ?>">
        <label class="control-label" for="first_name_th">Thai First Name</label>
        <div class="controls">
            <input type="text" name="first_name_th" class="form-control" id="first_name_th" placeholder="Thai First Name" value="<?php echo set_value('first_name_th')?set_value('first_name_th'):$staff_item['first_name_th']; ?>">
            <?php if(form_error('first_name_th')){ ?>
            <span class="help-block"><?php echo form_error('first_name_th'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Thai Last Name -->
    <div class="control-group <?php echo (form_error('last_name_th')?'has-error':''); ?>">
        <label class="control-label" for="last_name_th">Thai Last Name</label>
        <div class="controls">
            <input type="text" name="last_name_th" class="form-control" id="last_name_th" placeholder="Thai Last Name" value="<?php echo set_value('last_name_th')?set_value('last_name_th'):$staff_item['last_name_th']; ?>">
            <?php if(form_error('last_name_th')){ ?>
            <span class="help-block"><?php echo form_error('last_name_th'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- English First Name -->
    <div class="control-group <?php echo (form_error('first_name_en')?'has-error':''); ?>">
        <label class="control-label" for="first_name_en">English First Name *</label>
        <div class="controls">
            <input type="text" name="first_name_en" class="form-control" id="first_name_en" placeholder="English First Name" value="<?php echo set_value('first_name_en')?set_value('first_name_en'):$staff_item['first_name_en']; ?>">
            <?php if(form_error('first_name_en')){ ?>
            <span class="help-block"><?php echo form_error('first_name_en'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- English Last Name -->
    <div class="control-group <?php echo (form_error('last_name_en')?'has-error':''); ?>">
        <label class="control-label" for="last_name_en">English Last Name *</label>
        <div class="controls">
            <input type="text" name="last_name_en" class="form-control" id="last_name_en" placeholder="English Last Name" value="<?php echo set_value('last_name_en')?set_value('last_name_en'):$staff_item['last_name_en']; ?>">
            <?php if(form_error('last_name_en')){ ?>
            <span class="help-block"><?php echo form_error('last_name_en'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Position -->
    <div class="control-group <?php echo (form_error('position')?'has-error':''); ?>">
        <label class="control-label" for="position">Position</label>
        <div class="controls">
            <input type="text" name="position" class="form-control" id="position" placeholder="Position" value="<?php echo set_value('position')?set_value('position'):$staff_item['position']; ?>">
            <?php if(form_error('position')){ ?>
            <span class="help-block"><?php echo form_error('position'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Research of Interest -->
    <div class="control-group <?php echo (form_error('research_of_interest')?'has-error':''); ?>">
        <label class="control-label" for="research_of_interest">Research of Interest</label>
        <div class="controls">
            <textarea name="research_of_interest" id="research_of_interest" cols="30" rows="10" placeholder="Research of Interest" class="form-control"><?php echo set_value('research_of_interest')?set_value('research_of_interest'):$staff_item['research_of_interest']; ?></textarea>
            <?php if(form_error('research_of_interest')){ ?>
            <span class="help-block"><?php echo form_error('research_of_interest'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Phone -->
    <div class="control-group <?php echo (form_error('phone')?'has-error':''); ?>">
        <label class="control-label" for="phone">Phone Number</label>
        <div class="controls">
            <input type="text" name="phone" class="form-control" id="phone" placeholder="Phone" value="<?php echo set_value('phone')?set_value('phone'):$staff_item['phone']; ?>">
            <?php if(form_error('phone')){ ?>
            <span class="help-block"><?php echo form_error('phone'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Email 1 -->
    <div class="control-group <?php echo (form_error('email1')?'has-error':''); ?>">
        <label class="control-label" for="email1">Email 1</label>
        <div class="controls">
            <input type="text" name="email1" class="form-control" id="email1" placeholder="Email 1" value="<?php echo set_value('email1')?set_value('email1'):$staff_item['email1']; ?>">
            <?php if(form_error('email1')){ ?>
            <span class="help-block"><?php echo form_error('email1'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Email 2 -->
    <div class="control-group <?php echo (form_error('email2')?'has-error':''); ?>">
        <label class="control-label" for="email2">Email 2</label>
        <div class="controls">
            <input type="text" name="email2" class="form-control" id="email2" placeholder="Email 2" value="<?php echo set_value('email2')?set_value('email2'):$staff_item['email2']; ?>">
            <?php if(form_error('email2')){ ?>
            <span class="help-block"><?php echo form_error('email2'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Other details -->
    <div class="control-group <?php echo (form_error('other_details')?'has-error':''); ?>">
        <label class="control-label" for="other_details">Other details</label>
        <div class="controls">
            <textarea name="other_details" id="other_details" cols="30" rows="10" placeholder="Other Details" class="form-control"><?php echo set_value('other_details')?set_value('other_details'):$staff_item['other_details']; ?></textarea>
            <?php if(form_error('other_details')){ ?>
            <span class="help-block"><?php echo form_error('other_details'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>
    
   <!-- Image -->
    <div class="fileinput fileinput-new control-group <?php echo (form_error('image_path')?'has-error':''); ?>" data-provides="fileinput">
        <label class="control-label" for="image_path">Staff Image</label>
        <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 50px;">
            <img src="<?php echo base_url($staff_item['image_path']); ?>" style="width: 200px; height: 50px;">
        </div>
        <div> <span class="btn btn-default btn-file"><span class="fileinput-new">Select image</span><span class="fileinput-exists">Change</span>
                <input type="file" name="image_path" class="form-control" id="image" placeholder="Image" value="">
                    <?php if(form_error('image_path')){ ?>
                    <span class="help-block"><?php echo form_error('image_path'); ?></span>
                    <?php } ?>
                    </span>
            <a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a></div>
    </div>
    <br>

    <!-- Office details -->
    <div class="control-group <?php echo (form_error('office_details')?'has-error':''); ?>">
        <label class="control-label" for="office_details">Office Details</label>
        <div class="controls">
            <textarea name="office_details" id="office_details" cols="30" rows="10" placeholder="Office Details" class="form-control"><?php echo set_value('office_details')?set_value('office_details'):$staff_item['office_details']; ?></textarea>
            <?php if(form_error('office_details')){ ?>
            <span class="help-block"><?php echo form_error('office_details'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

    <!-- Education details -->
    <div class="control-group <?php echo (form_error('education_details')?'has-error':''); ?>">
        <label class="control-label" for="education_details">Education Details (พิมพ์ &lt;/br&gt; สำหรับขึ้นบรรทัดใหม่, &lt;b&gt;ข้อความ&lt;/b&gt; สำหรับเน้นข้อความ)</label>
        <div class="controls">
            <textarea name="education_details" id="education_details" cols="30" rows="10" placeholder="Education Details" class="form-control"><?php echo set_value('education_details')?set_value('education_details'):$staff_item['education_details']; ?></textarea>
            <?php if(form_error('education_details')){ ?>
            <span class="help-block"><?php echo form_error('education_details'); ?></span>
            <?php } ?>
        </div>
    </div>
    <br>

        <!-- Education Extra -->
        <div class="control-group <?php echo (form_error('education_extra')?'has-error':''); ?>">
            <label class="control-label" for="title">Education Extra</label>
            <div class="controls">
                <input type="text" name="education_extra" class="form-control" id="education_extra" placeholder="Education Extra" value="<?php echo set_value('education_extra')?set_value('education_extra'):$staff_item['education_extra']; ?>">
                <?php if(form_error('education_extra')){ ?>
                    <span class="help-block"><?php echo form_error('education_extra'); ?></span>
                <?php } ?>
            </div>
        </div>
        <br>

        <input type="hidden" name="user_type" value="1">

        <input type="submit" value="Update" class="btn btn-success">
    </form>

    <script type="text/javascript">
    </script>