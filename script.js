function getComputerChoice() {
  const random = Math.random();
  if (random < 0.34) {
    return "rock";
  } else if (random < 0.64) {
    return "paper";
  } else {
    return "scissors";
  }
}


let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.createElement("p");
  score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  result.appendChild(score);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }
  });
});

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  const p = document.createElement("p");
  if (humanChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        p.textContent = "Draw. Both rock.";
        break;
      case "paper":
         p.textContent = "You lose! Paper beats rock.";
        computerScore++;
        break;
      case "scissors":
         p.textContent = "You win! Rock beats scissors.";
        humanScore++;
        break;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
      case "rock":
         p.textContent = "You win! Paper beats rock.";
        humanScore++;
        break;
      case "paper":
         p.textContent = "Draw. Both paper.";
        break;
      case "scissors":
         p.textContent = "You lose! Scissors beat paper.";
        computerScore++;
        break;
    }
  } else if (humanChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
         p.textContent = "You lose! Rock beats scissors.";
        computerScore++;
        break;
      case "paper":
         p.textContent = "You win! Scissors beat paper.";
        humanScore++;
        break;
      case "scissors":
         p.textContent = "Draw.Both scissors.";
        break;
    }
  }
  score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  result.appendChild(p);
}
