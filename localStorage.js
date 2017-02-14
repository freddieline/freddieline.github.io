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
    if(!localStorage.number_game_total_score){
        localStorage.setItem("number_game_total_score", "Not completed");
    }

        // set initial value for Level 1
    if(!localStorage.logic_game_1){
        localStorage.setItem("logic_game_1", "Not completed");
    }
    if(!localStorage.logic_game_2){
        localStorage.setItem("logic_game_2", "Not completed");
    }
    if(!localStorage.logic_game_3){
        localStorage.setItem("logic_game_3", "Not completed");
    }
    if(!localStorage.logic_game_4){
        localStorage.setItem("logic_game_4", "Not completed");
    }
    if(!localStorage.logic_game_5){
        localStorage.setItem("logic_game_5", "Not completed");
    }
        // set initial value for Level 1
    if(!localStorage.logic_game_total_score){
        localStorage.setItem("logic_game_total_score", "Not completed");
    }

} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}