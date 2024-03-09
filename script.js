
// A function that returns either ‘Rock’, ‘Paper’ or ‘Scissors'
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'rock';
    if (randomNumber === 1) return 'paper';
    if (randomNumber === 2) return 'scissors';
}



// A function that plays a single round of the game


let loss;
let win;

function playRound(playerSelection, computerSelection) {


    loss = `You lose! ${computerSelection} beats ${playerSelection}  `;
    win = `You win!  ${playerSelection} beats ${computerSelection}  `;


    if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return loss;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return win;
    }


    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Tie';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return loss;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return win;
    }


    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie';

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return loss;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return win;
    }

}


// Below begin the using of the DOM for the UI

let playerSelection = '';

let computerSelection = '';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const result = document.getElementById('result');

let pScore = document.querySelector('#pScore');
let cScore = document.querySelector('#cScore');

const winner = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;

pScore.textContent = `Your Score is: ${playerScore}`;
cScore.textContent = `Computer score is: ${computerScore}`;


// Adiing event listeners to each button

rock.addEventListener('click', function () {

    computerSelection = getComputerChoice();
    playerSelection = 'rock';
    result.textContent = playRound(playerSelection, computerSelection);

    showScore();
    showWinner();

});

paper.addEventListener('click', function () {
    computerSelection = getComputerChoice();
    playerSelection = 'paper';
    result.textContent = playRound(playerSelection, computerSelection);

    showScore();
    showWinner();


});

scissors.addEventListener('click', function () {
    computerSelection = getComputerChoice();
    playerSelection = 'scissors';
    result.textContent = playRound(playerSelection, computerSelection);


    showScore();
    showWinner();
});


function showScore() {

    // Incrementing scores 
    if (playRound(playerSelection, computerSelection) === win) {
        playerScore++;

    } else if (playRound(playerSelection, computerSelection) === loss) {
        computerScore++;
    }

    // Display the scores
    pScore.textContent = `Your Score is: ${playerScore}`;
    cScore.textContent = `Computer score is: ${computerScore}`;

}

function showWinner() {

    winner.textContent = '';
    // End the game when someone reaches 5 

    if (playerScore === 5) {

        playerScore = 0;
        computerScore = 0;
        pScore.textContent = `Your Score is: ${playerScore}`;
        cScore.textContent = `Computer score is: ${computerScore}`;

        disable();

        /* 
        I can above disable the buttons by adding attribute "disabled" to them
        1 select each buuton then setattibute method to the eelemnt...
        then show a message: to refresh the page to pla again
        */

        //console.log("you are the winner");
        winner.innerHTML = " YOU ARE THE WINNER";


    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = `Your Score is: ${playerScore}`;
        cScore.textContent = `Computer score is: ${computerScore}`;

        disable();

        //console.log("the computer is the winner");
        winner.innerHTML = " THE COMPUTER IS THE WINNER";

    }


}

// A function that disable buttons when score reaches 5 points 
function disable() {
    rock.setAttribute('disabled', '')
    paper.setAttribute('disabled', '');
    scissors.setAttribute('disabled', '');

}

