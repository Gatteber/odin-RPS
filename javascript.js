//Begin game
const gameStart = document.querySelector('.start-btn');
gameStart.addEventListener("click", beginGame, { once: true });


function beginGame () {
    const container = document.querySelector('.rps-box');
    const rockBtn = document.createElement('button');
    rockBtn.textContent = "Rock";
    rockBtn.classList.add('rps-btn');
    rockBtn.classList.add('rps-rock');
    container.appendChild(rockBtn); //rock

    const paperBtn = document.createElement('button');
    paperBtn.textContent = "Paper";
    paperBtn.classList.add('rps-btn');
    paperBtn.classList.add('rps-paper');
    container.appendChild(paperBtn); //paper

    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.classList.add('rps-btn');
    scissorsBtn.classList.add('rps-scissors');
    container.appendChild(scissorsBtn); //scissors

    const scoreContainer = document.querySelector('.score-box');
    const scoreBoxPlayer = document.createElement('div');
    const scoreBoxCpu = document.createElement('div');
    document.body.appendChild(scoreBoxPlayer);
    document.body.appendChild(scoreBoxCpu);
    scoreBoxPlayer.textContent = "Player Score: 0";
    scoreBoxPlayer.classList.add ('score-child');
    scoreBoxCpu.textContent = "CPU Score: 0";
    scoreBoxCpu.classList.add ('score-child'); //score box
    scoreContainer.appendChild(scoreBoxPlayer);
    scoreContainer.appendChild(scoreBoxCpu);

    const removeStart = document.querySelector('.start-btn');
    removeStart.parentNode.removeChild(removeStart);//remove start button
    console.log("Game prepared");

    //play
    const playerRock = document.querySelector('.rps-rock');
    playerRock.addEventListener("click", () => {
        playerSelection = "r";
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        //scoreBoxPlayer.innerHTML = "1";
    });
    const playerPaper = document.querySelector('.rps-paper');
    playerPaper.addEventListener("click", () => {
        playerSelection = "p";
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    });
        const playerScissors = document.querySelector('.rps-scissors');
    playerScissors.addEventListener("click", () => {
        playerSelection = "s";
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    });
    }
//     game();
//     function game () {
//         for (let i = 0; i <5; i++) {
//             let computerSelection = computerPlay();
//             let playerSelection = choose();
//             console.log(playRound(playerSelection, computerSelection));
//         }
//     };

// }



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

// function playerConversion () {
//     if ()

// }

// function game () {
//     //add listeners for each button
//     const playerRock = document.querySelector('.rock-btn');
//     playerRock.addEventListener("click", function(e) {
//         console.log(e);
//     }) 

//     };
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log("DOM Loaded");
//     const playerRock = document.querySelector('.rps-rock');
//     playerRock.addEventListener("click", (event) => {
//         console.log("clicked rock!");
//     } )
// })





