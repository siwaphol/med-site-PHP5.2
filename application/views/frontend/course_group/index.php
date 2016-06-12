<div><h1><?php print $title; ?></h1></div>


<table class="table table-striped">
    <thead>
    <tr>
        <th>Group</th>
        <th>Course ID</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($course_item as $v){ ?>
    <tr>
        <td>
            <a href="<?php echo site_url("admin/course_group");?>/<?php echo $v["course_id"]; ?>"
               class="btn btn-link btn-xs"><?php echo $v['name']; ?></a>
        </td>
        <td>
            <a href="<?php echo site_url("/course_detail"); ?>/<?php echo $v["course_id"]; ?>"
               class="btn btn-link btn-xs"><?php echo $v['code']; ?></a>
        </td>
        <td>
            <a href="<?php echo site_url("/course_detail"); ?>/<?php echo $v["course_id"]; ?>"
               class="btn btn-link btn-xs"><?php echo $v['name_th']."(".$v['name_en'].")"; ?></a>
        </td>
    </tr>
    <?php } ?>
    </tbody>
</table>