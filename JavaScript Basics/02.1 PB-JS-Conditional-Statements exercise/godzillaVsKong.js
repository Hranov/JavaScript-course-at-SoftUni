function godzillaVskong (input) {

    let movieBudget = Number (input[0]);
    let backgroundActors = Number (input[1]);
    let priceClothesBackgroundActor = Number (input[2]);

    decor = movieBudget * 0.1;
    sumForClothes = backgroundActors * priceClothesBackgroundActor;
    sumForClothesDiscount = sumForClothes * 0.1;
    sumForClothesWithDiscount = sumForClothes - sumForClothesDiscount;

    if (backgroundActors>150) {total= decor + sumForClothesWithDiscount}

    else {total = decor + sumForClothes} 


    if (total>movieBudget) {
    
        console.log ("Not enough money!")
        console.log (`Wingard needs ${(total-movieBudget).toFixed(2)} leva more.`)
    }

    else if (total<=movieBudget) 
    {
        console.log ("Action!")
        console.log (`Wingard starts filming with ${(movieBudget-total).toFixed(2)} leva left.`) }
    }


godzillaVskong (["9587.88","222","55.68"]);



