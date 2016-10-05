<script type="text/javascript">
    $(document).ready(function () {
        $('#notification').show().delay(4000).fadeOut(700);
    });
</script>

<section class="content-header">
    <h1>
        Publications
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">Publications</li>
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
        <div class="pull-left">
            <div class="btn-toolbar">
                <form action="<?php echo site_url("admin/publication/search"); ?>" method="post">
                    <input type="text" name="text_search" class="form-control" id="text_search" placeholder="Title Publication" value="<?php echo $text; ?>">
                    <input type="submit" value="Search" class="btn btn-success">
                </form>
            </div>
        </div>
         <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/publication"); ?>" class="btn btn-primary">
                    <span ></span>&nbsp;All Publication </a></div>
        </div>
        <br> <br> <br>
        <?php if(count($publications)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Publication Id</th>
                    <th>Staff Name</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($publications as $v){ ?>
                <tr>
                    <td>
                        <a href="<?php echo site_url("admin/publication"); ?>/<?php echo $v["id"]; ?>"><?php echo $v['id']; ?></a>
                    </td>
                    <td><?php echo $v['title']; ?></td>
                    <td>
                        <a href="<?php echo site_url("admin/publication"); ?>/<?php echo $v["id"]; ?>"><?php echo $v['authors']; ?></a>
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