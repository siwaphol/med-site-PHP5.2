<?php
class Setting_model extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function get_setting($id=FALSE)
	{
        if($id===FALSE){
            $query = $this->db->get('settings');
            return $query->result_array();
        }
        $query = $this->db->get_where('settings',array('id'=>$id));
        return $query->row_array();
    }

    public function update_setting($id)
    {
        $data = array(
            'name' => $this->input->post('setting_name'),
            'content' => $this->input->post('content'),
        );

        $this->db->where('id', $id);
        $this->db->update('settings', $data);
    }
}