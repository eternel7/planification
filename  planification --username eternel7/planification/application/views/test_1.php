
<div id="notes_action_bar">
    <span id="opener" class="notes-opener notes-effect"><img src="<?php echo base_url(); ?>images/post-it.jpg" height="75" width="75" alt="Create a note" /><input type="hidden" id="z_index_max" name="z_index_max" value="0" /></span>
    <span id="reducer" class="notes-reducer notes-effect">Reduce Notes</span>
    <span id="saver" class="notes-saver notes-effect">Save Notes</span>
    <span id="trasher" class="notes-trasher notes-effect"><img src="<?php echo base_url(); ?>images/trasher.jpg" alt="Bin" /></span>
</div>
<div id="notes_effect_param_default">
    <span class="notes-effect">
        <span class="notes-effect-element">Toggle method :</span>
        <span class="notes-effect-element"><select name="effectTypes" id="effectTypes">
            <option value="blind">Blind</option>
            <option value="bounce">Bounce</option>
            <option value="clip">Clip</option>
            <option value="drop">Drop</option>
            <option value="explode">Explode</option>
            <option value="fold">Fold</option>
            <option value="highlight">Highlight</option>
            <option value="puff">Puff</option>
            <option value="pulsate">Pulsate</option>
            <option value="scale">Scale</option>
            <option value="size">Size</option>
            <option value="slide">Slide</option>
        </select></span>
    </span>
    <span class="notes-effect">
        <span class="notes-effect-element">Close method :</span>
        <span class="notes-effect-element"><select name="effectTypesclose" id="effectTypesclose">
            <option value="blind">Blind</option>
            <option value="bounce">Bounce</option>
            <option value="clip">Clip</option>
            <option value="drop">Drop</option>
            <option value="explode">Explode</option>
            <option value="fold">Fold</option>
            <option value="highlight">Highlight</option>
            <option value="puff">Puff</option>
            <option value="pulsate">Pulsate</option>
            <option value="scale">Scale</option>
            <option value="size">Size</option>
            <option value="slide">Slide</option>
        </select></span>
    </span>
    <span class="notes-effect">
        <span class="notes-effect-element">Trash method :</span>
        <span class="notes-effect-element"><select name="effectTypeskill" id="effectTypeskill">
            <option value="blind">Blind</option>
            <option value="bounce">Bounce</option>
            <option value="clip">Clip</option>
            <option value="drop">Drop</option>
            <option value="explode">Explode</option>
            <option value="fold">Fold</option>
            <option value="highlight">Highlight</option>
            <option value="puff">Puff</option>
            <option value="pulsate">Pulsate</option>
            <option value="scale">Scale</option>
            <option value="size">Size</option>
            <option value="slide">Slide</option>
        </select></span>
    </span>
    <span class="notes-effect">
        <span class="notes-effect-element">Default color :</span>
        <span class="notes-effect-element"><input type="text" id="default_color" size="7" name="default_color" value="#ffffcc" /></span>
    </span><div id="colorpicker" style="display:none;"></div>
</div>
<div id="notes_container">
    <ul id="notes_anchor" class="notes-anchor-ul">&nbsp;</ul>
</div>