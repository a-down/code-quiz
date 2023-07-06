// global variables
var mainEl = document.querySelector("main");



// global objects (questions) - test this with 2 questions, so it is quicker to run through the whole thing!

// objectExample = {
//   choice-a: example,
//   choice-a: example,
//   choice-a: example,
//   choice-a: example,
//   correct-answer: example,
// }


// function for adding any elements I need

function addElement(element, textContent, appendLocation, styling) {
  var newEl = document.createElement(element);
  newEl.textContent = textContent;
  newEl.setAttribute("style", styling);
  appendLocation.appendChild(newEl);
}

addElement(
  "p", 
  "This is new!", 
  mainEl,
  "font-weight: 90px;",
  );

// add text for page greeting
  // create elements (styling in addElementFunction)
  // update text content for those elements



// add buttton to start the quiz (style all buttons in CSS)




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