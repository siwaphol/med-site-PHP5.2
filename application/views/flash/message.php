<?php if($this->session->userdata('flash_notification.message')){ ?>
<div id="notification" class="alert alert-success">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

    <?php echo $this->session->userdata('flash_notification.message');
    $this->session->unset_userdata('flash_notification.message'); ?>
</div>
<?php } ?>