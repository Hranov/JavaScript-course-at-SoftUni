function maxNumber(array) {

    let newArray = [];
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {

        let firstNum = array[i];
        let isBigger = true;

        for (let j = i + 1; j < arrayL; j++) {

            let secondNum = array[j];

            if (firstNum <= secondNum) {
                isBigger = false;
            }

        }
        if (isBigger) {
            newArray.push(firstNum);
        }

    }

    console.log(newArray.join(' '));

}

maxNumber([41, 41, 34, 20]);