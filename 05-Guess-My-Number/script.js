'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const checkTheScore = (msg, status = 'playing', color) => {
  document.querySelector('.message').textContent = msg;
  if (status !== 'playing') {
    // it's making inline style and not changing the css file!
    document.querySelector('body').style.backgroundColor = color;
  }
  if (status === 'win') {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.number').textContent = secretNumber;
  } else if (status === 'lose') {
    document.querySelector('.score').textContent = 0;
  } else if (status === 'playing') {
    score--;
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.score').textContent = score;
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (guess < 0 || guess > 20) {
      checkTheScore('Enter number between 0-20');
    } else if (guess === secretNumber) {
      checkTheScore('Correct Number', 'win', '#60b347');
    } else if (guess !== secretNumber)
      guess < secretNumber
        ? checkTheScore('Too Low!')
        : checkTheScore('Too high!');
  } else {
    checkTheScore('You lost the game!', 'lose', '#ff0000');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  console.log('here');
});
