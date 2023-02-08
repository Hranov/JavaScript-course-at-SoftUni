function basketballequipement (input) {

    let annualTax = Number(input[0]);
    let snickers = annualTax * (1-0.4);
    let trainingSuite = snickers * 0.8; 
    let ball = trainingSuite * 0.25;
    let accessories = ball * 0.20;
    let total = annualTax + snickers + trainingSuite + ball + accessories;

    console.log (total);
}

basketballequipement (["550"]);