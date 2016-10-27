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
			$this->db->order_by("code","asc");
			$query = $this->db->get('courses');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('courses', array('id' => $id));
		return $query->row_array();
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

	public function delete_course($id)
	{
		$this->db->where('id', $id);
		$this->db->delete('courses');
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

	public function set_course_group()
	{
		$data = array(
			'course_group_id' => $this->input->post('group'),
			'course_id' => $this->input->post('course_code'),
		);
        
		$this->db->insert('course_group_list ', $data);
	}

	public function get_course_group(){
		$sql = "select cl.course_id, cl.course_group_id, c.code, cg.name from course_group_list cl 
				INNER JOIN courses c ON cl.course_id = c.id
				INNER JOIN  course_group cg ON cl.course_group_id = cg.id
				ORDER BY cl.course_group_id";
        $query = $this->db->query($sql);
		return $query->result_array();
	}

	public function get_course_list($gID, $cId){
		$sql = "select cl.course_id, cl.course_group_id, c.code, cg.name from course_group_list cl 
				INNER JOIN courses c ON cl.course_id = c.id
				INNER JOIN  course_group cg ON cl.course_group_id = cg.id
				WHERE cl.course_group_id = ".$gID." and  cl.course_id =".$cId;
        $query = $this->db->query($sql);
		return $query->result_array();
	}

	public function update_course_group($gId , $cId){

		$sql = "update course_group_list
				SET course_group_id = ".$this->input->post('group_id').", course_id = ".$this->input->post('course_code')."
				WHERE course_group_id = ".$gId." and  course_id =".$cId;
        $query = $this->db->query($sql);
		// $data = array(
		// 	'course_group_id' => $this->input->post('group'),
		// 	'course_id' => $this->input->post('course_code'),
		// );
		// $this->db->where('course_group_id', $gId);
		// $this->db->where('course_id', $cId);
		// $this->db->update('course_group_list ', $data);

	}

	public function get_course_code(){
		$query = $this->db->get('courses');
		return $query->result_array();
	}

	public function get_course_by_group($id){
		$sql = "select cl.course_id, cl.course_group_id, c.code, cg.name, c.name_th, c.name_en from course_group_list cl 
				INNER JOIN courses c ON cl.course_id = c.id
				INNER JOIN  course_group cg ON cl.course_group_id = cg.id
				WHERE cl.course_group_id = ".$id."
				ORDER BY cl.course_group_id";
        $query = $this->db->query($sql);
		return $query->result_array();
	}


}