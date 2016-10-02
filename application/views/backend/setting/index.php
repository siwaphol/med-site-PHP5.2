<script type="text/javascript">
    $(document).ready(function () {
        $('#notification').show().delay(4000).fadeOut(700);
    });
</script>

<section class="content-header">
    <h1>
        Settings
    </h1>
</section>

<br>
<div class="container">
    <div class="col-lg-10">
        <?php echo includeView("flash/message"); ?>
        <br>

        <div class="pull-left">
            <div class="btn-toolbar"><a href="<?php echo site_url("admin/setting/create"); ?>" class="btn btn-primary">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;Add setting </a></div>
        </div>
        <br> <br> <br>
        <?php 

        if(count($setting_items)){ ?>
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>หัวข้อ</th>
                    <th>Settings</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($setting_items as $v){ ?>
                <tr>
                    <td>
                        <a href="<?php echo site_url("admin/setting"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['name']; ?></a>
                    </td>
                    <td>
                        <div class="btn-group">
                            <a class="btn btn-danger dropdown-toggle" data-toggle="dropdown" href="#">
                                Action <span class="caret"></span> </a>
                            <ul class="dropdown-menu">
                                <li><a href="#admin.setting.show.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-eye-open"></span>&nbsp;Show setting
                                    </a></li>
                                <li><a href="#admin.setting.edit.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-edit"></span>&nbsp;Edit setting </a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="#admin.setting.delete.<?php echo $v['id']; ?>">
                                        <span class="glyphicon glyphicon-remove-circle"></span>&nbsp;Delete
                                        setting </a></li>
                                <li class="divider"></li>
                                <li>
                                    <a target="_blank" href="#dashboard.setting.show.from_slug">
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
</div>