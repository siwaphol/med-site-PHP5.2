<?php if(empty($curriculum_item)){ ?>
<div><h1><?php //print $title; ?></h1></div>
<p><h2>Undergraduate</p></h2>
<div>
	<a href="/med/index.php/curriculum/1"><p><h3>Medicine</h3></p></a>
</div>
<p><h2>Graduate</p></h2>
<div>
	<a href="/med/index.php/curriculum/2"><p><h3>Master of Science (M.Sc.)</h3></p></a>
</div>

<div>
	<a href="/med/index.php/curriculum/3"><p><h3>Doctor of Philosophy (Ph.D.)</h3></p></a>
</div>

<div>
	<a href="/med/index.php/curriculum/4"><p><h3>International Program</h3></p></a>
</div>
<hr>

<?php 
}
    // print "<pre>";
    // print_r($curriculum_item);
    // print "</pre>";
	if(!empty($curriculum_item)){

		?>
		 <div><p><h2>หลักสูตร</h2></p></div>
		 <table class="table table-striped">
                <thead>
                <tr>
                    <th>Group</th>
                    <th>Period</th>
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
		<?
	}

?>






