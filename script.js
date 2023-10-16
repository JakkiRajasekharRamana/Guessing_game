'use strict';



  // Initialize the score and generate a random number
  var score = 20;
  var x = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
  document.body.style.backgroundColor = '#70b397'; // Change background color for a win

  // Select elements
  const numberDisplay = document.querySelector('.number');
  const messageDisplay = document.querySelector('.message');
  const scoreDisplay = document.querySelector('.score');
  const guessInput = document.querySelector('.guess');
  const checkButton = document.querySelector('.check');
  const highScore=document.querySelector('.highscore');

  // Event listener for the "Check" button
  checkButton.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    if (guess === 0) {
      messageDisplay.textContent = 'My brother in Christ, you had one job.';
    } else if (guess > x) {
      messageDisplay.textContent = 'Your guess is too high.';
      score--;
    } else if (guess < x) {
      messageDisplay.textContent = 'Your guess is too low.';
      score--;
    } else if (guess === x) {
      messageDisplay.textContent = 'Correct! The secret number is ' + x;
      numberDisplay.textContent = x;
      if (score > highScore.textContent) {
        highScore.textContent = score;
      }
      document.body.style.backgroundColor = '#60b347'; // Change background color for a win
    }

    scoreDisplay.textContent = score;
    
    if (score <= 0) {
      messageDisplay.textContent = 'You lost the game!';
      document.body.style.backgroundColor = '#ff0000'; // Change background color for a loss
    }
    
  });

  const againButton = document.querySelector('.again');

againButton.addEventListener('click', function () {
    document.body.style.backgroundColor = '#70b397'; // Change background color for a win
    
    score = 20;
    scoreDisplay.textContent = score;
    x = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20

    numberDisplay.textContent = '?';
    messageDisplay.textContent = 'Start guessing...';
    scoreDisplay.textContent = score;
    document.body.style.backgroundColor = '#70b397';
});