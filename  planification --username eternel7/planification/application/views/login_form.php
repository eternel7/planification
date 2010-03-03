<div id="login_form">
    <h1><span><?php echo ($this->lang->line('login_title'));?></span></h1>
    <?php
    $attributes = array('id' => 'identification', 'onsubmit' =>'return md5_mdp();');
    echo form_open('login/validatecredentials',$attributes);
    ?><div id="login_form_content"><?php
    echo lang('login_username','username');
    $attributes_username = 'id="username"';
    echo form_input('username',set_value('username'),$attributes_username);

    echo lang('login_pwd','password');
    $attributes_pwd = 'id="password"';
    echo form_password('password','',$attributes_pwd);

    echo form_submit('submit',$this->lang->line('login_submit'));

    echo anchor('login/signup',$this->lang->line('login_create_account'));
    ?></div><?php
    echo form_close();
    ?>
    <script type="text/javascript">
        // <![CDATA[
        $(function() {
                $("#password").hashmask();
        });
        // ]]>
    </script>
</div>