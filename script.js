var base = "rgb(255, 255, 255)";
var accent = "rgb(255, 102, 94)";

var tags = [];

$(document).ready(function(){

    $(".tag").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            tags.pop($(this).text());
        } else {
            $(this).addClass("active");
            tags.push($(this).text());
        }
        console.log(tags);
    });

});