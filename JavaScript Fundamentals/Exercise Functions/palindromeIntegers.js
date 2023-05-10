function palindromeIntegers(array) {
  for (let current of array) {
    let transformToString = current.toString();
    let reversed = String(current).split("").reverse().join("");

    if (transformToString === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
