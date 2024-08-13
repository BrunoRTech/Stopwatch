const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const stopwatchDisplay = document.getElementById('stopwatch');

let isRunning = false;
let startTime = 0;
let intervalId;
let timeToAdd = 0;

function updateStopwatch() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime + timeToAdd;
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingSeconds = seconds % 60;
    stopwatchDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(intervalId);
        startStopButton.textContent = 'Start';
        isRunning = false;
        timeToAdd += Date.now() - startTime;
    } else {
        startTime = Date.now();
        intervalId = setInterval(updateStopwatch, 1000);
        startStopButton.textContent = 'Stop';
        isRunning = true;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    stopwatchDisplay.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    isRunning = false;
    startTime = 0;
    timeToAdd = 0;
});
