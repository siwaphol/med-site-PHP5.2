<script type="text/javascript">
    $(document).ready(function () {

        $('#notification').show().delay(4000).fadeOut(700);
    });
</script>

<section class="content-header">
    <h1>
        course group
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">curriculum</li>
    </ol>
</section>


<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <div><h1><?php print $title; ?></h1></div>

        <div class="btn-group" role="group" aria-label="Group">
          <a type="button" class="btn btn-default" href="<?php echo site_url("admin/course_group?group=1"); ?>">&nbsp;Medicine </a>
          <a type="button" class="btn btn-default" href="<?php echo site_url("admin/course_group?group=2"); ?>">&nbsp;Dentistry</a>
          <a type="button" class="btn btn-default" href="<?php echo site_url("admin/course_group?group=3"); ?>">&nbsp;Pharmacy</a>
          <a type="button" class="btn btn-default" href="<?php echo site_url("admin/course_group?group=4"); ?>">&nbsp;Nurse</a>
          <a type="button" class="btn btn-default" href="<?php echo site_url("admin/course_group?group=5"); ?>">&nbsp;Graduate</a>
        </div>
        <br>
        <br>
        <div class="btn-group" role="group">
          <a type="button" class="btn btn-primary" href="<?php echo site_url("admin/course_group/create"); ?>">Add New Course Group</a>
        </div>

        <br>
        <?php if(count($course_group_items)){ ?>
        <div class="">
            <p><h2><?php print $sub_title; ?></h2></p>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Group</th>
                    <th>Course ID</th>
                    <th>Settings</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($course_group_items as $v){ ?>
                <tr>
                    <td>
                        <a href="<?php echo site_url("admin/course_group/edit");?>?group_id=<?php echo $v["course_group_id"]; ?>&course_id=<?php echo $v["course_id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['name']; ?></a>
                    </td>
                    <td>
                        <a href="<?php echo site_url("admin/course_group/edit");?>?group_id=<?php echo $v["course_group_id"]; ?>&course_id=<?php echo $v["course_id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['code']; ?></a>
                    </td>
                    <td>
                        <div class="btn-group">
                            <a class="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#">
                                Action <span class="caret"></span> </a>
                            <ul class="dropdown-menu">
                                <li><a href="#admin.course_group.show.<?php echo $v['course_id']; ?>">
                                        <span class="glyphicon glyphicon-eye-open"></span>&nbsp;Show course_group
                                    </a></li>
                                <li><a href="#admin.course_group.edit.<?php echo $v['course_id']; ?>">
                                        <span class="glyphicon glyphicon-edit"></span>&nbsp;Edit course_group </a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="#admin.course_group.delete.<?php echo $v['course_id']; ?>">
                                        <span class="glyphicon glyphicon-remove-circle"></span>&nbsp;Delete
                                        course_group </a></li>
                                <li class="divider"></li>
                                <li>
                                    <a target="_blank" href="#dashboard.course_group.show.from_slug">
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