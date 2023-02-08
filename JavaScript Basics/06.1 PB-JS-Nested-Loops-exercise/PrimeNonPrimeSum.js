function sumPrimeNonprime(input) {
 
    let index = 0;
    let command = input[index];
    let flag = false;
    let sumPrime = 0;
    let sumNonPrime = 0;
 
    while(command !== "stop") {
        let currentNumber = Number(command);
        index++
        command = input[index];
        if(currentNumber < 0) {
            flag = true;
            console.log(`Number is negative.`);
            continue;
        }
 
        let isPrime = true;
        if (currentNumber > 1) {
            for (let i = 2; i < currentNumber; i++) {
                if (currentNumber % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
 
        if (isPrime) {
            sumPrime += currentNumber;
        } else {
            sumNonPrime += currentNumber;
        }
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
 
}

sumPrimeNonprime (["0","-9","0","stop"]);
