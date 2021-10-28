'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.section2Text').textContent = message;
}

function win() {
  document.querySelector('body').style.backgroundColor = '#0dba07';
  document.querySelector('header').style.backgroundColor = '#0dba07';
  document.querySelector('.heading').style.backgroundColor = '#0dba07';
  document.querySelector('.headingText').style.backgroundColor = '#0dba07';
  document.querySelector('.answer').style.backgroundColor = '#0dba07';
  document.querySelector('.main').style.backgroundColor = '#0dba07';
  document.querySelector('.sections').style.backgroundColor = '#0dba07';
  document.querySelector('.section1').style.backgroundColor = '#0dba07';
  document.querySelector('.guess').style.backgroundColor = '#0dba07';
  document.querySelector('input').style.backgroundColor = '#0dba07';
  document.querySelector('.section2').style.backgroundColor = '#0dba07';
}

function again() {
  document.querySelector('body').style.backgroundColor = '#212122';
  document.querySelector('header').style.backgroundColor = '#212122';
  document.querySelector('.heading').style.backgroundColor = '#212122';
  document.querySelector('.headingText').style.backgroundColor = '#212122';
  document.querySelector('.answer').style.backgroundColor = '#212122';
  document.querySelector('.main').style.backgroundColor = '#212122';
  document.querySelector('.sections').style.backgroundColor = '#212122';
  document.querySelector('.section1').style.backgroundColor = '#212122';
  document.querySelector('.guess').style.backgroundColor = '#212122';
  document.querySelector('input').style.backgroundColor = '#212122';
  document.querySelector('.section2').style.backgroundColor = '#212122';
}

//when user plays the game
document.querySelector('.check').addEventListener('click', function () {
  let numb = Number(document.querySelector('.guessinput').value);

  //no input
  if (!numb) {
    displayMessage('No number selected');
  }

  //if number guessed by user is correct
  if (numb === secretNumber) {
    document.querySelector('.answerText').textContent = secretNumber;
    document.querySelector('.answerText').style.padding = '4% 4%';
    win();

    displayMessage('You win');
    highScore = Math.max(highScore, score);
    document.querySelector('.highScoreMarks').textContent = highScore;
  }
  //if number guess by user is wrong
  else if (numb !== secretNumber) {
    if (score != 1) {
      displayMessage(
        numb > secretNumber ? 'Number too high!' : 'Number too low!'
      );
      score--;
      document.querySelector('.scoreMarks').textContent = score;
    } else {
      document.querySelector('.scoreMarks').textContent = '0';
      displayMessage('You lose!');
    }
  }
});

//if again button is clicked
document.querySelector('.btn-again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  again();
  document.querySelector('.answerText').textContent = '?';
  document.querySelector('.answerText').style.padding = '2rem 3rem';
  displayMessage('Select a number');
  document.querySelector('.guessinput').value = '';
  document.querySelector('.scoreMarks').textContent = score;
});
