function aquariumLiters (input) {

    let lenght = Number (input[0]);
    let width = Number (input[1]);
    let hight = Number (input[2]);
    let area = lenght * width * hight;
    let liters = area * 0.001;
    let occupiedArea = Number (input[3]) / 100;
    let neededLiters = (liters * (1 - occupiedArea));

    console.log (neededLiters);
}

aquariumLiters (["85","75","47","17"]);