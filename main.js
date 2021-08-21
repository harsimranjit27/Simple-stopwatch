let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let start_btn = document.querySelector(".start");
let stop_btn = document.querySelector(".stop");
let pause_play_btn = document.querySelector(".pause_play_btn");

let secondCount = 0;
let minuteCount = 0;
let startIntID;
// let clearTmOutID;
// let alerted = false;

start_btn.addEventListener("click",startWatch);
stop_btn.addEventListener("click",stopWatch);
pause_play_btn.addEventListener("click",pausePlayWatch);

function startWatch(){

    startIntID = setInterval(function(){

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
            }
            
        }
    },1000);

    // clearTmOutID = setTimeout(function() {
    //     alerted = true;
    //     alert(minuteCount + " minute(s) over.")
    // },60000);

    // if (alerted) {
    //     clearTimeout(clearTmOutID);
    // }
}

function stopWatch() {
    minutes.innerText = "00";
    seconds.innerText = "00";
    minuteCount = 0;
    secondCount = 0;
    clearInterval(startIntID);
}