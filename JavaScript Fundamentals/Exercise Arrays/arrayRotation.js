function arrayRotation(array, rotations) {
  while (rotations > 0) {
    let currentNum = array.shift();
    array.push(currentNum);

    rotations--;
  }

  console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
