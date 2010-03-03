<h1><span><?php echo ($this->lang->line('login_create_account'));?></span></h1>
<?php
$attributes = array('id' => 'identification', 'onsubmit' =>'return md5_mdp();');
echo form_open('login/createuser',$attributes); ?>
<fieldset>
    <legend><span><?php echo ($this->lang->line('login_login_info'));?></span></legend>
    <?php
    echo lang('login_create_user_username','username');
    ?><div id="existtest" title="Compte d&eacute;j&agrave; existant"></div><div id="existtestko" title="Compte ok"></div><?php
    $attributes_username = 'id="username" title="'.$this->lang->line('login_create_user_username_title').'"';
    echo form_input('username',set_value('username'),$attributes_username);
    ?><script type="text/javascript">
        // <![CDATA[
        $('#username').blur(function() {
            $.ajax({
                url: '<?php echo base_url();?>index.php/login/loginexist',
                type: "POST",
                cache: false,
                async: false,
                datatype: "text",
                data: "username="+$("#username").val(),
                success: function(donnee) {
                    if(donnee!='false' && donnee!=''){
                        $("#existtestko").hide('slow');
                        $("#existtest").fadeIn('slow');
                        return true;
                    }
                    else
                    {
                        $("#existtest").hide('slow');
                        $("#existtestko").fadeIn('slow');
                        return false;
                    }
                }
            });
        });
        // ]]>
    </script><?php
    echo lang('login_create_user_pwd','password');
    $attributes_pwd = 'id="password" title="'.$this->lang->line('login_create_user_pwd_title').'"';
    echo form_password('password','',$attributes_pwd);

    echo lang('login_confirm_pwd','password2');
    $attributes_pwd2 = 'id="password2" title="'.$this->lang->line('login_confirm_pwd_title').'"';
    echo form_password('password2','',$attributes_pwd2);
    ?>
    <script type="text/javascript">
        // <![CDATA[
        $(function() {
                $("#password").hashmask();
        });
        $(function() {
                $("#password2").hashmask();
        });
        // ]]>
    </script>
    <?php
    echo "<input type=\"hidden\" name=\"grain\" id=\"grain\" value=\"\" />";

    echo lang('login_email','email');
    $attributes_email = 'id="email" title="'.$this->lang->line('login_create_user_email_title').'"';
    echo form_input('email',set_value('email'),$attributes_email);

    echo form_submit('submit',$this->lang->line('login_create_user_submit'));
    echo validation_errors('<p class="error">')
    ?>
</fieldset>
<fieldset>
    <legend><span><?php echo ($this->lang->line('login_personnal_info'));?></span></legend>
    <?php    
    echo lang('login_first_name','first_name');
    $attributes_first_name = 'id="first_name" title="'.$this->lang->line('login_create_user_first_name_title').'"';
    echo form_input('first_name',set_value('first_name'),$attributes_first_name);

    echo lang('login_last_name','last_name');
    $attributes_last_name = 'id="last_name" title="'.$this->lang->line('login_create_user_last_name_title').'"';
    echo form_input('last_name',set_value('last_name'),$attributes_last_name);

    echo lang('login_pseudonyme','pseudonyme');
    $attributes_pseudonyme = 'id="pseudonyme" title="'.$this->lang->line('login_create_user_pseudonyme_title').'"';
    echo form_input('pseudonyme',set_value('pseudonyme'),$attributes_pseudonyme);

    echo lang('login_description','description');
    $attributes_description = 'id="description" title="'.$this->lang->line('login_create_user_description_title').'"';
    echo form_textarea('description',set_value('description'),$attributes_description);
    ?>
</fieldset>
<?php echo form_close(); ?>