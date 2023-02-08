function deposit (input) {

let sum = Number (input[0]);
let period = Number (input[1]);
let annualInterestRate = Number (input[2]);


let rate  = sum * (annualInterestRate/100);
let ratePerMonth = rate/12;

let sumResult = sum + period * ratePerMonth;




console.log(sumResult);

}

deposit (["200","3","5.7"]);
