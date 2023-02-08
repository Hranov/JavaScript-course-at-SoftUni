function everest (input) {

let dayCounter=1;
let initialHeight=5364;
let currentClimbedHight=0;
let reachedHight=5364;
let currentreachedHight=0;
let index=0;
let command = input[index];

while (command !=="END"){
    if (command==="Yes") {
        dayCounter++
}

if (dayCounter>5) {
    break;
}
index++
command=Number(input[index]);
currentClimbedHight=command;

reachedHight=reachedHight+currentClimbedHight;


 

   

    if (reachedHight>=8848){
        break;
    }

    index++;
    command=(input[index]);

}

if (dayCounter>5 || reachedHight<8848){
console.log("Failed!");
console.log(`${reachedHight}`);}

else if (reachedHight>=8848) {
    console.log(`Goal reached for ${dayCounter} days!`);
}


}

everest (["Yes","535","Yes","849","Yes","499","Yes","400","Yes","500"]);