player1=localStorage.getItem("user name 1");
player2=localStorage.getItem("user name 2");

player1_score = 0;
player2_score = 0;

document.getElementById('1').innerHTML=player1 + " : ";
document.getElementById('2').innerHTML=player2 + " : ";

document.getElementById('1score').innerHTML = player1_score;
document.getElementById('2score').innerHTML = player2_score;

document.getElementById("question").innerHTML="Question Turn: " + player1;
document.getElementById("Answer").innerHTML="Answer Turn: " + player2;

function send(){
num1 = document.getElementById("number_input1").value;
num2 = document.getElementById("number_input2").value;
answer_check = parseInt(num1) * parseInt(num2);
question = "<h4>" + num1 + " X " + num2 + "<h4>";
input_box = "<br>Answer: <input type = 'text' id = 'answer_input'>";
check_button = "<br><br><button class = 'btn-btn success' onclick = 'check()'>Check</button>";
row = question + input_box + check_button;
document.getElementById("question_display").innerHTML = row;
document.getElementById("number_input1").value = "";
document.getElementById("number_input2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check(){
get_answer = document.getElementById("answer_input").value;
if(get_answer == answer_check){
    if(answer_turn == "player1"){
        player1_score = player1_score + 1;
        document.getElementById("1score").innerHTML = player1_score;
    }
    else
    {
        player2_score = player2_score + 1;
        document.getElementById("2score").innerHTML = player2_score;
    }

}

if (question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("question").innerHTML = "Question Turn: " + player2;
}
else{
    question_turn = "player1";
    document.getElementById("question").innerHTML = "Question Turn: " + player1;   
}

if (answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("Answer").innerHTML = "Answer Turn: " + player2;
}
else{
    answer_turn = "player1";
    document.getElementById("Answer").innerHTML = "Answer Turn: " + player1;   
}

document.getElementById("question_display").innerHTML = "";
}
