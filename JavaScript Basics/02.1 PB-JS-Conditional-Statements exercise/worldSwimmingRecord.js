function worldSwimmingRecord (input) {
    let recordSec = Number (input[0]);
    let distanceMater = Number (input[1]);
    let secondInOneMetr = Number (input[2]);
    let swimming = distanceMater * secondInOneMetr;
    let resistance = Math.floor (distanceMater / 15) * 12.5;
    let totalTime = swimming + resistance;
    let differenceFromRecord = totalTime - recordSec;
    if (recordSec <= totalTime){
        console.log(`No, he failed! He was ${differenceFromRecord.toFixed(2)} seconds slower.`);
    }else if (totalTime < recordSec)
    {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}