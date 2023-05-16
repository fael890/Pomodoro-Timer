var timer;
var seconds = 60;
var minutes = 1;

function changeTime(){
    var format;

    seconds--;

    if(seconds == 0){
        minutes--;
        seconds = 60;
    }

    format = ( minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    document.getElementById('timerNumbers').innerText = format;
}

function playTimer(){
    timer = setInterval(()=>{
        changeTime();
    }, 50)
    
}

function stopTimer(){
    clearInterval(timer);
}