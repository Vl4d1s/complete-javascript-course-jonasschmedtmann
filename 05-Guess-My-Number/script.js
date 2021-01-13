'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

const checkTheScore = msg => {
  if (score > 1) {
    document.querySelector('.message').textContent = msg;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.score').textContent = score;
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number :)';
  } else if (guess > secretNumber) {
    checkTheScore('Too high!');
  } else if (guess < secretNumber) {
    checkTheScore('Too Low!');
  }
});
