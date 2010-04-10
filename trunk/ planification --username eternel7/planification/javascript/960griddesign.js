//run the currently selected effect to toggle
function runEffect(id,effect_option){
    //the note to run the effect on
    var note=$("#note_"+id);

    //get effect type from
    var selectedEffect = "bounce";
    if (effect_option==0) {
        selectedEffect = $('#effectTypeskill').val();
    }
    else if (effect_option==2 || effect_option==3) {
        selectedEffect = $('#effectTypes').val();
    }
    if (effect_option==0 || effect_option==2 || effect_option==3) {
        //most effect types need no options passed by default
        var options = {};
        //check if it's scale, transfer, or size - they need options explicitly set
        if(selectedEffect == 'scale'){
            options = {
                percent: 0
            };
        }
        else if(selectedEffect == 'size'){
            options = {
                to: {
                    width: 200,
                    height: 60
                }
            };
        }
    }

    //run the effect
    var note_position = note.position();
    var note_title_area= $("#note_title_"+id);
    var note_content=$("#note_content_"+id);

    if (effect_option==0) {     //delete note option
        note.hide(selectedEffect,options,500,remove_note(id));
    }
    else if (effect_option==1){     //close (hide) note option
        note.hide(selectedEffect,options,500);
    }
    else if (effect_option==2) {    //reduire note option
        if (note.attr('former_top')==0) {
            if (note.attr('ferme')==0) {
                runEffect(id,3);
            }
            note_title_area.removeClass('notes-drag-area');
            note.draggable("destroy");
            note.attr('former_top',parseInt(note_position.top));
            note.attr('former_left',parseInt(note_position.left));
            setTimeout(function(){
                note.animate({
                    "left": "30px",
                    "top": "0px"
                }, 500);
            }, 200);
            setTimeout(function(){
                note.css('position','relative');
            }, 1000);
            setTimeout(function(){
                note.animate({
                    "top": "0px"
                }, 500);
            }, 1500);
            setTimeout(function(){
                $("#notes_anchor").sortable({
                    'forceHelperSize': true
                })
                    .disableSelection();
            }, 1100);
        }
        else {
            $("#notes_anchor").sortable("destroy");
            note_title_area.addClass('notes-drag-area');
            note.animate({
                "left": note.attr('former_left')+"px",
                "top": note.attr('former_top')+"px"
            }, 500).css('position','absolute');
            note.attr('former_top',0);
            note.attr('former_left',0);
            if (note.attr('ferme')==1) {
                runEffect(id,3);
            }
            note.draggable({
                handle: 'h1'
            });
        }
    }
    else if (effect_option==3) {    //reduire content note option
        if (note.attr('ferme')==0) {
            note.attr('former_content_height',note_content.css('height'));
            note.attr('former_content_width',note_content.css('width'));
            note.resizable("destroy");
            note_content.toggle(selectedEffect,options,500);
            setTimeout(function(){
                note.animate({
                    "height": "25px",
                    "width": "250px"
                },500);
            }, 20);
            note.attr("ferme","1");
        }
        else {
            note.attr("ferme","0");
            note.css('height','auto');
            note.css('width','auto');
            note_content.toggle(selectedEffect,options,500);
            note.draggable({
                handle: 'h1'
            });
            note.resizable({
                maxHeight: 450,
                maxWidth: 450,
                minHeight: 25,
                minWidth: 230,
                alsoResize: '.also_resize_' + id
            });
            note.attr('former_content_height',0);
            note.attr('former_content_width',0);
        }
    }
    else if (effect_option==4){     //save note option
        $("#savebutton_" + id).removeClass('ui-state-active');
        note.attr("a_enregistrer",0);
    }
}

//remove html of selected notes
function remove_note(id){
    setTimeout(function(){
        $("#note_"+id).remove();
    }, 5000);
}

$(function() {
    //creation de la note avec identifiant incremente pris pour z-index
    var identifier;
    identifier=parseInt(identifier);
    if (isNaN(identifier)){
        identifier=1;
    }

    //z-index-max
    var z_index_max=0;
    $("#z_index_max").val(z_index_max);


    //Clic pour creation des notes
    $('#opener').click(function() {

        //declaration de la Note et des fonctions associees :
        var default_color=$('#default_color').val();
         z_index_max=parseInt($("#z_index_max").val());
        var new_z_index=z_index_max+1;
        var note_html = "\
        <li id='ancre_note_" + identifier + "' class='notes-list'><div id='note_" + identifier + "' class='notes ui-draggable ui-resizable' style='background-color:" + default_color + "; left:" + identifier*2 + "px; top:" + identifier*2 + "px; z-index: " + new_z_index + "; '\n\
        reduirefini='1' \n\
        reduirecontenufini='1' \n\
        enregistrementfini='1' \n\
        maximizefini='1' \n\
        fermefini='1' \n\
        ferme='0' \n\
        reduit='0' \n\
        modifie='0' \n\
        maximize='0' \n\
        former_content_height='0' \n\
        former_content_width='0' \n\
        former_top='0' \n\
        former_left='0' >\n\
            \t<div id='note_param_section_" + identifier + "' class='notes-color-picker notes-default-hidden-part'  >\n\
                \t\t<div id='colorpicker_" + identifier + "' class='notes-color-picker'></div>\n\
            \t</div>\n\
             \t<form method='post' action='#'>\n\
                \t\t<input type='hidden' id='note_color_" + identifier + "' value='" + default_color + "' />\n\
                \t\t<input type='hidden' id='note_access_date_" + identifier + "' value='" + new Date() + "' />\n\
                \t\t<div id='note_title_" + identifier + "' class='notes-title notes-drag-area' >\n\
                    <!-- icones haut gauche -->\n\
                    \t\t\t<div id='notes_icons_haut_gauche_" + identifier + "' class='notes-icons-up-left'>\n\
                        \t\t\t\t<span id='trienotebutton_" + identifier + "' title='Sort note' class='notes-icons notes-icons-up notes-icon-arrowthick-2-n-s notes-sorter-icon notes-default-hidden-part ui-icon ui-icon-arrowthick-2-n-s' ></span>\n\
                        \t\t\t\t<span id='reduirecontenubutton_" + identifier + "' title='Toggle content' class='notes-icons notes-icons-up notes-icons-triangle-1-s ui-icon ui-icon-triangle-1-s '></span>\n\
                    \t\t\t</div>\n\
                    \n\
                    \t\t\t<input id='title_" + identifier + "' name='title_" + identifier + "' class='notes-change-need-save' style='background-color:" + default_color + ";' />\n\
                    \n\
                    <!-- icones haut droite -->\n\
                    \t\t\t<div id='notes_icons_haut_droite_" + identifier + "' class='notes-icons-up-right'>\n\
                        \t\t\t\t<span id='savebutton_" + identifier + "' title='Save' class='notes-icons notes-icons-up notes-icons-disk ui-icon ui-icon-disk '></span>\n\
                        \t\t\t\t<span id='parambutton_" + identifier + "' title='Parameters' class='notes-icons notes-icons-up notes-icons-gear ui-icon ui-icon-gear '></span>\n\
                        \t\t\t\t<span id='maximizebutton_" + identifier + "' title='Maximize/Minimize' class='notes-icons notes-icons-zoomin notes-icons-copy ui-icon ui-icon-zoomin  '></span>\n\
                        \t\t\t\t<span id='reduirebutton_" + identifier + "' title='Reduce' class='notes-icons notes-icons-up notes-icons-minus ui-icon ui-icon-minus '></span>\n\
                        \t\t\t\t<span id='closebutton_" + identifier + "' title='Close' class='notes-icons notes-icons-close ui-icon ui-icon-close '></span>\n\
                    \t\t\t</div>\n\
                \t\t</div>\n\
                \t\t<div id='note_content_" + identifier + "' class='notes_content' >\n\
                    \t\t\t<textarea name='note_info" + identifier + "' id='note_info" + identifier + "' class='also_resize_" + identifier + " notes-change-need-save' style='background-color:" + default_color + ";' ></textarea><br /> \n\
                    <!-- icon bas gauche-->\n\
                    \t\t\t<div id='notes_icons_bas_gauche_" + identifier + "' class='notes-icons-down-left'>\n\
                        \t\t\t\t<span id='killbutton_" + identifier + "' title='Delete note' class='notes-icons notes-icons-down notes-icons-trash ui-icon ui-icon-trash '></span>\n\
                    \t\t\t</div>\n\
                \t\t</div>\n\
            \t</form>\n\
        </div></li>\n\
        <script type='text/javascript'>\n\
        $('#killbutton_" + identifier + "').click(function() {\n\
            if( confirm('Destroy this Note?') ) {\n\
                runEffect(" + identifier + ",0);\n\
            }\n\
            return false;\n\
            });\n\
        $('#closebutton_" + identifier + "').click(function() {\n\
            runEffect(" + identifier + ",1);\n\
            return false;\n\
            });\n\
        $('#reduirebutton_" + identifier + "').click(function() {\n\
            runEffect(" + identifier + ",2);\n\
            return false;\n\
            });\n\
        $('#reduirecontenubutton_" + identifier + "').click(function() {\n\
            runEffect(" + identifier + ",3);\n\
            return false;\n\
            });\n\
        $('#savebutton_" + identifier + "').click(function() {\n\
            runEffect(" + identifier + ",4);\n\
            return false;\n\
            });\n\
        $('#parambutton_" + identifier + "').click(function() {\n\
                if ($('#note_param_section_" + identifier + "').css('display')=='none') {\n\
                    var param_button_position = $('#parambutton_" + identifier + "').position();\n\
                    var top_pos=param_button_position.top+16;\n\
                    var left_pos=param_button_position.left;\n\
                    var note_z_index=$('#note_" + identifier + "').css('z-index');\n\
                    $('#note_param_section_" + identifier + "').css('top',top_pos+'px');\n\
                    $('#note_param_section_" + identifier + "').css('left',left_pos+'px');\n\
                    $('#note_param_section_" + identifier + "').css('z-index',note_z_index+1);\n\
                    $('#colorpicker_" + identifier + "').farbtastic('#note_color_" + identifier + "');\n\
                    $('#note_param_section_" + identifier + "').fadeIn('slow');\n\
                }\n\
                else {\n\
                    var color=$('#note_color_" + identifier + "').val();\n\
                    $('#note_" + identifier + "').css('background-color',color);\n\
                    $('#title_" + identifier + "').css('background-color',color);\n\
                    $('#note_info" + identifier + "').css('background-color',color);\n\
                    $('#note_param_section_" + identifier + "').fadeOut('slow');\n\
                }\n\
            return false;\n\
            });\n\
       $('#maximizebutton_" + identifier + "').click(function() {\n\
                if ($('#note_" + identifier + "').attr('maximize')=='0') {\n\
                    $('#note_" + identifier + "').attr('maximize','1');\n\
                    $('#note_" + identifier + "').appendTo($('body')).toggleClass('notes-fullscreen');\n\
                    $('#note_content_" + identifier + "').toggleClass('notes-content-fullscreen');\n\
                    $('#note_info" + identifier + "').toggleClass('notes-textarea-fullscreen');\n\
                    $('#note_" + identifier + "').animate({\n\
                        'left': '0px',\n\
                        'top': '0px',\n\
                        'width': '99%',\n\
                        'height': '99%'\n\
                    }, 500);\n\
                }\n\
                else {\n\
                    $('#note_" + identifier + "').attr('maximize','0');\n\
                    $('#note_" + identifier + "').appendTo($('#ancre_note_" + identifier + "')).toggleClass('notes-fullscreen');\n\
                    $('#note_content_" + identifier + "').toggleClass('notes-content-fullscreen');\n\
                    $('#note_info" + identifier + "').toggleClass('notes-textarea-fullscreen');\n\
                    $('#note_" + identifier + "').animate({\n\
                        'left': '50%',\n\
                        'top': '50%'\n\
                    }, 500);\n\
                    $('#note_" + identifier + "').css('height','auto');\n\
                    $('#note_" + identifier + "').css('width','auto');\n\
                }\n\
            return false;\n\
            });\n\
        </script>";

        //ajout de la note dans l'ancre à notes
        $('#notes_anchor').append(note_html);
        
        //note dimensionnable
        $("#note_" + identifier).resizable({
            maxHeight: 50000,
            maxWidth: 50000,
            minHeight: 100,
            minWidth: 250,
            alsoResize: '.also_resize_' + identifier
        });

        //note déplacable
        $('#note_' + identifier).draggable({
            handle: '.notes-drag-area',
            start: function() {
                var z_index_max=$('#z_index_max').val();
                z_index_max=parseInt(z_index_max);
                if($(this).css('z-index')<z_index_max) {
                    z_index_max++;
                    $(this).css('z-index',z_index_max);
                    $('#z_index_max').val(z_index_max);
                }
            }
        });
        identifier++;
        z_index_max++;
        $("#z_index_max").val(z_index_max);
        return false;
    });
});

$(document).ready(function() {
    //Reduit et ranges les Notes par ordre d'id
    $('#reducer').click(function() {
        var all_notes=$(".notes");
        for(i = 0; i < all_notes.length; i++)
        {
            var node = all_notes.eq(i);
            var long_id = node.attr("id");
            var id=long_id.substr(5, long_id.length-5);
            id=parseInt(id);
            if (!isNaN(id)){
                runEffect(id,2);
            }
        }
    });

    //Sauve toutes les Notes
    $('#saver').click(function() {
        var all_notes=$(".notes");
        for(i = 0; i < all_notes.length; i++)
        {
            var node = all_notes.eq(i);
            var long_id = node.attr("id");
            var id=long_id.substr(5, long_id.length-5);
            id=parseInt(id);
            if (!isNaN(id)){
                if($("#note_" + id).attr("a_enregistrer")==1) {
                    runEffect(id,4);
                }
            }
        }
    });

    //Sauvegarde a faire
    $('.notes-change-need-save').live('change', function() {
        var long_id = $(this).attr("id");
        var id=long_id.substr(6, long_id.length-6);
        id=parseInt(id);
        //Si c'est pas le titre c'est le textarea :
        if (isNaN(id)){
            id=long_id.substr(9, long_id.length-9);
            id=parseInt(id);
        }
        if (!isNaN(id)){
            $("#savebutton_" + id).addClass('ui-state-active');
            $("#note_" + id).attr("a_enregistrer",1);
        }
    });

    //affichage en premier plan de la note cliquée
    $('.notes"').live('mousedown',function() {
        var z_index_max=$('#z_index_max').val();
        z_index_max=parseInt(z_index_max);
        if($(this).css('z-index')<z_index_max) {
            z_index_max++;
            $(this).css('z-index',z_index_max);
            $('#z_index_max').val(z_index_max);
        }
    });


    //reglage de la couleur par defaut
    $('#colorpicker').farbtastic('#default_color');
    $('#default_color').focusin(function(){
        $('#colorpicker').fadeIn('1000');
    });
    $('#default_color').blur(function(){
        $('#colorpicker').fadeOut('1000');
    });

    $("body").click(function (){
         var all_notes=$(".notes");
        for(i = 0; i < all_notes.length; i++)
        {
            var node = all_notes.eq(i);
            var long_id = node.attr("id");
            var id=long_id.substr(5, long_id.length-5);
            id=parseInt(id);
            if (!isNaN(id)){
                var color=$("#note_color_" + id ).val();
                $("#note_" + id ).css('background-color',color);
                $("#title_" + id ).css('background-color',color);
                $("#note_info" + id ).css('background-color',color);
                $("#note_param_section_" + id ).fadeOut('slow');
            }
        }
    });

    //hover state on the icons
    $('.ui-icon').live('mouseover mouseout', function(event) {
        if (event.type == 'mouseover') {
            $(this).addClass('ui-state-hover');
        } else {
            $(this).removeClass('ui-state-hover');
        }
    });
});