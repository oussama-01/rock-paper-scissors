

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


// below begin the using of the DOM for the UI

let playerSelection = '';

let computerSelection  ='';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const result =document.getElementById('result');

let pScore = document.querySelector('#pScore');
let cScore = document.querySelector('#cScore');

const winner = document.querySelector('#winner');

let playerScore= 0;
let computerScore =0;

pScore.textContent = `Your Score is: ${playerScore}`;
cScore.textContent = `Computer score is: ${computerScore}`;

rock.addEventListener('click', function() {

    computerSelection = getComputerChoice();
    playerSelection ='rock';
    result.textContent =playRound(playerSelection, computerSelection);

    showScore();
    showWinner();

});

paper.addEventListener('click', function() {
    computerSelection = getComputerChoice();
    playerSelection = 'paper';
    result.textContent =playRound(playerSelection, computerSelection);

    showScore();
    showWinner();


});

scissors.addEventListener('click', function() {
    computerSelection =getComputerChoice();
    playerSelection = 'scissors';
    result.textContent = playRound(playerSelection, computerSelection);


showScore();
showWinner();
});


function showScore() {

    /* incrementing scores */
    if (playRound(playerSelection, computerSelection) === win) {
        playerScore++;

    } else if (playRound(playerSelection, computerSelection) === loss) {
        computerScore++;
    }
    /* display the scores */

    pScore.textContent = `Your Score is: ${playerScore}`;
    cScore.textContent = `Computer score is: ${computerScore}`;

}

function showWinner() {

    winner.textContent = '';
    /* end the game when someone reaches 5 */

    if (playerScore === 5) {

        playerScore = 0;
        computerScore = 0;
        pScore.textContent = `Your Score is: ${playerScore}`;
        cScore.textContent = `Computer score is: ${computerScore}`;

        //console.log("you are the winner");
        winner.innerHTML = " You are the winner";


    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = `Your Score is: ${playerScore}`;
        cScore.textContent = `Computer score is: ${computerScore}`;

        //console.log("the computer is the winner");
        winner.innerHTML = " The computer is the winner";

    }


}






/* ******END******** */



/* 

*/