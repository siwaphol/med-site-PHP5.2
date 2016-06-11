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

	public function get_curriculum($id = FALSE)
	{
		if ($id === FALSE)
		{
			$query = $this->db->get('curriculums');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('curriculums', array('id' => $id));
		return $query->row_array();
	}

	public function set_curriculum()
	{
		$data = array(
			'group' =>$this->input->post('group'),
			'period' => $this->input->post('period'),
			'content' => $this->input->post('content'),
			'created_at' => now(),
			'updated_at' => now(),
		);

		return $this->db->insert('curriculums', $data);
	}

	public function update_curriculum($id)
	{
		$data = array(
			'group' =>$this->input->post('group'),
			'period' => $this->input->post('period'),
			'content' => $this->input->post('content'),
			'updated_at' => now(),
		);

		$this->db->where('id', $id);
		$this->db->update('curriculums', $data);
	}
}