function maxSequence(array) {

    let maxSequenceL = [];

    for (i = 0; i < array.length; i++) {

        let currentSequence = [];

        for (j = i; j < array.length; j++) {

            if (array[i] === array[j]) {
                currentSequence.push(array[i]);
            }
            else { break; }
        }

        if (currentSequence.length > maxSequenceL.length) {
            maxSequenceL = currentSequence
        }
    }

    console.log(maxSequenceL.join(' '));

}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);