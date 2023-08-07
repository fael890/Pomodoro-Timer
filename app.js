let workTime = 1;
let breakTime = 1;
let seconds = "00";
let breakMoment = false;

window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;
}

function playTimer(){
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById("minutes").innerHTML = workMinutes;
        document.getElementById("seconds").innerHTML = seconds;

        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;

            if (workMinutes === -1) {
                if(breakMoment === false){
                    workMinutes = breakMinutes;
                    breakMoment = true;
                } else{
                    workMinutes = workTime - 1;
                    breakMoment = false;
                    breakCount++;
                    addFilledStar(breakCount);
                }  
            }

            seconds = 59;
        }
    }

    setInterval(timerFunction, 50);
}

function addFilledStar(breakCount){
    const filledStarPath = "static/filled_star.png";
    document.getElementById("cycle" + breakCount).src = filledStarPath;
}