function addAndSubtract(input) {
  let sumOriginalArray = 0;
  let sumNewArray = 0;
  let inputL = input.length;

  for (i = 0; i < inputL; i++) {
    sumOriginalArray += input[i];

    if (input[i] % 2 === 0) {
      input[i] += i;
    } else {
      input[i] -= i;
    }

    sumNewArray += input[i];
  }

  console.log(input);
  console.log(sumOriginalArray);
  console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
