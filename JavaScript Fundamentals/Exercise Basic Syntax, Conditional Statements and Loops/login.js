function login(input) {
  let index = 0;
  let username = input[index];
  index++;
  let password = "";
  let counter = 0;

  let currentInput = input[index];

  for (let i = username.length - 1; i >= 0; i--) {
    password = password + username[i];
  }

  while (input[index] !== password) {
    counter++;
    if (counter === 4) {
      console.log(`User ${username} blocked!`);
      return;
    } else {
      console.log(`Incorrect password. Try again.`);
    }
    index++;
    currentInput = input[index];
  }

  if (currentInput === password) {
    console.log(`User ${username} logged in.`);
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
