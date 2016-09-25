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

<?php if ($_SERVER['REQUEST_METHOD'] == 'GET') { ?>

        <form method="post" action="/med/index.php/curriculum"enctype="multipart/form-data">
        <input type="file" name="doc"/>
        <input type="submit" value="Upload File"/>
        </form>

<?php } else {

    if (isset($_FILES['doc']) && ($_FILES['doc']['error'] == UPLOAD_ERR_OK)) {
        $xml = simplexml_load_file($_FILES['doc']['tmp_name']);    
        $json_string = json_encode($xml);    
        $result_array = json_decode($json_string, TRUE);        
    }else {
        exit('Failed to open test.xml.');
    }
    print "<pre>";
    print_r($result_array);
    print "</pre>";

    $publication = array();

    if(!empty($result_array['PubmedArticle']['MedlineCitation']['Article']['ArticleTitle'])){
        $publication[0]['title'] =  $result_array['PubmedArticle']['MedlineCitation']['Article']['ArticleTitle']; 
    }

    if(!empty($result_array['PubmedArticle']['MedlineCitation']['Article']['Journal']['Title'])){
        $publication[0]['journal'] =  $result_array['PubmedArticle']['MedlineCitation']['Article']['Journal']['Title']; 
    }

    if(!empty($result_array['PubmedArticle']['MedlineCitation']['Article']['AuthorList']['Author'])){

        foreach ($result_array['PubmedArticle']['MedlineCitation']['Article']['AuthorList']['Author'] as $key => $value) {
            if($key == 0){
                if(!empty($value['ForeName'])){
                    $publication[0]['authors'] = $value['LastName']." ".$value['ForeName'];
                }else{
                    $publication[0]['authors'] = $value['LastName'];
                }
                
            }else{
                if(!empty($value['ForeName'])){
                    $publication[0]['authors'] = $publication[0]['authors'].", ".$value['LastName']." ".$value['ForeName'];
                }else{
                    $publication[0]['authors'] = $publication[0]['authors'].", ".$value['LastName'];
                }
                
            }
        }
    }

    if(!empty($result_array['PubmedArticle']['MedlineCitation']['Article']['Abstract']['AbstractText'])){
        if(count($result_array['PubmedArticle']['MedlineCitation']['Article']['Abstract']['AbstractText']) > 1){
            $publication[0]['abstract'] =  $result_array['PubmedArticle']['MedlineCitation']['Article']['Abstract']['AbstractText'][1]; 
        }else{
            $publication[0]['abstract'] =  $result_array['PubmedArticle']['MedlineCitation']['Article']['Abstract']['AbstractText']; 
        }
    }

    if(!empty($result_array['PubmedArticle']['PubmedData']['ArticleIdList']['ArticleId'])){
        if(count($result_array['PubmedArticle']['PubmedData']['ArticleIdList']['ArticleId']) == 3){
            $publication[0]['pubmed_link'] =  $result_array['PubmedArticle']['PubmedData']['ArticleIdList']['ArticleId'][2]; 
        }else if(count($result_array['PubmedArticle']['PubmedData']['ArticleIdList']['ArticleId']) == 2){
            $publication[0]['pubmed_link'] =  $result_array['PubmedArticle']['PubmedData']['ArticleIdList']['ArticleId'][1]; 
        }else{
            $publication[0]['pubmed_link'] =  $result_array['PubmedArticle']['PubmedData']['ArticleIdList']['ArticleId']; 
        }
    }

    if(!empty($result_array['PubmedArticle']['MedlineCitation']['Article']['Journal']['JournalIssue']['PubDate']['Year'])){
        $publication[0]['year'] =  $result_array['PubmedArticle']['MedlineCitation']['Article']['Journal']['JournalIssue']['PubDate']['Year']; 
    }else{
        $publication[0]['year'] =  "";
    }

    if(!empty($result_array['PubmedArticle']['MedlineCitation']['Article']['Journal']['JournalIssue']['Volume'])){
        $publication[0]['volume'] =  $result_array['PubmedArticle']['MedlineCitation']['Article']['Journal']['JournalIssue']['Volume']; 
    }else{
        $publication[0]['volume'] =  "";
    }

    if(!empty($result_array['PubmedArticle']['MedlineCitation']['Article']['Pagination']['MedlinePgn'])){
        $publication[0]['pages'] =  $result_array['PubmedArticle']['MedlineCitation']['Article']['Pagination']['MedlinePgn']; 
    }else{
        $publication[0]['pages'] = "";
    }



    print "<pre>";
    print_r($publication);
    print "</pre>";


    }



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






