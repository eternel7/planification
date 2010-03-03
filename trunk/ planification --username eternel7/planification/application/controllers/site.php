<?php

class site extends Controller {

    function site() {
        parent::Controller();
        $this->is_logged_in();
    }

    function membersarea()
    {
        //Chargement du parametre de langue
        $data['lang']=$this->config->item('lang');
        //Chargement du fichier de langue
        $this->lang->load('site', 'french');

        $data['main_content']= 'home';
        $data['sous_type']='';
        $this->load->view('includes/template_logged',$data);
    }

    function is_logged_in()
    {
        $is_logged_in = $this->session->userdata('is_logged_in');

        if(!isset($is_logged_in) || $is_logged_in != true)
        {
            //Chargement du parametre de langue
            $data['lang']=$this->config->item('lang');
            //Chargement du fichier de langue
            $this->lang->load('site', 'french');

            echo 'You don\'t have permission to access this page. <a href="../login">Login</a>';
            die();
        }
    }
}