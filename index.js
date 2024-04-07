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

function playGame() {
  let playerSelection = prompt("Make your move, choose paper, rock or scissor");
  while (
    !(
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissor"
    )
  ) {
    playerSelection = prompt(
      "Invalid move. Please enter either paper, rock or scissor"
    );
  }

  let computerSelection = getComputerChoice();

  let outcome = playRound(playerSelection, computerSelection);
  updateScoreBoard(outcome);
  console.log(outcome.matchMessage);
  console.log(`Score, YOU: ${playerScore} - COMPUTER: ${computerScore}`);
}

function updateScoreBoard(outcome) {
  if (outcome.matchOutcome === "win") playerScore++;
  if (outcome.matchOutcome === "lose") computerScore++;
}

for (let i = 0; i < 5; i++) {
  playGame();
}
