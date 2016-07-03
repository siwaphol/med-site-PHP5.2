<script type="text/javascript">
    $(document).ready(function () {

        $('#notification').show().delay(4000).fadeOut(700);
        // $('#notification').show();
    });
</script>

<section class="content-header">
    <h1>
        Staff Educations
    </h1>
    <ol class="breadcrumb">
        <li><a href="#dashboard">Dashboard</a></li>
        <li class="active">Staff Educations</li>
    </ol>
</section>


<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/staff_educations"); ?>/<?php echo $staff_id;?>/create" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add Education </a></div>
        </div>
        <br> <br> <br>
        <?php if(count($educations)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Year</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                <?php $no = 1;
                foreach ($educations as $v){ ?>
                <tr>
                    <td><?php echo $no++; ?></td>
                    <td>
                        <a href="<?php echo site_url("admin/staff_educations"); ?>/<?php echo $v["staff_id"]; ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['year']; ?></a>
                    </td>
                    <td><?php echo $v['other_details']; ?></td>
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