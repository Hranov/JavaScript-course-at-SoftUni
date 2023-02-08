function newHouse(input) {
  let flower = input[0];
  let numberOfFlowers = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;

  switch (flower) {
    case `Roses`:
      price = numberOfFlowers * 5;
      if (numberOfFlowers > 80) {
        price = price * 0.9;
      }
      break;

    case `Dahlias`:
      price = numberOfFlowers * 3.8;
      if (numberOfFlowers > 90) {
        price = price * 0.85;
      }
      break;

    case `Tulips`:
      price = numberOfFlowers * 2.8;
      if (numberOfFlowers > 80) {
        price = price * 0.85;
      }
      break;

    case `Narcissus`:
      price = numberOfFlowers * 3;
      if (numberOfFlowers < 120) {
        price = price * 1.15;
      }
      break;

    case `Gladiolus`:
      price = numberOfFlowers * 2.5;
      if (numberOfFlowers < 80) {
        price = price * 1.2;
      }
      break;
  }

  if (price <= budget) {
    console.log(
      `Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  }
}

newHouse(["Roses", "55", "250"]);
