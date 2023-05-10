function addAndSubtract (firstNum, secondNum,thirdNum) {

let sum = add (firstNum, secondNum);
let finalResult = subtract (sum,thirdNum);

console.log(finalResult);

function add (firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract (result, thirdNum) {
return result-thirdNum
}

}

addAndSubtract (23,6,10);