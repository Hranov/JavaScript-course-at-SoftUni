function spiceMustFlow(startingYield) {
  let day = 0;
  let currentYield = 0;
  let sumYield = 0;

  while (startingYield >= 100) {
    currentYield = startingYield - 26;
    sumYield += currentYield;
    startingYield = startingYield - 10;
    day++;
  }

  console.log(day);
  if (sumYield > 26) {
    console.log(sumYield - 26);
  } else {
    console.log(sumYield);
  }
}

spiceMustFlow(100);
