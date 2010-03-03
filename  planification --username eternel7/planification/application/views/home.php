<div id="container">
    <h1><span><?php echo ($this->lang->line('site_welcome_title1') . $this->session->userdata('username'));?></span></h1>
    <p><?php echo ($this->lang->line('site_welcome_message'));?></p>
    <h4><?php echo anchor('login/logout', $this->lang->line('site_logout')); ?></h4>
</div>