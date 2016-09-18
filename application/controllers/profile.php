<?php
class Profile extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('profile_model');
        $this->load->model('staff_education_model');
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

    public function show($id)
    {
        $data['user'] = $this->profile_model->get_profile($id);

        //$userEducations = App\UserEducation::where('user_profile_id', $id)->get();
        if (empty($data['user']))
        {
            show_404();
        }

        $data['title'] = $data['user']['first_name_en'] . " " . $data['user']['last_name_en'] . " | Department of Microbiology Profiles";
        $data['body_class'] = 'profile';

        // for future use
        $data['userEducations'] = $this->staff_education_model->get_staff_educations($id);

        $this->load->view('second_template/header', $data);
        $this->load->view('profile/show', $data);
        $this->load->view('second_template/footer');
//        $this->load->view('profile/script');
        $this->load->view('second_template/footer_end');
    }

    public function create()
    {
        $data['title'] = 'Create new user profile';
        $data['body_class'] = 'browse';

        $this->load->helper('form');
        $this->load->library('form_validation');

        $this->form_validation->set_rules('title', 'Title', 'required');
        $this->form_validation->set_rules('text', 'text', 'required');

        if ($this->form_validation->run() === FALSE)
        {
            $this->load->view('templates/header', $data);
            $this->load->view('profile/create');
            $this->load->view('templates/footer');

        }
        else
        {
            $this->profile_model->set_news();
            $this->load->view('profile/success');
        }

//        $this->load->view('second_template/header', $data);
//        $this->load->view('profile/create');
//        $this->load->view('second_template/footer');
//        $this->load->view('second_template/footer_end');
    }
}