<?php
class Profile_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_profile($id=FALSE)
	{
        if($id===FALSE){
            $query = $this->db->get('staffs');
            return $query->result_array();
        }
        $query = $this->db->get_where('staffs',array('id'=>$id));
        return $query->row_array();
    }

    public function record_count() {
        return $this->db->count_all("staffs");
    }

    public function fetch_profiles($limit, $start) {
        $this->db->limit($limit, $start);
        $query = $this->db->get("staffs");

        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
    }
}