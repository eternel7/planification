<?php

Class User_model extends Model{

    function validate()
    {
        $suffixe_table=$this->config->item('dbtableprefixe');
        $this->db->where('compte',$this->input->post('username'));
        $this->db->where('mot_de_passe',$this->input->post('password'));
        $query = $this->db->get($suffixe_table.'utilisateur');

        if ($query->num_rows ==1)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

    function graindesable()
    {
        $suffixe_table=$this->config->item('dbtableprefixe');
        $this->db->select('compte,grain_de_sel');
        $this->db->where('compte',$this->input->post('username'));
        $query = $this->db->get($suffixe_table.'utilisateur');

        if ($query->num_rows == 1)
        {
            foreach ($query->result() as $grain)
            {
                return $grain->grain_de_sel;
            }
        }
        else
        {
            return "";
        }
    }

    function login_exist()
    {
        $suffixe_table=$this->config->item('dbtableprefixe');
        $this->db->select('compte');
        $this->db->where('compte',$this->input->post('username'));
        $query = $this->db->get($suffixe_table.'utilisateur');

        if ($query->num_rows == 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function create_user()
    {
        $suffixe_table=$this->config->item('dbtableprefixe');
        $this->db->select('compte');
        $this->db->where('compte',$this->input->post('username'));
        $query = $this->db->get($suffixe_table.'utilisateur');
        
        if ($query->num_rows == 0)
        {
            $datecreation = date('Y-m-d H:i:s');
            $new_user_inser_data = array(
                'compte' => $this->input->post('username'),
                'mot_de_passe' => $this->input->post('password'),
                'nom' => $this->input->post('first_name'),
                'prenom' => $this->input->post('last_name'),
                'email' => $this->input->post('email'),
                'pseudonyme' => $this->input->post('pseudonyme'),
                'description' => $this->input->post('description'),
                'date_creation' => $datecreation,
                'activation' => "0",
                'grain_de_sel' => $this->input->post('grain')
            );

            $insert=$this->db->insert($suffixe_table.'utilisateur',$new_user_inser_data);
            return $insert;
        }
        else
        {
            return false;
        }
    }
}
