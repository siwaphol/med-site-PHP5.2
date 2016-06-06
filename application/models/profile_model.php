<?php
class Profile_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_profile()
	{
		$query = $this->db->get('user_profiles');
		return $query->result_array();
	}

    public function record_count() {
        return $this->db->count_all("user_profiles");
    }

    public function fetch_profiles($limit, $start) {
        $this->db->limit($limit, $start);
        $query = $this->db->get("user_profiles");

        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
    }
}