 function sumPrimeNonprime (input) {

    let index = 0;
    let command = (input[index]);

    let sumPrimeNum = 0;
    let sumNonprime=0;
    let isStop = false;

    while (command !=="stop") {
        if (command==="stop") {
            isStop=true;
            break;
        }
        command=Number(input[index]);
        while (command>=0 && command !==Number) 

        {
            if (command%2===0) {
            sumNonprime=+command
        }

        else if (command%2!==0) {
            sumPrimeNum=+command
        }

        index++
        command=Number(input[index]);

    }

    if (command<0) {
        console.log("Number is negative.");
    }

    index++
    command = input[index];

    }

 }

 sumPrimeNonprime (["0","-9","0","stop"]);
 