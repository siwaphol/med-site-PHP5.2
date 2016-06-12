<script type="text/javascript">
    $(document).ready(function () {

        $('#notification').show().delay(4000).fadeOut(700);

        // publish settings
        $(".publish").bind("click", function (e) {
            var id = $(this).attr('id');
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "admin/curriculum/" + id + "/toggle-publish/",
                headers: {
                    'X-CSRF-Token': $('meta[name="_token"]').attr('content')
                },
                success: function (response) {
                    if (response['result'] == 'success') {
                        var imagePath = (response['changed'] == 1) ? "<?php echo base_url("assets/assets/images/publish.png"); ?>"
                            : "<?php echo base_url("assets/assets/images/not_publish.png"); ?>";
                        $("#publish-image-" + id).attr('src', imagePath);
                    }
                },
                error: function () {
                    alert("error");
                }
            })
        });
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

        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/course_group/create"); ?>" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add curriculum </a></div>
        </div>
        <br> <br> <br>
        <?php 

        print "<pre>";
        print_r($course_group_items);
        print "</pre>";



        if(count($course_group_items)){ ?>
        <div class="">
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
                        <a href="<?php echo site_url("admin/course_group");?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['name']; ?></a>
                    </td>
                    <td>
                        <a href="#<?php echo site_url("admin/course_group"); ?><?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['code']; ?></a>
                    </td>
                    <td>
                        <div class="btn-group">
                            <a class="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#">
                                Action <span class="caret"></span> </a>
                            <ul class="dropdown-menu">
                                <li><a href="#admin.course_group.show.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-eye-open"></span>&nbsp;Show course_group
                                    </a></li>
                                <li><a href="#admin.course_group.edit.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-edit"></span>&nbsp;Edit course_group </a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="#admin.course_group.delete.<?php echo $v['id']; ?>">
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
            {!! $curriculum->render() !!}
        </ul>
    </div>
</div>