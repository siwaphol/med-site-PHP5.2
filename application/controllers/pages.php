<?php

class Pages extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('course_model');
    }

	public function view($page = 'home')
	{

		if ( ! file_exists(APPPATH.'/views/pages/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			show_404();
		}

		$data['title'] = ucfirst($page); // Capitalize the first letter

		$this->load->view('templates/header', $data);
		if($page==='home'){
			$this->load->view('frontend/home/carousel');
		}
		$this->load->view('pages/'.$page, $data);
		$this->load->view('templates/before_content');
		if($page==='home'){
			$this->load->view('frontend/home/content');
		}
		$this->load->view('templates/footer', $data);
	}

	public function course_index()
	{

		$data['title'] = "กระบวนวิชาทั้งหมด";

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/course/index',$data);
		$this->load->view('templates/footer', $data);
	}

	public function course($group)
	{
		if(!empty($group)){
			if($group == 1){
				$data['title'] =  "Medicine";
			}
			else if($group == 2){
				$data['title'] =  "Dentistry";
			}
			else if($group == 3){
				$data['title'] =  "Pharmacy";
			}
			else{
				$data['title'] =  "Nurse";
			}
		}
		

		$data['course_item'] = $this->course_model->get_course_by_group($group);

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/course_group/index',$data);
		$this->load->view('templates/footer', $data);
	}

	public function course_detail($id){
		$data['course_item'] = $this->course_model->get_course($id);
		$data['title'] = $data['course_item']['name_th']."(".$data['course_item']['name_en'].")";

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/course/detail',$data);
		$this->load->view('templates/footer', $data);
	}

	public function course_group($group)
	{
		$data['courses'] = $this->course_model->get_by_group($group);

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/course_group/index',$data);
		$this->load->view('templates/footer', $data);
	}
}