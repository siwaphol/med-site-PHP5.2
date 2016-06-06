<?php
require(APPPATH.'/libraries/REST_Controller.php');
 
class Api extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->load->model('profile_model');
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
        $profile = $this->profile_model->get_profile();

        if($profile)
        {
            $this->response(array("data"=>$profile), 200);
        }
        else{
            $this->response(NULL, 404);
        }
    }
}
