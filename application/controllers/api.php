<?php
require(APPPATH.'/libraries/REST_Controller.php');
 
class Api extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
    }
     
    public function news_get()
    {
        $news = $this->news_model->get_news();
         
        if($news)
        {
            $this->response(array("data"=>$news), 200);
        }
 
        else
        {
            $this->response(NULL, 404);
        }
    }
}
?>