//Fetching random CPU input
function getCpuInput (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
//Take input and convert to RPS
function computerPlay () {
        let cpuActual = getCpuInput(1, 4);
        //console.log(cpuActual);
        if (cpuActual === 1) {
        //    console.log("rock");
            return "rock";
        } else if (cpuActual === 2) {
        //    console.log("paper");
            return "paper";
        } else {
        //    console.log("scissors");
            return "scissors";
        }
        }
//Comparison operation
function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie"
    } else if (playerSelection.startsWith("r") && computerSelection.startsWith("s")) {
        return "winner"
    } else if (playerSelection.startsWith("p") && computerSelection.startsWith("r")) {
    return "winner"
    }  else if (playerSelection.startsWith("s") && computerSelection.startsWith("p")) {
    return "winner"
    }  else {
    return "loser"
    }

}
//GAME TEST (unused, please don't uncomment)
// const playerSelection = "rock";
// const computerSelection = computerPlay();

// console.log(playRound(playerSelection, computerSelection));


//GUESSING HOW TO PROMPT USER (unused, please don't uncomment)
// let value = prompt("Lets play Rock Paper Scissors! Enter one of the values!");

//  if (value == null) {
//      alert("error, exited");
//  }
// if (value.toLowerCase() == "rock") {
//     alert("You entered ROCK!");
// }

//game function
function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Lets play Rock, Paper, Scissors! Enter Rock, Paper or Scissors to begin!")
        if (playerSelection == null) {
            console.log("error");
            alert("error, exited");
        } else if (playerSelection.toLowerCase() == "rock") {
            console.log(playRound(playerSelection, computerSelection));
        } else if (playerSelection.toLowerCase() == "paper") {
            console.log(playRound(playerSelection, computerSelection));
        } else if (playerSelection.toLowerCase() == "scissors") {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log("error");
            alert("error, you didn't follow instructions! You lose this round!")
        }
    }
}
//Tried to add a button to start the game, couldn't get it to work
window.onload=function(){
    const button = document.getElementById("button");
    button.addEventListener("click", game());
}
