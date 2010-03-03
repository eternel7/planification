<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

class Login extends Controller
{
    function index()
    {
        //Chargement du parametre de langue
        $data['lang']=$this->config->item('lang');
        //Chargement du fichier de langue
        $this->lang->load('login', 'french');
        
        $data['main_content']='login_form';
        $data['sous_type']='login';
        $this->load->view('includes/template',$data);
    }

    function validatecredentials()
    {
        $this->load->model('user_model');
        $query = $this->user_model->validate();

        if($query)
        {
            $data = array(
                'username' => $this->input->post('username'),
                'is_logged_in' => true
            );
            
            $this->session->set_userdata($data);
            redirect('site/membersarea');
        }
        else
        {
            $this->index();
        }
    }

    function signup()
    {
        //Chargement du parametre de langue
        $data['lang']=$this->config->item('lang');
        //Chargement du fichier de langue
        $this->lang->load('login', 'french');

        $data['main_content']= 'signup/signup_form';
        $data['sous_type']='create_user';
        $this->load->view('includes/template',$data);
    }

    function createuser()
    {
        //Chargement du parametre de langue
        $data['lang']=$this->config->item('lang');
        //Chargement du fichier de langue
        $this->lang->load('login', 'french');

        $this->load->library('form_validation');
        //field name, error message, validation rules

        $this->form_validation->set_rules('username',$this->lang->line('login_create_user_username'),'trim|required|min_length[4]|xss_clean');
        $this->form_validation->set_rules('password',$this->lang->line('login_create_user_pwd'),'trim|required|min_length[4]|xss_clean');
        $this->form_validation->set_rules('password2',$this->lang->line('login_confirm_pwd'),'trim|required|matches[password]|xss_clean');
        $this->form_validation->set_rules('email',$this->lang->line('login_email'),'trim|required|valid_email|xss_clean');
        $this->form_validation->set_rules('first_name',$this->lang->line('login_first_name'),'htmlspecialchars');
        $this->form_validation->set_rules('last_name',$this->lang->line('login_last_name'),'htmlspecialchars');
        $this->form_validation->set_rules('pseudonyme',$this->lang->line('login_pseudonyme'),'htmlspecialchars');
        $this->form_validation->set_rules('description',$this->lang->line('login_description'),'htmlspecialchars');

        if($this->form_validation->run()==FALSE)
        {
            $this->signup();
        }
        else
        {
            $this->load->model('user_model');
            $query = $this->user_model->create_user();
            if ($query)
            {
                $data['main_content']='signup/signup_success';
                $data['sous_type']='';
                $this->load->view('includes/template',$data);
            }
            else
            {
                $this->signup();
            }
        }
    }
    function getgraindesel()
    {
        $this->load->model('user_model');
        $query = $this->user_model->graindesable();

        if($query!="")
        {
            echo $query;
        }
        else
        {
            echo "false";
        }
    }

    function logout()
    {
        $this->session->sess_destroy();
        $this->index();
    }

    function loginexist()
    {
        $this->load->model('user_model');
        $query = $this->user_model->login_exist();

        if($query)
        {
            echo "true";
        }
        else
        {
            echo "false";
        }
    }
}