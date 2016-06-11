<?php
class Course_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_latest_4_course($slug=FALSE)
	{
		if($slug===FALSE){
            $sql = "select * from courses WHERE (start_date>=CURDATE() or start_date is NULL)
                    AND (end_date>CURDATE() or end_date is NULL) ORDER BY updated_at DESC LIMIT 4";
            $query = $this->db->query($sql);
			return $query->result_array();
		}
		return null;
	}

	public function get_course($id = FALSE)
	{
		if ($id === FALSE)
		{
			$query = $this->db->get('courses');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('courses', array('id' => $id));
		return $query->row_array();
	}

	public function get_course_code(){
		$query = $this->db->get('courses');
		return $query->result_array();
	}

	public function set_course()
	{
		$data = array(
			'code' => $this->input->post('course_code'),
			'name_th' => $this->input->post('name_th'),
			'name_en' => $this->input->post('name_en'),
			'other_details' => $this->input->post('content'),
			'created_at' => now(),
			'updated_at' => now(),
		);

		return $this->db->insert('courses', $data);
	}

	public function update_course($id)
	{
		$data = array(
			'code' => $this->input->post('course_code'),
			'name_th' => $this->input->post('name_th'),
			'name_en' => $this->input->post('name_en'),
			'other_details' => $this->input->post('content'),
			'updated_at' => now(),
		);

		$this->db->where('id', $id);
		$this->db->update('courses', $data);
	}
}