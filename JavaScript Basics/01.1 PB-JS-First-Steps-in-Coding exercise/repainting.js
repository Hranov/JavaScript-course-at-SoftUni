function repainting (input) {

let nylon = Number (input[0]);
let paint = Number (input[1]);
let thinner = Number (input[2]);
let hours = Number (input[3]);

let sumNylon = (nylon + 2) * 1.5;
let sumPaint = (paint * 1.1) * 14.5;
let SumThinner = thinner * 5;
let plasicBag = 0.4;

let sumMaterials = sumNylon + sumPaint + SumThinner + plasicBag;
let sumPainters = (sumMaterials * (0.3)) * hours;

let result = sumMaterials + sumPainters;


console.log(result);

}

repainting (["10","11","4","8"]);