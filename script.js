

/*A function that returns either: rock, paper or scissors*/

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    
        if (randomNumber === 0 ) {
            return 'rock';
    
        } else if (randomNumber === 1 ) {
            return 'paper';
    
        } else {
            return 'scissors';
        }
    
    }

/*A function that plays a single round of the game*/
    
    let loss;
    let win;

function playRound(playerSelection, computerSelection) {


    loss = `You lose! ${computerSelection} beats ${playerSelection}  `;
    win = `You win!  ${playerSelection} beats ${computerSelection}  `;
    
    
        if (playerSelection === 'paper' && computerSelection === 'paper') {
            return 'even';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return loss;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return win;
        }
    
    
        if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'even';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return loss;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return win;
        }
    
    
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return 'even ';
    
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return loss;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return win;
        }
    
    }

    
let playerSelection;
let computerSelection;

let computerScore = 0;
let playerScore = 0;

/* A functon that plays 5 rounds  */

    function game() {


        for (let i = 0; i < 5; i++) {

            playerSelection = prompt("enter your choice").toLowerCase();
            computerSelection = getComputerChoice();

            console.log(playRound(playerSelection, computerSelection));


            if (playRound(playerSelection, computerSelection) === loss) {
                computerScore++;
            } else if (playRound(playerSelection, computerSelection) === win) {
                playerScore++;
            }

        }

        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);

        if (playerScore > computerScore) {
            console.log("You are the winner")
        } else if (playerScore < computerScore) {
            console.log("The computer is the winner");
        } else {
            console.log('Even');
        }
    }

    console.log(game());






// console.log();



/* 












*/