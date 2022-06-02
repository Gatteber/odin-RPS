//Notes

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

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

let value = prompt("Lets play Rock Paper Scissors! Enter one of the values!");

 if (value == null) {
     alert("error, exited");
 }
if (value.toLowerCase() == "rock") {
    alert("You entered ROCK!");
}