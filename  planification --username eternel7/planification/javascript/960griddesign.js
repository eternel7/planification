//run the currently selected effect to toggle
function runEffect(id,effect_option){
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
    //the note to run the effect on
    var note=$("#note_"+id);
    var note_position = note.position();
    var note_title_area= $("#note_title_"+id);
    var note_content=$("#note_content_"+id);

    if (effect_option==0) {     //delete note option
        note.hide(selectedEffect,options,500,remove_note(id));
    }
    else if (effect_option==1){     //close (hide) note option
        note.hide(selectedEffect,options,500);
    }
    else if (effect_option==2) {    //reduce note option
        if (note.attr('former_top')==0) {
            if (note.attr('closedattr')==0) {
                runEffect(id,3);
            }
            note_title_area.removeClass('notes-drag-area');
            note.draggable("destroy");
            note.attr('former_top',note_position.top);
            note.attr('former_left',note_position.left);
            setTimeout(function(){
                note.animate({
                    "left": "0px",
                    "top": id*35+"px"
                }, 500);
            }, 500);
        }
        else {
            note_title_area.addClass('notes-drag-area');
            note.animate({
                "left": note.attr('former_left')+"px",
                "top": note.attr('former_top')+"px"
            }, 500);
            note.attr('former_top',0);
            note.attr('former_left',0);
            if (note.attr('closedattr')==1) {
                runEffect(id,3);
            }
            note.draggable({
                handle: 'h1'
            });
        }
    }
    else if (effect_option==3) {    //reduce content note option
        if (note.attr('closedattr')==0) {
            note.attr('former_content_height',note_content.css('height'));
            note.attr('former_content_width',note_content.css('width'));
            note.resizable("destroy");
            setTimeout(function(){
                note_content.toggle(selectedEffect,options,500);
            },100);
            setTimeout(function(){
                note.animate({
                    "height": "25px",
                    "width": "250px"
                },500);
            }, 500);
            note.attr("closedattr","1");
        }
        else {
            note.attr("closedattr","0");
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
        note.attr("tosave",0);
    }
}

//remove html of selected notes
function remove_note(id){
    setTimeout(function(){
        $("#note_"+id).remove();
    }, 5000);
}

$(function() {
    //creation de la note avec identifiant incremente
    var identifier;
    identifier=parseInt(identifier);
    if (isNaN(identifier)){
        identifier=1;
    }
    //Clic pour creation des notes
    $('#opener').click(function() {
        //declaration de la Note et des fonctions associees :
        var note_html = "\
        <div id='colorpicker_" + identifier + "' class='notes-color-picker notes-default-hidden-part'></div>\n\
        <div id='note_" + identifier + "' class='notes ui-draggable ui-resizable' closedattr='0' tosave='0' creation_date='"+ new Date() +"' former_content_height='0' former_content_width='0' former_top='0' former_left='0' style='left:" + identifier*2 + "px; top:" + identifier*2 + "px; z-index: " + identifier + "; '>\n\
            \t<form method='post' action='#'><input type='hidden' id='note_color_" + identifier + "' value='#ffffcc'>\n\
                \t\t<div id='note_title_" + identifier + "' class='notes-title notes-drag-area' >\n\
                    \t\t\t<input id='title_" + identifier + "' name='title_" + identifier + "' class='notes-change-need-save' />\n\
                    \n\
                    <!-- icones haut -->\n\
                    \t\t\t<span id='reducecontentbutton_" + identifier + "' Title='Toggle content' class='notes-icons notes-icons-up notes-icons-triangle-1-s ui-icon ui-icon-triangle-1-s '></span>\n\
                    \t\t\t<span id='closebutton_" + identifier + "' Title='Close' class='notes-icons notes-icons-up notes-icons-close ui-icon ui-icon-close '></span>\n\
                    \t\t\t<span id='reducebutton_" + identifier + "' Title='Reduce' class='notes-icons notes-icons-up notes-icons-minus ui-icon ui-icon-minus '></span>\n\
                    \t\t\t<span id='parambutton_" + identifier + "' Title='Parameters' class='notes-icons notes-icons-up notes-icons-gear ui-icon ui-icon-gear '></span>\n\
                    \t\t\t<span id='savebutton_" + identifier + "' Title='Save' class='notes-icons notes-icons-up notes-icons-disk ui-icon ui-icon-disk '></span>\n\
                \t\t</div>\n\
                \t\t<div id='note_content_" + identifier + "' class='notes_content'>\n\
                    \t\t\t<textarea name='note_info" + identifier + "' id='note_info" + identifier + "' class='also_resize_" + identifier + " notes-change-need-save'></textarea>\n\
                    <!-- icon bas -->\n\
                    \t\t\t<span id='killbutton_" + identifier + "' title='Delete note' class='notes-icons notes-icons-down notes-icons-trash ui-icon ui-icon-trash '></span>\n\
                \t\t</div>\n\
                \t</form>\n\
        </div>\n\
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
        $('#reducebutton_" + identifier + "').click(function() {\n\
            runEffect(" + identifier + ",2);\n\
            return false;\n\
            });\n\
        $('#reducecontentbutton_" + identifier + "').click(function() {\n\
            runEffect(" + identifier + ",3);\n\
            return false;\n\
            });\n\
        $('#savebutton_" + identifier + "').click(function() {\n\
            runEffect(" + identifier + ",4);\n\
            return false;\n\
            });\n\
        $('#parambutton_" + identifier + "').click(function() {\n\
                if ($('#colorpicker_" + identifier + "').css('display')=='none')\n\
                {\n\
                    var param_button_position = $('#parambutton_" + identifier + "').position();\n\
                    var note_position = $('#note_" + identifier + "').position();\n\
                    var top_pos=note_position.top+param_button_position.top+16;\n\
                    var left_pos=note_position.left+param_button_position.left;\n\
                    var note_z_index=$('#note_" + identifier + "').css('z-index');\n\
                    $('#colorpicker_" + identifier + "').css('top',top_pos+'px');\n\
                    $('#colorpicker_" + identifier + "').css('left',left_pos+'px');\n\
                    $('#colorpicker_" + identifier + "').css('z-index',note_z_index+1);\n\
                    $('#colorpicker_" + identifier + "').farbtastic('#note_color_" + identifier + "');\n\
                    $('#colorpicker_" + identifier + "').fadeIn('slow');\n\
                }\n\
                else {\n\
                    var color=$('#note_color_" + identifier + "').val();\n\
                    $('#note_" + identifier + "').css('background-color',color);\n\
                    $('#title_" + identifier + "').css('background-color',color);\n\
                    $('#note_info" + identifier + "').css('background-color',color);\n\
                    $('#colorpicker_" + identifier + "').fadeOut('slow');\n\
                }\n\
            return false;\n\
            });\n\
        </script>";

        $('#notes-anchor').append(note_html);
        $("#note_" + identifier).resizable({
            maxHeight: 500,
            maxWidth: 500,
            minHeight: 100,
            minWidth: 250,
            alsoResize: '.also_resize_' + identifier
        });

        $('#note_' + identifier).draggable({
            handle: 'h1'
        });
        identifier++;
        return false;
    });
});

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
            if($("#note_" + id).attr("tosave")==1) {
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
    if (isNaN(id)){
        id=long_id.substr(9, long_id.length-9);
        id=parseInt(id);
    }
    if (!isNaN(id)){
        $("#savebutton_" + id).addClass('ui-state-active');
        $("#note_" + id).attr("tosave",1);
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