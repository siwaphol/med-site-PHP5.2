<?php
class Curriculum_model extends CI_Model { 

	public function __construct()
	{
		$this->load->database();
	}

	public function get_latest_4_curriculum($slug=FALSE)
	{
		if($slug===FALSE){
            $sql = "select * from curriculums WHERE (start_date>=CURDATE() or start_date is NULL)
                    AND (end_date>CURDATE() or end_date is NULL) ORDER BY updated_at DESC LIMIT 4";
            $query = $this->db->query($sql);
			return $query->result_array();
		}
		return null;
	}

	public function get_curriculum($slug = FALSE)
	{
		if ($slug === FALSE)
		{
			$query = $this->db->get('curriculums');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('curriculums', array('slug' => $slug));
		return $query->row_array();
	}

	public function set_curriculum()
	{
		$data = array(
			'group' =>"med",
			'period' => $this->input->post('period'),
			'content' => $this->input->post('content'),
			'created_at' => now(),
			'updated_at' => now(),
		);

		return $this->db->insert('curriculum', $data);
	}
}