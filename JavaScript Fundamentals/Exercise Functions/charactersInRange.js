function charactersInRange(firstChar, secondChar) {

    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let charInRangeArray = [];

    for (let current = startChar + 1; current < endChar; current++) {

        let currentToString = String.fromCharCode(current);
        charInRangeArray.push(currentToString);

    }

    console.log(charInRangeArray.join(' '));

}

charactersInRange('#', ':');