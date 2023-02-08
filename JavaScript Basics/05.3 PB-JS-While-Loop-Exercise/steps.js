function steps (input) {

let targetSteps = 10000;
let stepsSum = 0;
let index = 0;
let command = input[index];

while (command !=="Going home") {

    command = Number (input[index]);
    stepsSum += command

    if (stepsSum>=targetSteps) {
        console.log("Goal reached! Good job!");
        console.log (`${stepsSum-targetSteps} steps over the goal!`)
        break;
    }

    index++
    command = (input[index]);

    }



if (command==="Going home") {
    stepsSum+= Number(input[index + 1]);
    if (stepsSum<=targetSteps) {
        console.log (`${targetSteps-stepsSum} more steps to reach goal.`)
    }

    else {
        console.log("Goal reached! Good job!");
        console.log (`${stepsSum-targetSteps} steps over the goal!`)}

}

}

steps (["125",
"250",
"4000",
"30",
"2678",
"4682"])
;
