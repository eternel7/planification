<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $lang; ?>" lang="<?php echo $lang; ?>">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title id='title'>HTML Page setup Tutorial</title>
        <meta name="author" content="David MASSE" />
        <meta name="keywords" content="<?php echo "_META_KEYWORDS"; ?>" />
        <meta name="description" content="<?php echo "_META_DESCRIPTION"; ?>" />
        <meta name="robots" content="all" />
        <meta http-equiv="Content-Script-Type" content="text/javascript" />
        <meta http-equiv="Content-Style-Type" content="text/css" />
        <!-- ** CSS ** -->
        <!-- base library -->
        <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>javascript/ext-3.1.1/resources/css/ext-all.css" media="all" title="stylesheet" charset="UTF-8" />

        <!-- overrides to base library -->
        <link rel="stylesheet" href="<?php echo base_url();?>css/960cssgrid.css" type="text/css" media="all" title="stylesheet" charset="UTF-8" />
        <style type="text/css">
        <?php
        $w=44;
        $h=20;
        ?>
        div.heure {
            width: <?php echo 9*$w;?>px;
            overflow: auto;
            height: <?php echo 7*$h;?>px;
        }
        table.heure {
            border-width: 1px;
            border-spacing: 1px;
            border-style: outset;
            border-color: gray;
            border-collapse: separate;
            background-color: rgb(255, 255, 240);
        }
        table.heure td {
            font-family: monospace;
            border-width: 2px;
            padding: 1px;
            width:<?php echo $w;?>px;
            height:<?php echo $h;?>px;
            border-style: outset;
            border-color: white;
            background-color: white;
            -moz-border-radius: 5px;
        }
        </style>
        <!-- ** Javascript ** -->
        <!-- ExtJS library: base/adapter -->
        <script type="text/javascript" src="<?php echo base_url();?>javascript/ext-3.1.1/adapter/ext/ext-base.js"></script>
        <!-- ExtJS library: all widgets -->
        <?php /*<script type="text/javascript" src="<?php echo base_url();?>javascript/ext-3.1.1/ext-all-debug.js"></script>*/?>
        <script type="text/javascript" src="<?php echo base_url();?>javascript/ext-3.1.1/ext-all.js"></script>
        <script type="text/javascript">
            Ext.BLANK_IMAGE_URL = '<?php echo base_url();?>javascript/ext-3.1.1/resources/images/default/s.gif';
        </script>
        <!-- overrides to library -->

        <!-- extensions -->

        <!-- page specific -->
        <link rel="shortcut icon" href="<?php echo base_url();?>images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="<?php echo base_url();?>images/favicon-anim.gif" type="image/gif" />
        <!-- to correct the unsightly Flash of Unstyled Content. http://www.bluerobot.com/web/css/fouc.asp -->
        <script type="text/javascript"></script>
    </head>
    <body>
        