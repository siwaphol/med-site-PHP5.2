<?php
class Banner_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_banner($id = FALSE)
	{
		if ($id === FALSE)
		{
			$query = $this->db->get('banner');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('banner', array('id' => $id));
		return $query->row_array();
	}

	public function set_banner()
	{
		$data = array(
			'name' => $this->input->post('name'),
			'image_path' => $this->input->post('image_path'),
		);

		return $this->db->insert('banner', $data);
	}

	public function update_banner($id)
	{
		$data = array(
			'name' => $this->input->post('name'),
			'image_path' => $this->input->post('image_path'),
		);

		$this->db->where('id', $id);
		$this->db->update('banner', $data);
	}

}