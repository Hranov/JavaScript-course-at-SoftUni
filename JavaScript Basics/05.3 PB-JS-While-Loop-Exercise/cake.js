function cake(input) {
  let cakeWidth = Number(input[0]);
  let cakeLength = Number(input[1]);
  let cakeSize = cakeLength * cakeWidth; 
  let index = 2;
  let command = input[index];

  while (command !== "STOP") {
    if (cakeSize > command) {
      command = Number(input[index]);
      cakeSize = cakeSize - command;
      index++;
      command = input[index];
    } else if (cakeSize <= command) {
      console.log(
        `No more cake left! You need ${command - cakeSize} pieces more.`
      );
      break;
    }
  }

  if (command === "STOP") {
    console.log(`${cakeSize} pieces are left.`);
  }
}

cake(["10", "2", "2", "4", "6", "STOP"]);
