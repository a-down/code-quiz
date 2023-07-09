// global variables
i = 0;
score = 0;
const mainEl = document.querySelector("main");
const introEl = document.querySelector(".intro-div");
const questionEl = document.querySelector(".question-div");
const saveEl = document.querySelector(".save-div");
const scoresEl = document.querySelector(".scores-div");
let displayTime = document.querySelector(".timer");
let highScoresButton = document.querySelector(".highscores");
let timeLeft = 90;
let userInitials
let scoreStringify
let scoresFromStorage
let userScoreObject
var previousScores
var scoreHistory
var timerInterval


// styling variables
const multipleChoiceStyling = "font-size: 16px; font-weight: 400; text-align: left; margin: 20px 40px auto 5%;";
const buttonStyling = "width: 100px; height: 25px; background-color: #F08080; border: 0px; border-radius: 5%; display: block; margin: 25px auto auto auto;";
const resultStyling = "font-size: 18px; font-weight: 700; text-align: center; color: #F08080; margin: 10px;";


// global objects (questions) - test this with 2 questions, so it is quicker to run through the whole thing!
var questionBank = [
  {
    question: "What coding language creates the visual components of a webpage?",
    optionA: "A. CSS",
    optionB: "B. HTML",
    optionC: "C. JavaScript",
    optionD: "D. Git",
    correctAnswer: "A. CSS",
  },
  {
    question: "What tool allows developers to check their code with console logs?",
    optionA: "A. VS Code",
    optionB: "B. GitHub",
    optionC: "C. Developer Console",
    optionD: "D. Terminal",
    correctAnswer: "C. Developer Console",
  }
]


// function to get previous scores from local storage before starting the game (new scores are pushed into scoreHistory array)
function getPreviousScores() {
  scoreHistory = JSON.parse(localStorage.getItem("userScore"));
  console.log("prev " + scoreHistory);
  if (scoreHistory === null) {
    scoreHistory = [];
}}
getPreviousScores();


// function to add elements to the DOM
function addElement(element, textContent, appendLocation, styling) {
  var newEl = document.createElement(element);
  newEl.textContent = textContent;
  newEl.setAttribute("style", styling);
  appendLocation.appendChild(newEl);
}


// function to remove elements from the DOM
function removeElement(element) {
  var removedElement = document.querySelector(element)
  removedElement.remove();
}


// introduction page
// create intro title
questionEl.setAttribute("style", "display: none;")
addElement(
  "h2", 
  "Welcome to the quiz!", 
  introEl,
  "font-size: 24px; font-weight: 700; text-align: center; padding-top: 20px;",
  );

// create intro paragraph
addElement(
  "p",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum placeat, quae magnam saepe, excepturi possimus assumenda quisquam eligendi quod voluptate. Libero, cupiditate a porro quia eius officia et labore!",
  introEl, 
  "font-size: 16px; font-weight: 500; text-align: center; margin: auto 5% auto 5%;",)

// create button to start quiz
addElement(
  "button",
  "Start",
  introEl,
  buttonStyling,
)


// creates start button
var startButton = document.querySelector(".intro-div button");


// starts the timer when the start button is clicked
function startTimer(){
  displayTime.textContent = "90";
  timerInterval = setInterval(function() {
    timeLeft--;
    displayTime.textContent = timeLeft + "";
    if(timeLeft <= 0) {
      clearInterval(timerInterval);
      displayTime.textContent = 0;
      saveScore();
    }
  }, 1000);
}


// start button - 1. clear intro text 2. add question to page 3. starts the timer
startButton.addEventListener("click", function() {
  introEl.textContent = "";
  questionEl.setAttribute("style", "display: block");
  addQuestion();
  startTimer();
}
)


// create the elements for the quiz questions
function addQuestion() {
  if (i === questionBank.length || timeLeft <= 0) {
    return
  } else {
  console.log("i:"+ i);
  console.log("length:" + questionBank.length);
  addElement(
    "h3",
    questionBank[i].question,
    questionEl,
    "font-size: 16px; font-weight: 600; text-align: left; margin: 20px 40px auto 5%; padding-top: 20px;",
  )
  addElement("p", questionBank[i].optionA, questionEl, multipleChoiceStyling,)
  addElement("p", questionBank[i].optionB, questionEl, multipleChoiceStyling,)
  addElement("p", questionBank[i].optionC, questionEl, multipleChoiceStyling,)
  addElement("p", questionBank[i].optionD, questionEl, multipleChoiceStyling,)
}}


// this function shows the current score at the bottom of main after answering a question
function showScore() {
  addElement(
    "p",
    "Your score: " + score,
    questionEl,
    "margin: 10px 30% auto 30%; background-color: white; text-align: center; border: 3px solid #F08080; border-radius: 5%;"
  );
}


// show correct message if applicable
function showCorrectResult() {
  addElement("h6", "Correct!", questionEl, resultStyling,)
}


// shows incorrect message if applicable
function showIncorrectResult() {
  addElement("h6", "Incorrect...", questionEl, resultStyling,)
}


// when you click on your choice, this functions determines if you get a point or not
questionEl.addEventListener("click", function(click) {
  if (i === questionBank.length) {
    return
  } else {
  var element = click.target;
  var correct = questionBank[i].correctAnswer;
  i++;
  questionEl.textContent = "";
  // it loops back to load the next question
  addQuestion();

  // scoring happens as the next question loads
  if (element.textContent == correct) {
    console.log("good");
    score++;
    console.log("score:" + score);
    showCorrectResult();
    showScore();
    saveScore();
  } else {
    console.log("bad");
    timeLeft = timeLeft - 15;
    console.log("score:" + score);
    showIncorrectResult();
    showScore();
    if (i === questionBank.length) {
      saveScore();
    }
}}});


// this loads the page where you enter your initials and the score is saved to the local storage.
function saveScore() {
  if (i === questionBank.length || timeLeft <= 0) {
  questionEl.textContent = "";
  console.log("no more");
  addElement(
    "form",
    "",
    saveEl,
    "text-align: center; margin-top: 20px; padding-top: 60px; margin: auto 30px auto 30px;",
  )
  var submitForm = document.querySelector("form");
  addElement(
    "label",
    "Enter your initials below to save your score!",
    submitForm,
    "color: black; font-weight: 600; padding-top: 20px;",
  )
  addElement(
    "input",
    "Enter initials here.",
    submitForm,
    "width: 50%; margin: auto 25% auto 25%;",
  )
  addElement(
    "button",
    "Save score!",
    submitForm,
    buttonStyling,
  )
  addElement(
    "p",
    "Your score: " + score,
    saveEl,
    "margin: 25px 30% auto 30%; background-color: white; text-align: center; border: 3px solid #F08080; border-radius: 5%;",
  )
  createSaveButton();
}}


// this function creates the save button, runs when the save score screen loads
function createSaveButton() {
  var saveButton = document.querySelector(".save-div button");
  var initialsInput = document.querySelector(".save-div input");

  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(initialsInput.value);
    userInitials = initialsInput.value;
    saveUserScore();
  })

  if (timeLeft !== 0) {
    displayTime.textContent = 0;
    clearInterval(timerInterval);
  }
}


// when the save button is clicked, the user score is saved to local storage
function saveUserScore() {
  userScoreObject = {
    name: userInitials,
    score: score,
  }

  scoreHistory.push(userScoreObject);
  console.log(scoreHistory);

  scoreStringify = JSON.stringify(scoreHistory);
  console.log(scoreStringify);
  
  // save the JSON in local storage
  localStorage.setItem("userScore", scoreStringify);
  showRecentScores();
}


// shows previous scores and gives the option to reset scores
function showRecentScores() {
  introEl.textContent = "";
  questionEl.textContent = "";
  saveEl.textContent = "";
  mainEl.setAttribute("style", "border: none;")
  scoresEl.style.visibility = "visible";
  scoresFromStorage = localStorage.getItem("userScore");
  var parsedScoresFromStorage = JSON.parse(scoresFromStorage)
  console.log(parsedScoresFromStorage);

  addElement(
    "h2", 
    "Previous Scores", 
    scoresEl,
    "display: visible; font-size: 24px; font-weight: 700; text-align: center; margin-bottom: 0;",
  )

  addElement(
    "button",
    "Reset Scores",
    scoresEl,
    buttonStyling,
  );

  for (let x = 0; x < scoreHistory.length; x++) {

    addElement(
      "p",
      parsedScoresFromStorage[x].name + ": " + parsedScoresFromStorage[x].score,
      scoresEl,
      multipleChoiceStyling,
    )
  }

  if (scoreHistory.length === 0) {
    scoresEl.textContent = "";
    addElement(
      "p",
      "No saved scores. Refresh the page to play and save a score!",
      scoresEl,
      multipleChoiceStyling,
    )
  } else {
    createResetButton();
  }
}


// creates the Reset Button for the previous scores page (called above)
function createResetButton() {
  var resetButton = document.querySelector(".scores-div button");

  resetButton.addEventListener("click", function(event) {
    event.preventDefault();
    scoreHistory = [];
    scoreStringifyReset = JSON.stringify(scoreHistory);
    localStorage.setItem("userScore", scoreStringifyReset);
    showRecentScores();
  })
}




// ORIGINAL THOUGHT PROCESS

// code that creates elements to add the questions and answers to <main>, runs after the button is clicked

// eventListener for main to determine which answer they click on 

    // If the answer they clicked on is the same as the correct answer, then it is correct.
    // If correct, give a correct message and add to their score. 
    // If incorrect, give an incorrect message and delete from their score, and take time off of the timer.

// game is over when the time reaches 0 or when all the questions are answered

// page tells them their scores, has them enter their initials

  // after they enter their initials, their initials and score are made into an object
  // then that object is made into a JSON
  // then that JSON is stored in local storage
  // then the JSON is retrieved and shown on the screen with the highest score being at the top
  // the option is gived to play again or clear high scores