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
    function comparisonResult() {
      const playerChoice = btn.id;
      console.log(playerChoice);
      const comChoice = getComputerChoice();

      if (comChoice === playerChoice) {
        return [`Draw!`, playerChoice, comChoice];
      } else if (
        (playerChoice === "rock" && comChoice === "scissors") ||
        (playerChoice === "paper" && comChoice === "rock") ||
        (playerChoice === "scissors" && comChoice === "paper")
      ) {
        return [`You Win!`, playerChoice, comChoice];
      } else {
        return [`You Lose!`, playerChoice, comChoice];
      }
    }

    // Function show result
    function showResult() {
      const comparResult = comparisonResult();
      const playerText = document.createElement("h4");
      const compText = document.createElement("h4");
      const resultText = document.createElement("h3");
      const vsText = document.createElement("p");

      result.textContent = "";
      result.classList.add("result");

      resultText.textContent = comparResult[0];
      playerText.textContent = `You choose : ${comparResult[1]}`;
      vsText.textContent = "VS";
      compText.textContent = `Computer choose : ${comparResult[2]} `;

      result.appendChild(resultText);
      result.appendChild(playerText);
      result.appendChild(vsText);
      result.appendChild(compText);
    }

    showResult();
  });
});

console.log(btnChoice);
