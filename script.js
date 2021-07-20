// fucntion to animate buttons on hover
$('.button').on('mouseenter', function () {
    $(this).addClass('active');
});
$('.button').on('mouseleave', function () {
    $(this).removeClass('active');
});

//function for continue button (id="continue-btn") -> navigate from start page to rules box (id="rules-box")

var goToRulesBox = document.querySelector("#rules-box");
var contBtn = document.querySelector("#continue-btn");
contBtn.onclick = () => {
    if(goToRulesBox.style.display !== "none") {
        goToRulesBox.style.display = "none";
    }else {
        goToRulesBox.style.display = "block";
    }
};

//function for start button (id="start-btn")-> navigate from rules box to quiz box (id="quiz-box")

var goToQuizBox = document.querySelector("#quiz-box");
var startBtn = document.querySelector("#start-btn");
startBtn.onclick = () => {
    if(goToQuizBox.style.display !== "none") {
        goToQuizBox.style.display = "none";
    }else {
        goToQuizBox.style.display = "block";
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
    var randoQ = questions[Math.floor(Math.random() * questions.length)]
    var title = document.querySelector('#ques')
    var choices = document.querySelector('.choices ul')

    title.textContent = randoQ.title
    choices.innerHTML = randoQ.choices.map(choices => `<li>${choices}</li>`).join('')
  }
  document.querySelector('#next-btn').addEventListener('click', nextQuestion)

//function to check answers

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos].answer) {
        score++;
    }
    pos++;
    nextQuestion();

//function to get quiz to load

window.addEventListener("load", nextQuestion);

//function for timer (id="timer-total")

var timeLeft = 90;
var timer = setInterval(function() {
    if(timeLeft <= 0) {
        clearInterval(timer);
        goToResultBox.style.display = "block";
    }
    document.querySelector(#timer-total).value = 90 - timeLeft;
    timeLeft -= 1;
}, 1000);


//function for score counter (id="score-total")

var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var scoreDisplay = document.querySelector("#score-total");
var resultScore = document.querySelector("#result-score");
var score = 0;
var TargetScore = 8;
var gameOver = false;

btn0.addEventListener("click", function(){
    if(!gameOver){
        score +=1;
    if score===TargetScore) {
        scoreDisplay.classList.add("winner");
        alert ("You Win!");
        gameOver = true;
    }
    scoreDisplay.textContent=score;
    }
});
btn1.addEventListener("click", function(){
    if(!gameOver){
        score +=1;
    if score===TargetScore) {
        scoreDisplay.classList.add("winner");
        alert ("You Win!");
        gameOver = true;
    }
    scoreDisplay.textContent=score;
    }
});
btn2.addEventListener("click", function(){
    if(!gameOver){
        score +=1;
    if score===TargetScore) {
        scoreDisplay.classList.add("winner");
        alert ("You Win!");
        gameOver = true;
    }
    scoreDisplay.textContent=score;
    }
});
btn3.addEventListener("click", function(){
    if(!gameOver){
        score +=1;
    if score===TargetScore) {
        scoreDisplay.classList.add("winner");
        alert ("You Win!");
        gameOver = true;
    }
    scoreDisplay.textContent=score;
    }
});


//function for questions selection (color indicators and alert) (id="ques")

//function for next button -> go to next quiz question (id="next-btn")

//function to hide next button until selection is made

//function for result box ( id="result-box") -> navigate to result box when timer reaches 0 or from last question


//function to display result time-left (id="result-time-left") and result score (id="result-score")

//prompt for new high score to include users initials

//function for restart button(id="restart-btn")-> navigate from result box to rules box (id="rules-box")

var goToRulesBox = document.querySelector("#rules-box");
var restartBtn = document.querySelector("#restart-btn");
restartBtn.onclick = () => {
    if(goToRulesBox.style.display !== "none") {
        goToRulesBox.style.display = "none";
    }else {
        goToRulesBox.style.display = "block";
    }
};

//function for quit button (id="quit-btn") -> navigate from result box to start page (id="start-page")

var goToStartPage = document.querySelector("#start-page");
var quitBtn = document.querySelector("#quit-btn");
quitBtn.onclick = () => {
    if(goToStartPage.style.display !== "none") {
        goToStartPage.style.display = "none";
    }else {
        goToStartPage.style.display = "block";
    }
};

//Code Sources: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/
//https://github.com/seogram/Simple-Score-keeper/tree/master/js
//

var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var choice0 = document.querySelector("#choice0");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var timerCounter = document.querySelector("#timer-counter");
var timerTotal = document.querySelector("#timer-total");
var scoreCounter = document.querySelector("#score-counter");
var scoreTotal = document.querySelector("#score-total");

