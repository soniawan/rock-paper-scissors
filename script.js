const btnChoice = document.querySelectorAll("button");
const result = document.querySelector("#result");

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

btnChoice.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.id;
    console.log(playerChoice);

    function comparisonResult() {
      const comChoice = getComputerChoice();

      if (comChoice === playerChoice) {
        console.log(`Draw! ${playerChoice} = ${comChoice}`);
      } else if (
        (playerChoice === "rock" && comChoice === "scissors") ||
        (playerChoice === "paper" && comChoice === "rock") ||
        (playerChoice === "scissors" && comChoice === "paper")
      ) {
        console.log(`You Win!!! ${playerChoice} beat ${comChoice}`);
      } else {
        console.log(`You lose! ${playerChoice} defeated by ${comChoice}`);
      }
    }

    comparisonResult();
  });
});
