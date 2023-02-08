function pyramidOfNumbers(input) {
  let n = Number(input[0]);

  let current = 1;
  let isBigger = false;
  let printCurrentLine = "";

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      printCurrentLine = printCurrentLine + current + " ";
      current++;
    }

    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger === true) {
      break;
    }
  }
}

pyramidOfNumbers(["15"]);
