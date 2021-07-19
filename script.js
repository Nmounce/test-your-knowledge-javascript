//code sources: https://www.codingnepalweb.com/quiz-app-with-timer-javascript &
//https://codepen.io/treighton/pen/NWjjJYy &
//https://www.codegrepper.com/code-examples/javascript/javascript+quiz+with+timer
//https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer

var contBtn = document.querySelector('#continue-btn')
var rulesBox = document.querySelector('#rules-box')
var startPage = document.querySelector('#start-page')
var startBtn = document.querySelector('#start-btn')
var quizBox = document.querySelector('#quiz-box')
var reTry = document.querySelector('#restart-btn')
var quit = document.querySelector('#quit-btn')
var resultBox = document.querySelector('#result-box')

//BUTTONS

// Animates buttons on hover
$('.button').on('mouseenter', function () {
    $(this).addClass('active');
});
$('.button').on('mouseleave', function () {
    $(this).removeClass('active');
});

//Continue button -> nav to Rules page
contBtn.onclick = () => {
    startPage.classList.remove("startInfo"); //remove start page
    rulesBox.classList.add("activeRules"); //show rules box
}

//Start Quiz button -> nav to quiz page
startBtn.onclick = () => {
    rulesBox.classList.remove("activeRules"); //remove rules box
    quizBox.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
}

//Retry button -> navigate to rules page
let timeValue =  90
let que_count = 0
let que_numb = 1
let userScore = 0
let counter

var reTry = result_box.querySelector('#restart-btn')
var quit = result_box.querySelector('#quit-btn')

reTry.onclick = () => {
    window.location.reload(rulesBox); //reload the rules page
}

//Quit button -> reload page
quit.onclick = ()=>{
    window.location.reload(); //reload the current window
}

//Timer
var count = 90;
var interval = startTimer(function(){
    document.querySelector('#timer-#').innerHTML=count;
    count--;
    if (count === 0){
        clearInterval(interval),
        document.querySelector('#timer-#').innerHTML="Done",
        alert("Time's Up!")
      }1000;

//QUIZ

//click attribute for user selection
var choice = choices.querySelectorAll('.choice');

for(i=0; i < choice.length; i++){
    choice[i].setAttribute('onClick', 'optionSelected(this)');
}

function userChoice (answer){
    clearInterval(counter); //clear counter
    let userAns = answer.textContent; //getting user selected option
    let correctAns = questions[que_count].answer; //getting correct answer from array
    var allChoices = choices.children.length; //getting all option items
    if(userAns == correctAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct");
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect");
        console.log("Wrong Answer");

        for(i=0; i < allChoices; i++){
            if(choices.children[i].textContent == correctAns){ //if there is an option which is matched to an array answer
                choices.children[i].setAttribute("class", "choice correct") //adding green color to matched option
                console.log("Auto selected correct answer.")
            }
        }
    }
    for(i=0; i < allChoices; i++){
        choices.children[i].classList.add("disabled") //once user select an option then disabled all options
    }
    nextBtn.classList.add("show") //show the next button if user selected any option
}

function showResult(){
    startPage.classList.remove('#startPage') //hide start page
    rulesBox.classList.remove('#rules-box') //hide rules box
    quizBox.classList.remove('#quiz-box') //hide quiz box
    resultBox.classList.add('#result-box') //show result box
    scoreText = resultBox.querySelector('#score')
    timeLeft = resultBox.querySelector('#time-left')

    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = 'Wow 🎉, You got '+ userScore + ' out of ' + questions.length +'.';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = 'Nice 😎, You got ' + userScore +  'out of '+ questions.length +'.';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = 'Sorry 😐, You got only ' + userScore + ' out of ' +  questions.length +'.';
        scoreText.innerHTML = scoreTag;
    }
}



function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent
            timeCount.textContent = "0" + addZero //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            var allChoices = choices.children.length; //getting all option items
            let correctAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(choices.children[i].textContent == correctAns){ //if there is an option which is matched to an array answer
                    choices.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    choices.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                choices.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            nextBtn.classList.add("show"); //show the next button if user selected any option
        }
    }
}
const queCounter = document.querySelector("footer .total_que");

function questionCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCount = ''+ index +' of '+ questions.length +' Questions';
}

populate();