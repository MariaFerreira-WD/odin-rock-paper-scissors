// Randomly return one of the following string values: “rock”, “paper” or “scissors”
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
}

const rock = document
  .getElementById("rock")
  .addEventListener("click", playRound);
const paper = document
  .getElementById("paper")
  .addEventListener("click", playRound);
const scissors = document
  .getElementById("scissors")
  .addEventListener("click", playRound);

let humanResult = document.getElementById("human");
let computerResult = document.getElementById("computer");

// Scores
let humanScore = 0;
let computerScore = 0;
let round = 1;

// Takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement
function playRound(event) {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It's a draw");
    } else if (computerChoice === "paper") {
      console.log("You Lose!");
      ++computerScore;
    } else {
      console.log("You win!");
      ++humanScore;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win!");
      ++humanScore;
    } else if (computerChoice === "paper") {
      console.log("It's a draw!");
    } else {
      console.log("You lose!");
      ++computerScore;
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You lose!");
      ++computerScore;
    } else if (computerChoice === "paper") {
      console.log("You win!");
      ++humanScore;
    } else {
      console.log("It's a draw!");
    }
  }

  humanResult.innerHTML = humanScore;
  computerResult.innerHTML = computerScore;
  let winner = document.getElementById("winner");

  if (round === 5) {
    if (humanScore > computerScore) {
      console.log("Human is the winner!");
      winner.innerHTML = "Human is the winner";
    } else if (humanScore < computerScore) {
      console.log("Computer is the winner!");
      winner.innerHTML = "Computer is the winner";
    } else {
      console.log("It's a draw!");
      winner.innerHTML = "It's a draw!";
    }
    round = 1;
    humanScore = 0;
    computerScore = 0;
    humanResult.innerHTML = humanScore;
    computerResult.innerHTML = computerScore;
  } else {
    ++round;
  }
}

/* //  Play 5 rounds, keeps track of the scores and declares a winner at the end
function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

playGame(); */
