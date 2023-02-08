function cinema (input) {

    let projectionType = (input[0]);
    let r = Number(input[1]);
    let c = Number (input[2]);

    let income = 0;

    if (projectionType==="Premiere") {
        income=12.00;
    }

    else if (projectionType==="Normal") {
        income=7.50;
    }

    else if (projectionType==="Discount") {
        income=5.00;
    }

    totalIncome = income*(r*c);

     console.log (`${(totalIncome).toFixed(2)} leva`); 

}

cinema (["Discount","12","30"]);

