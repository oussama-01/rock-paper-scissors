
// A function that will return either ‘Rock’, ‘Paper’ or ‘Scissors'
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'rock';
    if (randomNumber === 1) return 'paper';
    if (randomNumber === 2) return 'scissors';
}

// Write the logic to get the human choice


function getHumanChoice(humanChoice) {
    humanChoice = prompt('enter your choice');
    if (humanChoice == null) return;

    humanChoice = humanChoice.toLowerCase().trim();
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        alert('please enter a valid choice');
        return getHumanChoice();
    }

    if (humanChoice === 'rock') return 'rock';
    if (humanChoice === 'paper') return 'paper';
    if (humanChoice === 'scissors') return 'scissors';
}

// Declare the players score variables

let humanScore = 0;
let computerScore = 0;

//
function playRound(humanChoice, computerChoice) {
    //humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) return "It's a Tie";

    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
        if (computerChoice === 'paper') {
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
        if (computerChoice === 'scissors') {
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
    if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
        if (computerChoice === 'rock') {
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }

}


// logic the play the entire game

function playGame() {


}





// 
function incrementScore(roundResult) {
    if (roundResult.includes('lose')) computerScore++;
    if (roundResult.includes('win')) humanScore++;

}

// UI DOM 

const imgs = document.querySelectorAll('img');
const resultDisplay = document.querySelector('#result');
const humanScoreDiv = document.querySelector('#playerScore');
const computerScoreDiv = document.querySelector('#computerscore');

function diqplayScore(result) {
    resultDisplay.textContent = result;
    incrementScore(result);
    humanScoreDiv.textContent =  humanScore;
    computerScoreDiv.textContent = computerScore;

}
//
function announceWinner() {

    if (humanScore === 5) {
        imgs.forEach(i => i.setAttribute('inert', 'true'));
        resultDisplay.classList.add('win');
        return resultDisplay.textContent = 'You win the game';
    }
    if (computerScore === 5) {
        imgs.forEach(i => i.setAttribute('inert', 'true'));
        return resultDisplay.textContent = 'You lost the game';
    }
}


imgs.forEach(image => {
    image.addEventListener('click', () => {
        if (image.id === 'rock') {
            const result = playRound('rock');
            diqplayScore(result);
            announceWinner();
        }
        if (image.id === 'paper') {
            const result = playRound('paper');
            diqplayScore(result);
            announceWinner();
        }
        if (image.id === 'scissors') {
            const result = playRound('scissors');
            diqplayScore(result);
            announceWinner();
        }
    })

})
