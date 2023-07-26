let startQuizBtn = document.querySelector('#startQuizBtn');
let viewHighScore = document.querySelector('#viewHighScore')
let header = document.querySelector('#header');
let quiz = document.querySelector('#quiz');
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

let questionList = [
    "When was the first iPhone released?",
    "What MP count did most iPhone cameras use until recently?",
    "With which model did Apple introduce the iPhone mini?"
];

let aAnswerList = ["2007", "12MP", "iPhone 8"];
let bAnswerList = ["2013", "50MP", "iPhone X"];
let cAnswerList = ["2003", "100MP", "iPhone 12"];
let dAnswerList = ["1999", "3,200", "Phone 14"];

quiz.style.display = "none";
addingYourInfo.style.display = "none"

function startQuiz() {
    setTime()
    header.innerHTML = "";
    startQuizBtn.style.display = "none";
    viewHighScore.style.display = "none";
    nextBtn2.style.display = "none"
    nextBtn3.style.display = "none"
    quiz.style.display = "block";
    question.innerHTML = questionList[iterationNumber];
}

var secondsLeft = 20;

function setTime() {
    // Sets interval in variable
   var timerInterval = setInterval(function() {
     secondsLeft--;
     timeLeft.textContent = secondsLeft;

     if(secondsLeft === 0) {
       // Stops execution of action at set interval
       clearInterval(timerInterval);
       header.innerHTML = "You are out of time!"
       quiz.style.display = "none";
       addingYourInfo.style.display = "block"
     }

   }, 1000);
 }

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

function nextQn1() {
    question.innerHTML = questionList[iterationNumber];    
    iterationNumber += 1;
    if (ansChoice == "a") {
        score += 1;
    } else {
        secondsLeft -= 10;
    }}

    function nextQn2() {
        question.innerHTML = questionList[iterationNumber];
        iterationNumber += 1;
    if (ansChoice == "a") {
        score += 1;
    } else {
        secondsLeft -= 10;
    }}

    function nextQn3() {
        if (ansChoice == "a") {
            score += 1;
        } 
        iterationNumber += 1;
        quiz.style.display = "none"
        question.innerHTML = "Your score is " + score + ".";
    }
            