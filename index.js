function getComputerChoice() {
  let moves = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  return moves[randomNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let outcome;

  if (playerSelection === computerSelection) {
    outcome = {
      matchOutcome: "draw",
      matchMessage: `A draw! ${playerSelection} is eqaul to ${computerSelection}`,
    };
    return outcome;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    outcome = {
      matchOutcome: "win",
      matchMessage: `You win! ${playerSelection} beats ${computerSelection}`,
    };
    return outcome;
  } else {
    outcome = {
      matchOutcome: "lose",
      matchMessage: `You lose. ${playerSelection} loses to ${computerSelection}`,
    };
    return outcome;
  }
}

let playerScore = 0;
let computerScore = 0;
let isGameEnded = false;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const scoreBoard = document.getElementById("scoreBoard");

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorBtn.addEventListener("click", () => playGame("scissor"));

function playGame(playerSelection) {
  if (!isGameEnded) {
    let computerSelection = getComputerChoice();

    let outcome = playRound(playerSelection, computerSelection);
    updateScoreBoard(outcome);
    scoreBoard.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore == 5 && computerScore < 5) {
      alert("You have won the game");
      isGameEnded = true;
    } else if (playerScore < 5 && computerScore == 5) {
      alert("You have lost the game");
      isGameEnded = true;
    }
  }

  // console.log(outcome.matchMessage);
  // console.log(`Score, YOU: ${playerScore} - COMPUTER: ${computerScore}`);
}

function updateScoreBoard(outcome) {
  if (outcome.matchOutcome === "win") playerScore++;
  if (outcome.matchOutcome === "lose") computerScore++;
}
