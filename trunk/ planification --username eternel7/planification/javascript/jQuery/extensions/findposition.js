/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery.fn.extend({
   findPos : function() {
       obj = jQuery(this).get(0);
       var curleft = obj.offsetLeft || 0;
       var curtop = obj.offsetTop || 0;
       while (obj = obj.offsetParent) {
                curleft += obj.offsetLeft
                curtop += obj.offsetTop
       }
       return {left:curleft,top:curtop};
   }
});

