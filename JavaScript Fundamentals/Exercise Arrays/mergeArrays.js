function mergeArrays(firstArr, secondArr) {
  let newArray = [];
  let firstArrL = firstArr.length;

  for (let i = 0; i < firstArrL; i++) {
    if (i % 2 === 0) {
      newArray[i] = Number(firstArr[i]) + Number(secondArr[i]);
    } else {
      newArray[i] = firstArr[i] + secondArr[i];
    }
  }
  console.log(newArray.join(" - "));
}

mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
