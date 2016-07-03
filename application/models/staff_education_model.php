<?php
class Staff_education_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_staff_educations($staff_id, $id=FALSE)
	{
		$whereArr = array('staff_id' => $staff_id);
		if ($id!==FALSE) {
			$whereArr['id'] = $id;
			$query = $this->db->get_where('staff_educations', $whereArr);

			return $query->row_array();
		}

		$query = $this->db->get_where('staff_educations', $whereArr);
		
		return $query->result_array();
	}

	public function set_staff_education($staff_id)
	{
		$data = array(
			'staff_id' => $staff_id,
			'year' =>$this->input->post('year'),
			'other_details' => $this->input->post('other_details'),
			'created_at' => now(),
			'updated_at' => now(),
		);

		return $this->db->insert('staff_educations', $data);
	}

	public function update_staff_education($staff_id, $id)
	{
		$data = array(
			'year' =>$this->input->post('year'),
			'other_details' => $this->input->post('other_details'),
			'updated_at' => now(),
		);

		$this->db->where('staff_id', $staff_id);
		$this->db->where('id', $id);
		$this->db->update('staff_educations', $data);
	}
}