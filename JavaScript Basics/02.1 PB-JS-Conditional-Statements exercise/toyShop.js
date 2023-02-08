function toyShop (input) {

    let price = Number (input[0]);
    let puzzleCount = Number (input[1]);
    let dollCount = Number (input[2]);
    let bearCount = Number (input[3]);
    let minionsCount = Number (input[4]);
    let truckCount = Number (input[5]);

    let toyCount = puzzleCount + dollCount + bearCount + minionsCount + truckCount;
    let money = puzzleCount * 2.60 + dollCount * 3.00 + bearCount * 4.10 + minionsCount * 8.20 + truckCount * 2;

    if (toyCount>=50){
        money = money * 0.75;
    }

    money = money * 0.90

    if (money>=price) {
        let diff = Math.abs (money-price);
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
        
    }

    else {
        let diff = price-money;
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}

toyShop (["40.8","20","25","30","50","10"]);