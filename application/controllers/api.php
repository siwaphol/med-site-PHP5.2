<?php
require(APPPATH.'/libraries/REST_Controller.php');
 
class Api extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->load->model('profile_model');
        $this->load->model('publication_model');
    }
    
    public function news_get()
    {
        $news = $this->news_model->get_latest_4_news();
         
        if($news)
        {
            $this->response(array("data"=>$news), 200);
        }
 
        else
        {
            $this->response(NULL, 404);
        }
    }

    public function profile_get()
    {
        $perPage = 10;
        if(isset($_GET['per_page'])){
            $perPage = (int)$_GET['per_page'];
        }

        $config = array();
        $config["base_url"] = base_url() . "browse";
        $config["total_rows"] = $this->profile_model->record_count();
        $config["per_page"] = $perPage;
        $config["uri_segment"] = 3;

        $this->pagination->initialize($config);

        $page = (isset($_GET['page'])) ? (int)$_GET['page']-1 : 0;
        $data["results"] = $this->profile_model->fetch_profiles($config["per_page"], $page*$perPage);
        $data["links"] = $this->pagination->create_links();

        if($data)
        {
            $this->response(array(
                'data'=>$data["results"]
                ,'last_page'=>(int)($config['total_rows']/$perPage)+1
                ,'current_page'=>(int)$page+1
                ,'from'=>(int)($page*$perPage)+1
                ,'to'=>(int)($page*$perPage)+$perPage
                ,'total'=>(int)$config['total_rows']
            ), 200);
        }
        else{
            $this->response(NULL, 404);
        }
    }

    // Publications
    public function publication_get()
    {
        $perPage = 10;
        if(isset($_GET['per_page'])){
            $perPage = (int)$_GET['per_page'];
        }

        $config = array();
        $config["base_url"] = base_url() . "browse";
        // TODO-nong add staff id param to get all current staff publications
        $config["total_rows"] = $this->publication_model->record_count();
        $config["per_page"] = $perPage;
        // TODO-nong cannot remember what it does
        $config["uri_segment"] = 3;

        $this->pagination->initialize($config);

        $page = (isset($_GET['page'])) ? (int)$_GET['page']-1 : 0;
        //TODO-nong for test will use $staff_id=2
        $data["results"] = $this->publication_model->fetch_publication($config["per_page"], $page*$perPage, 2);
        $data["links"] = $this->pagination->create_links();

        if($data)
        {
            $this->response(array(
                'data'=>$data["results"]
                ,'last_page'=>(int)($config['total_rows']/$perPage)+1
                ,'current_page'=>(int)$page+1
                ,'from'=>(int)($page*$perPage)+1
                ,'to'=>(int)($page*$perPage)+$perPage
                ,'total'=>(int)$config['total_rows']
            ), 200);
        }
        else{
            $this->response(NULL, 404);
        }
    }
}
