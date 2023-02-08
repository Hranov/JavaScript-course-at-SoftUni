function equalSumEvenOdd (input) {

let firstNum = Number(input[0]);
let secondNum = Number (input[1]);

printLine = "";

for (i=firstNum;i<=secondNum;i++) {

    let currentNumber = "" + i;
    let evenSum = 0;
    let oddSum = 0;

    for (let j=0;j<currentNumber.length;j++) {

        let currentDigit = Number(currentNumber.charAt(j));

        if (j%2===0) {
            evenSum+=currentDigit
        }

        else if (j%2!== 0) {
            oddSum+=currentDigit
        }

    
    }
    
    if (evenSum===oddSum) {
        printLine = printLine + `${i} `;
    }
}

console.log (printLine)

}

equalSumEvenOdd (["100000","100050"]);