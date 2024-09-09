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
const winner = document.createElement("h2");

score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

result.appendChild(score);
result.appendChild(winner);

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
  const p = document.createElement("p");
  let win = "draw";

  if (humanChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        p.textContent = "Draw. Both rock.";
        break;
      case "paper":
        p.textContent = "You lose! Paper beats rock.";
        win = "lost";
        break;
      case "scissors":
        p.textContent = "You win! Rock beats scissors.";
        win = "win";
        break;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        p.textContent = "You win! Paper beats rock.";
        win = "win";
        break;
      case "paper":
        p.textContent = "Draw. Both paper.";
        break;
      case "scissors":
        p.textContent = "You lose! Scissors beat paper.";
        win = "lost";
        break;
    }
  } else if (humanChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
        p.textContent = "You lose! Rock beats scissors.";
        win = "lost";
        break;
      case "paper":
        p.textContent = "You win! Scissors beat paper.";
        win = "win";
        break;
      case "scissors":
        p.textContent = "Draw.Both scissors.";
        break;
    }
  }
  if (humanScore < 5 && computerScore < 5) {
    switch (win) {
      case "win":
        ++humanScore;
        break;
      case "lost":
        ++computerScore;
        break;
      case "draw":
        break;
    }
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    result.appendChild(p);
  }
  if (humanScore === 5 || computerScore === 5) {
    humanScore > computerScore
      ? (winner.textContent = "You Win! Game over.")
      : (winner.textContent = "You lost! Game over.");
  }
}
