'use strict';

let humanScore = 0;
let computerScore = 0;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return getRandomElement(choices);
}

function getHumanChoice() {
  const choice = prompt('rock, paper, or scissors?');
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      `It's a tie! Both picked ${capitalizeFirstLetter(computerChoice)}`
    );
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log(
      `You win! ${capitalizeFirstLetter(
        humanChoice
      )} beats ${capitalizeFirstLetter(computerChoice)}`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${capitalizeFirstLetter(
        computerChoice
      )} beats ${capitalizeFirstLetter(humanChoice)}`
    );
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
