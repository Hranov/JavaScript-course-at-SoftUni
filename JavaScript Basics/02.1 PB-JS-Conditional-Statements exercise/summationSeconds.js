function summationSeconds (input) {

    let secondsFirst = Number (input[0]);  
    let secondsSecond = Number (input[1]);
    let secondsThird = Number (input[2]);
    
    totalTime = secondsFirst + secondsSecond + secondsThird;
    totalTimeToMinutes = Math.floor(totalTime / 60);
    totalTimeToSeconds = totalTime % 60;

    if (totalTimeToSeconds<10) {
        console.log (`${totalTimeToMinutes}:0${totalTimeToSeconds}`)

    }
    else {
        console.log (`${totalTimeToMinutes}:${totalTimeToSeconds}`)
    }
}

summationSeconds (["14","12","10"]);


