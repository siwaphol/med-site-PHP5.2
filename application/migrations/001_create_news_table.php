<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Create_News_Table extends CI_Migration {

        public function up()
        {
                $this->dbforge->add_field(array(
                        'id' => array(
                                'type' => 'INT',
                                'unsigned' => TRUE,
                                'auto_increment' => TRUE
                        ),
                        'headline' => array(
                                'type' => 'VARCHAR',
                                'constraint' => '255',
                        ),
                        'message' => array(
                                'type' => 'TEXT'
                        ),
                        'image' => array(
                                'type' => 'TEXT'
                        ),
                        'start_date' => array(
                                'type' => 'DATE',
                                'null'=>TRUE,
                        ),
                        'end_date' => array(
                                'type' => 'DATE',
                                'null'=>TRUE,
                        ),
                        'create_at' => array(
                                'type' => 'DATETIME',
                                'null'=>TRUE,
                        ),
                        'updated_at' => array(
                                'type' => 'DATETIME',
                                'null'=>TRUE,
                        ),
                ));
                $this->dbforge->add_key('id', TRUE);
                $this->dbforge->create_table('news');
        }

        public function down()
        {
                $this->dbforge->drop_table('news');
        }
}