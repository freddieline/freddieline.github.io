if (typeof(Storage) !== "undefined") {
    
    // set initial value for Level 1
    if(!localStorage.number_game_1){
        localStorage.setItem("number_game_1", "Not completed");
    }
    if(!localStorage.number_game_2){
        localStorage.setItem("number_game_2", "Not completed");
    }
    if(!localStorage.number_game_3){
        localStorage.setItem("number_game_3", "Not completed");
    }
    if(!localStorage.number_game_4){
        localStorage.setItem("number_game_4", "Not completed");
    }

} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}