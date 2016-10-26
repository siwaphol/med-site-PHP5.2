<?php

class Pages extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('course_model');
        $this->load->model('banner_model');
        $this->load->model('news_model');
        $this->load->model('curriculum_model');
        $this->load->model('setting_model');
    }

	public function view($page = 'home')
	{

		if ( ! file_exists(APPPATH.'/views/pages/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			show_404();
		}

		$data['title'] = 'ภาควิชาจุลชีววิทยา - ' . ucfirst($page); // Capitalize the first letter

		$this->load->view('templates/header', $data);
		if($page==='home'){
			$data['banner'] = $this->banner_model->get_banner();
			// $this->load->view('frontend/home/carousel', $data);
			// $this->load->view('frontend/home/carousel_lightslider', $data);
			$this->load->view('frontend/home/carousel_slick', $data);
		}
		$this->load->view('pages/'.$page, $data);
		$this->load->view('templates/before_content');
		if($page==='home'){

			$data['setting_item'] = $this->setting_model->get_setting();

			$data['top4news'] = $this->news_model->get_latest_4_news();

			$this->load->view('frontend/home/content',$data);
		}
		$this->load->view('templates/footer', $data);
	}

	public function course_index()
	{

		$data['title'] = "กระบวนวิชาทั้งหมด";
		$data['courses']=$this->course_model->get_course();

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
			else if($group == 4){
				$data['title'] =  "Nurse";
			}
			else{
				$data['title'] =  "Graduate";
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

	public function research()
	{
		$data['setting_item'] = $this->setting_model->get_setting(3);
		$data['title'] = $data['setting_item']['name'];

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/research/index',$data);
		$this->load->view('templates/footer', $data);
	}

	public function contact()
	{
		$data['setting_item'] = $this->setting_model->get_setting(4);
		$data['title'] = $data['setting_item']['name'];

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/contact/index',$data);
		$this->load->view('templates/footer', $data);
	}

	public function curriculum_index()
	{

		$data['title'] = "Curriculum";

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/curriculum/index',$data);
		$this->load->view('templates/footer', $data);
	}

	public function curriculum($group){
		if(!empty($group)){
			if($group == 1){
				$group =  "Medicine";
			}
			else if($group == 2){
				$group =  "Master of Science (M.Sc.)";
			}
			else if($group == 3){
				$group =  "Doctor of Philosophy (Ph.D.)";
			}
			else{
				$group =  "International Program";
			}
		}

		$data['title'] = "Curriculum";
		$data['curriculum_item'] = $this->curriculum_model->get_curriculum_by_group($group);

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/curriculum/index',$data);
		$this->load->view('templates/footer', $data);
	}

	public function curriculum_detail($id){
		$data['curriculum_item'] = $this->curriculum_model->get_curriculum($id);
		$data['title'] = "หลักสูตรการศึกษา ประจำปี ";

		$this->load->view('templates/header', $data);
		$this->load->view('templates/before_content');
		$this->load->view('frontend/curriculum/detail',$data);
		$this->load->view('templates/footer', $data);
	}
}