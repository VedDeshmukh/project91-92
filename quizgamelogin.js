function login(){
    user_name1 = document.getElementById("player1_name_input").value;
    user_name2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("user name 1", user_name1);
    localStorage.setItem("user name 2", user_name2);
    window.location = "quizgame.html";
}