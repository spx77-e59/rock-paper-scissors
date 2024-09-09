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

// function getHumanChoice() {
//     const choice = prompt("Enter your choice (rock, paper or scissors):");
//     if (choice == "rock" || choice == "paper" || choice == "scissors") {
//         return choice;
//     } else {
//         getHumanChoice();
//     }
// }
let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");
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

  if (humanChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        console.log("Draw. Both rock.");
        break;
      case "paper":
        console.log("You lose! Paper beats rock.");
        computerScore++;
        break;
      case "scissors":
        console.log("You win! Rock beats scissors.");
        humanScore++;
        break;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        console.log("You win! Paper beats rock.");
        humanScore++;
        break;
      case "paper":
        console.log("Draw. Both paper.");
        break;
      case "scissors":
        console.log("You lose! Scissors beat paper.");
        computerScore++;
        break;
    }
  } else if (humanChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
        console.log("You lose! Rock beats scissors.");
        computerScore++;
        break;
      case "paper":
        console.log("You win! Scissors beat paper.");
        humanScore++;
        break;
      case "scissors":
        console.log("Draw.Both scissors.");
        break;
    }
  }

  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}


// function playGame() {


//     function playRound(humanChoice, computerChoice) {

//         console.log(humanChoice, computerChoice);

//         if (humanChoice == "rock") {
//             switch (computerChoice) {
//                 case "rock":
//                     console.log("Draw. Both rock.");
//                     break;
//                 case "paper":
//                     console.log("You lose! Paper beats rock.");
//                     computerScore++;
//                     break;
//                 case "scissors":
//                     console.log("You win! Rock beats scissors.");
//                     humanScore++;
//                     break;
//             }
//         } else if (humanChoice == "paper") {
//             switch (computerChoice) {
//                 case "rock":
//                     console.log("You win! Paper beats rock.");
//                     humanScore++;
//                     break;
//                 case "paper":
//                     console.log("Draw. Both paper.");
//                     break;
//                 case "scissors":
//                     console.log("You lose! Scissors beat paper.");
//                     computerScore++;
//                     break;
//             }
//         } else if (humanChoice == "scissors") {
//             switch (computerChoice) {
//                 case "rock":
//                     console.log("You lose! Rock beats scissors.");
//                     computerScore++;
//                     break;
//                 case "paper":
//                     console.log("You win! Scissors beat paper.");
//                     humanScore++;
//                     break;
//                 case "scissors":
//                     console.log("Draw.Both scissors.");
//                     break;
//             }
//         }

//         console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
//     }

//     for (let round = 1; round<6; round ++){
//         console.log(`Round ${round}`)
//         playRound(getHumanChoice(), getComputerChoice());
//     }

//     console.log("Final Decision:");
//     if ( humanScore>computerScore) {
//         console.log(`You win! Score (${humanScore}:${computerScore})`);
//     } else if (humanScore<computerScore) {
//         console.log(`You lose! Score (${humanScore}:${computerScore})`);
//     } else {
//         console.log(`Draw. Score (${humanScore}:${computerScore})`);
//     }
// }

// playGame();
