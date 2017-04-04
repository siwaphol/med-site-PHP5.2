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
        $this->load->model('publication_model');
        $this->load->model('staff_publication_model');
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
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
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
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
        $data['title'] = 'Admin';
        $data['news'] = $this->news_model->get_news();

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/news/index', $data);
        $this->load->view('backend/footer');
    }

    public function news_create()
    {
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
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
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
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
            // if file upload has error
            if ( !empty($_FILES['image_path']['name']) && !$this->upload->do_upload('image_path'))
            {
                $this->session->set_userdata('flash_notification.message', $this->upload->display_errors());

                $this->load->view('backend/layout', $data);
                $this->load->view('backend/news/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                if(!empty($_FILES['image_path']['name'])){
                    $uploaded = $this->upload->data();
                    $data['new_image_path'] = 'uploads/' . $uploaded['file_name'];
                }else{
                    $data['new_image_path'] = $data['news_item']['image_path'];
                }

                $this->news_model->update_news($id, $data['new_image_path']);
                $this->session->set_userdata('flash_notification.message', 'Update Successfully');
                redirect('admin/news');
            }
        }
    }

    public function news_delete($id)
    {
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
        $this->news_model->delete_news($id);

        $this->session->set_userdata('flash_notification.message', 'Deleted Successfully');
        redirect('admin/news');
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }

            $data['title'] = 'Admin';
            $data['course'] = $this->course_model->get_course();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/course/index', $data);
            $this->load->view('backend/footer');
        }

        public function course_create()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['course'] = array();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/course/create', $data);
            $this->load->view('backend/footer');
        }

        public function course_delete($id)
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $this->course_model->delete_course($id);

            $this->session->set_userdata('flash_notification.message', 'Deleted Successfully');
            redirect('admin/course');
        }
    # end course

    #setting
        public function setting()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['setting_items'] = $this->setting_model->get_setting();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/setting/index', $data);
            $this->load->view('backend/footer');
        }

        public function setting_edit($id)
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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

    #publication
        public function publication()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Publication';
            $data['text'] = "";
            $data['publications'] = $this->publication_model->get_publication();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/publication/index', $data);
            $this->load->view('backend/footer');
        }

        public function publication_search(){
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['text'] = $this->input->post('text_search');
            $data['title'] = 'Publication';
            $data['publications'] = $this->publication_model->get_publication_search();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/publication/index', $data);
            $this->load->view('backend/footer');
        }

        public function publication_create()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['publication'] = array();
            $data['staff'] = $this->staff_model->get_staff();

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('title', 'Title', 'required');
            // $this->form_validation->set_rules('name_th', 'Thai Name', 'required');
            // $this->form_validation->set_rules('name_en', 'English Name', 'required');
            // $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/publication/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->publication_model->set_publication();
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/publication');
            }
        }

        public function publication_import()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['publication'] = array();
            $data['staff'] = $this->staff_model->get_staff();

           $this->load->view('backend/layout', $data);
            $this->load->view('backend/publication/import', $data);
            $this->load->view('backend/footer');
        }

        public function publication_edit($id)
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            // $data['title'] = 'Setting Edit';
            // $data['publication'] = $this->setting_model->get_setting($id);

            $data['title'] = 'Admin';
            $data['publication'] =  $this->publication_model->get_publication($id);

            if (empty($data['publication']))
            {
                show_404();
            }

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('title', 'Title', 'required');
            //$this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/publication/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->publication_model->update_publication($id);
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/publication');
            }
        }

        public function publication_import_xml()
        {
            if (isset($_FILES['doc']) && ($_FILES['doc']['error'] == UPLOAD_ERR_OK)) {
                $xml = simplexml_load_file($_FILES['doc']['tmp_name']);    
                $json_string = json_encode($xml);    
                $result_array = json_decode($json_string, TRUE);        
            }else {
                redirect('admin/publication/create');
                exit('Failed to open test.xml.');
            }

            foreach ($result_array['PubmedArticle'] as $pubmedArticle) {
                $publication = array();

                $publication['title'] = isset($pubmedArticle['MedlineCitation']['Article']['ArticleTitle'])?$pubmedArticle['MedlineCitation']['Article']['ArticleTitle']:'';
                $publication['journal'] = isset($pubmedArticle['MedlineCitation']['Article']['Journal']['Title'])?$pubmedArticle['MedlineCitation']['Article']['Journal']['Title']:null;

                $authors = $pubmedArticle['MedlineCitation']['Article']['AuthorList']['Author'];
                $publication['authors'] = "";  
                foreach ($authors as $author) {
                    if(!empty($author['LastName']) && !empty($author['Initials'])){
                        $publication['authors'] .= $author['LastName'] . ", " . $author['Initials'] . "., ";
                    }else if(empty($author['LastName']) && !empty($author['Initials'])){
                        $publication['authors'] .=   $author['Initials'] . "., ";
                    }else if(!empty($author['LastName']) && empty($author['Initials'])){
                        $publication['authors'] .=   $author['LastName'] . "., ";
                    }
                    
                }
                if(!empty($pubmedArticle['MedlineCitation']['Article']['Abstract'])){

                    if(count($pubmedArticle['MedlineCitation']['Article']['Abstract']['AbstractText']) > 1){
                        $publication['abstract'] = $pubmedArticle['MedlineCitation']['Article']['Abstract']['AbstractText'][0];
                    }else{
                        $publication['abstract'] = isset($pubmedArticle['MedlineCitation']['Article']['Abstract']['AbstractText'])?$pubmedArticle['MedlineCitation']['Article']['Abstract']['AbstractText']:null;
                    }
                }
                

                $publication['pubmed_link'] = isset($pubmedArticle['MedlineCitation']['PMID'])?$pubmedArticle['MedlineCitation']['PMID']:null;

                $publication['year'] = isset($pubmedArticle['MedlineCitation']['Article']['Journal']['JournalIssue']['PubDate']['Year'])?$pubmedArticle['MedlineCitation']['Article']['Journal']['JournalIssue']['PubDate']['Year']:null;
                $journalIssue = isset($pubmedArticle['MedlineCitation']['Article']['Journal']['JournalIssue'])?$pubmedArticle['MedlineCitation']['Article']['Journal']['JournalIssue']:null;
                if ($journalIssue) {
                    $issue = isset($journalIssue['Issue'])?" (".$journalIssue['Issue'].")":null;
                    $publication['volume'] = isset($journalIssue['Year'])?$journalIssue['Year'] . $issue:null;
                }

                $pages = isset($pubmedArticle['MedlineCitation']['Article']['Pagination']['MedlinePgn'])?$pubmedArticle['MedlineCitation']['Article']['Pagination']['MedlinePgn']:null;
                if (!empty($pages)) {
                    $exploded_pages = explode("-", $pages);
                    if (count($exploded_pages)>=2) {
                        $substrStart = 0 - strlen($exploded_pages[1]);
                        $publication['pages'] = $exploded_pages[0] ."-" . (substr($exploded_pages[0], 0 ,$substrStart) . $exploded_pages[1]);
                    }else{
                        $publication['pages'] = $exploded_pages[0];
                    }
                }

                $publication['created_at'] = now();
                $publication['updated_at'] = now();

                $responds = $this->publication_model->import_publication($publication);

                // ให้ link กับ user
                if(!empty($_POST['staff_id'])){

                    // print "<pre>"; 
                    // print_r($_POST['staff_id']);
                    // print "</pre>";

                    // print "<pre>"; 
                    // print_r($responds);
                    // print "</pre>";

                    $this->staff_publication_model->insert_staff_publication($_POST['staff_id'], $responds[0]['id']);

                }
                
                
            }

            $this->session->set_userdata('flash_notification.message', 'Created Successfully');

            redirect('admin/publication');
        }

        public function staff_publications()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Staff Publication';
            $data['publications'] = $this->staff_publication_model->get_staff_publication();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/staff_publication/index', $data);
            $this->load->view('backend/footer');
        }

        public function staff_publication_create()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['publication'] = array();

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('staff_id', 'Staff Id', 'required');
            $this->form_validation->set_rules('publication_id', 'Publication', 'required');
            // $this->form_validation->set_rules('name_th', 'Thai Name', 'required');
            // $this->form_validation->set_rules('name_en', 'English Name', 'required');
            // $this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/staff_publication/create', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->staff_publication_model->set_staff_publication();
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/staff_publications');
            }
        }

        public function staff_publication_edit($staff_id, $publication_id)
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            // $data['title'] = 'Setting Edit';
            // $data['publication'] = $this->setting_model->get_setting($id);

            $data['title'] = 'Admin';
            $data['publication'] =  $this->staff_publication_model->get_staff_publication($staff_id, $publication_id);

            if (empty($data['publication']))
            {
                show_404();
            }

            $this->load->helper('form');
            $this->load->library('form_validation');

            $this->form_validation->set_rules('staff_id', 'Staff Id', 'required');
            $this->form_validation->set_rules('publication_id', 'Publication', 'required');
            //$this->form_validation->set_rules('content', 'Content', 'required');

            if ($this->form_validation->run() === FALSE)
            {
                $this->load->view('backend/layout', $data);
                $this->load->view('backend/staff_publication/edit', $data);
                $this->load->view('backend/footer');
            }
            else
            {
                $this->staff_publication_model->update_staff_publication($staff_id, $publication_id);
              
                $this->session->set_userdata('flash_notification.message', 'Created Successfully');

                redirect('admin/staff_publications');
            }
        }

        
    #end publication
    public function staff()
    {
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
        $data['title'] = 'Staff';
        $data['staff'] = $this->staff_model->get_staff();

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/staff/index', $data);
        $this->load->view('backend/footer');
    }

    public function staff_create()
    {
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
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
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            if(!empty($_GET['group_id']) && $_GET['course_id']){
                $group_id = $_GET['group_id'];
                $course_id = $_GET['course_id'];
                $data['course_group_pubmedArticle'] = $this->course_model->get_course_list($group_id, $course_id);
            }
            $data['title'] = 'Admin';
            $data['course_group_items'] = $this->course_model->get_course_code();
            
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['course'] = array();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/course/create', $data);
            $this->load->view('backend/footer');
        }
    #end course

    #Curriculum 
        public function curriculum()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['curriculum'] = $this->curriculum_model->get_curriculum();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/curriculum/index', $data);
            $this->load->view('backend/footer');
        }

        public function curriculum_create()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Admin';
            $data['curriculum'] = array();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/curriculum/create', $data);
            $this->load->view('backend/footer');
        }
    #end Curriculum
    public function banner()
    {
        if($this->check_login() == true){
            $session_data = $this->session->userdata('logged_in');
            $data['username'] = $session_data['username'];
        }
        $data['title'] = 'Banner';
        $data['banner'] = $this->banner_model->get_banner();

        $this->load->view('backend/layout', $data);
        $this->load->view('backend/banner/index', $data);
        $this->load->view('backend/footer');
    }

        public function banner_create()
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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

        

        public function educations(){
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Educations';
            $data['staff'] = $this->staff_model->get_staff();

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/educations/index', $data);
            $this->load->view('backend/footer');
        }

        public function staff_educations($staff_id)
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
            $data['title'] = 'Firstname Lastname Educations';
            $data['educations'] = $this->staff_education_model->get_staff_educations($staff_id);
            $data['staff_id'] = $staff_id;

            $this->load->view('backend/layout', $data);
            $this->load->view('backend/educations/staff_index', $data);
            $this->load->view('backend/footer');
        }

        public function staff_educations_create($staff_id)
        {
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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
            if($this->check_login() == true){
                $session_data = $this->session->userdata('logged_in');
                $data['username'] = $session_data['username'];
            }
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

        // File Manager
        public function filemanager_show()
        {
            $this->load->view('backend/filemanager/index');
        }
}