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
                <link rel="stylesheet" href="<?php echo base_url();?>css/style.css" type="text/css" media="all" title="stylesheet" charset="UTF-8" />
                <link rel="shortcut icon" href="<?php echo base_url();?>images/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="<?php echo base_url();?>images/favicon-anim.gif" type="image/gif" />
                <!-- to correct the unsightly Flash of Unstyled Content. http://www.bluerobot.com/web/css/fouc.asp -->
                <script type="text/javascript"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jquery1.3.2.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/md5.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jquery.sha1.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jquery.sparkline.js"></script>
                <script type="text/javascript" src="<?php echo base_url();?>javascript/jquery.hashmask.js"></script>
                <script type="text/javascript">
                    <!--
                    function md5_mdp() {
                        $.ajax({
                            url: '<?php echo base_url();?>index.php/login/getgraindesel',
                            type: "POST",
                            cache: false,
                            async: false,
                            datatype: "text",
                            data: "username="+$("#username").val(),
                            success: function(donnee) {
                                if(donnee!='false' && donnee!=''){
                                    str = $("#password").val();
                                    str = str+donnee;
                                    str =MD5(str);
                                    $("#password").val(str);
                                    return true;
                                }
                                else
                                {
                                    alert('Erreur dans le grain de sable : '+donnee);
                                    return false;
                                }
                            }
                        });
                    }

                    function login_existe() {
                        $.ajax({
                            url: '<?php echo base_url();?>index.php/login/loginexist',
                            type: "POST",
                            cache: false,
                            async: false,
                            datatype: "text",
                            data: "username="+$("#username").val(),
                            success: function(donnee) {
                                if(donnee!='false' && donnee!=''){
                                    $("#loginexist").fadeIn("slow");
                                    return true;
                                }
                                else
                                {
                                    alert('Erreur dans le compte : '+donnee);
                                    return false;
                                }
                            }
                        });
                    }
                    // -->
                </script>
	</head>
	<body>