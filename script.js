function getComputerChoice () {
    const random = Math.random();
    if (random<0.34) {
        return "rock";
    } else if(random<0.64) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    const choice = prompt("Enter your choice (rock, paper or scissors):");
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;


