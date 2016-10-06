<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Create_Banner_Table extends CI_Migration {

        public function up()
        {
                $this->dbforge->add_field(array(
                        'id' => array(
                                'type' => 'INT',
                                'unsigned' => TRUE,
                                'auto_increment' => TRUE
                        ),
                        'name' => array(
                                'type' => 'VARCHAR',
                                'constraint' => '255',
                        ),
                        'image_path' => array(
                                'type' => 'TEXT'
                        )
                ));
                $this->dbforge->add_key('id', TRUE);
                $this->dbforge->create_table('banner');

                $data = array(
                    array('name' => "banner1",
                    'image_path' => "uploads/banner1.jpg"),
                    array('name' => "banner2",
                    'image_path' => "uploads/banner2.jpg"),
                    array('name' => "banner3",
                    'image_path' => "uploads/banner3.jpg"),
                    array('name' => "banner4",
                    'image_path' => "uploads/banner4.jpg"),
                    array('name' => "banner5",
                    'image_path' => "uploads/banner5.jpg")
                );
                $this->db->insert_batch('banner', $data);
        }

        public function down()
        {
                $this->dbforge->drop_table('banner');
        }
}