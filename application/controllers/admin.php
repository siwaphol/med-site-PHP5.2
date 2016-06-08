<?php
class Admin extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data['title'] = 'Admin';

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/footer');
    }

    public function view($slug)
    {
        $data['news_item'] = $this->news_model->get_news($slug);

        if (empty($data['news_item']))
        {
            show_404();
        }

        $data['title'] = $data['news_item']['title'];

        $this->load->view('templates/header', $data);
        $this->load->view('news/view', $data);
        $this->load->view('templates/footer');
    }

    public function news()
    {
        $data['title'] = 'Admin';
        $data['news'] = array();

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/news/index', $data);
        $this->load->view('backend/footer');
    }

    public function news_create()
    {
        $data['title'] = 'Admin';
        $data['news'] = array();

        $this->load->helper('form');
        $this->load->library('form_validation');

        $this->form_validation->set_rules('title', 'Title', 'required');

        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('backend/layout', $data);
            $this->load->view('backend/news/create', $data);
            $this->load->view('backend/footer');
        }
        else
        {
            var_dump($this->input->post());
            die();
            $this->news_model->set_news();
            $this->load->view('news/success');
        }
    }

    public function news_store()
    {
        $data['title'] = 'Admin';
        $data['news'] = array();

        var_dump($_POST);
        die();

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/news/create', $data);
        $this->load->view('backend/footer');
    }
}