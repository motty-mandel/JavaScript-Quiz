// Finding references to all the buttons and questions and answers from the html
let startQuizBtn = document.querySelector('#startQuizBtn');
let timeLeft = document.querySelector('#timeLeft')
let viewHighScore = document.querySelector('#viewHighScore')
let header = document.querySelector('#header');
let quiz = document.querySelector('#quiz');
let input = document.querySelector('#input');
let submitScore = document.querySelector('#submitScore');
let nextBtn1 = document.querySelector('#nextBtn1');
let nextBtn2 = document.querySelector('#nextBtn2');
let nextBtn3 = document.querySelector('#nextBtn3');
let question = document.querySelector('#question');
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');
let addingYourInfo = document.querySelector('#addingYourInfo');

let ansChoice = "";
let score = 0
let iterationNumber = 0;
let scoreAmount = localStorage.getItem('score');

// Making a list questions to ask
let questionList = [
    "When was the first iPhone released?",
    "In what year did the space shuttle Columbia expload?",
    "What was the year before 2000?"
];

// Hiding the questions until needed
quiz.style.display = "none";
addingYourInfo.style.display = "none";

// I tried getting this to work
// submitScore.addEventListener('click', function() {
//     var initials = input;

//     localStorage.setItem("score", score);

//     localStorage.setItem("initials", initials);
// });

// Starting the timer, hiding the header and most of the buttons and showing the questions
function startQuiz() {
    setTime()
    header.innerHTML = "";
    viewHighScore.style.display = "none"
    startQuizBtn.style.display = "none";
    nextBtn2.style.display = "none";
    nextBtn3.style.display = "none";
    quiz.style.display = "block";
    question.innerHTML = questionList[iterationNumber];
}

var secondsLeft = 20;

// Creating the timer
function setTime() {
    // Sets interval in variable
   var timerInterval = setInterval(function() {
     secondsLeft--;
     timeLeft.innerHTML = secondsLeft;

     if (secondsLeft <= 0) {
       // Stops execution of action at set interval
       clearInterval(timerInterval);
       header.innerHTML = "All done! Your score is " + score + ".";
       quiz.style.display = "none";
       addingYourInfo.style.display = "block";
       timeLeft.innerHTML= "";
     }

   }, 1000);
 }

 // Making the chosen answer red and the others white
function aFunction() {
    answerA.style.color = "red";
    answerB.style.color = "white";
    answerC.style.color = "white";
    answerD.style.color = "white";
    ansChoice = "a";
}

function bFunction() {
    answerA.style.color = "white";
    answerB.style.color = "red";
    answerC.style.color = "white";
    answerD.style.color = "white";
    ansChoice = "b";
}

function cFunction() {
    answerA.style.color = "white";
    answerB.style.color = "white";
    answerC.style.color = "red";
    answerD.style.color = "white";
    ansChoice = "c";
}

function dFunction() {
    answerA.style.color = "white";
    answerB.style.color = "white";
    answerC.style.color = "white";
    answerD.style.color = "red";
    ansChoice = "d";
}

// Checking to see if the answers are right
function nextQn1() {
    if (ansChoice == "a") {
        score += 1;
    } else {
        secondsLeft -= 10;
    }  
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber];    
    nextBtn1.style.display = "none";
    nextBtn2.style.display = "block";
}

function nextQn2() {
    if (ansChoice === "c") {
        score += 1;
    } else {
        secondsLeft -= 10;
    }       
    iterationNumber += 1;        
    question.innerHTML = questionList[iterationNumber];
    nextBtn2.style.display = "none";
    nextBtn3.style.display = "block";
}

function nextQn3() {
    if (ansChoice === "d") {
        score += 1;
    } 
    secondsLeft = 0;
}
