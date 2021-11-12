var base = "rgb(255, 255, 255)";
var accent = "rgb(255, 102, 94)";

var mealList = ["snack", "breakfast", "lunch", "dinner", "side dish"];
var cuisineList = ["asian", "chinese", "japanese", "korean", "中西结合", "western", "italian"];
var typeList = ["soupy", "炒", "pasta", "meat-rice combo", "noodles", "sandwich", "vegetable"];
var cookingList = ["microwave", "外卖", "pressure cooker", "pan only", "pan + pot", "锅", "oven"];
var timeList = ["5 minutes", "15 minutes", "30 minutes", "1 hour", "2 hours"];

function updateList(foods, selectedList) {
    foods.forEach(function(food){
        var tags = food.tags;
        selected = selectedList.flat();
        if (tags.some(r=> selected.includes(r))) {
            dataHTML = "";
            var cuisine = [];
            tags.forEach(function(tag){
                if (cuisineList.includes(tag)) {
                    cuisine.push(tag);
                }
            })
            dataHTML += "<div class='food-item'>";
            dataHTML += "<img src='" + food.img + "'><div class='food-desc'>";
            dataHTML += "<span class='food-name'>" + food.name + "</span><br>";
            dataHTML += "<span class='food-tags'>" + cuisine.join(", ") + "</span><hr>";
            dataHTML += "<span class='food-ingredients'>" + food.ingredients.join(", ") + "</span><br>";
            dataHTML += "<span class='food-time'>" + food.time + "</span></div></div>";
        }

    });
    $("#food-list").html(dataHTML);    
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function displayAll(foods) {
    foods = shuffle(foods);
    dataHTML = "";
    foods.forEach(function(food){
        var tags = food.tags;
        var cuisine = [];
        tags.forEach(function(tag){
            if (cuisineList.includes(tag)) {
                cuisine.push(tag);
            }
        })
        dataHTML += "<div class='food-item'>";
        dataHTML += "<img src='" + food.img + "'><div class='food-desc'>";
        dataHTML += "<span class='food-name'>" + food.name + "</span><br>";
        dataHTML += "<span class='food-tags'>" + cuisine.join(", ") + "</span><hr>";
        dataHTML += "<span class='food-ingredients'>" + food.ingredients.join(", ") + "</span><br>";
        dataHTML += "<span class='food-time'>" + food.time + "</span></div></div>";
    });
    $("#food-list").html(dataHTML);
}

$(document).ready(function(){

    $.get("https://joyho796.github.io/what2eat/data.json", function(data){
        str = JSON.stringify(data);
        var foods = JSON.parse(str);
        foods = shuffle(foods);

        dataHTML = "";
        foods.forEach(function(food){
            var tags = food.tags;
            var cuisine = [];
            tags.forEach(function(tag){
                if (cuisineList.includes(tag)) {
                    cuisine.push(tag);
                }
            })
            dataHTML += "<div class='food-item'>";
            dataHTML += "<img src='" + food.img + "'><div class='food-desc'>";
            dataHTML += "<span class='food-name'>" + food.name + "</span><br>";
            dataHTML += "<span class='food-tags'>" + cuisine.join(", ") + "</span><hr>";
            dataHTML += "<span class='food-ingredients'>" + food.ingredients.join(", ") + "</span><br>";
            dataHTML += "<span class='food-time'>" + food.time + "</span></div></div>";

            $("#shuffle").click(function(){
                displayAll(foods);
            })
        });
        $("#food-list").html(dataHTML);


        var tags = [[], [], [], [], []];

        $(".tag").click(function(){
            tag = $(this).text();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                if (mealList.includes(tag)) {tags[0].pop(tag)}
                else if (cuisineList.includes(tag)) {tags[1].pop(tag)}
                else if (typeList.includes(tag)) {tags[2].pop(tag)}
                else if (cookingList.includes(tag)) {tags[3].pop(tag)}
                else if (timeList.includes(tag)) {tags[4].pop(tag)}
            } else {
                $(this).addClass("active");
                if (mealList.includes(tag)) {tags[0].push(tag)}
                else if (cuisineList.includes(tag)) {tags[1].push(tag)}
                else if (typeList.includes(tag)) {tags[2].push(tag)}
                else if (cookingList.includes(tag)) {tags[3].push(tag)}
                else if (timeList.includes(tag)) {tags[4].push(tag)}
            }
            updateList(foods, tags);
        });

    });

});

        