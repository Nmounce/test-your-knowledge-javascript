
// function to animate buttons on hover

$('.button').on('mouseenter', function () {
    $(this).addClass('active');
});
$('.button').on('mouseleave', function () {
    $(this).removeClass('active');
});

//function for continue button (id="continue-btn") -> navigate from start page to rules box (id="rules-box")
var contBtn = document.querySelector("#continue-btn");
var goToRulesBox = document.querySelector("#rules-box");
var startPage = document.querySelector("#start-page");
contBtn.onclick = () => {
    if(goToRulesBox.style.display !== "none") {
        goToRulesBox.style.display = "none";
    }else {
        goToRulesBox.style.display = "block";
        startPage.style.display ="none";
    }
};


//function for start button (id="start-btn")-> navigate from rules box to quiz box (id="quiz-box")

var startBtn = document.querySelector("#start-btn");
var goToQuizBox = document.querySelector("#quiz-box");
startBtn.onclick = () => {
    if(goToQuizBox.style.display !== "none") {
        goToQuizBox.style.display = "none";
    }else {
        goToQuizBox.style.display = "block";
        goToRulesBox.style.display = "none";
    }
};

//function for generate quiz

  //Quiz Questions

  let questions = [
      {
      numb: 1,
      title:"In a Window event, which property will display a message and an 'OK' and a 'Cancel' button?",
      choices: [ "prompt()", "alert()", "confirm()", "getSelection()"],
      answer:"confirm()"
  },
      {
      numb: 2,
      title:"In the console, which object method outputs a message?",
      choices: [ "log()", "info()", "assert()", "clear()"],
      answer:"log()"
  },
      {
      numb: 3,
      title:"In Javascript, there are 7 primitive types of data. These include objects, strings, numbers, _______, undefined, ______ and ______.",
      choices: [ "symbols, functions, none", "text, operators, booleans", "symbols, data, null", "booleans, symbols, null"],
      answer:"booleans, symbols, null",
  },
      {
      numb: 4,
      title:"Which Global function converts a string to a number?",
      choices: [ "parseFloat()", "parseInt()", "Number()", "eval()"],
      answer:"parseInt()"
  },
      {
      numb: 5,
      title:"Which statement marks a block of statements to be executed depending on a condition?",
      choices: [ "if...else if...else", "for...in", "for...else", "try...catch...finally"],
      answer:"if...else if...else"
  },
      {
      numb: 6,
      title:"This statement declares a variable inside brackets {} scope.",
      choices: [ "const", "var", "break", "let"],
      answer:"let",
  },
      {
      numb: 7,
      title:"Which string method returns the character at a specified index?",
      choices: [ "match()", "indexOf()", "startsWith()", "charAt()"],
      answer:"charAt()",
  },
      {
      numb: 8,
      title:"In an array, this method joins 2 or more arrays, but does not change the existing arrays.",
      choices: [ "join()", "slice()", "concat()", "splice()"],
      answer:"concat()",
  }];


//function to render questions
function nextQuestion() {
    var randoQ = questions[Math.floor(Math.random() * questions.length)];
    var title = document.querySelector("#ques");
    var choices = document.querySelector("#choices");

    title.textContent = randoQ.title;
    choices.innerHTML = randoQ.choices.map(choices => `<li>${choices}</li>`).join('');
  }
  checkAnswer();

//function to check answers
var green = "#33cc33";
var red = "#ff0000";
var choice = document.querySelector("#choice");
var choices = document.getElementsByName("choices");
var pos = 0;
var score = document.querySelector("score-total");
function checkAnswer() {
    choices = document.getElementsByName("#choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
            red.style.color = "red";
        }
    }
    if(choice == questions[pos].answer) {
        score++;
        green.style.color = "green";
    }
    pos++;
    nextQuestion();
}
//function for timer (id="timer-total")


var timeLeft = 90;
var timer = setInterval(function() {
    if(timeLeft <= 0) {
        clearInterval(timer);
        goToResultBox.style.display = "block";
    }
    document.querySelector("#timer-total").value = 90 - timeLeft;
    timeLeft -= 1;
}, 1000);

timer();

//function to display result time-left (id="result-time-left") Toand result score (id="result-score")
var resultScore = document.querySelector("#result-score");
var resultTimeLeft = document.querySelector("#result-time-left");

resultScore(score);
resultTimeLeft(timeLeft);


//prompt for new high score to include users initials

var initials = prompt("New high score! Please enter your initials below to be added to our leader board!");

//function for restart button(id="restart-btn")-> navigate from result box to rules box (id="rules-box")
var restartBtn = document.querySelector("restart-btn");
var goToRulesBox = document.querySelector("#rules-box");
var goToResultBox = document.querySelectorAll("#result-box");
restartBtn.onclick = () => {
    if(goToRulesBox.style.display !== "none") {
        goToRulesBox.style.display = "none";
    }else {
        goToRulesBox.style.display = "block";
        goToResultBox.style.display = "none";
    }
    initials();
};

//function for quit button (id="quit-btn") -> navigate from result box to start page (id="start-page")
var quitBtn = document.querySelector("#quit-btn");
var goToStartPage = document.querySelector("#start-page");
quitBtn.onclick = () => {
    if(goToStartPage.style.display !== "none") {
        goToStartPage.style.display = "none";
    }else; {
        window.location.reload()
    }
    initials();
};

//Code Sources: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/
//https://github.com/seogram/Simple-Score-keeper/tree/master/js
//
