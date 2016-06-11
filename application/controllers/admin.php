<?php
class Admin extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->load->model('course_model');
        $this->load->model('staff_model');
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
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/course');
            }
        }

        public function course_edit($id)
        {
            $data['title'] = 'Course Edit';
            $data['course_item'] = $this->course_model->get_course($id);

            if (empty($data['course_item']))
            {
                show_404();
            }

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('course_code', 'Course Code', 'required');
            $this->form_validation->set_rules('name_th', 'Thai Name', 'required');
            $this->form_validation->set_rules('name_en', 'English Name', 'required');
            $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/course/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->course_model->update_course($id);
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/course');
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

    public function staff()
    {
        $data['title'] = 'Staff';
        $data['staff'] = $this->staff_model->get_staff();

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/staff/index', $data);
        $this->load->view('backend/footer');
    }

    public function staff_create()
    {
        $data['title'] = 'Staff';

        $this->load->helper('form');
        $this->load->library('form_validation');

        $this->form_validation->set_rules('first_name_en', 'First Name', 'required');
        $this->form_validation->set_rules('last_name_en', 'Last Name', 'required');

        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('backend/layout', $data);
            $this->load->view('backend/staff/create', $data);
            $this->load->view('backend/footer');
        }
        else
        {
            $this->staff_model->set_staff();

            $this->session->set_userdata('flash_notification.message', 'Created Successfully');

            redirect('admin/staff');
        }
    }

    public function staff_edit($id)
    {
        $data['title'] = 'Staff Edit';
        $data['staff_item'] = $this->staff_model->get_staff($id);

        if (empty($data['staff_item']))
        {
            show_404();
        }

        $this->load->helper('form');
        $this->load->library('form_validation');

        $this->form_validation->set_rules('first_name_en', 'First Name', 'required');
        $this->form_validation->set_rules('last_name_en', 'Last Name', 'required');

        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('backend/layout', $data);
            $this->load->view('backend/staff/edit', $data);
            $this->load->view('backend/footer');
        }
        else
        {
            $this->staff_model->update_staff($id);

            $this->session->set_userdata('flash_notification.message', 'Update Successfully');

            redirect('admin/staff');
        }
    }

    #course 
        public function course_group()
        {
            $data['title'] = 'Admin';
            $data['course_group_items'] = $this->course_model->get_course();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/course_group/index', $data);
            $this->load->view('backend/footer');
        }

        public function course_group_create()
        {
            $data['title'] = 'Admin';
            $data['course_group_items'] = $this->course_model->get_course_code();

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('group', 'Group', 'required');
            $this->form_validation->set_rules('course_code', 'Course Code', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/course_group/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->course_model->set_course();
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/course');
            }
        }

        public function course_group_edit($id)
        {
            $data['title'] = 'Course Edit';
            $data['course_item'] = $this->course_model->get_course($id);

            if (empty($data['course_item']))
            {
                show_404();
            }

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('course_code', 'Course Code', 'required');
            $this->form_validation->set_rules('name_th', 'Thai Name', 'required');
            $this->form_validation->set_rules('name_en', 'English Name', 'required');
            $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/course/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->course_model->update_course($id);
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/course');
            }
        }

        public function course_group_store()
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

            $this->form_validation->set_rules('group', 'Group', 'required');
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
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/curriculum');
            }
        }

        public function curriculum_edit($id)
        {
            $data['title'] = 'Curriculum Edit';
            $data['curriculum_item'] = $this->curriculum_model->get_curriculum($id);

            if (empty($data['curriculum_item']))
            {
                show_404();
            }

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('group', 'Group', 'required');
            $this->form_validation->set_rules('period', 'Period', 'required');
            $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/curriculum/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->curriculum_model->update_curriculum($id);

                $this->session->set_userdata('flash_notification.message', 'Update Successfully');

                redirect('admin/curriculum');
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