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
            console.log("rock");
            return "rock";
        } else if (cpuActual === 2) {
            console.log("paper");
            return "paper";
        } else {
            console.log("scissors");
            return "scissors";
        }
        }

const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie"
    } else {
        return "error catch"
    }

}
console.log(playRound(playerSelection, computerSelection));