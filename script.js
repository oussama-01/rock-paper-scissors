

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









// console.log();



/* 
















*/