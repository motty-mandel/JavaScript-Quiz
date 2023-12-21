// Finding references to all the buttons and questions and answers from the html
let startQuizBtn = document.querySelector('#startQuizBtn');
let timeLeft = document.querySelector('#timeLeft')
let viewHighScoreBtn = document.querySelector('#viewHighScore')
let header = document.querySelector('#header');
let quiz = document.querySelector('#quiz');
let input = document.querySelector('#initials');
let submitScore = document.querySelector('#submitScore');
let question = document.querySelector('#question');
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');
let addingYourInfo = document.querySelector('#addingYourInfo');

let score = 0
let iterationNumber = 0;

// Making a list of questions to ask
let questionList = [
    "When was the first iPhone released?",
    "What was the year before 2000?",
    "In what year did the space shuttle Columbia expload?",
    "In which year did Magnus Carlsen break Gary Kasparov's FIDE rating?"
];
// Making a welcome message
let welcome = `Welcome to my Tech Quiz.
        You have until the timer runs out to 
    answer these questions. If you get an answer wrong
        you will lose ten seconds from the timer.
                    Good luck!`;


header.innerHTML = welcome;

// Hiding the questions until needed
quiz.style.display = "none";
addingYourInfo.style.display = "none";
var previousScores = localStorage.getItem("highScores");
submitScore.addEventListener('click', function () {
    if (previousScores) {
        previousScores = JSON.parse(previousScores);
    } else {
        previousScores = [];
    }
    previousScores.push([input.value, score]);
    localStorage.setItem("highScores", JSON.stringify(previousScores));
});

function viewHighScore() {
    if (previousScores) {
        console.log(previousScores);
        // Displaying the high scores in the header
        var highScoresString = "";
        for (var i = 0; i < previousScores.length; i++) {
            highScoresString += previousScores[i][0] + ": " + previousScores[i][1] + "<br>";
        }
        header.innerHTML = highScoresString;
        viewHighScoreBtn.style.display = 'none';
        startQuizBtn.style.display = 'none';
        var button = document.createElement('button');
        button.textContent = 'Go back';
        document.body.appendChild(button);
        button.addEventListener('click', function () {
            location.reload();
        });
    } else {
        header.innerHTML = "No high scores yet";
        viewHighScoreBtn.style.display = 'none';
    }
};

    // Starting the timer, hiding the header and most of the buttons and showing the questions
    function startQuiz() {
        setTime()
        score = 0
        iterationNumber = 0;
        secondsLeft = 200
        header.style.display = "none"
        startQuizBtn.style.display = "none"
        viewHighScoreBtn.style.display = "none"
        quiz.style.display = "block";
        question.innerHTML = questionList[iterationNumber];
    }

    var secondsLeft = 200;

    // Creating the timer
    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeLeft.innerHTML = secondsLeft;

            if (secondsLeft <= 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                header.style.display = "block"
                header.innerHTML = "All done! Your score is " + score + ".";
                quiz.style.display = "none";
                addingYourInfo.style.display = "block";
                timeLeft.innerHTML = "";
            }

        }, 1000);
    }

    // Making the chosen answer red and the others white
    function aFunction() {
        answerA.style.color = "red";
        answerB.style.color = "white";
        answerC.style.color = "white";
        answerD.style.color = "white";

        if (questionList[iterationNumber] === questionList[0]) {
            score += 1;
        } else {
            secondsLeft -= 10;
        };

        iterationNumber += 1;
        if (iterationNumber === 4) {
            secondsLeft = 0;
            answerA.style.color = "white";
        } else {
            question.innerHTML = questionList[iterationNumber];
        }
    };

    function bFunction() {
        answerA.style.color = "white";
        answerB.style.color = "red";
        answerC.style.color = "white";
        answerD.style.color = "white";

        if (questionList[iterationNumber] === questionList[3]) {
            score += 1;
        } else {
            secondsLeft -= 10;
        }

        iterationNumber += 1;
        if (iterationNumber === 4) {
            secondsLeft = 0;
            answerB.style.color = "white";
        } else {
            question.innerHTML = questionList[iterationNumber];
        }
    }

    function cFunction() {
        answerA.style.color = "white";
        answerB.style.color = "white";
        answerC.style.color = "red";
        answerD.style.color = "white";

        if (questionList[iterationNumber] === questionList[2]) {
            score += 1;
        } else {
            secondsLeft -= 10;
        }

        iterationNumber += 1;
        if (iterationNumber === 4) {
            secondsLeft = 0;
            answerC.style.color = "white";
        } else {
            question.innerHTML = questionList[iterationNumber];
        }
    }

    function dFunction() {
        answerA.style.color = "white";
        answerB.style.color = "white";
        answerC.style.color = "white";
        answerD.style.color = "red";

        if (questionList[iterationNumber] === questionList[1]) {
            score += 1;
        } else {
            secondsLeft -= 10;
        }

        iterationNumber += 1;
        if (iterationNumber === 4) {
            secondsLeft = 0;
            answerD.style.color = "white";
        } else {
            question.innerHTML = questionList[iterationNumber];
        }
    }


    function submitFctn() {
        header.innerHTML = welcome
        startQuizBtn.style.display = "inline"
        viewHighScoreBtn.style.display = "inline"
        addingYourInfo.style.display = "none";
    }
