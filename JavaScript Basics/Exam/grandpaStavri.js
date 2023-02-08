function grandpaStavri (input) {

let days = Number (input[0]);
let litters = 0;
let degrees = 0;
let degreesPerLiter=0;
let sumdegreesPerLitter=0
let sumAll=0;
let allLiters=0

for (let i=1;i<=days*2;i+=2) {

    litters=Number(input[i]);
    degrees=Number (input[i+1]);

    allLiters=allLiters+litters;

    sumdegreesPerLitter = litters * degrees;
    sumAll=sumAll + sumdegreesPerLitter;



}

let avDegreeperLitResult = sumAll/allLiters 

console.log(`Liter: ${allLiters.toFixed(2)}`);

console.log(`Degrees: ${avDegreeperLitResult.toFixed(2)}`);

if (avDegreeperLitResult<38) {
    console.log("Not good, you should baking!");
}

else if (avDegreeperLitResult>38 && avDegreeperLitResult<= 42) {
    console.log("Super!");
}

else if (avDegreeperLitResult>42)
 {console.log("Dilution with distilled water!");}



}

grandpaStavri (["3","100","45","50","55","150","36"]);