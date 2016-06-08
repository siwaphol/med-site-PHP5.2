<?php if($this->session->userdata('flash_notification.message')){ ?>
<div id="notification" class="alert alert-{{ Session::get('flash_notification.level') }}">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

    <?php echo $this->session->userdata('flash_notification.message'); ?>
</div>
<?php } ?>