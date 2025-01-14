let time = 60;
let timer;
let wordCount = 0;
let isPlaying = false;

const wordDisplay = document.getElementById('wordDisplay');
const textInput = document.getElementById('textInput');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const leaderboard = document.getElementById('leaderboard');
const joinBtn = document.getElementById('joinBtn');
const usernameInput = document.getElementById('username');
const gameArea = document.getElementById('gameArea');

joinBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    gameArea.style.display = 'block';
    joinBtn.style.display = 'none';
    usernameInput.style.display = 'none';
    startGame();
  }
});

function startGame() {
  if (isPlaying) return;
  isPlaying = true;
  wordCount = 0;
  textInput.value = '';
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (time <= 0) {
    clearInterval(timer);
    endGame();
  } else {
    time--;
    timerElement.innerText = `Time: ${time}s`;
  }
}

function endGame() {
  isPlaying = false;
  const wpm = wordCount;
  wpmElement.innerText = `WPM: ${wpm}`;
  alert(`Game over! Your WPM is ${wpm}.`);
}

textInput.addEventListener('input', () => {
  if (!isPlaying) startGame();
  const enteredText = textInput.value.trim();
  const displayedText = wordDisplay.innerText.trim();

  if (enteredText === displayedText) {
    wordCount += enteredText.split(' ').length;
    textInput.value = '';
  }
});

