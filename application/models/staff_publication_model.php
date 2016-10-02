<?php
class Staff_publication_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_staff_publication($staff_id=FALSE, $publication_id=FALSE)
	{
		$whereArr = array();
		if ($publication_id !== FALSE && $staff_id !== FALSE) {
			$whereArr['staff_id'] = $staff_id;
			$whereArr['publication_id'] = $publication_id;
			$query = $this->db->get_where('staff_publication', $whereArr);

			return $query->row_array();
		}

		$sql = "select n.staff_id, n.publication_id, s.first_name_th as first_name_th, s.last_name_th as last_name_th, p.title as title from staff_publication n 
		 			INNER JOIN staffs s ON n.staff_id = s.id
		 			INNER JOIN publications p ON n.publication_id = p.id";
        $query = $this->db->query($sql);


		//$query = $this->db->get('staff_publication');
		
		return $query->result_array();
	}
	

	public function set_staff_publication()
	{
		$data = array(
			'staff_id' => $this->input->post('staff_id'),
			'publication_id' =>$this->input->post('publication_id'),
		);

		return $this->db->insert('staff_publication', $data);
	}

	public function update_staff_publication($staff_id, $publication_id)
	{
		$data = array(
			'staff_id' => $this->input->post('staff_id'),
			'publication_id' =>$this->input->post('publication_id'),
		);

		$this->db->where('staff_id', $staff_id);
		$this->db->where('publication_id', $publication_id);
		$this->db->update('staff_publication', $data);
	}
}