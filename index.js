'use strict';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function generateWinnerAnnouncement(humanScore, computerScore) {
  let logText = '';
  if (humanScore === computerScore) {
    logText += `It's a tie game.`;
  } else if (humanScore > computerScore) {
    logText += `You win the game!.`;
  } else {
    logText += `You lose the game!.`;
  }
  logText += ` Human: ${humanScore}, Computer: ${computerScore}`;
  return logText;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return getRandomElement(choices);
}

function getHumanChoice() {
  const choice = prompt('rock, paper, or scissors?');
  return choice.toLowerCase();
}

function playGame() {
  const choiceBtns = document.querySelectorAll('[data-js-choice]');
  let round = 1;
  let humanScore = 0;
  let computerScore = 0;

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

  for (const choiceBtn of choiceBtns) {
    choiceBtn.addEventListener('click', function handleChoiceBtnClick(e) {
      const humanChoice = e.currentTarget.dataset.jsChoice;
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);

      if (round >= 5) {
        const winnerAnnouncement = generateWinnerAnnouncement(
          humanScore,
          computerScore
        );
        console.log(winnerAnnouncement);
      }

      round++;
    });
  }
}

playGame();
