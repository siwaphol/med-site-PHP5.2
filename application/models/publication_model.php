<?php
class Publication_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_publication($id = FALSE)
	{
        $this->db->order_by('year','desc');
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
		$staff_id = $this->input->post('staff_id');
        $joinSql = "";
        $whereSql = "";
        if ($staff_id){
            $joinSql = " inner join staff_publication 
            on staff_publication.publication_id=publications.id ";
            $whereSql = " and staff_publication.staff_id=" . $staff_id;
        }

		$sql = "select publications.* from publications {$joinSql} where title like '%".$text."%' {$whereSql}";
		 			
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
		$this->db->where('title', $data['title']);
		$query = $this->db->get('publications');
		if ( $query->num_rows() <= 0 )
		{
			$this->db->flush_cache();
			$this->db->insert('publications', $data);
			$this->db->flush_cache();
			$this->db->where('title', $data['title']);
			$query = $this->db->get('publications');
		}
			
		return $query->result_array();
		
	}

    public function record_count() {
        return $this->db->count_all("publications");
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

    public function fetch_publication($limit, $start, $staff_id) {
    	$this->db->select('publication_id');
    	$this->db->where('staff_id', $staff_id);

    	$query = $this->db->get('staff_publication');
    	if ($query->num_rows() <= 0) {
    		return null;	
    	}

    	$pubArr = array();
    	foreach ($query->result() as $value) {
    		$pubArr[] = $value->publication_id;
    	}
    	// it did works
    	// var_dump($pubArr);
    	// die();

    	$this->db->flush_cache();
        $this->db->where_in('id', $pubArr);
        $this->db->order_by('year', "desc");
        $this->db->limit($limit, $start);
        $query = $this->db->get("publications");

        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
    }
}