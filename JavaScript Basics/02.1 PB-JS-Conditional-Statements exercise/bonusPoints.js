function bonusPoints (input) {

    let number = Number (input[0]);
    let bonus = 0.0;

    if (number<=100) {
        bonus=5;
    }

    else if (number>100 && number<1000) {
        bonus=number*0.2;
    }

    else if (number>1000) {
        bonus=number*0.1;
    }

    if (number%2==0) {
        bonus= bonus + 1;
    }

    else if (number%10==5) {
        bonus = bonus + 2;
    }


console.log (bonus);
console.log (bonus + number);

}

bonusPoints (["15875"]);