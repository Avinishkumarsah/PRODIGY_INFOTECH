let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById("display");
    display.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerText ="00:00:00";
    document.getElementById("startStop").innerText = "Start";
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
