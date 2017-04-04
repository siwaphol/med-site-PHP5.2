<?php if(empty($curriculum_item)){ ?>

<div class="border-and-shadow background-color-block">
    <div class="heading parbase section">
        <hgroup class="section-header standard heading-level-1">
            <h1 class="black">Curriculum</h1>
        </hgroup>
    </div>
    <div>
        <h4>Undergraduate</h4>
        <div>
            <a href="/med/index.php/curriculum/1"><p><h5>Medicine</h5></p></a>
        </div>
        <h4>Graduate</h4>
        <div>
            <a href="/med/index.php/curriculum/2"><p><h5>Master of Science (M.Sc.)</h5></p></a>
        </div>

        <div>
            <a href="/med/index.php/curriculum/3"><p><h5>Doctor of Philosophy (Ph.D.)</h5></p></a>
        </div>

        <div>
            <a href="/med/index.php/curriculum/4"><p><h5>International Program</h5></p></a>
        </div>
    </div>
</div>

<?php 

}

if(!empty($curriculum_item)){
?>
    <div class="border-and-shadow background-color-block">
        <div class="heading parbase section">
            <hgroup class="section-header standard heading-level-1">
                <h1 class="black">Curriculum</h1>
            </hgroup>
        </div>
        <div>
         <table class="table table-striped">
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($curriculum_item as $key => $v) { ?>
                <tr>
                    <td>
                        <a href="<?php echo site_url("/curriculum_detail"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['group_name']; ?></a>
                    </td>
                    <td>
                        <a href="<?php echo site_url("/curriculum_detail"); ?>/<?php echo $v["id"]; ?>"
                           class="btn btn-link btn-xs"><?php echo $v['period']; ?></a>
                    </td>
                </tr>
                <?php } ?>
                </tbody>
            </table>
        </div>
    </div>
<?php } ?>






