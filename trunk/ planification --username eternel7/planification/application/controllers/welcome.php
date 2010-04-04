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
            $data['main_content']='test_1';
            $this->load->view('includes/template_960cssgrid',$data);
        }
}

/* End of file welcome.php */
/* Location: ./system/application/controllers/welcome.php */