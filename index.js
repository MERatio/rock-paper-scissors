'use strict';

const dom = {
  choiceBtns: document.querySelectorAll('[data-js-choice]'),
  logs: document.querySelector('#logs'),
  humanScore: document.querySelector('#humanScore'),
  computerScore: document.querySelector('#computerScore'),
  logMsg(msg) {
    const log = document.createElement('p');
    log.classList.add('log');
    log.textContent = msg;
    dom.logs.appendChild(log);
  },
  disableChoiceBtns() {
    for (const choiceBtn of dom.choiceBtns) {
      choiceBtn.disabled = true;
      choiceBtn.classList.remove('cursor');
    }
  },
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function generateWinnerAnnouncement(humanScore, computerScore) {
  let winnerAnnouncement = '';
  if (humanScore === computerScore) {
    winnerAnnouncement += `It's a tie game.`;
  } else if (humanScore > computerScore) {
    winnerAnnouncement += `You win the game!.`;
  } else {
    winnerAnnouncement += `You lose the game!.`;
  }
  winnerAnnouncement += ` Refresh the page to play again.`;
  return winnerAnnouncement;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return getRandomElement(choices);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getRoundWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return 'tie';
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'human';
    } else {
      return 'computer';
    }
  }

  function playRound(humanChoice, computerChoice) {
    const roundWinner = getRoundWinner(humanChoice, computerChoice);
    if (roundWinner === 'tie') {
      dom.logMsg(
        `It's a tie! Both picked ${capitalizeFirstLetter(computerChoice)}`
      );
    } else if (roundWinner === 'human') {
      humanScore++;
      dom.humanScore.textContent = humanScore;
      dom.logMsg(
        `You win! ${capitalizeFirstLetter(
          humanChoice
        )} beats ${capitalizeFirstLetter(computerChoice)}`
      );
    } else {
      computerScore++;
      dom.computerScore.textContent = computerScore;
      dom.logMsg(
        `You lose! ${capitalizeFirstLetter(
          computerChoice
        )} beats ${capitalizeFirstLetter(humanChoice)}`
      );
    }
  }

  for (const choiceBtn of dom.choiceBtns) {
    choiceBtn.addEventListener('click', function handleChoiceBtnClick(e) {
      const humanChoice = e.currentTarget.dataset.jsChoice;
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);

      if (humanScore >= 5 || computerScore >= 5) {
        dom.disableChoiceBtns();
        const winnerAnnouncement = generateWinnerAnnouncement(
          humanScore,
          computerScore
        );
        dom.logMsg(winnerAnnouncement);
      }
    });
  }
}

playGame();
