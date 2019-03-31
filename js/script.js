$(document).ready(function(){
    $("#loc").hover(function(){
        setTimeout(function(){ 
            $("#loc").attr("src","System.gif");
            $("#loc").removeClass("scale-up-center");
            $("#loc").addClass("in-zoom");
        }, 1300);
    })
})