<?php
class Staff_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_staff($id = FALSE)
	{
		if ($id === FALSE)
		{
			$query = $this->db->get('staffs');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('staffs', array('id' => $id));
		return $query->row_array();
	}

	public function set_staff()
	{
		$data = array(
			'gender' => $this->input->post('gender'),
			'job_title_th' => $this->input->post('job_title_th'),
			'job_title_en' => $this->input->post('job_title_en'),
			'prefix_th' => $this->input->post('prefix_th'),
			'prefix_en' => $this->input->post('prefix_en'),
			'first_name_th' => $this->input->post('first_name_th'),
			'first_name_en' => $this->input->post('first_name_en'),
			'last_name_en' => $this->input->post('last_name_en'),
			'last_name_th' => $this->input->post('last_name_th'),
			'position' => $this->input->post('position'),
			'research_of_interest' => $this->input->post('research_of_interest'),
			'phone' => $this->input->post('phone'),
			'email1' => $this->input->post('email1'),
			'email2' => $this->input->post('email2'),
			'qualifications' => $this->input->post('qualifications'),
			'other_details' => $this->input->post('other_details'),
			'image_path' => $this->input->post('image_path'),
			'office_details' => $this->input->post('office_details'),
			'education_details' => $this->input->post('education_details'),
			'education_extra' => $this->input->post('education_extra'),
			'created_at' => now(),
			'updated_at' => now(),
		);

		return $this->db->insert('staffs', $data);
	}

	public function update_staff($id)
	{
		$data = array(
			'gender' => $this->input->post('gender'),
			'job_title_th' => $this->input->post('job_title_th'),
			'job_title_en' => $this->input->post('job_title_en'),
			'prefix_th' => $this->input->post('prefix_th'),
			'prefix_en' => $this->input->post('prefix_en'),
			'first_name_th' => $this->input->post('first_name_th'),
			'first_name_en' => $this->input->post('first_name_en'),
			'last_name_en' => $this->input->post('last_name_en'),
			'last_name_th' => $this->input->post('last_name_th'),
			'position' => $this->input->post('position'),
			'research_of_interest' => $this->input->post('research_of_interest'),
			'phone' => $this->input->post('phone'),
			'email1' => $this->input->post('email1'),
			'email2' => $this->input->post('email2'),
			'qualifications' => $this->input->post('qualifications'),
			'other_details' => $this->input->post('other_details'),
			'image_path' => $this->input->post('image_path'),
			'office_details' => $this->input->post('office_details'),
			'education_details' => $this->input->post('education_details'),
            'education_extra' => $this->input->post('education_extra'),
            'updated_at' => now(),
		);

		$this->db->where('id', $id);
		$this->db->update('staffs', $data);
	}
}