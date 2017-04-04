<?php
class News_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_latest_4_news($slug=FALSE)
	{
		if($slug===FALSE){
            $sql = "select * from news WHERE (start_date<=CURDATE() or start_date is NULL)
                    AND (end_date>CURDATE() or end_date is NULL) ORDER BY updated_at DESC LIMIT 4";
            $query = $this->db->query($sql);

            $emptyRemain = 4 - $query->num_rows();
            $result = $query->result_array();

            $this->db->flush_cache();
            $sql = "select * from news ORDER BY updated_at DESC LIMIT " . $emptyRemain;
            $query = $this->db->query($sql);
            $result = $result + $query->result_array();

			return $result;
		}
		return null;
	}

	public function get_news($id = FALSE)
	{
		if ($id === FALSE)
		{
			$query = $this->db->get('news');
			return $query->result_array();
		}
		
		$query = $this->db->get_where('news', array('id' => $id));
		return $query->row_array();
	}

	public function set_news()
	{
		$data = array(
			'title' => $this->input->post('title'),
			'content' => $this->input->post('content'),
			'start_date' => $this->input->post('start_date'),
			'end_date' => $this->input->post('end_date'),
			'image_path' => $this->input->post('image_path'),
			'created_at' => now(),
			'updated_at' => now(),
		);

		return $this->db->insert('news', $data);
	}

	public function update_news($id, $new_image_path = false)
	{
	    $imagePath  = $new_image_path?$new_image_path:$this->input->post('image_path');
		$data = array(
			'title' => $this->input->post('title'),
			'content' => $this->input->post('content'),
			'start_date' => $this->input->post('start_date'),
			'end_date' => $this->input->post('end_date'),
			'image_path' => $imagePath,
			'created_at' => now(),
			'updated_at' => now(),
		);

		$this->db->where('id', $id);
		$this->db->update('news', $data);
	}

    public function delete_news($id)
    {
        $this->db->where('id', $id);
        $this->db->delete('news');
    }
}