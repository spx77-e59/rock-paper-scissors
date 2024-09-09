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
const p = document.createElement("p");

score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

result.appendChild(score);
result.appendChild(p);
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
  let win = "draw";
  let content = "";

  if (humanChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        content = "Draw. Both rock.";
        break;
      case "paper":
        content = "You lose! Paper beats rock.";
        win = "lost";
        break;
      case "scissors":
        content = "You win! Rock beats scissors.";
        win = "win";
        break;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        content = "You win! Paper beats rock.";
        win = "win";
        break;
      case "paper":
        content = "Draw. Both paper.";
        break;
      case "scissors":
        content = "You lose! Scissors beat paper.";
        win = "lost";
        break;
    }
  } else if (humanChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
        content = "You lose! Rock beats scissors.";
        win = "lost";
        break;
      case "paper":
        content = "You win! Scissors beat paper.";
        win = "win";
        break;
      case "scissors":
        content = "Draw.Both scissors.";
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
    p.textContent = content;
  }
  if (humanScore === 5 || computerScore === 5) {
    humanScore > computerScore
      ? (winner.textContent = "You Win! Game over.")
      : (winner.textContent = "You lost! Game over.");
  }
}
