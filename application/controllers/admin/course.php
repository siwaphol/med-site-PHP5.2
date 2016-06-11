<?php
class Course extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    public function index($page = FALSE)
    {
        $data['title'] = 'Admin';
        $data['news'] = array();

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/news/index', $data);
        $this->load->view('backend/footer');
    }
}