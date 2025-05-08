document.getElementById("start").onclick = beginTimer;
document.getElementById("pause").onclick = pauseTimer;
document.getElementById("reset").onclick = resetTimer;

const start_time = 1500; // 25 minutes -> seconds
var current_time = start_time;
var stopWatchTimer;
var stop = true;

function beginTimer() {
    if (stop === true) {
        stop = false;
        stopWatch();
        stopWatchTimer = setInterval(stopWatch, 1000);
    }
}

function stopWatch() {
    let minutes = Math.floor(current_time / 60); //dividing and taking whole number
    let seconds = current_time % 60; //modulo dividing to get remainder
    current_time --;
    if (seconds < 10) {
        // changing from: Example: 10:9 -> 10:09
        document.getElementById("timer").innerHTML = `${minutes}:0${seconds}`;
    } else {
        document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
    }
}


function pauseTimer() {
    stop = true;
    clearInterval(stopWatchTimer);
}

function resetTimer() {
    stop = true;
    clearInterval(stopWatchTimer);
    current_time = start_time;
    document.getElementById("timer").innerHTML = `${Math.floor(current_time / 60)}:${current_time % 60}0`;
}

