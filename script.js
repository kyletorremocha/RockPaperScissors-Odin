let userscore = 0;
let compscore = 0;

game()

function computerPlay() {
    let numchoice = Math.random();
    if (numchoice <= 0.33) {
        return 'rock'
    } else if (numchoice > 0.33 && numchoice <= 0.67) {
        return 'paper'
    } else {return 'scissors'}
}

function userSelection() {
    let newPlayerSelection;
    let iniPlayerSelection = prompt('Choose Rock, Paper, or Scissors');
    while (iniPlayerSelection !== 'rock' && iniPlayerSelection !== 'paper' && iniPlayerSelection !== 'scissors') {iniPlayerSelection = prompt('Please only choose Rock, Paper, or Scissors');
    } newPlayerSelection = iniPlayerSelection.toLowerCase(); 
    return newPlayerSelection;
}

function winner() {
    if (userscore > compscore) {
        console.log('You win!');
    } else if (compscore > userscore) {
        console.log('You lose!')
    } else {console.log('It\'s a Tie!')}
}

function playRound() {
    let playerSelection = userSelection();//Run function for user choice//
    let computerSelection = computerPlay(); //Run function for computer choice//
    
    //Rock, Paper, Scissors Game Start//
    if (playerSelection === computerSelection) {
        console.log('Its a tie. Try again!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Paper beats rock. You Win!');
        userscore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Rock beats scissors. You Win!');
        userscore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Scissors beats paper. You Win!');
        userscore++;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('Scissors beats paper. You lose!');
        compscore++;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('Paper beats rock. You lose!');
        compscore++;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('Rock beats scissors. You lose!');
        compscore++;
    }
    console.log('Your score is ' + userscore + ' and the computer score is '+ compscore + '.');
}

function game(computerselection,playerselection) { 
    for (let i=0; i < 5; i++) {
        playRound();
    }
    winner();
}