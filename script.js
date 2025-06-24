const getComputerChoice = () => {
  const randomCom = Math.floor(Math.random() * 3) + 1;

  if (randomCom === 1) {
    return "rock";
  } else if (randomCom === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = () => {
  let askHuman = prompt("Choose one between rock or paper or scissors?");

  return askHuman.toLowerCase();
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Draw! You both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Score : You = ${humanScore} | Computer = ${computerScore}`);
  }

  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
