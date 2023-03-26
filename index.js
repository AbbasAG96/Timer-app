let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let isDarkMode = false;

function startTimer() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  document.getElementById("timer").innerHTML =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("timer").innerHTML = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  startButton.disabled = false;
  startButton.innerHTML = "Start";
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  toggleModeButton.innerHTML = isDarkMode ? "Light Mode" : "Dark Mode";
}

const startButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");
const toggleModeButton = document.getElementById("toggle-mode");

startButton.addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
    timer = null;
    startButton.innerHTML = "Start";
  } else {
    timer = setInterval(startTimer, 1000);
    startButton.innerHTML = "Stop";
  }
});

resetButton.addEventListener("click", function () {
  resetTimer();
});

toggleModeButton.addEventListener("click", function () {
  toggleMode();
});
