<script type="text/javascript">
    $(document).ready(function () {

        $('#notification').show().delay(4000).fadeOut(700);

        // publish settings
        $(".publish").bind("click", function (e) {
            var id = $(this).attr('id');
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "admin/news/" + id + "/toggle-publish/",
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
        News
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">News</li>
    </ol>
</section>


<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/news/create"); ?>" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add News </a></div>
        </div>
        <br> <br> <br>
        <?php if(count($news)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                    <th>Settings</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($news as $v){ ?>
                <tr>
                    <td>
                        <a href="#<?php echo site_url("admin/news"); ?><?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['title']; ?></a>
                    </td>
                    <td><?php echo $v['start_date']; ?></td>
                    <td><?php echo $v['end_date']; ?></td>
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
                    <td><a href="#" id="{!! $v->id !!}" class="publish">
                            <img id="publish-image-{!! $v->id !!}" src="{!!url('/')!!}/assets/images/{!! ($v->is_published) ? 'publish.png' : 'not_publish.png'  !!}"/>
                        </a></td>
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
            {!! $news->render() !!}
        </ul>
    </div>
</div>