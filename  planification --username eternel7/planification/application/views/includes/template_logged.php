<?php
if (isset($sous_type) && $sous_type!="")
{
    $this->load->view('includes/header_'.$sous_type);
}
else
{
    $this->load->view('includes/header');
}
?>

<?php $this->load->view($main_content); ?>

<?php $this->load->view('includes/footer'); ?>