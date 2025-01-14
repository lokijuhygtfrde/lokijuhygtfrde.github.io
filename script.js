const wordDisplay = document.getElementById('wordDisplay');
const textInput = document.getElementById('textInput');
const timerElement = document.getElementById('timer');
const leaderboard = document.getElementById('leaderboard');

let startTime;
let timer;
let isPlaying = false;

// Start the game when the user begins typing
textInput.addEventListener('input', () => {
  if (!isPlaying) {
    startTimer();
  }

  const enteredText = textInput.value.trim();
  const displayedText = wordDisplay.innerText.trim();

  // Check if the user has finished typing the displayed text
  if (enteredText === displayedText) {
    endGame();
  }
});

// Start the timer
function startTimer() {
  isPlaying = true;
  startTime = Date.now();
  timer = setInterval(() => {
    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
    timerElement.innerText = `Time: ${elapsedTime}s`;
  }, 10);
}

// Stop the timer and display the final time
function endGame() {
  clearInterval(timer);
  isPlaying = false;
  const finalTime = ((Date.now() - startTime) / 1000).toFixed(2);
  alert(`You finished in ${finalTime} seconds!`);
  updateLeaderboard(finalTime);
  textInput.value = ''; // Clear the input for the next game
}

// Update the leaderboard with the latest time
function updateLeaderboard(time) {
  const listItem = document.createElement('li');
  listItem.innerText = `Time: ${time}s`;
  leaderboard.appendChild(listItem);
}

