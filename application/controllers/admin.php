<?php
class Admin extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->load->model('course_model');
        $this->load->model('curriculum_model');
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
        $data['news'] = $this->news_model->get_news();

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
        $this->form_validation->set_rules('start_date', 'Start Date', 'required');
        $this->form_validation->set_rules('content', 'Content', 'required');
        $this->form_validation->set_rules('end_date', 'End Date', 'required');

        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('backend/layout', $data);
            $this->load->view('backend/news/create', $data);
            $this->load->view('backend/footer');
        }
        else
        {
            $this->news_model->set_news();

            $this->session->set_userdata('flash_notification.message', 'Created Successfully');

            redirect('admin/news');
        }
    }

    public function news_edit($id)
    {
        $data['title'] = 'News Edit';
        $data['news_item'] = $this->news_model->get_news($id);

        if (empty($data['news_item']))
        {
            show_404();
        }

        $this->load->helper('form');
        $this->load->library('form_validation');

        $this->form_validation->set_rules('title', 'Title', 'required');
        $this->form_validation->set_rules('start_date', 'Start Date', 'required');
        $this->form_validation->set_rules('content', 'Content', 'required');
        $this->form_validation->set_rules('end_date', 'End Date', 'required');

        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('backend/layout', $data);
            $this->load->view('backend/news/edit', $data);
            $this->load->view('backend/footer');
        }
        else
        {
            $this->news_model->update_news($id);

            $this->session->set_userdata('flash_notification.message', 'Update Successfully');

            redirect('admin/news');
        }
    }

    #course 
        public function course()
        {
            $data['title'] = 'Admin';
            $data['course'] = $this->course_model->get_course();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/course/index', $data);
            $this->load->view('backend/footer');
        }

        public function course_create()
        {
            $data['title'] = 'Admin';
            $data['course'] = array();

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('course_code', 'Course Code', 'required');
            $this->form_validation->set_rules('name_th', 'Thai Name', 'required');
            $this->form_validation->set_rules('name_en', 'English Name', 'required');
            $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/course/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->course_model->set_course();

                $data['title'] = 'Admin';
                $data['course'] = $this->course_model->get_course();

                $this->session->set_flashdata('flash_notification.message', 'Created Successfully');

                $this->load->view('backend/layout', $data);
                $this->load->view('backend/course/index', $data);
                $this->load->view('backend/footer');
            }
        }

        public function course_store()
        {
            $data['title'] = 'Admin';
            $data['course'] = array();

            var_dump($_POST);
            die();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/course/create', $data);
            $this->load->view('backend/footer');
        }
    #end course

    #Curriculum 
        public function curriculum()
        {
            $data['title'] = 'Admin';
            $data['curriculum'] = $this->curriculum_model->get_curriculum();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/curriculum/index', $data);
            $this->load->view('backend/footer');
        }

        public function curriculum_create()
        {
            $data['title'] = 'Admin';
            $data['curriculum'] = array();

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('period', 'Year', 'required');
            $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/curriculum/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->curriculum_model->set_curriculum();

                $data['title'] = 'Admin';
                $data['curriculum'] = $this->curriculum_model->get_curriculum();

                $this->session->set_flashdata('flash_notification.message', 'Created Successfully');

                $this->load->view('backend/layout', $data);
                $this->load->view('backend/curriculum/index', $data);
                $this->load->view('backend/footer');
            }
        }

        public function curriculum_store()
        {
            $data['title'] = 'Admin';
            $data['curriculum'] = array();

            var_dump($_POST);
            die();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/curriculum/create', $data);
            $this->load->view('backend/footer');
        }
    #end Curriculum
}