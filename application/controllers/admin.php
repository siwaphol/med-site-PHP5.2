<?php
session_start();
class Admin extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->load->model('course_model');
        $this->load->model('staff_model');
        $this->load->model('curriculum_model');
        $this->load->model('banner_model');
        $this->load->model('setting_model');
        $this->load->model('users_model');
        $this->load->model('staff_education_model');
    }

    public function index()
    {
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
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
        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = 'gif|jpg|png';
        $config['max_size'] = '2048';
        $config['max_width']  = '0';
        $config['max_height']  = '0';
        $this->load->library('upload', $config);
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
            if ( ! $this->upload->do_upload('image_path'))
            {
                $this->session->set_userdata('flash_notification.message', $this->upload->display_errors());

                $this->load->view('backend/layout', $data);
                $this->load->view('backend/news', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $uploaded = $this->upload->data();
                $_POST['image_path'] = 'uploads/' . $uploaded['file_name'];

                $this->news_model->set_news();
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');
                redirect('admin/news');
            }
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

        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = 'gif|jpg|png';
        $config['max_size'] = '2048';
        $config['max_width']  = '0';
        $config['max_height']  = '0';
        $this->load->library('upload', $config);
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
            if ( ! $this->upload->do_upload('image_path'))
            {
                $this->session->set_userdata('flash_notification.message', $this->upload->display_errors());

                $this->load->view('backend/layout', $data);
                $this->load->view('backend/news/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $uploaded = $this->upload->data();
                $_POST['image_path'] = 'uploads/' . $uploaded['file_name'];

                $this->news_model->update_news($id);
                $this->session->set_userdata('flash_notification.message', 'Update Successfully');
                redirect('admin/news');
            }
        }
    }

    #user 
        function user_login()
        {
            //This method will have the credentials validation
            $this->load->library('form_validation');
         
            $this->form_validation->set_rules('username', 'Username', 'trim|required');
            $this->form_validation->set_rules('password', 'Password', 'trim|required|callback_check_database');
         
            if($this->form_validation->run() == FALSE)
            {
                //Field validation failed.  User redirected to login page
                // $data['title'] = 'Admin';
                // $this->load->view('backend/layout', $data);
                $this->load->view('backend/login/login_view');
                //$this->load->view('backend/footer');
            }
            else
            {
                //Go to private area
                redirect('admin', 'refresh');
            }
         
        }

        function check_database($password)
        {
            //Field validation succeeded.  Validate against database
            $username = $this->input->post('username');
         
            //query the database
            $result = $this->users_model->login($username, $password);
         
            if($result)
            {
                $sess_array = array();
                foreach($result as $row)
                {
                    $sess_array = array(
                        'id' => $row->id,
                        'username' => $row->username
                    );
                    $this->session->set_userdata('logged_in', $sess_array);
                }
                return TRUE;
            }
            else
            {
                $this->form_validation->set_message('check_database', 'Invalid username or password');
                return false;
            }
        }

        function check_login()
        {
            if($this->session->userdata('logged_in'))
            {
                //get data from session
                // $session_data = $this->session->userdata('logged_in');
                // $data['username'] = $session_data['username'];
                //$this->load->view('home_view', $data);
                return true;
            }
            else
            {
                //If no session, redirect to login page
                // $this->load->view('backend/layout', $data);
                //$this->load->view('');
                redirect('admin/check_login', 'refresh');
                // $this->load->view('backend/footer');
            }
        }

        function login_view(){
            $this->load->library('form_validation');
            $this->load->view('backend/login/login_view');
        }
         
        function logout()
        {
            $this->session->unset_userdata('logged_in');
            session_destroy();
            redirect('admin', 'refresh');
        }

    #end user

    #course 
        public function course()
        {
            $this->check_login();
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
    # end course

    #setting
        public function setting()
        {
            $data['title'] = 'Admin';
            $data['setting_items'] = $this->setting_model->get_setting();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/setting/index', $data);
            $this->load->view('backend/footer');
        }

        public function setting_edit($id)
        {
            $data['title'] = 'Setting Edit';
            $data['setting_item'] = $this->setting_model->get_setting($id);

            if (empty($data['setting_item']))
            {
                show_404();
            }

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('setting_name', 'Name', 'required');
            $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/setting/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->setting_model->update_setting($id);
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/setting');
            }
        }
    #end setting

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
        $config['upload_path'] = './uploads/staff/';
        $config['allowed_types'] = 'gif|jpg|png';
        $config['max_size'] = '2048';
        $config['max_width']  = '0';
        $config['max_height']  = '0';

        $this->load->helper('form');
        $this->load->library('form_validation');
        if($this->input->post('first_name_en') && $this->input->post('last_name_en')){
            $config['file_name'] = strtolower($this->input->post('first_name_en')).'_' .strtolower($this->input->post('last_name_en')).'.jpg';
        }
        $this->load->library('upload', $config);

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
            if ( ! $this->upload->do_upload('image_path'))
            {
                $error = array('error' => $this->upload->display_errors());

                $this->load->view('backend/layout', $data);
                $this->load->view('backend/staff/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $uploaded = $this->upload->data();
                $_POST['image_path'] = 'uploads/staff/' . $uploaded['file_name'];

                $this->staff_model->set_staff();
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');
                redirect('admin/staff');
            }
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

        $config['upload_path'] = './uploads/staff/';
        $config['allowed_types'] = 'gif|jpg|png';
        $config['max_size'] = '2048';
        $config['max_width']  = '0';
        $config['max_height']  = '0';
        $this->load->helper('form');
        $this->load->library('form_validation');
        if($this->input->post('first_name_en') && $this->input->post('last_name_en')){
            $config['file_name'] = strtolower($this->input->post('first_name_en')).'_' .strtolower($this->input->post('last_name_en')).'.jpg';
        }
        $this->load->library('upload', $config);

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
            if (isset($_FILES['image_path']['name']) && !empty($_FILES['image_path']['name'])) {
                if (! $this->upload->do_upload('image_path'))
                {
                    $error = array('error' => $this->upload->display_errors());

                    $this->load->view('backend/layout', $data);
                    $this->load->view('backend/staff/edit', $data);
                    $this->load->view('backend/footer');
                }
                else
                {
                    $uploaded = $this->upload->data();
                    $_POST['image_path'] = 'uploads/staff/' . $uploaded['file_name'];

                    $this->staff_model->update_staff($id);
                    $this->session->set_userdata('flash_notification.message', 'Update Successfully');
                    redirect('admin/staff');
                }
            }else{
                $_POST['image_path'] = $data['staff_item']['image_path'];
                $this->staff_model->update_staff($id);
                $this->session->set_userdata('flash_notification.message', 'Update Successfully');
                redirect('admin/staff');
            }
        }
    }

    #course group 
        public function course_group()
        {
            if(empty($_GET['group'])){
                $group = 1;
            }
            else{
                $group = $_GET['group'];
            }
            $data['title'] = 'Admin';
            $data['course_group_items'] = $this->course_model->get_course_by_group($group);
            if(!empty($data['course_group_items'])){
                $data['sub_title'] = $data['course_group_items'][0]['name'];
            }
            

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
                $this->course_model->set_course_group();
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/course_group');
            }
        }

        public function course_group_edit()
        {
            if(!empty($_GET['group_id']) && $_GET['course_id']){
                $group_id = $_GET['group_id'];
                $course_id = $_GET['course_id'];
                $data['course_group_value'] = $this->course_model->get_course_list($group_id, $course_id);
            }
            $data['title'] = 'Admin';
            $data['course_group_items'] = $this->course_model->get_course_code();
            // print $group_id;
            // print $course_id;
            // exit();
            
            
            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('group', 'Group', 'required');
            $this->form_validation->set_rules('course_code', 'Course Code', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/course_group/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->course_model->update_course_group($group_id, $course_id);
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/course_group');
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

            $this->form_validation->set_rules('group_name', 'Group', 'required');
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

            $this->form_validation->set_rules('group_name', 'Group', 'required');
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
        public function banner()
        {
            $data['title'] = 'Banner';
            $data['banner'] = $this->banner_model->get_banner();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/banner/index', $data);
            $this->load->view('backend/footer');
        }

        public function banner_create()
        {
            $data['title'] = 'Admin';

            $config['upload_path'] = './uploads/';
            $config['allowed_types'] = 'gif|jpg|png';
            $config['max_size'] = '2048';
            $config['max_width']  = '0';
            $config['max_height']  = '0';
            if($this->input->post('name')){
                $config['file_name'] = $this->input->post('name') . '.jpg';
            }
            $this->load->library('upload', $config);
            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('name', 'File Name', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/banner/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                if ( ! $this->upload->do_upload('image_path'))
                {
                    $error = array('error' => $this->upload->display_errors());

                    $this->load->view('backend/layout', $data);
                    $this->load->view('backend/banner/create', $data);
                    $this->load->view('backend/footer');
                }
                else
                {
                    $uploaded = $this->upload->data();
                    $_POST['image_path'] = 'uploads/' . $uploaded['file_name'];

                    $this->banner_model->set_banner();
                    $this->session->set_userdata('flash_notification.message', 'Created Successfully');
                    redirect('admin/banner');
                }
            }
        }

        public function banner_edit($id)
        {
            $config['upload_path'] = './uploads/';
            $config['allowed_types'] = 'gif|jpg|png';
            $config['max_size'] = '2048';
            $config['max_width']  = '0';
            $config['max_height']  = '0';
            if($this->input->post('name')){
                $config['file_name'] = $this->input->post('name') . '.jpg';
            }
            $this->load->library('upload', $config);
            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('name', 'File Name', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $data['title'] = 'Banner';
                $data['banner_item'] = $this->banner_model->get_banner($id);

                $this->load->view('backend/layout', $data);
                $this->load->view('backend/banner/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                if ( ! $this->upload->do_upload('image_path'))
                {
                    $error = array('error' => $this->upload->display_errors());

                    $this->load->view('backend/layout', $data);
                    $this->load->view('backend/banner/create', $data);
                    $this->load->view('backend/footer');
                }
                else
                {
                    $uploaded = $this->upload->data();
                    $_POST['image_path'] = 'uploads/' . $uploaded['file_name'];

                    $this->banner_model->update_banner($id);
                    $this->session->set_userdata('flash_notification.message', 'Update Successfully');
                    redirect('admin/banner');
                }
            }
        }

        public function publication()
        {
            $data['title'] = 'Publication';
            $data['banner'] = $this->publication_model->get_publication();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/publication/index', $data);
            $this->load->view('backend/footer');
        }

        public function educations(){
            $data['title'] = 'Educations';
            $data['staff'] = $this->staff_model->get_staff();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/educations/index', $data);
            $this->load->view('backend/footer');
        }

        public function staff_educations($staff_id)
        {
            $data['title'] = 'Firstname Lastname Educations';
            $data['educations'] = $this->staff_education_model->get_staff_educations($staff_id);
            $data['staff_id'] = $staff_id;

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/educations/staff_index', $data);
            $this->load->view('backend/footer');
        }

        public function staff_educations_create($staff_id)
        {
            $data['title'] = 'Firstname Lastname Education Create';
            $data['educations'] = $this->staff_education_model->get_staff_educations($staff_id);
            $data['staff_id'] = $staff_id;

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('year', 'Year', 'required');
            $this->form_validation->set_rules('other_details', 'Details', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/educations/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->staff_education_model->set_staff_education($staff_id);
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');
                redirect('admin/staff_educations/'.$staff_id);
            }
        }

        public function staff_educations_edit($staff_id, $id)
        {
            $data['title'] = 'Firstname Lastname Education Edit';
            $data['education'] = $this->staff_education_model->get_staff_educations($staff_id, $id);
            $data['staff_id'] = $staff_id;

            if (empty($data['education']))
            {
                show_404();
            }

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('year', 'Year', 'required');
            $this->form_validation->set_rules('other_details', 'Details', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/educations/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->staff_education_model->update_staff_education($staff_id, $id);
                $this->session->set_userdata('flash_notification.message', 'Update Successfully');

                redirect('admin/staff_educations/'.$staff_id);
            }
        }
}