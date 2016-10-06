<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Create_Courses_Table extends CI_Migration {

        public function up()
        {
            $this->dbforge->add_field(array(
                'id' => array(
                        'type' => 'INT',
                        'unsigned' => TRUE,
                        'auto_increment' => TRUE
                ),
                'code' => array(
                        'type' => 'VARCHAR',
                        'constraint' => '255',
                ),
                'name_th' => array(
                        'type' => 'VARCHAR',
                        'constraint' => '255',
                        'null' => TRUE
                ),
                'name_en' => array(
                        'type' => 'VARCHAR',
                        'constraint' => '255'
                ),
                'other_details' => array(
                        'type' => 'TEXT'
                ),
                'created_at' => array(
                        'type' => 'TIMESTAMP',
                        'null' => TRUE
                ),
                'updated_at' => array(
                        'type' => 'TIMESTAMP',
                        'null' => TRUE
                )
            ));
            $this->dbforge->add_key('id', TRUE);
            $this->dbforge->create_table('courses');

            $data = array(
                array(
                    'code' => "111111",
                    'name_th' => "กระบวนวิชาทดสอบ",
                    'name_en' => "test course",
                    'other_details' => "<p>fsdfsdfsdfsdfsdf</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\">\r\n  <tbody>\r\n     <tr>\r\n            <td>dfdf</td>\r\n           <td>dsf</td>\r\n        </tr>\r\n       <tr>\r\n            <td>sdf</td>\r\n            <td>sdf</td>\r\n        </tr>\r\n       <tr>\r\n            <td>sdf</td>\r\n            <td>sdf</td>\r\n        </tr>\r\n   </tbody>\r\n</table>\r\n\r\n<p>&nbsp;</p>\r\n",
                    'created_at' => "2016-06-11 15:45:33",
                    'updated_at' => "2016-06-11 17:58:04"
                )
            );
            $this->db->insert_batch('courses', $data);
        }

        public function down()
        {
            $this->dbforge->drop_table('courses');
        }
}