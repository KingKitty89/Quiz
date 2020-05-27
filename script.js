//select all elements 
var startButton = document.getElementById("start-button");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var countdownEl = document.getElementById("countdown"); 
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var textContent = document.getElementById("progress");
var scoreInput = document.getElementById("score-input");
var highScoreButton = document.getElementById("high-score-button");
var highScoreDisplay = document.getElementById("high-scores");

//my questions
var questions = [
    {
        question : "Commonly used data types do not include?", 
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "alerts",
        choiceD : "numbers",
        correct : "B"
    },
    
    {
        question : "do you like cats?", 
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "alerts",
        choiceD : "numbers",
        correct : "B"
    },
    {
        question : "Do you like dogs?", 
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "alerts",
        choiceD : "numbers",
        correct : "B"
    },
];

//Variables 
var lastQuestion = questions.length -1;
var interval;
var score = 0;
var runningQuestion = 0;
var count = 75;

//render a question 
function renderQuestion() {
    var q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


//start quiz
 function startQuiz() {
    start.style.display ="none";
    renderQuestion();
    quiz.style.display = "block";
    startTimer();
}

//counter render 
function startTimer() {
    
    countdownEl.textContent = count;
    var timerInterval = setInterval(function() {
      count--;
      countdownEl.textContent = "Time: " + count;
  
      if(count === 0) {
        clearInterval(timerInterval);
        
      }
  
    }, 1000);
  }
//check answer
function checkAnswer(answer) {
    console.log(score)
    if (answer === questions [runningQuestion].correct){
        //answer is correct
        score++;
         // alert CORRECT in html!
        answerIsCorrect();
        runningQuestion++;
        renderQuestion();
    }
    else {
        //answer is incorrect 
        // alert WRONG in html!
        answerIsIncorrect();
        runningQuestion++;
        renderQuestion();
        count = count - 10;
    }
 
    if (runningQuestion === questions.length -1){
//end the quiz and show the score show the input for initials entry show high scores option to refresh quiz
        clearInterval(count);
        scoreRender();
        showHighScore();
    }

}
//answer is correct //set up an alert saying CORRECT!
function answerIsCorrect() {
   textContent.innerHTML = "Correct!";
    
}
//answer is incorrect //set up an alert saying WRONG!
function answerIsIncorrect() {
    textContent.innerHTML = "Wrong";
    
}

//score render //form
function scoreRender() {
    score.style.display = "block";
    
    // how do I show a number score here (need to give a value to the correct answers)

 
} 

function showHighScore() {
    countdownEl.style.display ="none";
    quiz.style.display = "none";
    highScoreDisplay.style.display = "block";
    
}

startButton.addEventListener("click",startQuiz);
highScoreButton.addEventListener("click",showHighScore);