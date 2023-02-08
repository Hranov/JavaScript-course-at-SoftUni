function santaDeers (input) {

    let daysAbsence = Number (input[0]);
    let foodLeftKg = Number (input[1]);
    let foodPerdayFirstDeer = Number (input[2]);
    let foodPerdaySecondDeer = Number (input[3]);
    let foodPerdayThirdDeer = Number (input[4]);

    firstDeer = foodPerdayFirstDeer * daysAbsence;
    secondDeer = foodPerdaySecondDeer * daysAbsence;
    thirdDeer = foodPerdayThirdDeer * daysAbsence;

    allNeededFood = firstDeer + secondDeer + thirdDeer;

    if (foodLeftKg>=allNeededFood) {
        console.log(`${Math.floor(foodLeftKg-allNeededFood)} kilos of food left.`);
    }

    else if (allNeededFood>foodLeftKg) {
    console.log(`${Math.ceil(allNeededFood-foodLeftKg)} more kilos of food are needed.`)
    }

}

santaDeers ([2,10,1,1,2]);