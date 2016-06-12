<?php
class Publication_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_publication($id = FALSE)
	{
		if ($id === FALSE)
		{
			$query = $this->db->get('publication');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('publication', array('id' => $id));
		return $query->row_array();
	}

	public function set_publication()
	{
		$data = array(
			'title' => $this->input->post('title'),
			'journal' => $this->input->post('journal'),
			'authors' => $this->input->post('authors'),
			'abstract' => $this->input->post('abstract'),
			'pubmed_link' => $this->input->post('pubmed_link'),
			'year' => $this->input->post('year'),
			'volume' => $this->input->post('volume'),
			'pages' => $this->input->post('pages'),
			'created_at' => now(),
			'updated_at' => now(),
		);

		return $this->db->insert('publication', $data);
	}

	public function update_publication($id)
	{
		$data = array(
			'title' => $this->input->post('title'),
			'journal' => $this->input->post('journal'),
			'authors' => $this->input->post('authors'),
			'abstract' => $this->input->post('abstract'),
			'pubmed_link' => $this->input->post('pubmed_link'),
			'year' => $this->input->post('year'),
			'volume' => $this->input->post('volume'),
			'pages' => $this->input->post('pages'),
			'updated_at' => now(),
		);

		$this->db->where('id', $id);
		$this->db->update('publication', $data);
	}
}