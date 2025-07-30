'use strict';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return getRandomElement(choices);
}

function getHumanChoice() {
  const choice = prompt('rock, paper, or scissors?');
  return choice;
}
