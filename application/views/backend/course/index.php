
<script type="text/javascript">
    $(document).ready(function () {

        $('#notification').show().delay(4000).fadeOut(700);

        $('.delete-btn').on('click', function() {
            var r = confirm("ยืนยันการลบ");

            if (r!=true) {
                return false;
            }
        });
    });
</script>

<section class="content-header">
    <h1>
        course
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">course</li>
    </ol>
</section>


<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/course/create"); ?>" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add course </a></div>
        </div>
        <br> <br> <br>
        <?php 

        if(count($course)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Code</th>
                    <th>รายชื่อกระบวนวิชา</th>
                    <th>Updated Date</th>
                    <th>Settings</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($course as $v){ ?>
                <tr>
                    <td>
                        <a href="<?php echo site_url("admin/course"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['code']; ?></a>
                    </td>
                    <td>
                        <a href="<?php echo site_url("admin/course"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['name_th']."(".$v['name_en'].")"; ?></a>
                    </td>
                    <td><?php echo $v['updated_at']; ?></td>
                    <td>
                        <div class="btn-group">
                            <a class="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#">
                                Action <span class="caret"></span> </a>
                            <ul class="dropdown-menu">
                                <li><a class="delete-btn" href="<?php echo site_url("admin/course/delete"); ?>/<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-remove-circle"></span>&nbsp;Delete
                                        course </a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <?php } ?>
                </tbody>
            </table>
        </div>
        <?php }else{ ?>
        <div class="alert alert-danger">No results found</div>
        <?php } ?></div>
    <div class="pull-left">
        <ul class="pagination">

        </ul>
    </div>
</div>