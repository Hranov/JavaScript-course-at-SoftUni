function sumDigits(num) {
  let number = num.toString();
  let result = 0;

  for (let i = 0; i < number.length; i++) {
    let currentNum = Number(number[i]);

    result += currentNum;
  }
  console.log(result);
}

sumDigits(245678);
