<?php

class Welcome extends Controller {

	function Welcome()
	{
		parent::Controller();	
	}
	
	function index()
	{
		$this->load->view('welcome_message');
	}

        function test()
        {
            $data = array();
            //Chargement du parametre de langue
            $data['lang']=$this->config->item('lang');
            //Chargement du fichier de langue
            $this->lang->load('login', 'french');
            $this->load->view('test_1',$data);
        }
}

/* End of file welcome.php */
/* Location: ./system/application/controllers/welcome.php */