let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let start_btn = document.querySelector(".start");
let stop_btn = document.querySelector(".stop");
let pause_btn = document.querySelector(".pause");

let secondCount = 0;
let minuteCount = 0;
let startIntID;
let count = 0;

start_btn.addEventListener("click",startWatch);
stop_btn.addEventListener("click",stopWatch);
pause_btn.addEventListener("click",pauseWatch);

function startWatch(){
    start_btn.disabled = true;
    start_btn.innerText = "Start";
    startIntID = setInterval(displayWatch,1000);
}
function displayWatch(){
    secondCount++;
    if (secondCount < 10) {
        seconds.innerText = "0"+secondCount;
    }
    else if(secondCount < 60){
        seconds.innerText = secondCount;
    }  
    else {        
        secondCount = 0;
        seconds.innerText = "0"+secondCount;
        minuteCount++;
        if (minuteCount < 10) {
            minutes.innerText = "0"+minuteCount;
        }
        else{
            minutes.innerText = minuteCount;
        }       
        if (minuteCount == 60) {
            clearInterval(startIntID);
            minutes.innerText = 59;
            seconds.innerText = 59;
            return;
        }        
    }
}
function stopWatch() {
    clearInterval(startIntID);
    minutes.innerText = "00";
    seconds.innerText = "00";
    minuteCount = 0;
    secondCount = 0;
    start_btn.disabled = false;
    start_btn.innerText = "Start";
}

function pauseWatch() {
    if (start_btn.disabled) {
        start_btn.innerText = "Play";
    }
    start_btn.disabled = false;
    clearInterval(startIntID);
}