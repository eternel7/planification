<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $lang; ?>" lang="<?php echo $lang; ?>">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>QCM</title>
                <meta name="author" content="David MASSE" />
                <meta name="keywords" content="<?php echo "_META_KEYWORDS"; ?>" />
                <meta name="description" content="<?php echo "_META_DESCRIPTION"; ?>" />
                <meta name="robots" content="all" />
                <meta http-equiv="Content-Script-Type" content="text/javascript" />
                <meta http-equiv="Content-Style-Type" content="text/css" />
                <link rel="stylesheet" href="<?php echo base_url();?>css/reset.css" type="text/css" media="all" title="stylesheet" charset="UTF-8" />
                <link rel="stylesheet" href="<?php echo base_url();?>css/style.css" type="text/css" media="all" title="stylesheet" charset="UTF-8" />
                <link rel="shortcut icon" href="<?php echo base_url();?>images/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="<?php echo base_url();?>images/favicon-anim.gif" type="image/gif" />
                <!-- to correct the unsightly Flash of Unstyled Content. http://www.bluerobot.com/web/css/fouc.asp -->
                <script type="text/javascript"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jQuery/jquery1.3.2.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/md5.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jQuery/jquery.sha1.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jQuery/jquery.sparkline.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jQuery/jquery.hashmask.js"></script>
                <script type="text/javascript">
                    <!--
                    function md5_mdp() {
                        if($("#password").val()!="" && $("#password").val()==$("#password2").val())
                        {
                            str = $("#password").val();
                            graindesel = Math.floor(Math.random()*100000);
                            graindesel = graindesel + "_";
                            graindesel = graindesel.substr(0,4);
                            str = str + graindesel;
                            str = MD5(str);
                            $("#password").val(str);
                            $("#password2").val(str);
                            $("#grain").val(graindesel);
                            return true;
                        }
                        else if($("#password").val()=="")
                        {
                            alert("<?php echo $this->lang->line('login_create_user_pwd_alert');?>");
                            return false;
                        }
                        else
                        {
                            alert("<?php echo $this->lang->line('login_confirm_pwd_alert');?>");
                            return false;
                        }
                    }
                    // -->
                </script>
	</head>
	<body>