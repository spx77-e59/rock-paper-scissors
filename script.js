console.log("yo");

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

console.log(getComputerChoice());