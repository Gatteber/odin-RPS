//Notes

//Fetching random CPU input
function getCpuInput (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function computerPlay () {
        let cpuActual = getCpuInput(1, 4);
        console.log(cpuActual);
        if (cpuActual === 1) {
            console.log("rock");
            return "rock";
        } else if (cpuActual ===2) {
            console.log("paper");
            return "paper";
        } else {
            console.log("scissors");
            return "scissors";
        }
        }
computerPlay();

let cpuRock = 1;
let cpuPaper = 2;
let cpuScissors = 3;