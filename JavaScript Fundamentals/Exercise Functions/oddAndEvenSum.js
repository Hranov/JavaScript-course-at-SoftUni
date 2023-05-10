function oddAndEvenSum(number) {

    let evenSum = 0;
    let oddSum = 0;
    let toString = number.toString();

    for (let current of toString) {

        let toNumber = Number(current);

        if (toNumber % 2 === 0) {
            evenSum += toNumber
        }

        else {
            oddSum += toNumber
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);