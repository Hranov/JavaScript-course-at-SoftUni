function triangleOfNumbers(num) {
  for (let row = 1; row <= num; row++) {
    let printline = "";

    for (let col = 1; col <= row; col++) {
      printline += `${row} `;
    }
    console.log(printline);
  }
}

triangleOfNumbers(3);
