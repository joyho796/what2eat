var base = "rgb(255, 255, 255)"
var accent = "rgb(255, 102, 94)"

$(document).ready(function(){

    $(".tag").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

});