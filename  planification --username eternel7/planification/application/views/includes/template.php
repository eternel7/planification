<?php
if (isset($sous_type) && $sous_type!="")
{
    $this->load->view('includes/header_'.$sous_type);
}
else
{
    $this->load->view('includes/header');
}
if (!is_array($main_content)){
    $this->load->view($main_content);
}
else {
    foreach ($main_content as $content){
        $this->load->view($content);
    }
}

$this->load->view('includes/footer');