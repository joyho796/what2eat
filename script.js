var base = "rgb(255, 255, 255)";
var accent = "rgb(255, 102, 94)";

var tags = [];

$(document).ready(function(){

    $.get("https://joyho796.github.io/what2eat/data.json", function(data){
        str = JSON.stringify(data);
        foods = JSON.parse(str);

        dataHTML = "";
        foods.forEach(function(food){
            dataHTML += "<div class='food-item'>";
            dataHTML += "<img src='" + food.img + "'><div class='food-desc'>";
            dataHTML += "<span class='food-name'>" + food.name + "</span><br>";
            dataHTML += "<span class='food-tags'>" + food.tags.join(", ") + "</span><hr>";
            dataHTML += "<span class='food-ingredients'>" + food.ingredients.join(", ") + "</span><br>";
            dataHTML += "<span class='food-time'>" + food.time + "</span></div></div>";
        });
        $("#food-list").html(dataHTML);


        // dataHTML = "<h3>User Friendly Display</h3>";
        // songs.forEach(function(song){
        //     dataHTML += "<p>";
        //     dataHTML += "<strong>" + song.title + "</strong><br>";
        //     dataHTML += "Artist(s): " + song.artists.join(", ") + "<br>";
        //     dataHTML += "Genre(s): " + song.genres.join(", ") + "<br>";
        //     dataHTML += "Released: " + song.year;
        //     dataHTML += "</p><br>";
        // });
        // $("#song_data").html(dataHTML);

        // filteredHTML = "<h3>Filtered Data</h3>";
        // filteredHTML += "<p> Select a genre: <select id='genre_select'>";
        // genreSet = [];
        // songs.forEach(function(song) {
        //     song.genres.forEach(function(genre){
        //         if (!genreSet.includes(genre)) {
        //             genreSet.push(genre);
        //             filteredHTML += "<option value='" + genre + "'>" + genre + "</option>"
        //         }
        //     });
        // });
        // filteredHTML  += "</select>&nbsp&nbsp<input type='button' value='Filter'></p><br>";
        // $("#filtered_data").html(filteredHTML);

        // $(":button").click(function(){
        //     selectedGenre = document.getElementById("genre_select").value;
        //     displayHTML = "<p><strong>Showing Genre: " + selectedGenre + "</strong><p><br>";
        //     songs.forEach(function(song) {
        //         if (song.genres.includes(selectedGenre)){
        //             displayHTML += "<p>";
        //             displayHTML += "<strong>" + song.title + "</strong><br>";
        //             displayHTML += "Artist(s): " + song.artists.join(", ") + "<br>";
        //             displayHTML += "Genre(s): " + song.genres.join(", ") + "<br>";
        //             displayHTML += "Released: " + song.year;
        //             displayHTML += "</p><br>";
        //         }
        //     });
        //     $("#filtered_data_display").html(displayHTML);
        // });
    });

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