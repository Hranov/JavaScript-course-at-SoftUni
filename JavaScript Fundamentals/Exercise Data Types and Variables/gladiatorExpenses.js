function gladiatorExpenses(lostGames, helmet, sword, shield, armor) {
  let sumExpences = 0;
let lostGamesCounter=0;
let shieldCounter=0;

  while (lostGamesCounter<lostGames) {
    lostGamesCounter++;

    if (lostGamesCounter % 2 === 0) {
      sumExpences += helmet;
    }
  

  if (lostGamesCounter % 3 === 0) {
    sumExpences += sword;
  }

  if (lostGamesCounter % 6 === 0) {
    sumExpences += shield;
    shieldCounter++;
    if (shieldCounter % 2 === 0) {
      sumExpences += armor;
    }
  }

}
  console.log(`Gladiator expenses: ${sumExpences.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );
