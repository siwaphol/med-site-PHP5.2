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

	public function get_course($slug = FALSE)
	{
		if ($slug === FALSE)
		{
			$query = $this->db->get('courses');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('courses', array('slug' => $slug));
		return $query->row_array();
	}

	public function set_course()
	{
		$this->load->helper('url');

		$slug = url_title($this->input->post('title'), 'dash', TRUE);

		$data = array(
			'headline' => $this->input->post('title'),
			'slug' => $slug,
			'message' => $this->input->post('text')
		);

		return $this->db->insert('courses', $data);
	}
}