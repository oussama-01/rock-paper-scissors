

/* A function that returns either: rock, paper or scissors*/

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

/* A function that plays a single round of the game*/
        
let playerSelection;
let computerSelection = getComputerChoice();


    let loss;
    let win;

function playRound(playerSelection, computerSelection) {


    loss = `You lose! ${computerSelection} beats ${playerSelection}  `;
    win = `You win!  ${playerSelection} beats ${computerSelection}  `;
    
    
        if (playerSelection === 'paper' && computerSelection === 'paper') {
            return 'Even';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return loss;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return win;
        }
    
    
        if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'Even';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return loss;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return win;
        }
    
    
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return 'Even ';
    
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return loss;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return win;
        }
    
    }


/* A functon that plays 5 rounds  */

// removed for the adding of a UI 





/* 












*/