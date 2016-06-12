<script type="text/javascript">
    $(document).ready(function () {
        $('#notification').show().delay(4000).fadeOut(700);
    });
</script>

<section class="content-header">
    <h1>
        Publication
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">Publication</li>
    </ol>
</section>

<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/publication/create"); ?>" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add Publication </a></div>
        </div>
        <br> <br> <br>
        <?php if(count($publications)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Staff Name</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($publications as $v){ ?>
                <tr>
                    <td>
                        <a href="<?php echo site_url("admin/publication"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['code']; ?></a>
                    </td>
                    <td><?php echo $v['title']; ?></td>
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