<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>Test</title>
        <link rel="stylesheet" href="<?php echo base_url();?>css/grid_portlet.css" type="text/css" media="all" title="stylesheet" charset="UTF-8" />
        <meta http-equiv="Content-Script-Type" content="text/javascript" />
        <meta http-equiv="Content-Style-Type" content="text/css" />
        <!-- ** CSS ** -->
        <!-- base library -->
        <link rel="stylesheet" href="<?php echo base_url();?>javascript/jQuery/css/jquery-ui.css" type="text/css" media="all" />
        <link rel="stylesheet" href="<?php echo base_url();?>javascript/jQuery/css/ui-lightness/jquery-ui-1.8rc3.custom.css" type="text/css" media="all" />
        <!-- extensions -->
        <link rel="stylesheet" href="<?php echo base_url();?>javascript/jQuery/extensions/farbtastic12/farbtastic.css" type="text/css" />
        
        <!-- ** Javascript ** -->
        <!--jQuery  library: base/adapter -->
        <script type="text/javascript" src="<?php echo base_url();?>javascript/jQuery/jquery-1.4.2.min.js"></script>
        <script type="text/javascript" src="<?php echo base_url();?>javascript/jQuery/jquery-ui.min.js"></script>

        <!-- ExtJS library: base/adapter -->

        <!-- overrides to library -->

        <!-- extensions -->
        <script type="text/javascript" src="<?php echo base_url();?>javascript/jQuery/extensions/farbtastic12/farbtastic.js"></script>
        <script type="text/javascript">
        $(document).ready(function () {
            $("#colorpicker").farbtastic("#color");
            $("td").mouseover(function(){
                $(this).css('background-color',$("#color").val());
            });
        });
        </script>
    </head>
    <body>
        <input type="text" id="color" value="#fdd5c9" style="height: 20px; width: 50px; position: relative; top:0; left:0; float: left" /><br />
        <div id="colorpicker" style="position: relative; top:30px; left:-50px; float: left"></div>
        <table border="2" style="position: absolute; top:10px; left:25%;">
        <?php
        for ($i=1;$i<33;$i++)
        {
            echo("<tr>");
            for ($j=1;$j<33;$j++)
            {
                echo("<td height='25px' width='25px'>&nbsp;</td>");
            }
            echo("</tr>");
        }
        ?>
        </table>
    </body>
</html>