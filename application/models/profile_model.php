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
}