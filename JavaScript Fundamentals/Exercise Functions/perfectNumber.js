function perfectNumber(number) {

    let result = 0;

    for (let currentNum = 1; currentNum < number; currentNum++) {

        if (number % currentNum === 0) {
            result += currentNum
        }

    }

    if (result === number) {
        console.log("We have a perfect number!");
    }

    else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(28);