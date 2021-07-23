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
    if (goToRulesBox.style.display !== "none") {
        goToRulesBox.style.display = "none";
    } else {
        goToRulesBox.style.display = "block";
        startPage.style.display = "none";
    }
};

//function for timer (id="timer-counter")
function startTimer() {
    var seconds = document.querySelector("#timer-counter");
    var timer = setInterval(function () {
        seconds--;
        if (seconds <= 0) {
            alert("Time's Up!");
            clearInterval(timer);
            goToResultBox.style.display = "block";
        }
}, 1000);

//function for start button (id="start-btn")-> navigate from rules box to quiz box (id="quiz-box")

var startBtn = document.querySelector("#start-btn");
var goToQuizBox = document.querySelector("#quiz-box");
var countDown = timer;
startBtn.onclick = () => {
    if (goToQuizBox.style.display !== "none") {
        goToQuizBox.style.display = "none";
    } else {
        goToQuizBox.style.display = "block";
        goToRulesBox.style.display = "none";
    }
    nextQuestion();
    window.onload = startTimer(); 

};


//Quiz Questions

let questions = [
    {
        title: "In a Window event, which property will display a message and an 'OK' and a 'Cancel' button?",
        option1: "prompt()",
        option2: "alert()",
        option3: "confirm()",
        option4: "getSelection()",
        correctOption: "option3"
    },
    {
        title: "In the console, which object method outputs a message?",
        option1: "log()",
        option2:"info()",
        option3:"assert()",
        option4:"clear()",
        correctOption: "option1"
    },
    {
        title: "In Javascript, there are 7 primitive types of data. These include objects, strings, numbers, _______, undefined, ______ and ______.",
        option1:"symbols, functions, none",
        option2:"text, operators, booleans",
        option3:"symbols, data, null",
        option4:"booleans, symbols, null",
        correctOption: "option4"
    },
    {
        title: "Which Global function converts a string to a number?",
        option1: "parseFloat()",
        option2: "parseInt()",
        option3: "Number()",
        option4: "eval()",
        correctOption: "option2"
    },
    {
        title: "Which statement marks a block of statements to be executed depending on a condition?",
        option1: "if...else if...else",
        option2: "for...in",
        option3: "for...else",
        option4: "try...catch...finally",
        correctOption: "option1"
    },
    {
        title: "This statement declares a variable inside brackets {} scope.",
        option1: "const",
        option2: "var",
        option3: "break",
        option4: "let",
        correctOption: "option4"
    },
    {
        title: "Which string method returns the character at a specified index?",
        option1: "match()",
        option2:"indexOf()",
        option3: "startsWith()",
        option4: "charAt()",
        correctOption: "option4"
    },
    {
        title: "In an array, this method joins 2 or more arrays, but does not change the existing arrays.",
        option1: "join()",
        option2: "slice()",
        option3: "concat()",
        option4: "splice()",
        correctOption: "option3"
    }
];

//function to shuffle questions
let shuffledQuestions = [];

function handleQuestions() {
    while (shuffledQuestions.length <=7) {
        const random = questions[Math.floor(Math.random() * questions.length)];
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random);
        }
    }
}

//function for displaying next question
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

function nextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    document.querySelector("#question-number").innerHTML = questionNumber;
    document.querySelector("#player-score").innerHTML = playerScore;
    document.querySelector("#display-question").innerHTML = currentQuestion.question;
    document.querySelector("option-one-label").innerHTML = currentQuestion.option1;
    document.querySelector("option-two-label").innerHTML = currentQuestion.option2;
    document.querySelector("option-three-label").innerHTML = currentQuestion.option3;
    document.querySelector("option-four-label").innerHTML = currentQuestion.option4;
}

//function to check answers
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null;

    options.forEach((option) => {
        if(option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id;
        }
});
//checking to make sure a radio input has been checked or an option being chosen
if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
    document.getElementById("#option-modal").style.display = "flex";
}

//checking if checked radio button is same as answer
options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
        document.getElementById(correctOption).style.backgroundColor = "green";
        playerScore++; //adding to player's score
        indexNumber++; //adding 1 to index so has to display next question..
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++;
        }, 1000);
    }

    else if (option.checked && option.value !== currentQuestionAnswer) {
        const wrongLabelId = option.labels[0].id;
        document.getElementById(wrongLabelId).style.backgroundColor = "red";
        document.getElementById(correctOption).style.backgroundColor = "green";
        indexNumber++;
        //set to delay question number till when next question loads
        setTimeout(() => {
            questionNumber++;
        }, 1000);
    }
});


//called when the next button is called
function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 7) {
            NextQuestion(indexNumber);
        }
        else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null;
    let remarkColor = null;

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Keep trying!";
        remarkColor = "red";
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "You can do better.";
        remarkColor = "orange";
    }
    else if (playerScore >= 7) {
        remark = "Excellent!";
        remarkColor = "green";
        prompt("New High Score! Enter your initials below to be added to the leaderboard!");
    }
    const playerGrade = (playerScore / 10) * 100;

    //data to display to score board
    document.getElementById("#remarks").innerHTML = remark;
    document.getElementById("#remarks").style.color = remarkColor;
    document.getElementById("#grade").innerHTML = playerGrade;
    document.getElementById("#result-time-left").innerHTML = timeLeftOver;
    document.getElementById("#result-score").innerHTML = playerScore;
    document.getElementById("#score-modal").style.display = "flex";

}

//function for restart button(id="restart-btn")-> navigate from result box to rules box (id="rules-box")
var restartBtn = document.querySelector("#restart-btn");
var goToRulesBox = document.querySelector("#rules-box");
var goToResultBox = document.querySelectorAll("#result-box");
restartBtn.onclick = () => {
    questionNumber = 1;
    playerScore = 0;
    wrongAttempt = 0;
    indexNumber = 0;
    shuffledQuestions = [];
    NextQuestion(indexNumber); {
    document.getElementById("#score-modal").style.display = "none";
    if (goToRulesBox.style.display !== "none") {
        goToRulesBox.style.display = "none";
    } else {
        goToRulesBox.style.display = "block";
        goToResultBox.style.display = "none";
    }
};

//function for quit button (id="quit-btn") -> navigate from result box to start page (id="start-page")
var quitBtn = document.querySelector("#quit-btn");
var goToStartPage = document.querySelector("#start-page");
quitBtn.onclick = () => {
    if (goToStartPage.style.display !== "none") {
        goToStartPage.style.display = "none";
    } else; {
        window.location.reload();
    }
};

//Code Sources: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/
//https://github.com/seogram/Simple-Score-keeper/tree/master/js
//https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp//