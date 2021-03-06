<script type="text/javascript">
    $(document).ready(function () {

        $('#notification').show().delay(4000).fadeOut(700);
    });
</script>

<section class="content-header">
    <h1>
        Banner
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">Banner</li>
    </ol>
</section>

<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <?php if(count($banner)<5){ ?>
        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/banner/create"); ?>" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add New Banner </a></div>
        </div>
        <?php } ?>
        <br> <br> <br>

        <?php if(count($banner)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Preview</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($banner as $v){ ?>
                <tr>
                    <td>
                        <a href="<?php echo site_url("admin/banner"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['name']; ?></a>
                    </td>
                    <td>
                        <img style="width: 100px; height: 50px;" src="<?php echo base_url($v['image_path']);?>" alt="">
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