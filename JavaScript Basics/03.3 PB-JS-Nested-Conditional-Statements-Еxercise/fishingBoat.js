function fishingBoat (input) {

    let budget = Number(input[0]);
    let season = (input[1]);
    let countFishermen = Number(input[2]);

    let finalPrice = 0;
    
    if (season==="Spring") {
 
        if (countFishermen<=6) {
            finalPrice= 3000 * 0.90; }
        
        else if (countFishermen<=11) {
        finalPrice= 3000 * 0.85; }

        else if (countFishermen>=12) {
            finalPrice= 3000 * 0.75; }
    }
    
    else if (season==="Summer") {
        
        if (countFishermen<=6) {
            finalPrice= 4200 * 0.90; }
        
        else if (countFishermen<=11) {
        finalPrice= 4200 * 0.85; }

        else if (countFishermen>=12) {
            finalPrice= 4200 * 0.75; }

    }

    else if (season==="Autumn") {

        if (countFishermen<=6) {
            finalPrice= 4200 * 0.90; }
        
        else if (countFishermen<=11) {
        finalPrice= 4200 * 0.85; }

        else if (countFishermen>=12) {
            finalPrice= 4200 * 0.75; }
    }

    
    else if (season==="Winter") {

        if (countFishermen<=6) {
            finalPrice= 2600 * 0.90; }
        
        else if (countFishermen<=11) {
        finalPrice= 2600 * 0.85; }

        else if (countFishermen>=12) {
            finalPrice= 2600 * 0.75; }
    }

    if (countFishermen%2===0 && season !="Autumn") {
        finalPrice = finalPrice * 0.95;
    }

    if (budget>=finalPrice) {
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`);
    }

    else if (finalPrice>budget) {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva.`);
    }


}

fishingBoat (["3600","Autumn","6"]);

