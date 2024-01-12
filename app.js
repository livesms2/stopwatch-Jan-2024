let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
let resetbtn = document.getElementById("resetbtn");
let timer = document.getElementById("timer");
let msec = 0, sec = 0, min = 0
let time = null;

startbtn.addEventListener("click", function () {
    if (time !== null) {
        clearInterval(time);
    }
    time = setInterval(startTimer, 10);
});

stopbtn.addEventListener("click", function() {
    clearInterval(time);
});

resetbtn.addEventListener("click", function () {
    clearInterval(time);
    timer.innerHTML = `00:00:00`;
    msec = sec = min = "0"; 
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }
    }
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = msec < 10 ? "0" + msec : msec;
    timer.innerHTML = m + ":" + s + ":" + ms;
    
}