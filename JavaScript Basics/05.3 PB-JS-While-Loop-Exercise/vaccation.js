function vaccation (input) {

    let neededSum = Number (input[0]);
    let availableMoney = Number (input[1]);
    let currentSum = 0;
    let spendDays = 0;
    let days = 0;
    let index = 2
    let command = (input[index]);
    
    while (true) {

        if (command==="spend") {
            spendDays++;
            days++;
            index++;
            command = Number (input[index]);
            if (availableMoney<command) {
                availableMoney=0
            }

            else {availableMoney=availableMoney-command}

                if (spendDays===5) {
                    console.log("You can't save the money.");
                    console.log (`${days}`)
                    break;
                }

        }

        if (command==="save") {
            spendDays=0;
            days++;
            index++;
            command = Number (input[index]);
            availableMoney=availableMoney+command; }
            

        if (availableMoney>=neededSum){
            console.log(`You saved the money for ${days} days.`);
            break;
        }

        index++
        command = (input[index])
        
    }

}

vaccation (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
;
