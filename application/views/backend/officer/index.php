<script type="text/javascript">
    $(document).ready(function () {

        $('#notification').show().delay(4000).fadeOut(700);
        // $('#notification').show();
    });
</script>

<section class="content-header">
    <h1>
        Officer
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">Officer</li>
    </ol>
</section>


<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/officer/create"); ?>" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add Officer </a></div>
        </div>
        <br> <br> <br>
        <?php if(count($staff)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Job Title</th>
                    <th>Action</th>
                    <th>Settings</th>
                </tr>
                </thead>
                <tbody>
                <?php $no = 1;
                foreach ($staff as $v){ ?>
                <tr>
                    <td><?php echo $v['id']; ?></td>
                    <td>
                        <a href="<?php echo site_url("admin/officer"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['first_name_en']; ?></a>
                    </td>
                    <td><?php echo $v['last_name_en']; ?></td>
                    <td><?php echo $v['job_title_en']; ?></td>
                    <td>
                        <div class="btn-group">
                            <a class="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#">
                                Action <span class="caret"></span> </a>
                            <ul class="dropdown-menu">
                                <li><a href="#admin.news.show.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-eye-open"></span>&nbsp;Show News
                                    </a></li>
                                <li><a href="#admin.news.edit.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-edit"></span>&nbsp;Edit News </a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="#admin.news.delete.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-remove-circle"></span>&nbsp;Delete
                                        News </a></li>
                                <li class="divider"></li>
                                <li>
                                    <a target="_blank" href="#dashboard.news.show.from_slug">
                                        <span class="glyphicon glyphicon-eye-open"></span>&nbsp;View On Site
                                    </a></li>
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