// global variables
i = 0;
score = 0;
var mainEl = document.querySelector("main");
var buttonStyling = "width: 100px; height: 25px; background-color: #F08080; border: 0px; border-radius: 5%; display: block; margin: 25px auto auto auto;"



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



function addQuestion() {
  addElement(
    "h3",
    questionBank[i].question,
    mainEl,
    "font-size: 16px; font-weight: 600; text-align: left; margin: 20px 20px auto 5%;",
  )
  addElement(
    "p",
    questionBank[i].optionA,
    mainEl,
    "font-size: 16px; font-weight: 400; text-align: left; margin: 20px 20px auto 5%;",
  )
  addElement(
    "p",
    questionBank[i].optionB,
    mainEl,
    "font-size: 16px; font-weight: 400; text-align: left; margin: 20px 20px auto 5%;",
  )
  addElement(
    "p",
    questionBank[i].optionC,
    mainEl,
    "font-size: 16px; font-weight: 400; text-align: left; margin: 20px 20px auto 5%;",
  )
  addElement(
    "p",
    questionBank[i].optionD,
    mainEl,
    "font-size: 16px; font-weight: 400; text-align: left; margin: 20px 20px auto 5%;",
  )
}


// functions to be called throughout
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
// intro title
addElement(
  "h2", 
  "Welcome to the quiz!", 
  mainEl,
  "font-size: 24px; font-weight: 700; text-align: center;",
  );

// intro paragraph
addElement(
  "p",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum placeat, quae magnam saepe, excepturi possimus assumenda quisquam eligendi quod voluptate. Libero, cupiditate a porro quia eius officia et labore!",
  mainEl, 
  "font-size: 16px; font-weight: 500; text-align: center; margin: auto 5% auto 5%;",)

// button to start quiz
addElement(
  "button",
  "Start",
  mainEl,
  buttonStyling,
)

// variable for start button
var startButton = document.querySelector("main button");

// function to remove intro elements
function removeIntroElements() {
  removeElement("h2");
  removeElement("main p");
  removeElement("button");
}

// remove intro elements
startButton.addEventListener("click", function() {
  removeIntroElements();
  addQuestion();
}
)

mainEl.addEventListener("click", function(click) {
  var element = click.target;
  var correct = questionBank[i].correctAnswer;

  if (element.textContent == correct) {
    console.log("hooray!");
    score++;
    i++;
    console.log(score);
    console.log(i);

    clearQuestion();
    addQuestion();
  } else {
    console.log("oh no...");
    i++;
    onsole.log(score);
    console.log(i);

    clearQuestion();
    addQuestion();
  }
})

function clearQuestion() {
  removeElement("h3");
  removeElement("main p");
  removeElement("main p");
  removeElement("main p");
  removeElement("main p");
}






// console.log(document.body.children[1].children[2])

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