// Rock Paper Scissor Simple game

// Function for user inputs. Tests to make sure user chose one of the available options
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    console.log("Please select from rock, paper, or scissors.");
  }
};

// Function generates the computer choice using random number
const getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

// Function determines the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer has won!";
    } else {
      return "User won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer has won!";
    } else {
      return "User had won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer had won!";
    } else {
      return "User has won!";
    }
  } else if (userChoice === "bomb") {
    return "User has won!";
  }
};

// Play game function to get the game going
function playGame() {
  // User choice for the game
  var userChoice = getUserChoice("bomb");
  var computerChoice = getComputerChoice();
  console.log(
    `User chose ${userChoice} and computer choice is ${computerChoice}`
  );
  console.log(determineWinner(userChoice, computerChoice));
}

// Calling playGame() to begin the game
playGame();
