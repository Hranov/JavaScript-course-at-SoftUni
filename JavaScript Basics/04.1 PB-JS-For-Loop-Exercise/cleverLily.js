function cleverLily (input) {

    let age = Number (input[0]);
    let priceWashingMashine = Number (input[1]);
    let toyPrice = Number (input[2]);

    let allMoney=0;
    let toyMoney=0;

    let moneyCounter = 0;
    let toyCounter = 0;
    let addMoney = 10; 
    let stolenMoney = 1;
     
    for (let i=1;i<=age;i++) {

        let temporaryage=i; 

        if  (temporaryage % 2===0) {
            
            moneyCounter = (moneyCounter + addMoney) - stolenMoney;
            addMoney = addMoney + 10; 
        }

        else {
            toyCounter = toyCounter + 1;
        }
    }

    toyMoney = toyCounter * toyPrice;
    allMoney = toyMoney + moneyCounter;

if (allMoney>=priceWashingMashine) {
    console.log(`Yes! ${(allMoney-priceWashingMashine).toFixed(2)}`);
}

else if (allMoney<priceWashingMashine) {
    
    console.log(`No! ${(priceWashingMashine-allMoney).toFixed(2)}`);
}


}

cleverLily (["10",
"170.00",
"6"])
;
