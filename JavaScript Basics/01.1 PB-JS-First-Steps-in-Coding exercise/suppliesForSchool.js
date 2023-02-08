function suppliesForSchool (input) {

    let countPencils = Number (input[0]);
    let countMarkers = Number (input[1]);
    let litersDeteregent = Number (input[2]);
    let percentageDiscount = Number (input[3]);

    let pricePensils = countPencils * 5.8;
    let priceMarkers = countMarkers * 7.2;
    let priceDeteregent = litersDeteregent * 1.2;

    let allMaterialsPrice = pricePensils + priceMarkers +priceDeteregent;
    let priceWithDiscount = allMaterialsPrice - (allMaterialsPrice * (percentageDiscount/100));

    console.log(priceWithDiscount);
}

suppliesForSchool (["2","3","4","25"]);