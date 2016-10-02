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
			$query = $this->db->get('publications');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('publications', array('id' => $id));
		return $query->row_array();
	}

	public function get_publication_search(){
		$text = $this->input->post('text_search');

		$sql = "select * from publications where title like '%".$text."%'";
		 			
        $query = $this->db->query($sql);
        return $query->result_array();
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

		return $this->db->insert('publications', $data);
	}

	public function import_publication($data)
	{
		// $data = array(
		// 	'title' => $this->input->post('title'),
		// 	'journal' => $this->input->post('journal'),
		// 	'authors' => $this->input->post('authors'),
		// 	'abstract' => $this->input->post('abstract'),
		// 	'pubmed_link' => $this->input->post('pubmed_link'),
		// 	'year' => $this->input->post('year'),
		// 	'volume' => $this->input->post('volume'),
		// 	'pages' => $this->input->post('pages'),
		// 	'created_at' => now(),
		// 	'updated_at' => now(),
		// );

		return $this->db->insert('publications', $data);
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
		$this->db->update('publications', $data);
	}
}