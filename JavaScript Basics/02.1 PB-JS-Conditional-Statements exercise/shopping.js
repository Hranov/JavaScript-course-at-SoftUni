function shopping (input) {

    let budget = Number (input[0]);
    let countVideocards = Number (input[1]);
    let countProcessors = Number (input[2]);
    let countRAM = Number (input[3]);

    priceVideocards = countVideocards * 250;
    priceProcessors = (priceVideocards * 0.35)*countProcessors;
    priceRAM = (priceVideocards * 0.1)*countRAM;

    total=priceVideocards + priceProcessors + priceRAM;
    discount= total * 0.15;
 
    if (countVideocards>countProcessors) {
        total = total - discount;
    }

    else {
        total
    }

    if (budget>=total) {
        console.log (`You have ${(budget-total).toFixed(2)} leva left!`)
    }

    else if (budget<total) {
        console.log (`Not enough money! You need ${(total-budget).toFixed(2)} leva more!`)
    }

}
shopping (["920.45","3","1","1"])

