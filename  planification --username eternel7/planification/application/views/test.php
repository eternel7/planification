<?php
$i=0;
$chrono=0;
$grid1="        <div id=\"top_$i\" class=\"grid_1 \">&nbsp;
        </div>
";
$grid2="        <div id=\"top_$i\" class=\"grid_2 \">&nbsp;
        </div>
";
$grid3="        <div id=\"top_$i\" class=\"grid_3 \">&nbsp;
        </div>
";
$grid4="        <div id=\"top_$i\" class=\"grid_4 \">&nbsp;
        </div>
";
$grid5="        <div id=\"top_$i\" class=\"grid_5 \">&nbsp;
        </div>
";
$grid6="        <div id=\"top_$i\" class=\"grid_6 \">&nbsp;
        </div>
";
$grid7="        <div id=\"top_$i\" class=\"grid_7 \">&nbsp;
        </div>
";
$grid8="        <div id=\"top_$i\" class=\"grid_8 \">&nbsp;
        </div>
";
$grid9="        <div id=\"top_$i\" class=\"grid_9 \">&nbsp;
        </div>
";
$grid10="        <div id=\"top_$i\" class=\"grid_10 \">&nbsp;
        </div>
";

?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>Test</title>
        <link rel="stylesheet" href="<?php echo base_url();?>css/grid_portlet.css" type="text/css" media="all" title="stylesheet" charset="UTF-8" />
        <link type="text/css" href="<?php echo base_url();?>javascript/development-bundle/themes/base/jquery.ui.all.css" rel="stylesheet" />
        <script type="text/javascript" src="<?php echo base_url();?>javascript/development-bundle/jquery-1.4.2.js"></script>
        <script type="text/javascript" src="<?php echo base_url();?>javascript/development-bundle/ui/jquery.ui.core.js"></script>
        <script type="text/javascript" src="<?php echo base_url();?>javascript/development-bundle/ui/jquery.ui.widget.js"></script>
        <script type="text/javascript" src="<?php echo base_url();?>javascript/development-bundle/ui/jquery.ui.mouse.js"></script>
        <script type="text/javascript" src="<?php echo base_url();?>javascript/development-bundle/ui/jquery.ui.sortable.js"></script>
        <script type="text/javascript">
            $(function() {
                $(".column").sortable({
                    handle: '.portlet-header',
                    opacity: 0.6,
                    scroll: false,
                    revert: true,
                    connectWith: '.column'
                });
                $(".column_nav").sortable({
                    handle: '.portlet-header',
                    opacity: 0.6,
                    scroll: false,
                    revert: true,
                    connectWith: '.column_nav'
                });
                
                $(".portlet").addClass("ui-widget ui-widget-content ")
                .find(".portlet-header")
                .addClass("ui-widget-header ui-corner-all")
                .prepend('<span class="ui-icon ui-icon-minusthick"></span>')
                .end()
                .find(".portlet-content");

                $(".portlet-header .ui-icon").click(function() {
                    $(this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
                    $(this).parents(".portlet:first").find(".portlet-content").toggle();
                });

                $(".column").disableSelection();
                $(".column_nav").disableSelection();
            });
        </script>
    </head>
    <body>
        <div id="header" class="container_16">
<?php
for ($i = $chrono; $i <= $chrono + 2; $i++) {
    echo $grid1;
}
?>
            <div id="top_4" class="grid_10 ">&nbsp;
            </div>

<?php
for ($i = $chrono; $i <= $chrono + 2; $i++) {
    echo $grid1;
}
?>

        </div>

        <div id="content" class="container_16">

            <div id="nav_1" class="grid_2 column_nav">

                <div class="portlet">
                    <div class="portlet-header">Links</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

                <div class="portlet">
                    <div class="portlet-header">Images</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

            </div>

            <div id="column_1" class="grid_4 column">

                <div class="portlet">
                    <div class="portlet-header">Feeds</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

                <div class="portlet">
                    <div class="portlet-header">News</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

            </div>
            <div id="column_2" class="grid_4 column">

                <div class="portlet">
                    <div class="portlet-header">Shopping</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </div>
                </div>

            </div>

            <div id="column_3" class="grid_4 column">

                <div class="portlet">
                    <div class="portlet-header">Links</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

                <div class="portlet">
                    <div class="portlet-header">Images</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

            </div>

            
            <div id="nav_2" class="grid_2 column_nav">

                <div class="portlet">
                    <div class="portlet-header">Links</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

                <div class="portlet">
                    <div class="portlet-header">Images</div>
                    <div class="portlet-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                </div>

            </div>
        </div>

        <div id="footer" class="container_16">

            <div id="bottom_1" class="grid_1 ">&nbsp;
            </div>

            <div id="bottom_2" class="grid_1 ">&nbsp;
            </div>

            <div id="bottom_3" class="grid_1 ">&nbsp;
            </div>

            <div id="bottom_4" class="grid_10 ">&nbsp;
            </div>

            <div id="bottom_5" class="grid_1 ">&nbsp;
            </div>

            <div id="bottom_6" class="grid_1 ">&nbsp;
            </div>

            <div id="bottom_7" class="grid_1 ">&nbsp;
            </div>

        </div>

    </body>
</html>