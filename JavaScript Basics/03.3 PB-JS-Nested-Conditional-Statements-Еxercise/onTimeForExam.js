function onTimeForExam (input) {
    let hour = Number (input[0]);
    let minute = Number (input[1]);
    let delayHour = Number (input[2]);
    let delayMinute = Number (input[3]);
     
    let examTime = (hour * 60) + minute;
    let delayTime = (delayHour * 60) + delayMinute;
    let diff = Math.abs(examTime - delayTime);
    let hourDiff = Math.floor(diff / 60);
    let minuteDiff = Math.ceil(diff % 60)
     
        if ( examTime >= delayTime) {
            if (diff <= 30 ) {
            console.log (`On time`)
            if ( diff <= 30 && diff != 0) {
            console.log (`${diff} minutes before the start`)
            } 
            } else if (diff > 30 ) {
            console.log ("Early")
            if ( diff <= 59 ) {
                console.log (`${minuteDiff} minutes before the start`)
            } else {
                if ( minuteDiff < 10) {
                console.log (`${hourDiff}:0${minuteDiff} hours before the start`)
                } else {
                console.log (`${hourDiff}:${minuteDiff} hours before the start`)
                }
            }
        }
        } else if ( examTime < delayTime) {
        console.log ("Late")
        if (diff <= 59) {
        console.log (`${minuteDiff} minutes after the start`)
            } else {
                if ( minuteDiff < 10) {
                console.log (`${hourDiff}:0${minuteDiff} hours after the start`)
                } else {
                console.log (`${hourDiff}:${minuteDiff} hours after the start`)
                }
            }
        }
    }



onTimeForExam (["9","30","8","59"]);
