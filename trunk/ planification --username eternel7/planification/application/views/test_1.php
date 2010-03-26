<?php
/**
 * Special global variable declaration
 * @global integer $chrono
 * @name $chrono
 */
$chrono = 0;
$this->load->view('includes/header_960cssgrid.php');
?>
            <div id="header" class="container_16">
<?php
            for ($i = $chrono; $i <= $chrono + 2; $i++)
            {
               $data['size']=1;
               $data['prefixe']="top";
               $data['chrono']=$chrono;
               $data['numtab']=3;
               $this->load->view('includes/960cssgrid.php',$data);
            }
            
            $data['size']=10;
            $data['prefixe']="top";
            $data['chrono']=$chrono;
            $data['numtab']=3;
            $this->load->view('includes/960cssgrid.php',$data);

            for ($i = $chrono; $i <= $chrono + 2; $i++)
            {
               $data['size']=1;
               $data['prefixe']="top";
               $data['chrono']=$chrono;
               $data['numtab']=3;
               $this->load->view('includes/960cssgrid.php',$data);
            }
            ?>
        </div>

        <div id="content" class="container_16">

            <div id="nav_1" class="grid_2 ">

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
                    <div class="portlet-content heure">
                        <table class="heure">
                        <?php
                        for ($i = 0; $i <= 24; $i++) {
                            echo("<tr>");
                            for ($j = 0; $j <= 59; $j++) {
                                echo('<td>');
                                echo(substr("0".$i, strlen("0".$i)-2, 2).":".substr("0".$j, strlen("0".$j)-2, 2));
                                echo("</td>");
                            }
                            echo("</tr>\n");
                        }
                        ?>
                        </table>
                    </div>
                </div>

            </div>

            <div id="column_3" class="grid_4 column">

                <div class="portlet">
                    <div class="portlet-header">Links</div>
                    <div class="portlet-content"><div id="test">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div></div>
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
<?php
            $chrono = 0;
            for ($i = $chrono; $i <= $chrono + 2; $i++)
            {
               $data['size']=1;
               $data['prefixe']="bottom";
               $data['chrono']=$chrono;
               $data['numtab']=3;
               $this->load->view('includes/960cssgrid.php',$data);
            }

            $data['size']=10;
            $data['prefixe']="bottom";
            $data['chrono']=$chrono;
            $data['numtab']=3;
            $this->load->view('includes/960cssgrid.php',$data);

            for ($i = $chrono; $i <= $chrono + 2; $i++)
            {
               $data['size']=1;
               $data['prefixe']="bottom";
               $data['chrono']=$chrono;
               $data['numtab']=3;
               $this->load->view('includes/960cssgrid.php',$data);
            }
            ?>

        </div>
    </body>
</html>