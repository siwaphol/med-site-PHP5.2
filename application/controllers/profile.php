<?php
class Profile extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('profile_model');
    }

    public function index()
    {
        $data['title'] = 'Browse Page';
        $data['body_class'] = 'browse';

        $this->load->view('second_template/header', $data);
        $this->load->view('profile/index');
        $this->load->view('second_template/footer');
        $this->load->view('profile/script');
        $this->load->view('second_template/footer_end');
    }
}