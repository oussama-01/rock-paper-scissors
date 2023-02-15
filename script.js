

/*A function that returns either: rock, paper or scissors*/

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber >= 0 && randomNumber < 4) {
        return 'rock';

    } else if (randomNumber >= 4 && randomNumber < 7) {
        return 'paper';

    } else {
        return 'scissors';
    }

}

console.log(getComputerChoice());

/*A function that plays a single round of the game*/

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("enter your choice").toLowerCase();

    computerSelection = getComputerChoice();

    //console.log(computerSelection, playerSelection );


    let lose = `You lose! ${computerSelection} beats ${playerSelection}  `;
    let win = `You win! ${playerSelection} beats ${computerSelection}  `;


    if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'even';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return lose;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return win;
    }


    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'even';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return lose;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return win;
    }


    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'even';

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return lose;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return win;
    }

}

console.log(playRound());







// console.log();



/* 












*/